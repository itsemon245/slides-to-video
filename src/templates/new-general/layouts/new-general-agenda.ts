import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { shell, stackStyle, cardBox, accentEyebrow, orb, withAlpha } from "../helpers";

export const newGeneralAgendaLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"intro agenda"`,
  gridTemplateColumns: "0.88fr 1.12fr",
  gridTemplateRows: "1fr",
  areas: {
    intro: {
      accepts: ["headline", "subheadline", "body-text"],
      style: stackStyle("86px 32px 72px 78px", 18, {
        justifyContent: "center",
      }),
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 360, lineHeight: 0.96 },
        },
        subheadline: accentEyebrow({ fontSize: 20 }),
        "body-text": {
          style: { maxWidth: 360 },
        },
      },
    },
    agenda: {
      accepts: ["bullet-list", "feature-item", "headline", "body-text"],
      style: {
        ...shell,
        padding: "84px 84px 72px 20px",
        display: "flex",
        alignItems: "center",
      },
      elementStyles: {
        "bullet-list": {
          style: cardBox("36px 40px", { minWidth: 720 }),
          color: "primary",
          gap: 18,
        },
        "feature-item": {
          variant: "with-top-border",
          style: cardBox("26px 28px"),
        },
        headline: {
          scale: "heading-md",
        },
      },
      decorations: [
        orb(withAlpha(tokens.colors.accent, 0.06), 360, { top: -110, right: -100 }),
      ],
    },
  },
});
