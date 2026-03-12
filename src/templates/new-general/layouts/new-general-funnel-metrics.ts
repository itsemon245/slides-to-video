import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, shellStyle, softBox } from "../helpers";

export const newGeneralFunnelMetricsLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"lead bars"`,
  gridTemplateColumns: "0.72fr 1.28fr",
  gridTemplateRows: "1fr",
  areas: {
    lead: {
      accepts: ["headline", "stat-number", "body-text"],
      style: {
        ...shell,
        padding: "80px 18px 72px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      elementStyles: {
        headline: { scale: "display-lg" },
        "stat-number": { style: { alignItems: "flex-start" } },
        "body-text": { scale: "body-md" },
      },
    },
    bars: {
      accepts: ["feature-item"],
      style: shellStyle("110px 84px 72px 18px", {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 14,
        alignContent: "center",
      }),
      elementStyles: {
        "feature-item": {
          style: softBox("18px 22px"),
          color: "primary",
        },
      },
    },
  },
});
