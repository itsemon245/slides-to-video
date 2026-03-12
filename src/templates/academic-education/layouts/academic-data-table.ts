import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, withAlpha } from "../helpers";

export const academicDataTableLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "table" "footer"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto",
  areas: {
    header: {
      accepts: ["headline", "subheadline"],
      style: {
        ...darkShell,
        padding: "72px 80px 18px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 12,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.9), 420, { top: -220, left: -120 }),
        orb(withAlpha(tokens.colors.surface, 0.76), 280, { top: 30, right: -100 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          textAlign: "center",
        },
        subheadline: {
          textAlign: "center",
          style: { maxWidth: 760 },
        },
      },
    },
    table: {
      accepts: ["data-table"],
      maxCount: 1,
      style: {
        ...darkShell,
        padding: "6px 136px 28px 136px",
      },
      elementStyles: {
        "data-table": {
          style: {
            maxHeight: 320,
          },
        },
      },
    },
    footer: {
      accepts: ["body-text", "feature-item"],
      style: {
        ...darkShell,
        padding: "0 80px 72px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 16,
      },
      elementStyles: {
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 820 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
      },
    },
  },
});
