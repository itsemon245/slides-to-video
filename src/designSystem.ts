// designSystem.ts
// All visual tokens live here.
// LLM picks palette names — this file maps them to actual CSS values.
// When you want to add a new palette or tweak a font size, this is the only file to touch.

import { Palette, TypeScale } from "./types";

export interface PaletteTokens {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
}

export const PALETTES: Record<Palette, PaletteTokens> = {
  "midnight-blue": {
    background: "#0a0e1a",
    surface: "#131929",
    primary: "#f0f4ff",
    secondary: "#8899cc",
    accent: "#4f8eff",
    muted: "#3a4466",
  },
  "forest-dark": {
    background: "#0c1a0e",
    surface: "#142016",
    primary: "#e8f5e9",
    secondary: "#81c784",
    accent: "#00e676",
    muted: "#2e4d30",
  },
  "sunset-warm": {
    background: "#1a0a00",
    surface: "#2a1500",
    primary: "#fff3e0",
    secondary: "#ffb74d",
    accent: "#ff6d00",
    muted: "#4d2600",
  },
  "slate-pro": {
    background: "#0f1117",
    surface: "#1a1d27",
    primary: "#e8eaf0",
    secondary: "#9099b0",
    accent: "#7c6af7",
    muted: "#2d3147",
  },
  "warm-cream": {
    background: "#faf7f2",
    surface: "#f0ebe0",
    primary: "#1a1410",
    secondary: "#6b5a45",
    accent: "#c0392b",
    muted: "#c8b99a",
  },
};

// Maps TypeScale tokens to actual font sizes (px) and weights
export interface TypeTokens {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
}

export const TYPE_SCALE: Record<TypeScale, TypeTokens> = {
  "display-xl": { fontSize: 96, fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em" },
  "display-lg": { fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" },
  "heading-md": { fontSize: 40, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.01em" },
  "body-lg":    { fontSize: 28, fontWeight: 400, lineHeight: 1.6 },
  "body-md":    { fontSize: 22, fontWeight: 400, lineHeight: 1.6 },
  "caption":    { fontSize: 16, fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.02em" },
};

// Helper: get CSS style object from type scale token
export const getTypeStyle = (scale: TypeScale): React.CSSProperties => {
  const t = TYPE_SCALE[scale];
  return {
    fontSize: t.fontSize,
    fontWeight: t.fontWeight,
    lineHeight: t.lineHeight,
    letterSpacing: t.letterSpacing,
  };
};