import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle, cardBox, accentEyebrow } from "../helpers";

export const newGeneralDashboardLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"story visuals"`,
  gridTemplateColumns: "0.82fr 1.18fr",
  gridTemplateRows: "1fr",
  areas: {
    story: {
      accepts: ["headline", "subheadline", "body-text", "stat-number", "feature-item"],
      style: stackStyle("82px 28px 70px 78px", 22, {
        justifyContent: "center",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 360, lineHeight: 0.96 },
        },
        subheadline: accentEyebrow({ fontSize: 20, letterSpacing: "0", textTransform: "none" }),
        "body-text": {
          style: { maxWidth: 380 },
        },
        "stat-number": {
          scale: "display-lg",
          style: {
            alignItems: "flex-start",
            paddingTop: 10,
          },
        },
        "feature-item": {
          variant: "with-left-border",
        },
      },
    },
    visuals: {
      accepts: ["bar-chart", "radial-chart", "data-table", "headline", "body-text"],
      style: {
        ...shell,
        padding: "72px 82px 68px 18px",
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 20,
        alignItems: "stretch",
      },
      elementStyles: {
        "bar-chart": {
          style: cardBox("28px 30px"),
        },
        "radial-chart": {
          style: cardBox("28px 30px"),
        },
        "data-table": {
          style: cardBox("28px 30px", { gridColumn: "1 / -1" }),
        },
        headline: {
          scale: "heading-md",
        },
      },
    },
  },
});
