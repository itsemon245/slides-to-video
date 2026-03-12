import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Text with stacked images: text and body on the left, two rounded images stacked on the right.
 * Reference: layout-reference/text-stacked-images.png
 */
export const newGeneralTextStackedImagesLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"text images"`,
  gridTemplateColumns: "0.48fr 0.52fr",
  gridTemplateRows: "1fr",
  areas: {
    text: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 40px 80px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
      },
    },
    images: {
      accepts: ["image"],
      style: {
        background: tokens.colors.background,
        padding: "60px 84px 60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 20, maxHeight: 280, width: "90%", objectFit: "cover" as const },
        },
      },
    },
  },
});
