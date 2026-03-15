import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Thank-You Contact layout — two-column split.
 *
 * Left (~45%): headline "Thank you" + body text summary.
 * Right (~55%): stacked feature-item cards (default variant)
 *               on a light surface background, acting as contact info rows.
 *
 * Reference: layout-reference/thank-you-contact.png
 */
export const thankYouContactLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"summary cards"`,
  gridTemplateColumns: "1.1fr 0.9fr",
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
          style: { lineHeight: 1.7 },
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
        gap: 32,
      },
      elementStyles: {
        "feature-item": {
          variant: "default",
          scale: "body-lg",
          color: "primary",
          fontFamily: "heading",
          labelStyle: { color: tokens.colors.secondary },
          style: {
            background: tokens.colors.surface,
            padding: "24px 28px",
            borderRadius: 10,
          },
        },
      },
    },
  },
});
