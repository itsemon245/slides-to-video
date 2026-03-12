import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Thank you / closing: text and contact info top, image placeholder bottom.
 * Reference: layout-reference/thank-you.png
 */
export const newGeneralThankYouLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"copy" "placeholder"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 0.7fr",
  areas: {
    copy: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "60px 84px 24px 84px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        gap: 18,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 6 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          textAlign: "center",
          style: { fontWeight: 800 },
        },
        subheadline: {
          scale: "heading-md",
          color: "accent",
          textAlign: "center",
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 640 },
        },
      },
    },
    placeholder: {
      accepts: ["image"],
      style: {
        background: tokens.colors.background,
        padding: "12px 84px 48px 84px",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
      },
      elementStyles: {
        image: {
          variant: "rounded",
          style: { borderRadius: 16, width: "100%" },
        },
      },
    },
  },
});
