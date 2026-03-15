import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Takeaway Cards layout — two-column split.
 *
 * Left (~45%): headline + body text summary.
 * Right (~55%): stacked feature-item cards with left-border accent
 *               on a light surface background.
 *
 * Reference: layout-reference/takeaway-cards.png
 */
export const takeawayCardsLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"summary cards"`,
  gridTemplateColumns: "01.1fr 0.9fr",
  gridTemplateRows: "1fr",
  padding: "0",
  gap: 0,

  areas: {
    summary: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 64px",
        gap: 24,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          fontFamily: "heading",
          style: { fontWeight: 800 },
        },
        "body-text": {
          scale: "body-md",
          color: "primary",
          fontFamily: "body",
          style: { lineHeight: 1.7, },
        },
      },
    },
    cards: {
      accepts: ["feature-item"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 64px",
        gap: 24,
      },
      elementStyles: {
        "feature-item": {
          variant: "with-left-border",
          color: "primary",
          scale: "body-lg",
          fontFamily: "heading",
          style: {
            background: tokens.colors.surface,
            padding: "22px 28px",
            borderRadius: 8,
          },
        },
      },
    },
  },
});
