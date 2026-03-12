import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, card, cardBox, softBox, accentEyebrow } from "../helpers";

export const newGeneralChartSidebarLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"chart sidebar"`,
  gridTemplateColumns: "1.08fr 0.92fr",
  gridTemplateRows: "1fr",
  areas: {
    chart: {
      accepts: ["headline", "subheadline", "body-text", "stat-number", "bar-chart", "image"],
      style: {
        ...shell,
        padding: "74px 18px 70px 78px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
        },
        subheadline: accentEyebrow({ textTransform: "none", letterSpacing: "0" }),
        "body-text": {
          style: { maxWidth: 420 },
        },
        "stat-number": {
          style: { alignItems: "flex-start" },
        },
        "bar-chart": {
          style: cardBox("28px 30px"),
        },
        image: {
          style: { ...card, minHeight: 420 },
        },
      },
    },
    sidebar: {
      accepts: ["feature-item", "headline", "body-text", "stat-number", "image"],
      style: {
        ...shell,
        padding: "98px 82px 70px 18px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 16,
        alignContent: "center",
      },
      elementStyles: {
        "feature-item": {
          style: softBox("22px 24px"),
          variant: "default",
        },
        "stat-number": {
          style: softBox("22px 24px", { alignItems: "flex-start" }),
          scale: "display-lg",
        },
        image: {
          style: { ...card, minHeight: 320 },
        },
      },
    },
  },
});
