import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Chart full-width: centered header with accent bar, full-width chart area below on muted background.
 * Reference: layout-reference/chart-fullwidth.png
 */
export const newGeneralChartFullwidthLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "chart"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 24px 84px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center" as const,
        gap: 12,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800, textAlign: "center" as const },
        },
        subheadline: {
          scale: "heading-md",
          color: "secondary",
          style: { textAlign: "center" as const },
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
          style: { textAlign: "center" as const },
        },
      },
    },
    chart: {
      accepts: ["bar-chart", "radial-chart", "data-table", "image"],
      style: {
        background: tokens.colors.muted,
        padding: "24px 84px 68px 84px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "24px 24px 0 0",
      },
      elementStyles: {
        "bar-chart": {
          style: { width: "100%" },
        },
        image: {
          variant: "rounded",
          style: { borderRadius: 12, maxWidth: "100%" },
        },
      },
    },
  },
});
