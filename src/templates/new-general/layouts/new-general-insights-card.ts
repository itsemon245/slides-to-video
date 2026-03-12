import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Insights card: title with accent bar on the left, single feature-item card on the right.
 * Reference: layout-reference/insights-card.png
 */
export const newGeneralInsightsCardLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"title card"`,
  gridTemplateColumns: "0.45fr 0.55fr",
  gridTemplateRows: "1fr",
  areas: {
    title: {
      accepts: ["headline", "subheadline"],
      style: {
        background: tokens.colors.background,
        padding: "80px 40px 80px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
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
    card: {
      accepts: ["feature-item", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 84px 80px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
      },
      elementStyles: {
        "feature-item": {
          color: "accent",
          style: {
            background: tokens.colors.muted,
            borderRadius: 16,
            padding: "48px 40px",
          },
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
        },
      },
    },
  },
});
