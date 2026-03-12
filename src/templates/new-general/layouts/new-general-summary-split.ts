import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle, cardBox, softBox, accentEyebrow } from "../helpers";

export const newGeneralSummarySplitLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"summary metrics"`,
  gridTemplateColumns: "1.04fr 0.96fr",
  gridTemplateRows: "1fr",
  areas: {
    summary: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list"],
      style: stackStyle("78px 26px 70px 78px", 18, {
        justifyContent: "center",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 560, lineHeight: 0.96 },
        },
        subheadline: accentEyebrow(),
        "body-text": {
          style: { maxWidth: 560 },
        },
        "bullet-list": {
          style: cardBox("28px 32px", { maxWidth: 620 }),
          color: "primary",
        },
      },
    },
    metrics: {
      accepts: ["stat-number"],
      style: {
        ...shell,
        padding: "78px 82px 70px 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignContent: "center",
      },
      elementStyles: {
        "stat-number": {
          style: softBox("26px 28px", {
            alignItems: "flex-start",
            minHeight: 160,
          }),
          scale: "display-lg",
        },
      },
    },
  },
});
