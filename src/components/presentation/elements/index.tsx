import type { ContentElement } from "../../../schema/content";
import type { DesignTokens } from "../../../schema/template";
import { Headline } from "./headline";
import { Subheadline } from "./subheadline";
import { BodyText } from "./body-text";
import { BulletList } from "./bullet-list";
import { StatNumber } from "./stat-number";
import { ImageElement } from "./image";
import { BarChart } from "./bar-chart";
import { Quote } from "./quote";
import { FeatureItem } from "./feature-item";

export { Headline } from "./headline";
export { Subheadline } from "./subheadline";
export { BodyText } from "./body-text";
export { BulletList } from "./bullet-list";
export { StatNumber } from "./stat-number";
export { ImageElement } from "./image";
export { BarChart } from "./bar-chart";
export { Quote } from "./quote";
export { FeatureItem } from "./feature-item";

// ─── Element Registry ─────────────────────────────────────────────────────────
// Maps element type string → React component.
// Add one line here when adding a new element type.

export const ELEMENT_REGISTRY: Record<
  ContentElement["type"],
  React.FC<{ el: any }>
> = {
  headline:        Headline,
  subheadline:     Subheadline,
  "body-text":     BodyText,
  "bullet-list":   BulletList,
  "stat-number":   StatNumber,
  image:           ImageElement,
  "bar-chart":     BarChart,
  quote:           Quote,
  "feature-item":  FeatureItem,
};

// ─── Render Element ───────────────────────────────────────────────────────────
// Pure dispatcher. TemplateContext must be in scope.

export const renderElement = (el: ContentElement): React.ReactElement | null => {
  const Component = ELEMENT_REGISTRY[el.type];
  if (!Component) return null;
  return <Component key={el.id} el={el} />;
};

// ─── Element Controls Spec ────────────────────────────────────────────────────
// Describes which editor controls are available for each element type.
// The web editor properties panel reads this to render the right UI.
// Add one entry here when adding a new editable property.

export type ControlType =
  | "text-input"
  | "textarea"
  | "number-input"
  | "color-picker"
  | "select"
  | "toggle"
  | "list-editor";

export interface ControlSpec {
  field: string;
  control: ControlType;
  label: string;
  options?: string[];
  min?: number;
  max?: number;
}

export const ELEMENT_CONTROLS: Record<ContentElement["type"], ControlSpec[]> = {
  headline: [
    { field: "content",                       control: "text-input",   label: "Text" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 12, max: 200 },
    { field: "styleOverrides.fontWeight",     control: "select",       label: "Weight", options: ["400","500","600","700","800"] },
    { field: "styleOverrides.fontFamily",     control: "text-input",   label: "Font Family" },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color" },
    { field: "styleOverrides.fontStyle",      control: "select",       label: "Style", options: ["normal","italic"] },
    { field: "styleOverrides.textDecoration", control: "select",       label: "Decoration", options: ["none","underline","line-through"] },
    { field: "styleOverrides.letterSpacing",  control: "text-input",   label: "Letter Spacing" },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  subheadline: [
    { field: "content",                       control: "text-input",   label: "Text" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 12, max: 120 },
    { field: "styleOverrides.fontWeight",     control: "select",       label: "Weight", options: ["400","500","600","700"] },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color" },
    { field: "styleOverrides.fontStyle",      control: "select",       label: "Style", options: ["normal","italic"] },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  "body-text": [
    { field: "content",                       control: "textarea",     label: "Text" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 12, max: 80 },
    { field: "styleOverrides.fontWeight",     control: "select",       label: "Weight", options: ["400","500","600","700"] },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color" },
    { field: "styleOverrides.fontStyle",      control: "select",       label: "Style", options: ["normal","italic"] },
    { field: "styleOverrides.lineHeight",     control: "number-input", label: "Line Height", min: 1, max: 3 },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  "bullet-list": [
    { field: "items",                         control: "list-editor",  label: "Items" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 12, max: 80 },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color" },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  "stat-number": [
    { field: "content",                       control: "text-input",   label: "Value" },
    { field: "label",                         control: "text-input",   label: "Label" },
    { field: "accent",                        control: "toggle",       label: "Use Accent Color" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 24, max: 200 },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color Override" },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  image: [
    { field: "src",                           control: "text-input",   label: "Image URL" },
    { field: "alt",                           control: "text-input",   label: "Alt Text" },
    { field: "styleOverrides.objectFit",      control: "select",       label: "Fit", options: ["cover","contain","fill"] },
    { field: "styleOverrides.objectPosition", control: "text-input",   label: "Position" },
    { field: "styleOverrides.borderRadius",   control: "number-input", label: "Border Radius", min: 0, max: 9999 },
    { field: "styleOverrides.opacity",        control: "number-input", label: "Opacity", min: 0, max: 1 },
  ],
  "bar-chart": [
    { field: "title",                         control: "text-input",   label: "Chart Title" },
    { field: "bars",                          control: "list-editor",  label: "Bars" },
    { field: "maxValue",                      control: "number-input", label: "Max Value", min: 1 },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  quote: [
    { field: "content",                       control: "textarea",     label: "Quote Text" },
    { field: "attribution",                   control: "text-input",   label: "Attribution" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Font Size", min: 16, max: 120 },
    { field: "styleOverrides.color",          control: "color-picker", label: "Color" },
    { field: "styleOverrides.fontStyle",      control: "select",       label: "Style", options: ["normal","italic"] },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
  "feature-item": [
    { field: "title",                         control: "text-input",   label: "Title" },
    { field: "description",                   control: "textarea",     label: "Description" },
    { field: "styleOverrides.fontSize",       control: "number-input", label: "Title Font Size", min: 12, max: 80 },
    { field: "styleOverrides.fontWeight",     control: "select",       label: "Weight", options: ["400","500","600","700","800"] },
    { field: "styleOverrides.color",          control: "color-picker", label: "Title Color" },
    { field: "audioSegmentText",              control: "textarea",     label: "Narration Text" },
  ],
};

// ─── Unused tokens to avoid unused-import warning ─────────────────────────────
// DesignTokens is used by callers who import from this file.
export type { DesignTokens };
