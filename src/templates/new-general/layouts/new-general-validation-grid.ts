import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Validation grid: intro text top-left, 2x2 points grid bottom-left, image right.
 * Reference: layout-reference/validation-grid.png
 */
export const newGeneralValidationGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"intro media" "points media"`,
  gridTemplateColumns: "1.05fr 0.95fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    intro: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 40px 16px 84px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        "body-text": {
          style: { maxWidth: 560 },
        },
      },
    },
    points: {
      accepts: ["feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "12px 40px 68px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      },
      elementStyles: {
        "feature-item": {
          variant: "with-top-border",
          color: "primary",
        },
      },
    },
    media: {
      accepts: ["image", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 68px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: 16,
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 12, maxHeight: 320 },
        },
      },
    },
  },
});
