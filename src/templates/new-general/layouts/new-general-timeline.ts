import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle, cardBox, withAlpha } from "../helpers";

export const newGeneralTimelineLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "steps"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "body-text"],
      style: stackStyle("72px 84px 14px 84px", 14, {
        alignItems: "center",
        textAlign: "center",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
          textAlign: "center",
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 860 },
        },
      },
    },
    steps: {
      accepts: ["feature-item", "headline", "body-text"],
      style: {
        ...shell,
        padding: "18px 84px 74px 84px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 18,
        alignItems: "start",
      },
      elementStyles: {
        "feature-item": {
          variant: "with-top-border",
          style: cardBox("28px", { minHeight: 220 }),
        },
        headline: {
          scale: "heading-md",
        },
      },
      decorations: [
        {
          color: withAlpha(tokens.colors.accent, 0.35),
          wrapperStyle: { top: 120, left: 130, right: 130, zIndex: 0 },
          style: { width: "calc(100% - 260px)", height: 2, borderRadius: 999 },
        },
      ],
    },
  },
});
