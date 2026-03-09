import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const heroSplitLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"left right"`,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  areas: {
    left: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 80px",
        backgroundColor: tokens.colors.background,
        position: "relative",
      },
      decorations: [
        {
          placement: "bottom-left",
          wrapperStyle: { bottom: 60, left: 80 },
          color: "accent",
          count: 3,
          size: 24,
          gap: 8,
        },
      ],
      elementStyles: {
        headline:    { scale: "display-lg", color: "primary",   transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        subheadline: { scale: "heading-md", color: "secondary", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        "body-text": { scale: "body-lg",    color: "secondary", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
      },
    },
    right: {
      accepts: ["image"],
      maxCount: 2,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        gap: 24,
        backgroundColor: tokens.colors.surface,
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.08) 12%, transparent 12%)",
        overflow: "hidden",
        position: "relative",
      },
      decorations: [
        {
          placement: "top-right",
          wrapperStyle: { top: 40, right: 40 },
          color: "accent",
          count: 3,
          size: 24,
          gap: 8,
        },
      ],
      elementStyles: {
        image: { variant: "rounded", transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
      },
    },
  },
});
