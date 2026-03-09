import type { Template } from "../schema/template";
import { createDefaultLayouts } from "../layouts";

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
    ...createDefaultLayouts(tokens),
    "vertical-split": {
      gridTemplateAreas: `"top" "bottom"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      areas: {
        top: {
          accepts: ["headline", "body-text"],
          containerStyle: {
            background: tokens.colors.background,
            padding: "60px 80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          },
          decorations: [
            {
              position: "top-right",
              top: 40,
              right: 40,
              color: "accent",
              count: 3,
              size: 24,
              gap: 8,
            },
          ],
          elementStyles: {
            headline: { scale: "display-lg", color: "primary" },
          },
        },
        bottom: {
          accepts: ["image"],
          containerStyle: {
            background: `linear-gradient(to top, ${tokens.colors.secondary}, ${tokens.colors.background})`,
            padding: "40px 80px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 20,
            alignItems: "stretch",
            position: "relative",
          },
          elementStyles: { image: { variant: "rounded"} },
        },
      },
    },
    "list-divider-panel": {
      gridTemplateAreas: `"list divider panel"`,
      gridTemplateColumns: "55% 8% 1fr",
      gridTemplateRows: "1fr",
      areas: {
        list: {
          accepts: ["headline", "feature-item"],
          containerStyle: {
            background: tokens.colors.surface,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignContent: "start",
            gap: 24,
            padding: "60px 48px",
            position: "relative",
          },
          elementStyles: {
            headline:       { scale: "heading-md", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
            "feature-item": { variant: "with-top-border", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
          },
        },
        divider: {
          accepts: ["image"],
          maxCount: 1,
          containerStyle: { overflow: "hidden" },
          elementStyles: { image: { variant: "cover" } },
        },
        panel: {
          accepts: ["headline", "subheadline", "image", "feature-item"],
          containerStyle: {
            background: tokens.colors.background,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
            padding: "60px 60px",
            position: "relative",
          },
          decorations: [
            {
              position: "bottom-right",
              bottom: 40,
              right: 40,
              color: "accent",
              count: 3,
              size: 24,
              gap: 8,
            },
          ],
          elementStyles: {
            headline:       { scale: "display-lg", color: "primary",  transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
            subheadline:    {                                          transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
            image:          { variant: "rounded",                      transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
            "feature-item": {                                          transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
          },
        },
      },
    },
  },
};

export default natureLight;
