import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Team grid: intro text on the left, 2x2 member cards on the right.
 * Reference: layout-reference/team-grid.png
 */
export const newGeneralTeamGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header members"`,
  gridTemplateColumns: "0.38fr 0.62fr",
  gridTemplateRows: "1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
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
        "body-text": {
          scale: "body-md",
          color: "secondary",
        },
      },
    },
    members: {
      accepts: ["image", "subheadline", "body-text", "feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "60px 84px 60px 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
        alignContent: "center",
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 8, width: "100%", maxHeight: 140, objectFit: "cover" as const },
        },
        subheadline: {
          scale: "body-md",
          color: "primary",
          textAlign: "center",
          style: { fontWeight: 700, marginTop: -8 },
        },
        "body-text": {
          scale: "caption",
          textAlign: "center",
          color: "secondary",
          style: { marginTop: -24 },
        },
      },
    },
  },
});
