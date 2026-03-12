import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, withAlpha } from "../helpers";

export const academicPerformanceLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"left right"`,
  gridTemplateColumns: "0.94fr 1.06fr",
  gridTemplateRows: "1fr",
  areas: {
    left: {
      accepts: ["headline", "feature-item", "stat-number", "body-text"],
      style: {
        ...darkShell,
        padding: "74px 32px 68px 72px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.84), 340, { bottom: -130, left: -80 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-xl",
          style: { maxWidth: 360, lineHeight: 0.96 },
        },
        "feature-item": {
          variant: "default",
          style: {
            paddingLeft: 20,
            borderLeft: `4px solid ${tokens.colors.accent}`,
          },
        },
        "stat-number": {
          scale: "display-lg",
          style: { alignItems: "flex-start" },
        },
      },
    },
    right: {
      accepts: ["headline", "subheadline", "radial-chart", "body-text", "stat-number"],
      style: {
        ...darkShell,
        padding: "74px 70px 68px 24px",
        display: "grid",
        gridTemplateRows: "auto auto 1fr auto",
        alignItems: "center",
        gap: 12,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.9), 420, { top: -120, right: -140 }),
        orb(withAlpha(tokens.colors.accent, 0.14), 260, { bottom: -80, right: -40 }),
      ],
      elementStyles: {
        headline: {
          scale: "heading-md",
          textAlign: "center",
          style: { maxWidth: 520, justifySelf: "center" },
        },
        subheadline: {
          textAlign: "center",
          color: "primary",
        },
        "radial-chart": {
          variant: "pie",
          style: {
            justifySelf: "center",
            alignSelf: "center",
            width: "100%",
          },
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 560, justifySelf: "center" },
        },
        "stat-number": {
          scale: "heading-md",
        },
      },
    },
  },
});
