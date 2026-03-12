import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Title slide: large hero area on the left with headline/body,
 * narrow note area on the right with supporting text.
 * Reference: layout-reference/text-image-split.png
 */
export const newGeneralTitleLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"hero note"`,
  gridTemplateColumns: "1.2fr 0.8fr",
  gridTemplateRows: "1fr",
  areas: {
    hero: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 64px 80px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 22,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        subheadline: {
          scale: "heading-md",
          color: "accent",
          style: { textTransform: "uppercase" as const, letterSpacing: "0.04em" },
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
          style: { maxWidth: 580 },
        },
      },
    },
    note: {
      accepts: ["body-text", "image"],
      style: {
        background: tokens.colors.background,
        padding: "80px 60px 80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      },
      elementStyles: {
        "body-text": {
          scale: "body-md",
          color: "secondary",
        },
        image: {
          variant: "rounded",
          style: { borderRadius: 20, maxHeight: 400, width: "100%", objectFit: "cover" as const },
        },
      },
    },
  },
});
