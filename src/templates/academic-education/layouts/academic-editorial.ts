import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, glassCard, withAlpha } from "../helpers";

export const academicEditorialLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"lead aside"`,
  gridTemplateColumns: "1.05fr 0.95fr",
  gridTemplateRows: "1fr",
  areas: {
    lead: {
      accepts: ["headline", "quote", "body-text", "stat-number"],
      style: {
        ...darkShell,
        padding: "82px 54px 72px 76px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.95), 460, { top: -170, left: -150 }),
        orb(withAlpha(tokens.colors.surface, 0.72), 300, { bottom: -80, left: 10 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 540, lineHeight: 0.96 },
        },
        quote: {
          variant: "side-accent",
          style: { maxWidth: 560 },
        },
        "body-text": {
          style: { maxWidth: 500 },
        },
        "stat-number": {
          scale: "display-lg",
          style: { alignItems: "flex-start" },
        },
      },
    },
    aside: {
      accepts: ["headline", "subheadline", "body-text", "feature-item", "bullet-list"],
      style: {
        ...darkShell,
        padding: "60px 66px 60px 20px",
        display: "flex",
        alignItems: "center",
      },
      elementStyles: {
        headline: {
          scale: "heading-md",
          color: "primary",
        },
        subheadline: {
          scale: "body-lg",
          color: "muted",
        },
        "body-text": {
          scale: "body-md",
        },
        "feature-item": {
          style: {
            ...glassCard,
            padding: "24px 26px",
          },
        },
        "bullet-list": {
          style: {
            ...glassCard,
            padding: "26px 28px",
            background: withAlpha(tokens.colors.accent, 0.16),
          },
        },
      },
      decorations: [
        orb(withAlpha(tokens.colors.accent, 0.18), 240, { top: 110, right: -80 }),
        orb(withAlpha(tokens.colors.muted, 0.18), 210, { bottom: 60, right: 10 }),
      ],
    },
  },
});
