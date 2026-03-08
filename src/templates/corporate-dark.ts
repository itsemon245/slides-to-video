import type { Template } from "../schema/template";
import { createDefaultLayouts } from "../layouts";

const tokens: Template["tokens"] = {
  colors: {
    background: "#0a0e1a",
    surface:    "#131929",
    primary:    "#f0f4ff",
    secondary:  "#8899cc",
    accent:     "#4f8eff",
    muted:      "#3a4466",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body:    "Inter, sans-serif",
  },
};

export const template: Template = {
  id: "corporate-dark",
  name: "Corporate Dark",
  description: "Dark professional theme with blue accent. Supports all 6 layouts.",

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
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
    },
    "bullet-list": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      gap: 16,
      variant: "stacked",
    },
    "stat-number": {
      scale: "display-xl",
      color: "accent",
      fontFamily: "heading",
      variant: "with-glow",
    },
    image: {
      variant: "cover",
    },
    "bar-chart": {},
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "default",
    },
  },

  layouts: createDefaultLayouts(tokens),
};

export default template;