// Root.tsx
import { Composition } from "remotion";
import { SlideComposition } from "./SlideComposition";
import { FullPresentation } from "./FullPresentation";
import {
  resolveActivePreview,
  TEMPLATE_REGISTRY,
  CONTENT_REGISTRY,
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

      {/* Register per-slide compositions for ALL templates (enables preview-slide.sh) */}
      {Object.entries(TEMPLATE_REGISTRY).map(([tplName, tpl]) => {
        const tplContent = CONTENT_REGISTRY[tplName as keyof typeof CONTENT_REGISTRY];
        if (tplName === templateName) return null; // already registered above
        return tplContent.slides.map((slide) => (
          <Composition
            key={`${tplName}-${slide.id}`}
            id={`${tplName}-${slide.id}`}
            component={SlideComposition as any}
            durationInFrames={computeSlideDurationFrames(slide, fps, academicAvatarMap)}
            fps={fps}
            width={1920}
            height={1080}
            defaultProps={{
              slide,
              template: tpl,
              avatarMap: academicAvatarMap,
            }}
          />
        ));
      })}
    </>
  );
};
