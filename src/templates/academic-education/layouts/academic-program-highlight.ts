import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, purpleShell, withAlpha } from "../helpers";

export const academicProgramHighlightLayout = (_tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"left media right"`,
  gridTemplateColumns: "0.82fr 0.92fr 1.06fr",
  gridTemplateRows: "1fr",
  areas: {
    left: {
      accepts: ["headline", "body-text", "stat-number", "feature-item"],
      style: {
        ...purpleShell,
        padding: "70px 26px 62px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      decorations: [
        orb(withAlpha("#ffffff", 0.06), 260, { top: -70, left: -40 }),
        orb(withAlpha("#ffffff", 0.04), 220, { bottom: -90, left: 40 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { lineHeight: 0.94, maxWidth: 280 },
        },
        "body-text": {
          color: "primary",
          scale: "body-md",
          style: { opacity: 0.9, maxWidth: 220 },
        },
        "stat-number": {
          scale: "display-lg",
          style: { alignItems: "flex-start" },
        },
      },
    },
    media: {
      accepts: ["image"],
      maxCount: 1,
      style: {
        ...purpleShell,
        padding: "104px 16px 104px 16px",
      },
      elementStyles: {
        image: {
          variant: "rounded",
        },
      },
    },
    right: {
      accepts: ["headline", "subheadline", "body-text", "feature-item", "bullet-list"],
      style: {
        ...purpleShell,
        padding: "72px 74px 68px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 22,
      },
      decorations: [
        orb(withAlpha("#ffffff", 0.06), 240, { top: -70, right: -60 }),
        orb(withAlpha("#ffffff", 0.05), 200, { bottom: -70, right: 40 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { maxWidth: 420, lineHeight: 0.96 },
        },
        subheadline: {
          color: "primary",
          scale: "heading-md",
          style: { opacity: 0.96 },
        },
        "body-text": {
          color: "primary",
          style: { maxWidth: 470, opacity: 0.9 },
        },
        "feature-item": {
          variant: "default",
          color: "primary",
        },
        "bullet-list": {
          color: "primary",
        },
      },
    },
  },
});
