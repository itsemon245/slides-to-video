import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const bulletWithImageLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"text image"`,
  gridTemplateColumns: "1fr 45%",
  gridTemplateRows: "1fr",
  areas: {
    text: {
      accepts: ["headline", "subheadline", "bullet-list", "body-text"],
      required: true,
      containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 60px 80px 100px",
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
        headline:      { scale: "display-lg", color: "primary" },
        subheadline:   { scale: "heading-md", color: "secondary" },
        "bullet-list": { scale: "body-lg",    color: "secondary", variant: "stacked" },
        "body-text":   { scale: "body-lg",    color: "secondary" },
      },
    },
    image: {
      accepts: ["image"],
      maxCount: 1,
      containerStyle: {
        position: "relative",
        overflow: "hidden",
      },
      gradientOverlay: {
        direction: "to right",
        from: tokens.colors.background,
        to: "transparent",
      },
      elementStyles: {
        image: { variant: "cover" },
      },
    },
  },
});
