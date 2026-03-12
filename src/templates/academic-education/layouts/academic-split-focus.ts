import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, glassCard, withAlpha } from "../helpers";

export const academicSplitFocusLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"story focus"`,
  gridTemplateColumns: "1.08fr 0.92fr",
  gridTemplateRows: "1fr",
  areas: {
    story: {
      accepts: ["headline", "body-text", "bullet-list", "feature-item", "stat-number"],
      style: {
        ...darkShell,
        padding: "76px 42px 68px 74px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 22,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.92), 420, { top: -150, left: -110 }),
        orb(withAlpha(tokens.colors.surface, 0.68), 320, { bottom: -120, left: 40 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 520, lineHeight: 0.96 },
        },
        "body-text": {
          style: { maxWidth: 540 },
        },
        "feature-item": {
          color: "primary",
        },
        "stat-number": {
          scale: "display-lg",
          style: { alignItems: "flex-start" },
        },
      },
    },
    focus: {
      accepts: ["headline", "subheadline", "body-text", "feature-item", "image", "bullet-list", "stat-number"],
      style: {
        ...darkShell,
        padding: "64px 66px 64px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 22,
      },
      decorations: [
        orb(withAlpha(tokens.colors.accent, 0.16), 240, { top: 44, right: -80 }),
        orb(withAlpha(tokens.colors.surface, 0.72), 300, { bottom: -100, right: -20 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 380, lineHeight: 0.95 },
        },
        "feature-item": {
          style: {
            ...glassCard,
            padding: "24px 26px",
            background: withAlpha(tokens.colors.accent, 0.18),
          },
        },
        image: {
          variant: "rounded",
        },
        "stat-number": {
          scale: "display-lg",
        },
      },
    },
  },
});
