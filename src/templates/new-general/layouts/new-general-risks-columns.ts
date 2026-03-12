import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { accentBar } from "../helpers";

/**
 * Risks columns: header row with accent bar, then 3 equal columns with feature items and descriptions.
 * Reference: layout-reference/risks-columns.png
 */
export const newGeneralRisksColumnsLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header header" "col1 col2 col3"`,
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "68px 84px 24px 84px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      },
      decorations: [accentBar({ wrapperStyle: { marginTop: 8 } })],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { fontWeight: 800 },
        },
        subheadline: {
          scale: "heading-md",
          color: "secondary",
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
        },
      },
    },
    col1: {
      accepts: ["feature-item", "headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "24px 28px 68px 84px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { fontWeight: 700 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
        "body-text": {
          scale: "body-md",
          color: "secondary",
        },
      },
    },
    col2: {
      accepts: ["feature-item", "headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "24px 28px 68px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { fontWeight: 700 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
        "body-text": {
          scale: "body-md",
          color: "secondary",
        },
      },
    },
    col3: {
      accepts: ["feature-item", "headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "24px 84px 68px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { fontWeight: 700 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
        "body-text": {
          scale: "body-md",
          color: "secondary",
        },
      },
    },
  },
});
