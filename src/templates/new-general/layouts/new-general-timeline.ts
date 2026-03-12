import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Timeline: centered header, four equal step columns below.
 * Reference: layout-reference/timeline.png
 */
export const newGeneralTimelineLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header header header" "steps steps steps steps"`,
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 24px 84px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 12,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 6 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          textAlign: "center",
          style: { fontWeight: 800 },
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 780 },
        },
      },
    },
    steps: {
      accepts: ["feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "24px 60px 68px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        alignContent: "start",
        gap: 24,
      },
      elementStyles: {
        "feature-item": {
          variant: "with-top-border",
          color: "primary",
          style: {
            background: tokens.colors.muted,
            borderRadius: 12,
            padding: "28px 24px",
          },
        },
      },
    },
  },
});
