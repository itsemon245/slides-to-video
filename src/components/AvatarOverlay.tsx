// components/AvatarOverlay.tsx
// Renders the lipsync avatar video on top of the slide.
// Position, shape (circle/squircle), and size come from slide JSON.

import { AbsoluteFill, staticFile } from "remotion";
import { Video } from "@remotion/media";
import { AvatarConfig } from "../types";

const SIZES = {
  sm: 160,
  md: 220,
  lg: 300,
};

const PADDING = 40; // px from slide edge

const SHAPE_STYLES: Record<AvatarConfig["shape"], React.CSSProperties> = {
  circle: {
    borderRadius: "50%",
  },
  squircle: {
    borderRadius: "30%",
  },
};

const getPositionStyle = (
  position: AvatarConfig["position"],
  size: number
): React.CSSProperties => {
  switch (position) {
    case "top-left":
      return { top: PADDING, left: PADDING };
    case "top-right":
      return { top: PADDING, right: PADDING };
    case "bottom-left":
      return { bottom: PADDING, left: PADDING };
    case "bottom-right":
      return { bottom: PADDING, right: PADDING };
  }
};

export const AvatarOverlay: React.FC<AvatarConfig> = ({
  position,
  shape,
  size,
  videoSrc,
}) => {
  if (!videoSrc) {
    return null;
  }

  const sizePx = SIZES[size];

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
          ...SHAPE_STYLES[shape],
          ...getPositionStyle(position, sizePx),
        }}
      >
        <Video
          src={staticFile(videoSrc.replace(/^\//, ""))}
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
