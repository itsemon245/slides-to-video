import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Table focus: header row with headline/body, full-width table below.
 * Reference: layout-reference/channel-strategy.png
 */
export const newGeneralTableFocusLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "table"`,
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
        gap: 14,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        "body-text": {
          style: { maxWidth: 780 },
        },
      },
    },
    table: {
      accepts: ["data-table"],
      maxCount: 1,
      style: {
        background: tokens.colors.background,
        padding: "12px 84px 68px 84px",
      },
    },
  },
});
