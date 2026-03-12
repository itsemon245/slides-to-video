import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * KPI dashboard: text and body on the left, KPI card grid on the right with muted background.
 * Reference: layout-reference/kpi-dashboard.png
 */
export const newGeneralKpiDashboardLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"text kpis"`,
  gridTemplateColumns: "0.42fr 0.58fr",
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
    kpis: {
      accepts: ["stat-number", "feature-item"],
      style: {
        background: tokens.colors.muted,
        padding: "40px 84px 40px 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        alignContent: "center",
      },
      elementStyles: {
        "feature-item": {
          color: "accent",
          style: {
            background: tokens.colors.accent,
            borderRadius: 12,
            padding: "20px 24px",
            color: "#FFFFFF",
          },
        },
        "stat-number": {
          scale: "display-lg",
          color: "primary",
        },
      },
    },
  },
});
