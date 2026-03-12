import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Funnel metrics: lead stat on the left, stacked bar-like cards on the right.
 * Reference: layout-reference/funnel-metrics.png
 */
export const newGeneralFunnelMetricsLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"lead bars"`,
  gridTemplateColumns: "0.45fr 0.55fr",
  gridTemplateRows: "1fr",
  areas: {
    lead: {
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
          color: "primary",
        },
      },
    },
    bars: {
      accepts: ["feature-item", "stat-number"],
      style: {
        background: tokens.colors.background,
        padding: "72px 84px 72px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
      },
      elementStyles: {
        "feature-item": {
          variant: "with-left-border",
          color: "primary",
          style: {
            background: tokens.colors.accent,
            borderRadius: 10,
            padding: "24px 32px",
            color: "#FFFFFF",
          },
        },
      },
    },
  },
});
