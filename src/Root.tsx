// Root.tsx
// Registers compositions from the dummy presentation JSON.
// "FullPresentation" plays all slides sequentially — use this for preview and render.
// Individual slide compositions (s1, s2, …) are kept for per-slide debugging.

import { Composition } from "remotion";
import { SlideComposition } from "./SlideComposition";
import { FullPresentation } from "./FullPresentation";
import { dummyPresentation } from "./dummySlides";

const FPS = dummyPresentation.fps;
const { width, height } = dummyPresentation.resolution;
const totalFrames = dummyPresentation.slides.reduce(
  (sum, s) => sum + s.duration * FPS,
  0
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full presentation — all slides in sequence */}
      <Composition
        id="FullPresentation"
        component={FullPresentation}
        durationInFrames={totalFrames}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ presentation: dummyPresentation }}
      />

      {/* Individual slide compositions for per-slide debugging */}
      {dummyPresentation.slides.map((slide) => (
        <Composition
          key={slide.slideId}
          id={slide.slideId}
          component={SlideComposition}
          durationInFrames={slide.duration * FPS}
          fps={FPS}
          width={width}
          height={height}
          defaultProps={{ slide }}
        />
      ))}
    </>
  );
};