import type React from "react";
import type { Template, Decoration } from "../schema/template";
import { withAlpha } from "../designSystem";

const tokens: Template["tokens"] = {
  colors: {
    background: "#08080C",
    surface: "#15141D",
    primary: "#F8F3FB",
    secondary: "#CFC5DA",
    accent: "#6D47FF",
    muted: "#E3A5E5",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
};

const purpleBg = "linear-gradient(135deg, #5F40FF 0%, #7D58FF 54%, #6B47FF 100%)";

const orb = (
  color: string,
  size: number,
  wrapperStyle: NonNullable<Decoration["wrapperStyle"]>
): Decoration => ({
  color,
  size,
  style: {
    borderRadius: "999px",
    opacity: 0.9,
    filter: "blur(0px)",
  },
  wrapperStyle,
});

const darkShell: React.CSSProperties = {
  background: tokens.colors.background,
  position: "relative",
  overflow: "hidden",
};

const purpleShell: React.CSSProperties = {
  background: purpleBg,
  position: "relative",
  overflow: "hidden",
};

const glassCard: React.CSSProperties = {
  background: withAlpha("#ffffff", 0.06),
  border: `1px solid ${withAlpha("#ffffff", 0.08)}`,
  borderRadius: 28,
  boxShadow: `0 18px 60px ${withAlpha("#000000", 0.24)}`,
};

export const academicEducation: Template = {
  id: "academic-education",
  name: "Academic Education",
  description:
    "Education-focused dark and violet template derived from the Academic Education reference deck.",

  tokens,

  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "circle",
  },

  slideDefaults: {
    padding: "0",
  },

  elementDefaults: {
    headline: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "slide-up-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 14,
      transitionIn: { id: "slide-up-in", duration: "500ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "stat-number": {
      scale: "display-xl",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "zoom-in-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    image: {
      variant: "rounded",
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "bar-chart": {
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "radial-chart": {
      variant: "pie",
      transitionIn: { id: "zoom-in-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "data-table": {
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "side-accent",
      transitionIn: { id: "slide-right-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "feature-item": {
      variant: "with-left-border",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "slide-up-in", duration: "440ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
  },

  layouts: {
    "academic-hero": {
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
    },

    "academic-agenda": {
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
    },

    "academic-editorial": {
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
    },

    "academic-program-highlight": {
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
    },

    "academic-split-focus": {
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
    },

    "academic-stat-panel": {
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
    },

    "academic-team-grid": {
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
    },

    "academic-data-table": {
      gridTemplateAreas: `"header" "table" "footer"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto",
      areas: {
        header: {
          accepts: ["headline", "subheadline"],
          style: {
            ...darkShell,
            padding: "72px 80px 18px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 12,
          },
          decorations: [
            orb(withAlpha(tokens.colors.surface, 0.9), 420, { top: -220, left: -120 }),
            orb(withAlpha(tokens.colors.surface, 0.76), 280, { top: 30, right: -100 }),
          ],
          elementStyles: {
            headline: {
              scale: "display-lg",
              textAlign: "center",
            },
            subheadline: {
              textAlign: "center",
              style: { maxWidth: 760 },
            },
          },
        },
        table: {
          accepts: ["data-table"],
          maxCount: 1,
          style: {
            ...darkShell,
            padding: "6px 136px 28px 136px",
          },
          elementStyles: {
            "data-table": {
              style: {
                maxHeight: 320,
              },
            },
          },
        },
        footer: {
          accepts: ["body-text", "feature-item"],
          style: {
            ...darkShell,
            padding: "0 80px 72px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          },
          elementStyles: {
            "body-text": {
              textAlign: "center",
              style: { maxWidth: 820 },
            },
            "feature-item": {
              variant: "default",
              color: "primary",
            },
          },
        },
      },
    },

    "academic-performance": {
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
    },

    "academic-closing": {
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
    },
  },
};

export default academicEducation;
