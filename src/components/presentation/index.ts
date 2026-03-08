// Public API for the presentation layer.
// All consumers (Root.tsx, FullPresentation.tsx, SlideComposition.tsx, web editor)
// should import exclusively from this barrel — never from leaf files directly.

// ─── Renderer ─────────────────────────────────────────────────────────────────
export { GenericSlideRenderer, computeSlideDurationFrames, DEFAULT_SLIDE_DURATION_S } from "./GenericSlideRenderer";
export type { GenericSlideRendererProps, AvatarMap, AvatarMapEntry } from "./GenericSlideRenderer";

// ─── Template Context ─────────────────────────────────────────────────────────
export {
  TemplateProvider,
  useTemplate,
  useElementConfig,
  useTokens,
  resolveAvatarConfig,
  useElementSelectHandler,
  useEditModeStyle,
} from "./TemplateContext";

// ─── Elements ─────────────────────────────────────────────────────────────────
export * from "./elements/index";
