import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const imageFeatureCardsLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"photo cards"`,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  areas: {
    photo: {
      accepts: ["image"],
      maxCount: 1,
      style: {
        overflow: "hidden",
        background: tokens.colors.muted,
      },
      elementStyles: {
        image: { variant: "cover" },
      },
    },
    cards: {
      accepts: ["feature-item", "headline", "subheadline"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 32,
        padding: "60px 80px",
        background: tokens.colors.background,
        position: "relative",
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "primary",   transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        subheadline:    { scale: "body-lg",    color: "secondary", transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        "feature-item": { variant: "with-top-border",              transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
      },
    },
  },
});
