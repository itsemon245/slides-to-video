import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const threeColumnLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"col1 col2 col3"`,
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr",
  gap: 40,
  padding: "60px 80px",
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
  areas: {
    col1: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list", "image", "feature-item"],
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        borderLeft: `3px solid ${tokens.colors.accent}`,
        paddingLeft: 24,
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "primary" },
        subheadline:    { scale: "body-lg", color: "secondary" },
        "body-text":    { scale: "body-md",    color: "secondary" },
        "feature-item": { variant: "with-top-border" },
      },
    },
    col2: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list", "image", "feature-item"],
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "primary" },
        subheadline:    { scale: "body-lg", color: "secondary" },
        "body-text":    { scale: "body-md",    color: "secondary" },
        "feature-item": { variant: "with-top-border" },
      },
    },
    col3: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list", "image", "feature-item"],
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "primary" },
        subheadline:    { scale: "body-lg", color: "secondary" },
        "body-text":    { scale: "body-md",    color: "secondary" },
        "feature-item": { variant: "with-top-border" },
      },
    },
  },
});
