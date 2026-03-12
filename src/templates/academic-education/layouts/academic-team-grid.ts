import type { DesignTokens, LayoutTemplate } from "../../../schema/template";
import { orb, darkShell, withAlpha } from "../helpers";

export const academicTeamGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header header header" "memberA memberB memberC"`,
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto 1fr",
  areas: {
    header: {
      accepts: ["headline", "subheadline", "body-text"],
      style: {
        ...darkShell,
        padding: "54px 80px 14px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 10,
      },
      decorations: [
        orb(withAlpha(tokens.colors.surface, 0.9), 460, { top: -240, left: -110 }),
        orb(withAlpha(tokens.colors.surface, 0.72), 320, { top: 40, right: -120 }),
      ],
      elementStyles: {
        headline: {
          scale: "display-lg",
          textAlign: "center",
          style: { maxWidth: 1080, lineHeight: 0.98 },
        },
        subheadline: {
          textAlign: "center",
        },
        "body-text": {
          textAlign: "center",
          style: { maxWidth: 720 },
        },
      },
    },
    memberA: {
      accepts: ["image", "subheadline", "body-text"],
      style: {
        ...darkShell,
        padding: "20px 24px 76px 74px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
      },
      elementStyles: {
        image: {
          style: {
            borderRadius: "999px",
            boxShadow: `22px 24px 0 ${withAlpha("#000000", 0.24)}`,
          },
        },
        subheadline: {
          scale: "body-lg",
          color: "background",
          textAlign: "center",
          style: {
            background: tokens.colors.primary,
            padding: "14px 26px",
            borderRadius: 999,
            fontWeight: 700,
            marginTop: -14,
          },
        },
        "body-text": {
          scale: "body-md",
          textAlign: "center",
          style: { maxWidth: 260 },
        },
      },
    },
    memberB: {
      accepts: ["image", "subheadline", "body-text"],
      style: {
        ...darkShell,
        padding: "4px 24px 62px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
      },
      elementStyles: {
        image: {
          style: {
            borderRadius: "999px",
            boxShadow: `22px 24px 0 ${withAlpha("#000000", 0.24)}`,
          },
        },
        subheadline: {
          scale: "body-lg",
          color: "background",
          textAlign: "center",
          style: {
            background: tokens.colors.primary,
            padding: "14px 26px",
            borderRadius: 999,
            fontWeight: 700,
            marginTop: -14,
          },
        },
        "body-text": {
          scale: "body-md",
          textAlign: "center",
          style: { maxWidth: 260 },
        },
      },
    },
    memberC: {
      accepts: ["image", "subheadline", "body-text"],
      style: {
        ...darkShell,
        padding: "20px 74px 76px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
      },
      elementStyles: {
        image: {
          style: {
            borderRadius: "999px",
            boxShadow: `22px 24px 0 ${withAlpha("#000000", 0.24)}`,
          },
        },
        subheadline: {
          scale: "body-lg",
          color: "background",
          textAlign: "center",
          style: {
            background: tokens.colors.primary,
            padding: "14px 26px",
            borderRadius: 999,
            fontWeight: 700,
            marginTop: -14,
          },
        },
        "body-text": {
          scale: "body-md",
          textAlign: "center",
          style: { maxWidth: 260 },
        },
      },
    },
  },
  decorations: [
    orb(withAlpha(tokens.colors.surface, 0.75), 380, { bottom: -140, right: -80 }),
  ],
});
