import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Problem split: image on the left, headline + body text + feature items on the right.
 * Reference: layout-reference/problem-split.png
 */
export const newGeneralProblemSplitLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header" "image content"`,
  gridTemplateColumns: "0.45fr 0.55fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline"],
      style: {
        background: tokens.colors.background,
        padding: "60px 84px 16px 84px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
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
    image: {
      accepts: ["image"],
      style: {
        background: tokens.colors.background,
        padding: "20px 20px 60px 84px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 12, width: "100%", maxHeight: 500, objectFit: "cover" as const },
        },
      },
    },
    content: {
      accepts: ["body-text", "feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "20px 84px 60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
      elementStyles: {
        "body-text": {
          scale: "body-lg",
          color: "secondary",
        },
        "feature-item": {
          variant: "with-left-border",
          color: "accent",
        },
      },
    },
  },
});
