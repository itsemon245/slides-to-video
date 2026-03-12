import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, shellStyle } from "../helpers";

export const newGeneralThankYouLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"copy" "placeholder"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    copy: {
      accepts: ["headline", "body-text", "subheadline"],
      style: shellStyle("72px 84px 22px 84px", {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 18,
        alignItems: "start",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
        },
        subheadline: {
          color: "accent",
          textAlign: "right",
        },
        "body-text": {
          style: { maxWidth: 760 },
        },
      },
    },
    placeholder: {
      accepts: ["image"],
      maxCount: 1,
      style: {
        ...shell,
        padding: "0 84px 74px 84px",
        display: "flex",
        alignItems: "stretch",
      },
      elementStyles: {
        image: {
          variant: "cover",
          style: {
            background: "#2F3441",
            borderRadius: 12,
            minHeight: 360,
          },
        },
      },
    },
  },
});
