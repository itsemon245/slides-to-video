import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Full-bleed quote: single area with background image and overlay text.
 * Reference: layout-reference/full-bleed-quote.png
 */
export const newGeneralFullBleedQuoteLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"background"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  areas: {
    background: {
      accepts: ["image", "headline", "quote", "body-text"],
      style: {
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 24,
        position: "relative",
        overflow: "hidden",
      },
      gradientOverlay: {
        direction: "to bottom",
        from: "rgba(0,0,0,0.55)",
        to: "rgba(0,0,0,0.7)",
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "background",
          textAlign: "center",
          style: { fontWeight: 800, position: "relative" as const, zIndex: 2 },
        },
        quote: {
          scale: "heading-md",
          color: "background",
          textAlign: "center",
          variant: "centered",
          style: { position: "relative" as const, zIndex: 2 },
        },
        "body-text": {
          scale: "body-md",
          color: "background",
          textAlign: "center",
          style: { position: "relative" as const, zIndex: 2 },
        },
        image: {
          variant: "cover",
          style: {
            position: "absolute" as const,
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
          },
        },
      },
    },
  },
});
