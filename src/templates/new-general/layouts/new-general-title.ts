import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shellStyle, softBox } from "../helpers";

export const newGeneralTitleLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"hero note"`,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  areas: {
    hero: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      elementStyles: {
        headline: {
          scale: "display-xl",
          style: {
            maxWidth: 560,
            fontSize: 84,
            lineHeight: 0.95,
          },
        },
        subheadline: {
          scale: "heading-md",
        },
        "body-text": {
          style: {
            maxWidth: 520,
          },
        },
      },
    },
    note: {
      accepts: ["headline", "subheadline", "body-text", "feature-item"],
      style: shellStyle("92px 80px 92px 20px", {
        display: "flex",
        alignItems: "center",
      }),
      elementStyles: {
        headline: {
          scale: "heading-md",
          style: softBox("34px 36px 0 36px", { minHeight: 260 }),
        },
        subheadline: {
          color: "accent",
          style: softBox("34px 36px 0 36px", { minHeight: 260 }),
        },
        "body-text": {
          style: softBox("76px 36px 34px 36px", { minHeight: 260 }),
        },
        "feature-item": {
          style: softBox("28px 32px"),
        },
      },
      decorations: [
        {
          color: "accent",
          wrapperStyle: { top: 124, left: 44, zIndex: 2 },
          style: { width: 56, height: 4, borderRadius: 999 },
        },
      ],
    },
  },
});
