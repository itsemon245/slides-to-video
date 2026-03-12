import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Campaign grid: centered header with accent bar, then a 4x2 stat card grid.
 * Reference: layout-reference/campaign-grid.png
 */
export const newGeneralCampaignGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "stats"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 24px 84px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800, textAlign: "center" },
        },
      },
    },
    stats: {
      accepts: ["stat-number", "feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "24px 84px 68px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 24,
        alignContent: "center",
      },
      elementStyles: {
        "stat-number": {
          scale: "display-lg",
          color: "primary",
        },
      },
    },
  },
});
