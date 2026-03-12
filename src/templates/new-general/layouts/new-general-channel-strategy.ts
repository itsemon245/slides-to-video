import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Channel strategy: header left + description right on top row, full-width table below.
 * Reference: layout-reference/channel-strategy.png
 */
export const newGeneralChannelStrategyLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header description" "table table"`,
  gridTemplateColumns: "0.5fr 0.5fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline"],
      style: {
        background: tokens.colors.background,
        padding: "68px 40px 24px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
    description: {
      accepts: ["body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 24px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    table: {
      accepts: ["data-table", "feature-item", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "24px 84px 68px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
    },
  },
});
