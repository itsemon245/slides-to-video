import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Quote + image: quote on the left, image on the right.
 * Reference: layout-reference/text-image-split.png (quote variant)
 */
export const newGeneralQuoteImageLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"quote image"`,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  areas: {
    quote: {
      accepts: ["headline", "quote", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 40px 80px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { fontWeight: 800 },
        },
        quote: {
          scale: "heading-md",
          color: "primary",
        },
      },
    },
    image: {
      accepts: ["image", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "60px 84px 60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 16 },
        },
      },
    },
  },
});
