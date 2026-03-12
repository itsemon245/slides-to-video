import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Dashboard: story text on the left, mixed visuals grid on the right.
 * Reference: layout-reference/dashboard-sidebar.png, dashboard-compact.png
 */
export const newGeneralDashboardLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"story visuals"`,
  gridTemplateColumns: "0.45fr 0.55fr",
  gridTemplateRows: "1fr",
  areas: {
    story: {
      accepts: ["headline", "subheadline", "body-text", "stat-number"],
      style: {
        background: tokens.colors.background,
        padding: "72px 40px 72px 84px",
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
        "stat-number": {
          scale: "display-xl",
          color: "accent",
        },
      },
    },
    visuals: {
      accepts: ["bar-chart", "radial-chart", "data-table", "image", "stat-number"],
      style: {
        background: tokens.colors.muted,
        padding: "40px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 20,
        borderRadius: "24px 0 0 24px",
      },
    },
  },
});
