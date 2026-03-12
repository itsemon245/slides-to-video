import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, purpleShell, withAlpha } from "../helpers";

export const academicClosingLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"content"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  areas: {
    content: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        ...purpleShell,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        padding: "84px 110px",
        textAlign: "center",
      },
      decorations: [
        orb(withAlpha("#ffffff", 0.07), 460, { top: -130, left: -90 }),
        orb(withAlpha("#ffffff", 0.06), 340, { bottom: -120, right: -100 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-xl",
          color: "primary",
          textAlign: "center",
          style: { maxWidth: 920, fontSize: 82, lineHeight: 0.95 },
        },
        subheadline: {
          textAlign: "center",
          color: "primary",
          scale: "heading-md",
        },
        "body-text": {
          textAlign: "center",
          color: "primary",
          style: { maxWidth: 760, opacity: 0.92 },
        },
      },
    },
  },
});
