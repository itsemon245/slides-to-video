// FullPresentation.tsx
// Plays all slides sequentially in a single composition using <Series>.

import React from "react";
import { Series } from "remotion";
import { SlideComposition } from "./SlideComposition";
import type { ContentPresentation } from "./schema/content";
import type { Template } from "./schema/template";
import {
  type AvatarMap,
  computeSlideDurationFrames,
} from "./components/presentation";

interface Props {
  presentation: ContentPresentation;
  template: Template;
  avatarMap?: AvatarMap;
}

export const FullPresentation: React.FC<Props> = ({
  presentation,
  template,
  avatarMap = {},
}) => {
  const fps = presentation.fps ?? 30;

  return (
    <Series>
      {presentation.slides.map((slide) => {
        const slideDuration = computeSlideDurationFrames(slide, fps, avatarMap);
        return (
          <Series.Sequence
            key={slide.id}
            durationInFrames={slideDuration}
            premountFor={fps}
          >
            <SlideComposition
              slide={slide}
              template={template}
              avatarMap={avatarMap}
              presentationAvatarDefaults={presentation.avatarDefaults}
            />
          </Series.Sequence>
        );
      })}
    </Series>
  );
};
