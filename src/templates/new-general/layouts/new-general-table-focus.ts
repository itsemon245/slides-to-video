import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle, cardBox, accentEyebrow } from "../helpers";

export const newGeneralTableFocusLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "table"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: stackStyle("68px 84px 18px 84px", 10),
      elementStyles: {
        headline: {
          scale: "display-lg",
        },
        subheadline: accentEyebrow(),
        "body-text": {
          style: { maxWidth: 840 },
        },
      },
    },
    table: {
      accepts: ["data-table", "headline", "body-text"],
      style: {
        ...shell,
        padding: "12px 84px 74px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      elementStyles: {
        "data-table": {
          style: cardBox("28px 32px"),
        },
      },
    },
  },
});
