import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle } from "../helpers";

export const newGeneralInsightsGridLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "grid"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: stackStyle("68px 84px 10px 84px", 10),
      elementStyles: {
        headline: {
          scale: "display-lg",
        },
        subheadline: {
          color: "accent",
        },
        "body-text": {
          style: { maxWidth: 860 },
        },
      },
    },
    grid: {
      accepts: ["feature-item"],
      style: {
        ...shell,
        padding: "10px 84px 72px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 16,
        alignContent: "center",
      },
      elementStyles: {
        "feature-item": {
          variant: "default",
          style: { minHeight: 120 },
          color: "accent",
        },
      },
    },
  },
});
