import type { Template } from "../../schema/template";
import { createDefaultLayouts } from "../../layouts";
import { takeawayCardsLayout } from "./layouts/takeaway-cards";
import { thankYouContactLayout } from "./layouts/thank-you-contact";
import { descriptionMetricsLayout } from "./layouts/description-metrics";

const tokens: Template["tokens"] = {
  colors: {
    background: "#FFFFFF",
    surface:    "#f7f8ff",
    primary:    "#1B2CC1",
    secondary:  "#244cd9",
    accent:     "#6b89e6",
    muted:      "#C8D0E0",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body:    "Inter, sans-serif",
  },
};

const defaultLayouts = createDefaultLayouts(tokens);

// ─── Template Definition ──────────────────────────────────────────────────────

export const neoModern: Template = {
  id: "neo-modern",
  name: "Neo Modern",
  description: "Clean modern theme with deep blue accents and light card surfaces.",

  tokens,

  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "circle",
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
      variant: "with-left-border",
      color: "primary",
      scale: "body-lg",
      labelStyle: {
        color: tokens.colors.primary,
      },
      fontFamily: "heading",
      transitionIn:  { id: "slide-up-in",    duration: "440ms" },
      transitionOut: { id: "slide-down-out", duration: "320ms" },
    },
  },

  layouts: {
    ...defaultLayouts,

    // ── Custom layouts (neo-modern specific) ──────────────────────────────────
    "takeaway-cards": takeawayCardsLayout(tokens),
    "thank-you-contact": thankYouContactLayout(tokens),
    "description-metrics": descriptionMetricsLayout(tokens),
  },
};

export default neoModern;
