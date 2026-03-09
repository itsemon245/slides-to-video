import { z } from "zod";

// ─── Transition Reference ─────────────────────────────────────────────────────
// Moved here (from content.ts) so ElementStyleConfigSchema can reference it
// without creating a circular import (content.ts imports from template.ts).

const TransitionDurationSchema = z.union([
  z.custom<`${number}ms`>(
    (v) => typeof v === "string" && /^\d+(\.\d+)?ms$/.test(v as string)
  ),
  z.custom<`${number}s`>(
    (v) => typeof v === "string" && /^\d+(\.\d+)?s$/.test(v as string)
  ),
  z.literal("inferred"),
]);

export type TransitionDuration = z.infer<typeof TransitionDurationSchema>;

export const TransitionRefSchema = z.object({
  id: z.string().describe(
    "Key from TRANSITION_REGISTRY. E.g. 'fade-in', 'slide-up-in', 'zoom-in-in'."
  ),
  duration: TransitionDurationSchema.optional().describe(
    "Explicit duration override. Omit to use the registry canonical duration. " +
    "Use 'inferred' to span the full element active window (avatar video duration " +
    "for narrated elements, full slide duration for non-narrated)."
  ),
});

export type TransitionRef = z.infer<typeof TransitionRefSchema>;

// ─── Design Tokens ────────────────────────────────────────────────────────────

export const ColorTokensSchema = z.object({
  background: z.string(),
  surface: z.string(),
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
  muted: z.string(),
});

export const FontTokensSchema = z.object({
  heading: z.string(),
  body: z.string(),
});

export const DesignTokensSchema = z.object({
  colors: ColorTokensSchema,
  fonts: FontTokensSchema,
});

// ─── Avatar Config ────────────────────────────────────────────────────────────

export const AvatarPositionSchema = z.enum([
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
]);

export const AvatarShapeSchema = z.enum(["circle", "squircle"]);
export const AvatarSizeSchema = z.enum(["sm", "md", "lg"]);

export const AvatarConfigSchema = z.object({
  position: AvatarPositionSchema,
  size: AvatarSizeSchema,
  shape: AvatarShapeSchema,
  borderRadius: z.number().optional(),
});

// ─── Type Scale ───────────────────────────────────────────────────────────────

export const TypeScaleSchema = z.enum([
  "display-xl",
  "display-lg",
  "heading-md",
  "body-lg",
  "body-md",
  "caption",
  "label",
]);

export const ColorKeySchema = z.enum([
  "background",
  "surface",
  "primary",
  "secondary",
  "accent",
  "muted",
]);

export const FontFamilyKeySchema = z.enum(["heading", "body"]);

// ─── Decoration Config ────────────────────────────────────────────────────────

export const DecorationSchema = z.object({
  // visual properties
  color: ColorKeySchema.or(z.string()).optional(), // Theme color key OR raw CSS color
  opacity: z.number().optional(),

  // positioning & sizing
  position: z
    .enum(["absolute", "relative", "fixed", "sticky"])
    .or(z.string())
    .default("absolute"),
  top: z.number().or(z.string()).optional(),
  left: z.number().or(z.string()).optional(),
  right: z.number().or(z.string()).optional(),
  bottom: z.number().or(z.string()).optional(),
  width: z.number().or(z.string()).optional(),
  height: z.number().or(z.string()).optional(),
  size: z.number().or(z.string()).optional(), // sets both width and height

  // repetition
  count: z.number().optional(),
  gap: z.number().or(z.string()).optional(),
  direction: z.enum(["row", "column"]).optional(),

  // styling
  style: z.record(z.string(), z.string()).optional(), // Raw CSS properties
  className: z.string().optional(), // Tailwind classes

  // wrapper styling (for multiple items)
  wrapperStyle: z.record(z.string(), z.string()).optional(),
  wrapperClassName: z.string().optional(),
});

export type Decoration = z.infer<typeof DecorationSchema>;

// ─── Element Style Config ─────────────────────────────────────────────────────
// All visual decisions for a given element type in a given layout+area context.

export const UnderlineConfigSchema = z.object({
  height: z.number(),
  color: ColorKeySchema,
  marginTop: z.number(),
  width: z.number().optional(),
});

export const ElementStyleConfigSchema = z.object({
  variant: z.string().optional(),
  scale: TypeScaleSchema.optional(),
  color: ColorKeySchema.optional(),
  fontFamily: FontFamilyKeySchema.optional(),
  textAlign: z
    .enum(["left", "center", "right", "justify"])
    .optional(),
  margin: z.string().optional(),
  padding: z.string().optional(),
  gap: z.number().optional(),
  glow: z.boolean().optional(),
  underline: UnderlineConfigSchema.optional(),
  decorations: z.array(DecorationSchema).optional(),
  transitionIn: TransitionRefSchema.optional(),
  transitionOut: TransitionRefSchema.optional(),
});

// ─── Area Template ────────────────────────────────────────────────────────────

export const ElementTypeSchema = z.enum([
  "headline",
  "subheadline",
  "body-text",
  "bullet-list",
  "stat-number",
  "image",
  "bar-chart",
  "quote",
  "feature-item",
]);

export const SeparatorConfigSchema = z.object({
  height: z.number(),
  color: ColorKeySchema,
  width: z.number().optional(),
  marginBlock: z.number().optional(),
});

export const GradientOverlaySchema = z.object({
  direction: z.string(),
  from: z.string(),
  to: z.string(),
});

export const AreaTemplateSchema = z.object({
  accepts: z.array(ElementTypeSchema),
  required: z.boolean().optional(),
  maxCount: z.number().optional(),
  containerStyle: z.record(z.string(), z.unknown()).optional(),
  separator: SeparatorConfigSchema.optional(),
  gradientOverlay: GradientOverlaySchema.optional(),
  // z.record with string key infers as Partial<Record<...>> — no need to specify all element types
  elementStyles: z.record(z.string(), ElementStyleConfigSchema).optional(),
  decorations: z.array(DecorationSchema).optional(),
});

// ─── Layout Template ──────────────────────────────────────────────────────────

export const LayoutNameSchema = z.string();

export const LayoutTemplateSchema = z.object({
  gridTemplateAreas: z.string(),
  gridTemplateColumns: z.string(),
  gridTemplateRows: z.string(),
  padding: z.string().optional(),
  gap: z.number().optional(),
  areas: z.record(z.string(), AreaTemplateSchema),
  decorations: z.array(DecorationSchema).optional(),
});

// ─── Slide Defaults ───────────────────────────────────────────────────────────

export const SlideDefaultsSchema = z.object({
  background: z.string().optional(),
  padding: z.string().optional(),
});

// ─── Full Template ────────────────────────────────────────────────────────────

export const TemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  tokens: DesignTokensSchema,
  slideDefaults: SlideDefaultsSchema.optional(),
  avatarDefaults: AvatarConfigSchema,
  elementDefaults: z.record(z.string(), ElementStyleConfigSchema).optional(),
  layouts: z.record(z.string(), LayoutTemplateSchema),
});

// ─── Derived Types ────────────────────────────────────────────────────────────

export type ColorTokens = z.infer<typeof ColorTokensSchema>;
export type DesignTokens = z.infer<typeof DesignTokensSchema>;
export type AvatarConfig = z.infer<typeof AvatarConfigSchema>;
export type AvatarPosition = z.infer<typeof AvatarPositionSchema>;
export type AvatarShape = z.infer<typeof AvatarShapeSchema>;
export type AvatarSize = z.infer<typeof AvatarSizeSchema>;
export type TypeScale = z.infer<typeof TypeScaleSchema>;
export type ColorKey = z.infer<typeof ColorKeySchema>;
export type FontFamilyKey = z.infer<typeof FontFamilyKeySchema>;
export type ElementStyleConfig = z.infer<typeof ElementStyleConfigSchema>;
export type UnderlineConfig = z.infer<typeof UnderlineConfigSchema>;
export type AreaTemplate = z.infer<typeof AreaTemplateSchema>;
export type LayoutTemplate = z.infer<typeof LayoutTemplateSchema>;
export type LayoutName = z.infer<typeof LayoutNameSchema>;
export type ElementType = z.infer<typeof ElementTypeSchema>;
export type Template = z.infer<typeof TemplateSchema>;
