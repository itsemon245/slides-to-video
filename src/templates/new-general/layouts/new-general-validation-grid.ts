import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, card, stackStyle, cardBox, softBox } from "../helpers";

export const newGeneralValidationGridLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"intro intro" "points media"`,
  gridTemplateColumns: "1.05fr 0.95fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    intro: {
      accepts: ["headline", "subheadline", "body-text"],
      style: stackStyle("68px 84px 14px 84px", 10),
      elementStyles: {
        subheadline: {
          color: "accent",
        },
        headline: {
          scale: "display-lg",
        },
        "body-text": {
          style: { maxWidth: 820 },
        },
      },
    },
    points: {
      accepts: ["feature-item"],
      style: {
        ...shell,
        padding: "10px 18px 72px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignContent: "center",
      },
      elementStyles: {
        "feature-item": {
          variant: "with-top-border",
          style: cardBox("24px 24px", { minHeight: 170 }),
        },
      },
    },
    media: {
      accepts: ["image", "body-text"],
      style: {
        ...shell,
        padding: "10px 82px 72px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      elementStyles: {
        image: {
          style: { ...card, minHeight: 330 },
        },
        "body-text": {
          style: softBox("22px 24px"),
        },
      },
    },
  },
});
