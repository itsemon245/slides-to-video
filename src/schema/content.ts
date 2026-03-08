import { z } from "zod";
import {
  AvatarConfigSchema,
  LayoutNameSchema,
  TypeScaleSchema,
  ColorKeySchema,
} from "./template";

// ─── Transition Reference ─────────────────────────────────────────────────────
// Elements and slides reference transitions by id. The actual animation
// functions live in src/transitions/index.ts.

export const TransitionRefSchema = z.object({
  id: z.string().describe(
    "Key from TRANSITION_REGISTRY. E.g. 'fade', 'slide-up', 'zoom-in'."
  ),
});

// ─── Style Overrides ──────────────────────────────────────────────────────────
// User-set per-element overrides applied on top of template styles (highest priority).
// Text-only or element-specific CSS properties only — no layout/positioning.

export const TextStyleOverridesSchema = z.object({
  fontSize: z.number().optional(),
  fontWeight: z.union([z.number(), z.string()]).optional(),
  fontFamily: z.string().optional(),
  color: z.string().optional(),
  fontStyle: z.enum(["normal", "italic"]).optional(),
  textDecoration: z.enum(["none", "underline", "line-through"]).optional(),
  letterSpacing: z.string().optional(),
  lineHeight: z.number().optional(),
  textTransform: z
    .enum(["none", "uppercase", "lowercase", "capitalize"])
    .optional(),
});

export const ImageStyleOverridesSchema = z.object({
  borderRadius: z.number().optional(),
  objectFit: z.enum(["cover", "contain", "fill"]).optional(),
  objectPosition: z.string().optional(),
  boxShadow: z.string().optional(),
  opacity: z.number().min(0).max(1).optional(),
  padding: z.number().optional(),
});

export const StatStyleOverridesSchema = z.object({
  fontSize: z.number().optional(),
  fontWeight: z.union([z.number(), z.string()]).optional(),
  color: z.string().optional(),
});

// ─── Avatar Override ──────────────────────────────────────────────────────────
// Per-element avatar appearance override. Only present when element has audioSegmentText.

const AvatarOverrideSchema = AvatarConfigSchema.partial();

// ─── Base narration fields (shared by all narrated elements) ──────────────────

const NarrationSchema = z.object({
  audioSegmentText: z.string().optional().describe(
    "Spoken narration for this element. Set only on top-level elements. " +
    "videoOverlay is injected automatically — do not generate it."
  ),
  avatarOverride: AvatarOverrideSchema.optional().describe(
    "Per-element avatar appearance override. Only relevant when audioSegmentText is set."
  ),
  transitionIn: TransitionRefSchema.optional(),
  transitionOut: TransitionRefSchema.optional(),
});

// ─── Content Elements ─────────────────────────────────────────────────────────

export const HeadlineContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("headline"),
  content: z.string(),
  styleOverrides: TextStyleOverridesSchema.optional(),
});

export const SubheadlineContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("subheadline"),
  content: z.string(),
  styleOverrides: TextStyleOverridesSchema.optional(),
});

export const BodyTextContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("body-text"),
  content: z.string(),
  styleOverrides: TextStyleOverridesSchema.optional(),
});

export const BulletListContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("bullet-list"),
  items: z.array(z.string()).min(1).max(8),
  styleOverrides: TextStyleOverridesSchema.optional(),
});

export const StatNumberContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("stat-number"),
  content: z.string(),
  label: z.string(),
  scale: TypeScaleSchema.optional(),
  accent: z.boolean().optional(),
  styleOverrides: StatStyleOverridesSchema.optional(),
});

export const ImageContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("image"),
  src: z.string(),
  alt: z.string(),
  styleOverrides: ImageStyleOverridesSchema.optional(),
});

export const BarChartBarSchema = z.object({
  label: z.string(),
  value: z.number(),
  sublabel: z.string().optional(),
});

export const BarChartContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("bar-chart"),
  title: z.string().optional(),
  bars: z.array(BarChartBarSchema).min(1).max(8),
  maxValue: z.number().optional(),
});

export const QuoteContentSchema = NarrationSchema.extend({
  id: z.string(),
  type: z.literal("quote"),
  content: z.string(),
  attribution: z.string().optional(),
  scale: TypeScaleSchema.optional(),
  color: ColorKeySchema.optional(),
  styleOverrides: TextStyleOverridesSchema.optional(),
});

// ─── Discriminated Union ──────────────────────────────────────────────────────

export const ContentElementSchema = z.discriminatedUnion("type", [
  HeadlineContentSchema,
  SubheadlineContentSchema,
  BodyTextContentSchema,
  BulletListContentSchema,
  StatNumberContentSchema,
  ImageContentSchema,
  BarChartContentSchema,
  QuoteContentSchema,
]);

// ─── Content Slide ────────────────────────────────────────────────────────────

export const ContentSlideSchema = z.object({
  id: z.string(),
  layout: LayoutNameSchema,
  elements: z.array(ContentElementSchema),
  transitionIn: TransitionRefSchema.optional(),
  transitionOut: TransitionRefSchema.optional(),
  avatarOverride: AvatarConfigSchema.partial().optional().describe(
    "Per-slide avatar override. Applies to all narrated elements in this slide unless element.avatarOverride is set."
  ),
});

// ─── Content Presentation ─────────────────────────────────────────────────────

export const ContentPresentationSchema = z.object({
  id: z.string(),
  templateId: z.string().describe("References a Template by id."),
  title: z.string(),
  fps: z.number().default(30),
  resolution: z.object({
    width: z.number(),
    height: z.number(),
  }),
  slides: z.array(ContentSlideSchema),
  avatarDefaults: AvatarConfigSchema.partial().optional().describe(
    "Global avatar override for all narrated elements. Overrides template.avatarDefaults."
  ),
});

// ─── Derived Types ────────────────────────────────────────────────────────────

export type TransitionRef = z.infer<typeof TransitionRefSchema>;
export type TextStyleOverrides = z.infer<typeof TextStyleOverridesSchema>;
export type ImageStyleOverrides = z.infer<typeof ImageStyleOverridesSchema>;
export type StatStyleOverrides = z.infer<typeof StatStyleOverridesSchema>;
export type HeadlineContent = z.infer<typeof HeadlineContentSchema>;
export type SubheadlineContent = z.infer<typeof SubheadlineContentSchema>;
export type BodyTextContent = z.infer<typeof BodyTextContentSchema>;
export type BulletListContent = z.infer<typeof BulletListContentSchema>;
export type StatNumberContent = z.infer<typeof StatNumberContentSchema>;
export type ImageContent = z.infer<typeof ImageContentSchema>;
export type BarChartBar = z.infer<typeof BarChartBarSchema>;
export type BarChartContent = z.infer<typeof BarChartContentSchema>;
export type QuoteContent = z.infer<typeof QuoteContentSchema>;
export type ContentElement = z.infer<typeof ContentElementSchema>;
export type ContentSlide = z.infer<typeof ContentSlideSchema>;
export type ContentPresentation = z.infer<typeof ContentPresentationSchema>;
