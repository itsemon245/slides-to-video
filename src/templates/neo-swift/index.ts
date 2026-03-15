import type { Template, Decoration } from "../../schema/template";
import { createDefaultLayouts } from "../../layouts";
import { takeawayListLayout } from "./layouts/takeaway-list";

const tokens: Template["tokens"] = {
  colors: {
    background: "#FFFFFF",
    surface:    "#F8F9FA",
    primary:    "#1A1A2E",
    secondary:  "#6B7280",
    accent:     "#4A5568",
    muted:      "#E5E7EB",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body:    "Inter, sans-serif",
  },
};

const defaultLayouts = createDefaultLayouts(tokens);

// ─── Decoration Factory ───────────────────────────────────────────────────────
// Neo Swift identity: single rotated-square diamond in charcoal/accent color.

const d = ({ style, wrapperStyle, ...rest }: Partial<Decoration> = {}): Decoration => ({
  color: "accent",
  count: 1,
  size: 20,
  style: { transform: "rotate(45deg)", borderRadius: 2, ...style },
  ...rest,
  ...(wrapperStyle ? { wrapperStyle } : {}),
});

// ─── Template Definition ──────────────────────────────────────────────────────

export const neoSwift: Template = {
  id: "neo-swift",
  name: "Neo Swift",
  description: "Minimalist corporate theme with diamond accents and clean typography.",

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
      variant: "with-bullet",
      color: "primary",
      fontFamily: "body",
      transitionIn:  { id: "slide-up-in",    duration: "440ms" },
      transitionOut: { id: "slide-down-out", duration: "320ms" },
    },
  },

  layouts: {
    ...defaultLayouts,

    // ── Decoration overrides for shared layouts ────────────────────────────────
    "title-center":        { ...defaultLayouts["title-center"],        decorations: [d({ placement: "bottom-right", wrapperStyle: { bottom: 24, right: 24 } })] },
    "hero-split":          { ...defaultLayouts["hero-split"],          decorations: [d({ placement: "top-left" })] },
    "stat-grid":           { ...defaultLayouts["stat-grid"],           decorations: [d({ placement: "top-right", wrapperStyle: { top: 24, right: 24 } })] },
    "quote-focus":         { ...defaultLayouts["quote-focus"],         decorations: [d({ placement: "bottom-left", wrapperStyle: { bottom: 24, left: 24 } })] },
    "three-column":        { ...defaultLayouts["three-column"],        decorations: [d({ placement: "top-right", wrapperStyle: { top: 24, right: 24 } })] },
    "bullet-with-image":   { ...defaultLayouts["bullet-with-image"],   decorations: [d({ placement: "top-left", wrapperStyle: { top: 24, left: 24 } })] },
    "image-feature-cards": { ...defaultLayouts["image-feature-cards"], decorations: [d({ placement: "top-right", wrapperStyle: { top: 24, right: 24 } })] },
    "dark-side-panel":     { ...defaultLayouts["dark-side-panel"],     decorations: [d({ placement: "center-right", wrapperStyle: { right: 24 } })] },

    // ── Custom layouts (neo-swift specific) ───────────────────────────────────
    "takeaway-list": takeawayListLayout(tokens),
  },
};

export default neoSwift;
