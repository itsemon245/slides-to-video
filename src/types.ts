// types.ts
// Single source of truth for your slide JSON schema.
// LLM output, editor state, and Remotion props all use these types.

export type Theme = "dark" | "light";
export type Palette = "midnight-blue" | "forest-dark" | "sunset-warm" | "slate-pro" | "warm-cream";
export type Layout = "title-center" | "bullet-with-image" | "stat-grid" | "quote-focus" | "full-bleed-image";
export type TypeScale = "display-xl" | "display-lg" | "heading-md" | "body-lg" | "body-md" | "caption";
export type ColorToken = "primary" | "secondary" | "accent" | "muted";
export type AvatarPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type AvatarShape = "circle" | "squircle";
export type AvatarSize = "sm" | "md" | "lg";
export type TransitionType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom-in";
export type ImageRegion = "right-half" | "left-half" | "full-background" | "inset-card";

// --- Elements ---

export interface HeadlineElement {
  id: string;
  type: "headline";
  content: string;
  scale: TypeScale;
  color: ColorToken;
}

export interface SubheadlineElement {
  id: string;
  type: "subheadline";
  content: string;
  scale: TypeScale;
  color: ColorToken;
}

export interface BulletListElement {
  id: string;
  type: "bullet-list";
  items: string[];
  scale: TypeScale;
  color: ColorToken;
}

export interface ImageElement {
  id: string;
  type: "image";
  src: string;
  alt: string;
  region: ImageRegion;
}

export interface StatNumberElement {
  id: string;
  type: "stat-number";
  content: string;
  label: string;
  scale: TypeScale;
  accent: boolean;
  gridPosition: number;
}

export interface BodyTextElement {
  id: string;
  type: "body-text";
  content: string;
  scale: TypeScale;
  color: ColorToken;
}

export type SlideElement =
  | HeadlineElement
  | SubheadlineElement
  | BulletListElement
  | ImageElement
  | StatNumberElement
  | BodyTextElement;

// --- Avatar ---

export interface AvatarConfig {
  position: AvatarPosition;
  shape: AvatarShape;
  size: AvatarSize;
  videoSrc: string;
}

// --- Transitions ---

export interface TransitionConfig {
  type: TransitionType;
  durationFrames: number;
}

export interface SlideTransitions {
  in: TransitionConfig;
  out: TransitionConfig;
}

// --- Slide ---

export interface Slide {
  slideId: string;
  duration: number;           // in seconds
  layout: Layout;
  palette: Palette;
  elements: SlideElement[];
  avatar: AvatarConfig;
  transition: SlideTransitions;
}

// --- Presentation ---

export interface PresentationJSON {
  presentationId: string;
  theme: Theme;
  fps: number;
  resolution: { width: number; height: number };
  slides: Slide[];
}