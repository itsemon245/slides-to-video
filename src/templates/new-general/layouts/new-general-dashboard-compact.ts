import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Dashboard compact: full-width header, stats row, and chart grid.
 * Reference: layout-reference/dashboard-compact.png
 */
export const newGeneralDashboardCompactLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "stats" "charts"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "48px 84px 16px 84px",
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
    stats: {
      accepts: ["stat-number"],
      style: {
        background: tokens.colors.background,
        padding: "8px 84px 16px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 16,
      },
      elementStyles: {
        "stat-number": {
          scale: "display-lg",
          color: "primary",
        },
      },
    },
    charts: {
      accepts: ["bar-chart", "radial-chart", "data-table", "image"],
      style: {
        background: tokens.colors.muted,
        padding: "16px 84px 48px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
      },
    },
  },
});
