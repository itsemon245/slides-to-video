import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Competitive advantage: dashboard image on the left, headline + body + stat numbers on the right.
 * Reference: layout-reference/competitive-advantage.png
 */
export const newGeneralCompetitiveAdvantageLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"image content" "image stats"`,
  gridTemplateColumns: "0.45fr 0.55fr",
  gridTemplateRows: "1fr auto",
  areas: {
    image: {
      accepts: ["image"],
      style: {
        background: tokens.colors.background,
        padding: "80px 40px 80px 84px",
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
    content: {
      accepts: ["headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 84px 20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 20,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
        },
      },
    },
    stats: {
      accepts: ["stat-number"],
      style: {
        background: tokens.colors.background,
        padding: "20px 84px 80px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
      },
      elementStyles: {
        "stat-number": {
          scale: "display-lg",
          color: "accent",
        },
      },
    },
  },
});
