// SlideComposition.tsx
// One Remotion composition = one slide.
// Accepts a ContentSlide + Template and delegates all rendering to GenericSlideRenderer.

import React from "react";
import type { ContentSlide } from "./schema/content";
import type { Template } from "./schema/template";
import {
  GenericSlideRenderer,
  type AvatarMap,
} from "./components/presentation/GenericSlideRenderer";

export interface SlideCompositionProps {
  slide: ContentSlide;
  template: Template;
  avatarMap?: AvatarMap;
  presentationAvatarDefaults?: Partial<Template["avatarDefaults"]>;
}

export const SlideComposition: React.FC<SlideCompositionProps> = ({
  slide,
  template,
  avatarMap,
  presentationAvatarDefaults,
}) => {
  return (
    <GenericSlideRenderer
      slide={slide}
      template={template}
      avatarMap={avatarMap}
      presentationAvatarDefaults={presentationAvatarDefaults}
    />
  );
};
