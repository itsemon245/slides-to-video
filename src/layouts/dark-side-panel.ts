import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const darkSidePanelLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"panel content"`,
  gridTemplateColumns: "40% 1fr",
  gridTemplateRows: "1fr",
  areas: {
    panel: {
      accepts: ["headline", "subheadline", "bullet-list", "feature-item"],
      containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
        padding: "60px 64px",
        background: tokens.colors.surface,
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        subheadline:    { scale: "body-lg",    color: "muted",       transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        "bullet-list":  { scale: "body-md",    color: "muted",       transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        "feature-item": { variant: "with-left-border", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
      },
    },
    content: {
      accepts: ["image", "headline", "body-text", "feature-item"],
      containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
        padding: "60px 80px",
        background: tokens.colors.background,
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
        headline:       { scale: "heading-md", color: "primary",    transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        "body-text":    { scale: "body-lg",    color: "secondary",  transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        "feature-item": { variant: "with-left-border",              transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        image:          { variant: "rounded",                        transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
      },
    },
  },
});
