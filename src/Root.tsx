// Root.tsx
import { Composition } from "remotion";
import { SlideComposition } from "./SlideComposition";
import { FullPresentation } from "./FullPresentation";
import {
  resolveActivePreview,
} from "./templates/registry";
import { AvatarMap, computeSlideDurationFrames } from "./components/presentation/GenericSlideRenderer";
import "./index.css";

const academicAvatarMap: AvatarMap = {};

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  const { templateName, template, content } = resolveActivePreview(
    typeof window === "undefined" ? "" : window.location.search
  );

  const fullDurationInFrames = content.slides.reduce((total, slide) => {
    return total + computeSlideDurationFrames(slide, fps, academicAvatarMap);
  }, 0);

  return (
    <>
      <Composition
        id={`presentation`}
        component={FullPresentation as any}
        durationInFrames={fullDurationInFrames}
        fps={fps}
        width={1920}
        height={1080}
        schema={undefined} // FullPresentation handles its own props via defaultProps for now
        defaultProps={{
          presentation: content,
          template,
          avatarMap: academicAvatarMap,
        }}
      />

      {content.slides.map((slide) => (
        <Composition
          key={slide.id}
          id={`${templateName}-${slide.id}`}
          component={SlideComposition as any}
          durationInFrames={computeSlideDurationFrames(slide, fps, academicAvatarMap)}
          fps={fps}
          width={1920}
          height={1080}
          defaultProps={{
            slide,
            template,
            avatarMap: academicAvatarMap,
          }}
        />
      ))}
    </>
  );
};
