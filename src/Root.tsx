// Root.tsx
// Registers one Composition per slide + one FullPresentation composition.

import React from "react";
import { Composition } from "remotion";
import { SlideComposition } from "./SlideComposition";
import { FullPresentation } from "./FullPresentation";
import { samplePresentation } from "./sample-presentation";
import { corporateDark } from "./templates/corporate-dark";
import {
  type AvatarMap,
  computeSlideDurationFrames,
} from "./components/presentation/GenericSlideRenderer";

const FPS = samplePresentation.fps ?? 30;
const { width, height } = samplePresentation.resolution;

// Sample avatarMap wired to the speaker1 video for elements that have audioSegmentText.
// In production this is populated by the ML pipeline after audio generation.
const sampleAvatarMap: AvatarMap = {
  el1:  { src: "/avatars/speaker1.mp4", durationInSeconds: 8  },
  el3:  { src: "/avatars/speaker1.mp4", durationInSeconds: 10 },
  el6:  { src: "/avatars/speaker1.mp4", durationInSeconds: 10 },
  el9:  { src: "/avatars/speaker1.mp4", durationInSeconds: 8  },
  el13: { src: "/avatars/speaker1.mp4", durationInSeconds: 8  },
  el15: { src: "/avatars/speaker1.mp4", durationInSeconds: 8  },
};

const totalFrames = samplePresentation.slides.reduce(
  (sum, slide) => sum + computeSlideDurationFrames(slide, FPS, sampleAvatarMap),
  0
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full presentation — all slides in sequence */}
      <Composition
        id="FullPresentation"
        component={FullPresentation as unknown as React.FC<Record<string, unknown>>}
        durationInFrames={totalFrames}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{
          presentation: samplePresentation,
          template: corporateDark,
          avatarMap: sampleAvatarMap,
        }}
      />

      {/* Individual slide compositions for per-slide debugging */}
      {samplePresentation.slides.map((slide) => (
        <Composition
          key={slide.id}
          id={slide.id}
          component={SlideComposition as unknown as React.FC<Record<string, unknown>>}
          durationInFrames={computeSlideDurationFrames(slide, FPS, sampleAvatarMap)}
          fps={FPS}
          width={width}
          height={height}
          defaultProps={{
            slide,
            template: corporateDark,
            avatarMap: sampleAvatarMap,
          }}
        />
      ))}
    </>
  );
};
