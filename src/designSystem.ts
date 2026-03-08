// designSystem.ts
// All visual tokens live here.
// LLM picks palette names — this file maps them to actual CSS values.
// When you want to add a new palette or tweak a font size, this is the only file to touch.

import React from "react";
import type { TypeScale } from "./schema/template";

// Legacy palette name type — kept for designSystem PALETTES map
type Palette = "midnight-blue" | "forest-dark" | "sunset-warm" | "slate-pro" | "warm-cream" | "ocean-deep" | "aurora";

// ─── Color Palettes ───────────────────────────────────────────────────────────

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
  "ocean-deep": {
    background: "#020c18",
    surface: "#07213a",
    primary: "#e0f4ff",
    secondary: "#5bc4f5",
    accent: "#00cfff",
    muted: "#0a3a5a",
  },
  "aurora": {
    background: "#06060f",
    surface: "#0d0d22",
    primary: "#f0eeff",
    secondary: "#a78bfa",
    accent: "#34d399",
    muted: "#1e1b40",
  },
};

// ─── Typography ───────────────────────────────────────────────────────────────

export interface TypeTokens {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: string;
  textTransform?: React.CSSProperties["textTransform"];
}

export const TYPE_SCALE: Record<TypeScale, TypeTokens> = {
  "display-xl": { fontSize: 96, fontWeight: 800, lineHeight: 1.0,  letterSpacing: "-0.03em" },
  "display-lg": { fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" },
  "heading-md": { fontSize: 40, fontWeight: 500, lineHeight: 1.2,  letterSpacing: "-0.01em" },
  "body-lg":    { fontSize: 28, fontWeight: 400, lineHeight: 1.6 },
  "body-md":    { fontSize: 22, fontWeight: 400, lineHeight: 1.6 },
  "caption":    { fontSize: 16, fontWeight: 400, lineHeight: 1.5,  letterSpacing: "0.02em" },
  "label":      { fontSize: 13, fontWeight: 600, lineHeight: 1.4,  letterSpacing: "0.08em", textTransform: "uppercase" },
};

/** Returns a CSS style object from a TypeScale token. */
export const getTypeStyle = (scale: TypeScale): React.CSSProperties => {
  const t = TYPE_SCALE[scale];
  return {
    fontSize: t.fontSize,
    fontWeight: t.fontWeight,
    lineHeight: t.lineHeight,
    letterSpacing: t.letterSpacing,
    textTransform: t.textTransform,
  };
};

// ─── Spacing ──────────────────────────────────────────────────────────────────
// Multiples of 4px. Use these everywhere instead of magic numbers.

export const SPACING = {
  xs:    8,
  sm:    16,
  md:    24,
  lg:    32,
  xl:    48,
  "2xl": 64,
  "3xl": 80,
  "4xl": 96,
  "5xl": 120,
} as const;

export type SpacingToken = keyof typeof SPACING;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const RADIUS = {
  xs:    4,
  sm:    8,
  md:    12,
  lg:    16,
  xl:    24,
  "2xl": 32,
  pill:  9999,
} as const;

export type RadiusToken = keyof typeof RADIUS;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const SHADOW = {
  sm:    "0 2px 8px rgba(0,0,0,0.25)",
  md:    "0 4px 16px rgba(0,0,0,0.35)",
  lg:    "0 8px 32px rgba(0,0,0,0.45)",
  xl:    "0 16px 64px rgba(0,0,0,0.55)",
  inner: "inset 0 2px 8px rgba(0,0,0,0.30)",
} as const;

/**
 * Returns a dual-ring glow shadow in the given color.
 * Useful for accent highlights, stat numbers, avatar rings.
 */
export const glowShadow = (color: string, alpha = 0.45): string => {
  const soft = withAlpha(color, alpha);
  const hard = withAlpha(color, alpha * 0.55);
  return `0 0 32px ${soft}, 0 0 8px ${hard}`;
};

// ─── Motion ───────────────────────────────────────────────────────────────────
// Frame counts assume 30 fps. Multiply by (fps / 30) to adapt to other frame rates.

export const MOTION = {
  durationFast:   8,   // ~267 ms @ 30 fps
  durationNormal: 15,  // ~500 ms
  durationSlow:   25,  // ~833 ms
  durationXSlow:  45,  //  1.5 s
} as const;

// ─── Avatar ───────────────────────────────────────────────────────────────────

export const AVATAR_SIZES = {
  sm: 160,
  md: 220,
  lg: 300,
} as const;

/** Distance from the slide edge to the avatar overlay. */
export const AVATAR_EDGE_PADDING = 40;

// ─── Color Utilities ──────────────────────────────────────────────────────────

/**
 * Converts a 6-digit hex color to a CSS rgba() string.
 * `alpha` is a value between 0 (transparent) and 1 (opaque).
 */
export const withAlpha = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

// ─── Gradient Utilities ───────────────────────────────────────────────────────

/**
 * Linear gradient that fades from the palette's background into transparency.
 * Drop this over an image edge to blend it into the slide.
 */
export const getEdgeFadeGradient = (
  palette: PaletteTokens,
  direction: "to right" | "to left" | "to top" | "to bottom" = "to right"
): string =>
  `linear-gradient(${direction}, ${palette.background} 0%, transparent 30%)`;

/**
 * Radial glow centered near the bottom of the frame using the palette accent.
 * Useful as a hero background layer or atmospheric depth effect.
 */
export const getAccentGlow = (palette: PaletteTokens, intensity = 0.15): string =>
  `radial-gradient(ellipse at 50% 60%, ${withAlpha(palette.accent, intensity)} 0%, transparent 70%)`;
