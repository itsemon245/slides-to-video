import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, purpleShell, withAlpha } from "../helpers";

export const academicHeroLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"content"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  areas: {
    content: {
      accepts: ["headline", "subheadline", "body-text", "feature-item"],
      style: {
        ...purpleShell,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 18,
        padding: "84px 110px",
        textAlign: "center",
      },
      decorations: [
        orb(withAlpha("#ffffff", 0.07), 460, { top: -120, right: -120 }),
        orb(withAlpha("#ffffff", 0.06), 320, { bottom: -80, left: -70 }),
        orb(withAlpha("#ffffff", 0.04), 220, { top: 60, left: "44%" }),
      ],
      elementStyles: {
        headline: {
          scale: "display-xl",
          color: "primary",
          textAlign: "center",
          style: { maxWidth: 900, fontSize: 88, lineHeight: 0.95 },
        },
        subheadline: {
          scale: "heading-md",
          color: "primary",
          textAlign: "center",
          style: { maxWidth: 720, opacity: 0.96 },
        },
        "body-text": {
          scale: "body-lg",
          color: "primary",
          textAlign: "center",
          style: { maxWidth: 760, opacity: 0.9 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
      },
    },
  },
});
