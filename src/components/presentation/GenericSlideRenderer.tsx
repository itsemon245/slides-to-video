import { AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";
import { Video } from "@remotion/media";
import type { ContentSlide, ContentElement } from "../../schema/content";
import type { Template, AvatarConfig, AreaTemplate } from "../../schema/template";
import {
  TemplateProvider,
  resolveAvatarConfig,
} from "./TemplateContext";
import { renderElement } from "./elements";
import { applyTransition, clampTransitionFrames } from "../../transitions";
import type { TransitionId } from "../../transitions";
import { AVATAR_SIZES, AVATAR_EDGE_PADDING } from "../../designSystem";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FrameRange {
  start: number;
  end: number;
}

/** Per-element entry in avatarMap. Populated by the ML pipeline after audio generation. */
export interface AvatarMapEntry {
  src: string;
  durationInSeconds: number;
}

export type AvatarMap = Record<string, AvatarMapEntry>;

export interface GenericSlideRendererProps {
  slide: ContentSlide;
  template: Template;
  /** elementId → avatar video entry. Populated after ML pipeline generates videos. */
  avatarMap?: AvatarMap;
  /** Global avatar defaults from ContentPresentation (level 1 override). */
  presentationAvatarDefaults?: Partial<AvatarConfig>;
  editMode?: boolean;
  selectedElementId?: string | null;
  onSelectElement?: ((id: string) => void) | null;
}

// ─── Duration Helpers ─────────────────────────────────────────────────────────

export const DEFAULT_SLIDE_DURATION_S = 8;

/**
 * Compute the durationInFrames for a slide.
 * When avatarMap has entries for all narrated elements, uses the sum of their durations.
 * Falls back to fallbackSeconds (default 8s) when avatarMap is absent or incomplete.
 */
export const computeSlideDurationFrames = (
  slide: ContentSlide,
  fps: number,
  avatarMap?: AvatarMap,
  fallbackSeconds = DEFAULT_SLIDE_DURATION_S
): number => {
  if (avatarMap) {
    const narrated = slide.elements.filter((el) => el.audioSegmentText);
    if (narrated.length > 0) {
      const totalSeconds = narrated.reduce(
        (sum, el) => sum + (avatarMap[el.id]?.durationInSeconds ?? 0),
        0
      );
      if (totalSeconds > 0) return Math.ceil(totalSeconds * fps);
    }
  }
  return Math.round(fallbackSeconds * fps);
};

// ─── Frame Range Calculation ──────────────────────────────────────────────────
// When avatarMap has durationInSeconds for an element, its actual frame count
// is used. Otherwise frames are divided equally (edit/preview fallback).

const calculateElementFrameRanges = (
  elements: ContentElement[],
  totalFrames: number,
  fps: number,
  avatarMap?: AvatarMap
): Record<string, FrameRange> => {
  const narrated = elements.filter((el) => el.audioSegmentText);
  if (narrated.length === 0) return {};

  const ranges: Record<string, FrameRange> = {};
  let cursor = 0;

  narrated.forEach((el, i) => {
    const entry = avatarMap?.[el.id];
    const frames = entry
      ? Math.round(entry.durationInSeconds * fps)
      : Math.floor(totalFrames / narrated.length);
    const isLast = i === narrated.length - 1;
    const end = isLast ? totalFrames : cursor + frames;
    ranges[el.id] = { start: cursor, end };
    cursor = end;
  });

  return ranges;
};

// ─── Slide Transition Style ───────────────────────────────────────────────────

const useSlideTransitionStyle = (
  slide: ContentSlide,
  fps: number
): React.CSSProperties => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const inId = slide.transitionIn?.id as TransitionId | undefined;
  const outId = slide.transitionOut?.id as TransitionId | undefined;

  const inFrames = inId
    ? clampTransitionFrames(inId, durationInFrames, fps, 0.15)
    : 0;
  const outFrames = outId
    ? clampTransitionFrames(outId, durationInFrames, fps, 0.15)
    : 0;

  const inStyle = inId && frame < inFrames
    ? applyTransition(inId, frame, 0, inFrames, fps)
    : {};

  const outStyle = outId && frame > durationInFrames - outFrames
    ? applyTransition(outId, frame, durationInFrames - outFrames, outFrames, fps)
    : {};

  // If both apply (very short slide), in-transition wins
  return Object.keys(inStyle).length > 0 ? inStyle : outStyle;
};

// ─── Area Renderer ────────────────────────────────────────────────────────────

interface AreaRendererProps {
  areaName: string;
  areaConfig: AreaTemplate;
  elements: ContentElement[];
  tokens: Template["tokens"];
}

const AreaRenderer: React.FC<AreaRendererProps> = ({
  areaName,
  areaConfig,
  elements,
  tokens,
}) => {
  const containerStyle: React.CSSProperties = {
    gridArea: areaName,
    ...(areaConfig.containerStyle as React.CSSProperties | undefined),
  };

  return (
    <div style={containerStyle}>
      {areaConfig.separator && (
        <div
          style={{
            height: areaConfig.separator.height,
            width: areaConfig.separator.width ?? 80,
            backgroundColor: tokens.colors[areaConfig.separator.color],
            borderRadius: 2,
            marginBlock: areaConfig.separator.marginBlock ?? 32,
          }}
        />
      )}
      {elements.map((el) => renderElement(el))}
      {areaConfig.gradientOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(${areaConfig.gradientOverlay.direction}, ${areaConfig.gradientOverlay.from} 0%, ${areaConfig.gradientOverlay.to} 100%)`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

// ─── Avatar Overlay ───────────────────────────────────────────────────────────

interface AvatarOverlayProps {
  videoSrc?: string;
  config: AvatarConfig;
  startFromFrame: number;
  opacity: number;
  editMode?: boolean;
}

const AvatarOverlayItem: React.FC<AvatarOverlayProps> = ({
  videoSrc,
  config,
  startFromFrame,
  opacity,
  editMode = false,
}) => {
  const sizePx = AVATAR_SIZES[config.size];
  const borderRadius =
    config.borderRadius ??
    (config.shape === "circle" ? "50%" : "30%");

  const positionStyle: React.CSSProperties = (() => {
    switch (config.position) {
      case "top-left":    return { top: AVATAR_EDGE_PADDING, left: AVATAR_EDGE_PADDING };
      case "top-right":   return { top: AVATAR_EDGE_PADDING, right: AVATAR_EDGE_PADDING };
      case "bottom-left": return { bottom: AVATAR_EDGE_PADDING, left: AVATAR_EDGE_PADDING };
      case "bottom-right":return { bottom: AVATAR_EDGE_PADDING, right: AVATAR_EDGE_PADDING };
    }
  })();

  return (
    <div
      style={{
        position: "absolute",
        width: sizePx,
        height: sizePx,
        overflow: "hidden",
        borderRadius,
        boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        border: "3px solid rgba(255,255,255,0.15)",
        opacity,
        ...positionStyle,
      }}
    >
      {editMode || !videoSrc ? (
        /* Static placeholder shown in the web editor */
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(79,142,255,0.35) 0%, rgba(79,142,255,0.15) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ fontSize: sizePx * 0.28, lineHeight: 1 }}>🎙</div>
          <span style={{ fontSize: sizePx * 0.1, color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}>
            Avatar
          </span>
        </div>
      ) : (
        /* Wrap in Sequence with negative `from` to advance the video to the correct position */
        <Sequence from={-startFromFrame} name="AvatarVideo">
          <Video
            src={
              // Remote URLs (CDN) are passed through as-is.
              // Local public/ paths use staticFile() so Remotion resolves them correctly.
              videoSrc.startsWith("http://") || videoSrc.startsWith("https://")
                ? videoSrc
                : staticFile(videoSrc.replace(/^\//, ""))
            }
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Sequence>
      )}
    </div>
  );
};

// ─── Main Renderer ────────────────────────────────────────────────────────────

export const GenericSlideRenderer: React.FC<GenericSlideRendererProps> = ({
  slide,
  template,
  avatarMap = {},
  presentationAvatarDefaults,
  editMode = false,
  selectedElementId = null,
  onSelectElement = null,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const layoutConfig = template.layouts[slide.layout];
  const tokens = template.tokens;

  const slideTransitionStyle = useSlideTransitionStyle(slide, fps);

  // Group elements into areas by their type
  const elementsByArea: Record<string, ContentElement[]> = {};
  for (const el of slide.elements) {
    const areaName = Object.entries(layoutConfig.areas).find(([, area]) =>
      (area as AreaTemplate).accepts.includes(el.type as any)
    )?.[0];
    if (areaName) {
      (elementsByArea[areaName] ??= []).push(el);
    }
  }

  // Calculate frame ranges for avatar crossfade
  const frameRanges = calculateElementFrameRanges(
    slide.elements,
    durationInFrames,
    fps,
    avatarMap
  );

  const AVATAR_CROSSFADE_FRAMES = 8;

  // In edit mode: show a placeholder for every narrated element at full opacity.
  // In render mode: show only elements that have an avatarMap entry.
  const narratedElements = slide.elements.filter((el) => el.audioSegmentText);
  const avatarElements = editMode
    ? narratedElements
    : narratedElements.filter((el) => avatarMap?.[el.id]);

  return (
    <TemplateProvider
      template={template}
      currentLayout={slide.layout}
      currentArea={null}
      editMode={editMode}
      selectedElementId={selectedElementId}
      onSelectElement={onSelectElement}
    >
      <AbsoluteFill style={{ backgroundColor: tokens.colors.background }}>
        {/* Slide content with transition */}
        <Sequence name="SlideContent">
          <AbsoluteFill style={slideTransitionStyle}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateAreas: layoutConfig.gridTemplateAreas,
                gridTemplateColumns: layoutConfig.gridTemplateColumns,
                gridTemplateRows: layoutConfig.gridTemplateRows,
                padding: layoutConfig.padding,
                gap: layoutConfig.gap,
              }}
            >
              {Object.entries(layoutConfig.areas).map(([areaName, areaConfig]) => (
                <TemplateProvider
                  key={areaName}
                  template={template}
                  currentLayout={slide.layout}
                  currentArea={areaName}
                  editMode={editMode}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                >
                  <AreaRenderer
                    areaName={areaName}
                    areaConfig={areaConfig as AreaTemplate}
                    elements={elementsByArea[areaName] ?? []}
                    tokens={tokens}
                  />
                </TemplateProvider>
              ))}
            </div>
          </AbsoluteFill>
        </Sequence>

        {/* Avatar overlays — all rendered simultaneously, crossfaded by opacity */}
        <Sequence name="Avatars">
          <AbsoluteFill style={{ pointerEvents: "none" }}>
            {avatarElements.map((el) => {
              const range = frameRanges[el.id];

              // In edit mode: always visible at full opacity (static snapshot at frame 0)
              const opacity = editMode
                ? 1
                : (() => {
                    if (!range) return 0;
                    return interpolate(
                      frame,
                      [
                        range.start,
                        range.start + AVATAR_CROSSFADE_FRAMES,
                        range.end - AVATAR_CROSSFADE_FRAMES,
                        range.end,
                      ],
                      [0, 1, 1, 0],
                      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                    );
                  })();

              const avatarConfig = resolveAvatarConfig(
                template.avatarDefaults,
                presentationAvatarDefaults,
                slide.avatarOverride ?? undefined,
                el.avatarOverride ?? undefined
              );

              return (
                <AvatarOverlayItem
                  key={el.id}
                  videoSrc={avatarMap?.[el.id]?.src}
                  config={avatarConfig}
                  startFromFrame={range?.start ?? 0}
                  opacity={opacity}
                  editMode={editMode}
                />
              );
            })}
          </AbsoluteFill>
        </Sequence>
      </AbsoluteFill>
    </TemplateProvider>
  );
};
