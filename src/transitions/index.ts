import { interpolate } from "remotion";

// ─── Transition Function Type ─────────────────────────────────────────────────
// Each transition fn receives the current frame, total duration in frames,
// and fps — returns a React.CSSProperties style object.

export type TransitionFn = (
  frame: number,
  durationInFrames: number,
  fps: number
) => React.CSSProperties;

export interface TransitionEntry {
  label: string;
  canonicalDurationMs: number;
  fn: TransitionFn;
}

// ─── Transition Functions ─────────────────────────────────────────────────────
// All animations driven by frame math — CSS transitions are forbidden in Remotion.

const fadeIn: TransitionFn = (frame, durationInFrames) => ({
  opacity: interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
});

const fadeOut: TransitionFn = (frame, durationInFrames) => ({
  opacity: interpolate(frame, [0, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
});

const slideUpIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(progress, [0, 1], [60, 0]);
  const opacity = interpolate(progress, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { transform: `translateY(${y}px)`, opacity };
};

const slideUpOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(progress, [0, 1], [0, -60]);
  const opacity = interpolate(progress, [0.6, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `translateY(${y}px)`, opacity };
};

const slideDownIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(progress, [0, 1], [-60, 0]);
  const opacity = interpolate(progress, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { transform: `translateY(${y}px)`, opacity };
};

const slideDownOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(progress, [0, 1], [0, 60]);
  const opacity = interpolate(progress, [0.6, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `translateY(${y}px)`, opacity };
};

const slideLeftIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(progress, [0, 1], [80, 0]);
  const opacity = interpolate(progress, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { transform: `translateX(${x}px)`, opacity };
};

const slideLeftOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(progress, [0, 1], [0, -80]);
  const opacity = interpolate(progress, [0.6, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `translateX(${x}px)`, opacity };
};

const slideRightIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(progress, [0, 1], [-80, 0]);
  const opacity = interpolate(progress, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { transform: `translateX(${x}px)`, opacity };
};

const slideRightOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(progress, [0, 1], [0, 80]);
  const opacity = interpolate(progress, [0.6, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `translateX(${x}px)`, opacity };
};

const zoomInIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(progress, [0, 1], [0.88, 1]);
  const opacity = interpolate(progress, [0, 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { transform: `scale(${scale})`, opacity };
};

const zoomInOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(progress, [0, 1], [1, 1.08]);
  const opacity = interpolate(progress, [0.5, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { transform: `scale(${scale})`, opacity };
};

const blurIn: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur = interpolate(progress, [0, 1], [12, 0]);
  const opacity = interpolate(progress, [0, 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });
  return { filter: `blur(${blur}px)`, opacity };
};

const blurOut: TransitionFn = (frame, durationInFrames) => {
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const blur = interpolate(progress, [0, 1], [0, 12]);
  const opacity = interpolate(progress, [0.5, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { filter: `blur(${blur}px)`, opacity };
};

// ─── Registry ─────────────────────────────────────────────────────────────────

export const TRANSITION_REGISTRY = {
  // In-transitions
  "fade-in":       { label: "Fade In",       canonicalDurationMs: 400, fn: fadeIn },
  "slide-up-in":   { label: "Slide Up In",   canonicalDurationMs: 500, fn: slideUpIn },
  "slide-down-in": { label: "Slide Down In", canonicalDurationMs: 500, fn: slideDownIn },
  "slide-left-in": { label: "Slide Left In", canonicalDurationMs: 500, fn: slideLeftIn },
  "slide-right-in":{ label: "Slide Right In",canonicalDurationMs: 500, fn: slideRightIn },
  "zoom-in-in":    { label: "Zoom In",       canonicalDurationMs: 450, fn: zoomInIn },
  "blur-in":       { label: "Blur In",       canonicalDurationMs: 600, fn: blurIn },
  // Out-transitions
  "fade-out":       { label: "Fade Out",      canonicalDurationMs: 400, fn: fadeOut },
  "slide-up-out":   { label: "Slide Up Out",  canonicalDurationMs: 500, fn: slideUpOut },
  "slide-down-out": { label: "Slide Down Out",canonicalDurationMs: 500, fn: slideDownOut },
  "slide-left-out": { label: "Slide Left Out",canonicalDurationMs: 500, fn: slideLeftOut },
  "slide-right-out":{ label: "Slide Right Out",canonicalDurationMs: 500, fn: slideRightOut },
  "zoom-in-out":    { label: "Zoom Out",      canonicalDurationMs: 450, fn: zoomInOut },
  "blur-out":       { label: "Blur Out",      canonicalDurationMs: 600, fn: blurOut },
} as const satisfies Record<string, TransitionEntry>;

export type TransitionId = keyof typeof TRANSITION_REGISTRY;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Parses a duration string like "200ms" or "0.5s" into milliseconds.
 * Returns NaN for unrecognised formats (callers should fall back to canonical).
 */
export const parseDurationMs = (duration: string): number => {
  const ms = duration.match(/^(\d+(?:\.\d+)?)ms$/);
  if (ms) return parseFloat(ms[1]);
  const s = duration.match(/^(\d+(?:\.\d+)?)s$/);
  if (s) return parseFloat(s[1]) * 1000;
  return NaN;
};

/**
 * Clamps a transition duration to fit within a time budget.
 * Pass `durationOverrideMs` to replace the registry canonical duration.
 */
export const clampTransitionFrames = (
  transitionId: TransitionId,
  budgetFrames: number,
  fps: number,
  maxBudgetRatio = 0.2,
  durationOverrideMs?: number
): number => {
  const entry = TRANSITION_REGISTRY[transitionId];
  const durationMs = durationOverrideMs ?? entry.canonicalDurationMs;
  const canonicalFrames = Math.round((durationMs / 1000) * fps);
  const maxFrames = Math.floor(budgetFrames * maxBudgetRatio);
  return Math.min(canonicalFrames, maxFrames);
};

/** Applies a transition style for the current frame within the given frame window. */
export const applyTransition = (
  transitionId: TransitionId,
  frame: number,
  startFrame: number,
  durationInFrames: number,
  fps: number
): React.CSSProperties => {
  const entry = TRANSITION_REGISTRY[transitionId];
  const localFrame = frame - startFrame;
  if (localFrame < 0 || localFrame > durationInFrames) return {};
  return entry.fn(localFrame, durationInFrames, fps);
};
