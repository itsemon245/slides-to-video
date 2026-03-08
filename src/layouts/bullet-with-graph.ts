import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const bulletWithGraphLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"text graph"`,
  gridTemplateColumns: "1fr 46%",
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
      },
      elementStyles: {
        headline:      { scale: "display-lg", color: "primary" },
        subheadline:   { scale: "heading-md", color: "secondary" },
        "bullet-list": { scale: "body-lg",    color: "secondary", variant: "stacked" },
        "body-text":   { scale: "body-lg",    color: "secondary" },
      },
    },
    graph: {
      accepts: ["bar-chart"],
      required: true,
      maxCount: 1,
      containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 80px 60px 24px",
        // Surface tint distinguishes the graph panel from the text side
        background: `linear-gradient(to left, ${tokens.colors.surface} 0%, transparent 100%)`,
      },
    },
  },
});
