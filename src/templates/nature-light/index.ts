import type { Template, Decoration } from "../../schema/template";
import { createDefaultLayouts } from "../../layouts";
import { verticalSplitLayout } from "./layouts/vertical-split";
import { listDividerPanelLayout } from "./layouts/list-divider-panel";

const tokens: Template["tokens"] = {
  colors: {
    background: "#FFFFFF",
    surface:    "#1A4030",
    primary:    "#1A2810",
    secondary:  "#5A6A5A",
    accent:     "#C5E229",
    muted:      "#D0DDD0",
  },
  fonts: {
    heading: "Nunito, sans-serif",
    body:    "Nunito, sans-serif",
  },
};

const defaultLayouts = createDefaultLayouts(tokens);

// ─── Decoration Factory ───────────────────────────────────────────────────────
// Encodes the nature-light accent mark identity (color, size, shape).
// Each call only needs to specify what's different per placement/layout.

const d = ({ style, wrapperStyle, ...rest }: Partial<Decoration> = {}): Decoration => ({
  color: "accent",
  count: 3,
  size: 38,
  gap: 8,
  style: { borderRadius: "6px", ...style },
  ...rest,
  ...(wrapperStyle ? { wrapperStyle } : {}),
});

// ─── Template Definition ──────────────────────────────────────────────────────

export const natureLight: Template = {
  id: "nature-light",
  name: "Nature Light",
  description: "Clean light theme with forest green panels and lime accent.",

  tokens,

  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "squircle",
  },

  slideDefaults: {
    padding: "0",
  },

  elementDefaults: {
    headline: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn:  { id: "slide-down-in", duration: "450ms" },
      transitionOut: { id: "slide-up-out",  duration: "350ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn:  { id: "slide-up-in",    duration: "450ms" },
      transitionOut: { id: "slide-down-out", duration: "330ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn:  { id: "fade-in",  duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 16,
      variant: "stacked",
      transitionIn:  { id: "slide-up-in",  duration: "520ms" },
      transitionOut: { id: "slide-up-out", duration: "330ms" },
    },
    "stat-number": {
      scale: "display-xl",
      color: "accent",
      fontFamily: "heading",
      variant: "default",
      transitionIn:  { id: "zoom-in-in",  duration: "500ms" },
      transitionOut: { id: "zoom-in-out", duration: "350ms" },
    },
    image: {
      variant: "rounded",
      transitionIn:  { id: "fade-in",  duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "400ms" },
    },
    "bar-chart": {
      transitionIn:  { id: "fade-in",  duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "350ms" },
    },
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "side-accent",
      transitionIn:  { id: "slide-right-in", duration: "550ms" },
      transitionOut: { id: "slide-left-out", duration: "350ms" },
    },
    "feature-item": {
      variant: "with-top-border",
      color: "primary",
      fontFamily: "heading",
      transitionIn:  { id: "slide-up-in",    duration: "440ms" },
      transitionOut: { id: "slide-down-out", duration: "320ms" },
    },
  },

  layouts: {
    ...defaultLayouts,

    // ── Simple layout-level decoration overrides ──────────────────────────────
    "title-center":        { ...defaultLayouts["title-center"],        decorations: [d({ placement: "bottom-right", wrapperStyle: { bottom: 20, right: 20 } })] },
    "hero-split":          { ...defaultLayouts["hero-split"],          decorations: [d({ placement: "top-left" })] },
    "stat-grid":           { ...defaultLayouts["stat-grid"],           decorations: [d({ placement: "top-right", wrapperStyle: { top: 20, right: 20 } })] },
    "quote-focus":         { ...defaultLayouts["quote-focus"],         decorations: [d({ placement: "bottom-left", wrapperStyle: { bottom: 20, left: 20 } })] },
    "three-column":        { ...defaultLayouts["three-column"],        decorations: [d({ placement: "top-right", wrapperStyle: { top: 20, right: 20 } })] },
    "bullet-with-image":   { ...defaultLayouts["bullet-with-image"],   decorations: [d({ placement: "top-left", wrapperStyle: { top: 20, left: 20 } })] },
    "image-feature-cards": { ...defaultLayouts["image-feature-cards"], decorations: [d({ placement: "top-right", wrapperStyle: { top: 20, right: 20 } })] },

    // ── Layout-level override with custom decoration ───────────────────────────
    "dark-side-panel": {
      ...defaultLayouts["dark-side-panel"],
      decorations: [d({ placement: "center-right", wrapperStyle: { right: 20 }, size: 36, direction: "column" })],
    },

    // ── Custom layouts (nature-light specific) ─────────────────────────────────
    "vertical-split":      verticalSplitLayout(tokens),
    "list-divider-panel":  listDividerPanelLayout(tokens),
  },
};

export default natureLight;
