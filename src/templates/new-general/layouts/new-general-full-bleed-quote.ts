import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { withAlpha } from "../helpers";

export const newGeneralFullBleedQuoteLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"background"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  areas: {
    background: {
      accepts: ["image", "headline", "quote", "body-text"],
      style: {
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
        padding: "86px 120px",
        background: "#10131B",
      },
      gradientOverlay: {
        direction: "to right",
        from: withAlpha("#10131B", 0.74),
        to: withAlpha("#10131B", 0.28),
      },
      elementStyles: {
        image: {
          variant: "cover",
        },
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { color: "#FFFFFF", maxWidth: 620 },
        },
        quote: {
          variant: "default",
          color: "primary",
          style: { maxWidth: 760, color: "#FFFFFF" },
        },
        "body-text": {
          color: "primary",
          style: { maxWidth: 680, color: withAlpha("#FFFFFF", 0.82) },
        },
      },
    },
  },
});
