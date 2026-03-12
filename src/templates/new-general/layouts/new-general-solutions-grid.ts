import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Solutions grid: header top-left, 2x2 feature grid bottom-left, image on the right.
 * Reference: layout-reference/solutions-grid.png
 */
export const newGeneralSolutionsGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header image" "features features image"`,
  gridTemplateColumns: "0.33fr 0.33fr 0.34fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline"],
      style: {
        background: tokens.colors.background,
        padding: "68px 40px 24px 84px",
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
        subheadline: {
          scale: "heading-md",
          color: "secondary",
        },
      },
    },
    features: {
      accepts: ["feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "12px 40px 68px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 28,
        alignContent: "start",
      },
      elementStyles: {
        "feature-item": {
          variant: "with-left-border",
          color: "accent",
        },
      },
    },
    image: {
      accepts: ["image"],
      style: {
        background: tokens.colors.background,
        padding: "40px 84px 40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 12, width: "100%", objectFit: "cover" as const },
        },
      },
    },
  },
});
