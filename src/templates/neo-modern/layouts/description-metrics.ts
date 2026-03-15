import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Description & Metrics layout — three-area split.
 *
 * Left (~45%): headline + body text summary.
 * Right (~55%): two columns of stat-number cards:
 *   - accentStats: accent-coloured background, white text (3 cards stacked)
 *   - lightStats:  surface background with border, primary text (3 cards stacked)
 *
 * Reference: layout-reference/description-metrics.png
 */
export const descriptionMetricsLayout = (
  tokens: DesignTokens,
): LayoutTemplate => ({
  gridTemplateAreas: `"summary accentStats lightStats"`,
  gridTemplateColumns: "1.1fr 0.45fr 0.45fr",
  gridTemplateRows: "1fr",
  padding: "0",
  gap: 0,

  areas: {
    summary: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 64px",
        gap: 24,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          fontFamily: "heading",
          style: { fontWeight: 800 },
        },
        "body-text": {
          scale: "body-md",
          color: "primary",
          fontFamily: "body",
          style: { lineHeight: 1.7 },
        },
      },
    },
    accentStats: {
      accepts: ["stat-number"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 12px 48px 24px",
        gap: 20,
      },
      elementStyles: {
        "stat-number": {
          scale: "heading-md",
          fontFamily: "heading",
          valueStyle: { color: "#FFFFFF", fontWeight: 800 },
          labelStyle: { color: "rgba(255,255,255,0.85)", textAlign: "left", fontWeight: 300, fontSize: 28 },
          style: {
            flexDirection: "column-reverse",
            alignItems: "flex-start",
            background: tokens.colors.accent,
            padding: "24px 28px",
            borderRadius: 5,
            gap: 6,
          },
        },
      },
    },
    lightStats: {
      accepts: ["stat-number"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 24px 48px 12px",
        gap: 20,
      },
      elementStyles: {
        "stat-number": {
          scale: "heading-md",
          color: "primary",
          fontFamily: "heading",
          valueStyle: { color: tokens.colors.secondary, fontWeight: 800, fontSize: 48 },
          labelStyle: { color: tokens.colors.primary, textAlign: "left", fontWeight: 300, fontSize: 24 },
          style: {
            flexDirection: "column-reverse",
            alignItems: "flex-start",
            background: tokens.colors.surface,
            padding: "36px 28px",
            borderRadius: 5,
            gap: 24,
          },
        },
      },
    },
  },
});
