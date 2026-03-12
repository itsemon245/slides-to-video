import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, withAlpha } from "../helpers";

export const academicAgendaLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"list detail"`,
  gridTemplateColumns: "0.96fr 1.04fr",
  gridTemplateRows: "1fr",
  areas: {
    list: {
      accepts: ["headline", "bullet-list", "feature-item"],
      style: {
        ...darkShell,
        padding: "72px 54px 64px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 26,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.92), 380, { top: -120, right: -90 }),
        orb(withAlpha(tokens.colors.surface, 0.74), 280, { bottom: -110, left: -60 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 340, lineHeight: 0.96 },
        },
        "bullet-list": {
          color: "primary",
          style: {
            background: withAlpha(tokens.colors.accent, 0.14),
            borderRadius: 28,
            padding: "28px 30px",
          },
        },
        "feature-item": {
          variant: "with-left-border",
          color: "primary",
        },
      },
    },
    detail: {
      accepts: ["headline", "subheadline", "body-text", "feature-item"],
      style: {
        ...darkShell,
        padding: "82px 72px 70px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 26,
      },
      decorations: [
        orb(withAlpha(tokens.colors.accent, 0.2), 280, { top: -90, right: -70 }),
        orb(withAlpha(tokens.colors.surface, 0.82), 240, { bottom: -40, right: 80 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          style: { maxWidth: 460, lineHeight: 0.98 },
        },
        subheadline: {
          scale: "heading-md",
          color: "muted",
        },
        "body-text": {
          style: { maxWidth: 520 },
        },
      },
    },
  },
});
