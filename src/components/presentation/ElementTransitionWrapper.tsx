import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import type { ContentElement } from "../../schema/content";
import {
  useElementTransitionConfig,
  useElementFrameRange,
} from "./TemplateContext";
import {
  TRANSITION_REGISTRY,
  applyTransition,
  parseDurationMs,
  clampTransitionFrames,
} from "../../transitions";
import type { TransitionId } from "../../transitions";

interface Props {
  el: ContentElement;
  children: React.ReactNode;
}

/**
 * Wraps a rendered element and applies transitionIn / transitionOut styles.
 *
 * Transition resolution priority (highest → lowest):
 *   1. template.layouts[layout].areas[area].elementStyles[type].transitionIn/Out
 *   2. template.elementDefaults[type].transitionIn/Out
 *   3. el.transitionIn / el.transitionOut
 *
 * Duration resolution:
 *   - omitted       → uses registry canonicalDurationMs
 *   - "200ms"/"0.5s" → parsed explicitly
 *   - "inferred"    → spans the full element active window
 */
export const ElementTransitionWrapper: React.FC<Props> = ({ el, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { transitionIn, transitionOut } = useElementTransitionConfig(el);
  const range = useElementFrameRange(el.id);

  const activeWindow = range.end - range.start;
  const localFrame = frame - range.start;

  // No active window means the element has no meaningful duration to animate within.
  // Return early so we never call interpolate with an empty range.
  if (activeWindow <= 0) return <>{children}</>;

  const computeTransitionFrames = (
    id: TransitionId,
    duration: string | undefined
  ): number => {
    if (!duration) {
      return clampTransitionFrames(id, activeWindow, fps);
    }
    if (duration === "inferred") {
      // Spans the entire active window — no clamping applied
      return activeWindow;
    }
    const overrideMs = parseDurationMs(duration);
    if (isNaN(overrideMs)) {
      return clampTransitionFrames(id, activeWindow, fps);
    }
    return clampTransitionFrames(id, activeWindow, fps, 1, overrideMs);
  };

  let style: React.CSSProperties = {};

  if (transitionIn) {
    const id = transitionIn.id as TransitionId;
    if (id in TRANSITION_REGISTRY_KEYS) {
      const inFrames = computeTransitionFrames(id, transitionIn.duration);
      // Guard: inFrames must be > 0, otherwise interpolate([0,0]) would throw
      if (inFrames > 0 && localFrame >= 0 && localFrame < inFrames) {
        style = { ...style, ...applyTransition(id, frame, range.start, inFrames, fps) };
      }
    }
  }

  if (transitionOut) {
    const id = transitionOut.id as TransitionId;
    if (id in TRANSITION_REGISTRY_KEYS) {
      const outFrames = computeTransitionFrames(id, transitionOut.duration);
      const outStart = range.end - outFrames;
      // Guard: outFrames must be > 0, otherwise interpolate([0,0]) would throw
      if (outFrames > 0 && localFrame >= activeWindow - outFrames && localFrame <= activeWindow) {
        // transitionOut wins over transitionIn if both are active (very short window)
        style = { ...applyTransition(id, frame, outStart, outFrames, fps) };
      }
    }
  }

  // Always render the wrapper div — never switch between div and Fragment.
  // A stable DOM structure prevents flex/grid layout from recalculating at
  // transition boundaries, which is what caused the abrupt positional jumps.
  // Images need height:100% so they fill the grid cell stretched by align-items:stretch.
  // Other elements intentionally omit it so they size to their content.
  const sizeStyle: React.CSSProperties =
    el.type === "image" ? { width: "100%", height: "100%" } : {};

  return <div style={{ ...sizeStyle, ...style }}>{children}</div>;
};

// ─── Runtime guard set ────────────────────────────────────────────────────────
const TRANSITION_REGISTRY_KEYS: Record<string, true> = Object.keys(
  TRANSITION_REGISTRY
).reduce<Record<string, true>>((acc, k) => { acc[k] = true; return acc; }, {});
