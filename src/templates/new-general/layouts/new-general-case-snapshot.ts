import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Case snapshot: story text with bullet list on the left, company info and stat on the right.
 * Reference: layout-reference/case-snapshot.png
 */
export const newGeneralCaseSnapshotLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"story company"`,
  gridTemplateColumns: "0.55fr 0.45fr",
  gridTemplateRows: "1fr",
  areas: {
    story: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list", "feature-item"],
      style: {
        background: tokens.colors.background,
        padding: "68px 40px 68px 84px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 16,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        "bullet-list": {
          variant: "numbered",
          scale: "body-md",
          color: "secondary",
        },
      },
    },
    company: {
      accepts: ["stat-number", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 68px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
      elementStyles: {
        "stat-number": {
          scale: "display-xl",
          color: "accent",
        },
      },
    },
  },
});
