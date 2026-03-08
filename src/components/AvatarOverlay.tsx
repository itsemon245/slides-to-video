// AvatarOverlay.tsx
// Standalone avatar overlay — kept for direct use outside of GenericSlideRenderer.
// For the full per-element crossfade system, use GenericSlideRenderer which
// handles avatarMap directly.

import { AbsoluteFill, Sequence } from "remotion";
import { Video } from "@remotion/media";
import type { AvatarConfig } from "../schema/template";
import { AVATAR_SIZES, AVATAR_EDGE_PADDING } from "../designSystem";

interface Props extends AvatarConfig {
  videoSrc: string;
}

const getPositionStyle = (
  position: AvatarConfig["position"],
): React.CSSProperties => {
  switch (position) {
    case "top-left":    return { top: AVATAR_EDGE_PADDING, left: AVATAR_EDGE_PADDING };
    case "top-right":   return { top: AVATAR_EDGE_PADDING, right: AVATAR_EDGE_PADDING };
    case "bottom-left": return { bottom: AVATAR_EDGE_PADDING, left: AVATAR_EDGE_PADDING };
    case "bottom-right":return { bottom: AVATAR_EDGE_PADDING, right: AVATAR_EDGE_PADDING };
    default:            return { bottom: AVATAR_EDGE_PADDING, right: AVATAR_EDGE_PADDING };
  }
};

export const AvatarOverlay: React.FC<Props> = ({
  position,
  shape,
  size,
  borderRadius,
  videoSrc,
}) => {
  if (!videoSrc) return null;

  const sizePx = AVATAR_SIZES[size];
  const resolvedRadius = borderRadius ?? (shape === "circle" ? "50%" : "30%");

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          width: sizePx,
          height: sizePx,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          border: "3px solid rgba(255,255,255,0.15)",
          borderRadius: resolvedRadius,
          ...getPositionStyle(position),
        }}
      >
        <Sequence name="AvatarVideo">
          <Video
            src={videoSrc}
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
