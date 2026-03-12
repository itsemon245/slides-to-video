import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Agenda / table of contents: intro text on the left, numbered list on the right.
 * Reference: layout-reference/agenda.png
 */
export const newGeneralAgendaLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"intro agenda"`,
  gridTemplateColumns: "0.4fr 0.6fr",
  gridTemplateRows: "1fr",
  areas: {
    intro: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "80px 40px 80px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
      },
    },
    agenda: {
      accepts: ["bullet-list", "feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "80px 84px 80px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
      },
      elementStyles: {
        "bullet-list": {
          scale: "body-lg",
          color: "primary",
          gap: 24,
          variant: "numbered",
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(5, auto)",
            gridAutoFlow: "column",
            gap: 28,
            rowGap: 36,
          },
        },
      },
    },
  },
});
