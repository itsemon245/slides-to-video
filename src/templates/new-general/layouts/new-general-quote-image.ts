import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, card, orb, withAlpha } from "../helpers";

export const newGeneralQuoteImageLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"quote image"`,
  gridTemplateColumns: "0.92fr 1.08fr",
  gridTemplateRows: "1fr",
  areas: {
    quote: {
      accepts: ["headline", "quote", "body-text"],
      style: {
        ...shell,
        padding: "82px 24px 72px 78px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 22,
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "accent",
        },
        quote: {
          variant: "side-accent",
          style: { maxWidth: 460 },
        },
        "body-text": {
          style: { maxWidth: 430 },
        },
      },
    },
    image: {
      accepts: ["image", "headline", "body-text"],
      style: {
        ...shell,
        padding: "72px 82px 72px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: {
            ...card,
            minHeight: 520,
          },
        },
        headline: {
          scale: "heading-md",
        },
        "body-text": {
          scale: "body-md",
        },
      },
      decorations: [
        orb(withAlpha(tokens.colors.accent, 0.07), 300, { bottom: -80, right: -70 }),
      ],
    },
  },
});
