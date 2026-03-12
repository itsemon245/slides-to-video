import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, purpleShell, withAlpha } from "../helpers";

export const academicStatPanelLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"lead cards media"`,
  gridTemplateColumns: "0.74fr 0.76fr 0.9fr",
  gridTemplateRows: "1fr",
  areas: {
    lead: {
      accepts: ["headline", "body-text", "stat-number"],
      style: {
        ...purpleShell,
        padding: "74px 22px 66px 62px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      decorations: [
        orb(withAlpha("#ffffff", 0.05), 260, { top: -80, left: -60 }),
        orb(withAlpha("#ffffff", 0.04), 180, { bottom: 70, left: 30 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          style: { maxWidth: 250, lineHeight: 0.94 },
        },
        "body-text": {
          color: "primary",
          scale: "body-md",
          style: { maxWidth: 220, opacity: 0.9 },
        },
        "stat-number": {
          scale: "display-lg",
          style: { alignItems: "flex-start" },
        },
      },
    },
    cards: {
      accepts: ["feature-item", "bullet-list", "body-text"],
      style: {
        ...purpleShell,
        padding: "74px 16px 66px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
      },
      elementStyles: {
        "feature-item": {
          style: {
            background: withAlpha("#ffffff", 0.16),
            borderRadius: 24,
            padding: "22px 22px",
            borderLeft: `4px solid ${tokens.colors.muted}`,
          },
        },
        "bullet-list": {
          color: "primary",
          style: {
            background: withAlpha("#ffffff", 0.12),
            borderRadius: 24,
            padding: "22px 24px",
          },
        },
        "body-text": {
          color: "primary",
        },
      },
    },
    media: {
      accepts: ["image", "headline", "body-text"],
      style: {
        ...purpleShell,
        padding: "74px 64px 66px 26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
      elementStyles: {
        image: {
          variant: "rounded",
        },
        headline: {
          scale: "heading-md",
          color: "primary",
          style: { maxWidth: 360 },
        },
        "body-text": {
          color: "primary",
          scale: "body-md",
        },
      },
    },
  },
});
