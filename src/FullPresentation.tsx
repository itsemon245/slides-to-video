// FullPresentation.tsx
// Plays all slides sequentially in a single composition using <Series>.

import { Series } from "remotion";
import { SlideComposition } from "./SlideComposition";
import { PresentationJSON } from "./types";

export const FullPresentation: React.FC<{ presentation: PresentationJSON }> = ({
  presentation,
}) => {
  const fps = presentation.fps;

  return (
    <Series>
      {presentation.slides.map((slide) => (
        <Series.Sequence
          key={slide.slideId}
          durationInFrames={slide.duration * fps}
          premountFor={fps}
        >
          <SlideComposition slide={slide} />
        </Series.Sequence>
      ))}
    </Series>
  );
};
