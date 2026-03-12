import type React from "react";
import type { Decoration, Template } from "../schema/template";
import { withAlpha } from "../designSystem";
import { createDefaultLayouts } from "../layouts";

type AreaConfig = Template["layouts"][string]["areas"][string];

const tokens: Template["tokens"] = {
  colors: {
    background: "#F7F7FA",
    surface: "#ECECF3",
    primary: "#1E2333",
    secondary: "#6E7385",
    accent: "#8B3DFF",
    muted: "#D7D9E4",
  },
  fonts: {
    heading: "Manrope, sans-serif",
    body: "DM Sans, sans-serif",
  },
};

const shell: React.CSSProperties = {
  background: tokens.colors.background,
  position: "relative",
  overflow: "hidden",
};

const card: React.CSSProperties = {
  background: "#FFFFFF",
  border: `1px solid ${withAlpha("#1E2333", 0.08)}`,
  borderRadius: 28,
  boxShadow: `0 20px 54px ${withAlpha("#1E2333", 0.08)}`,
};

const softPanel: React.CSSProperties = {
  background: `linear-gradient(180deg, #FFFFFF 0%, ${withAlpha(tokens.colors.accent, 0.035)} 100%)`,
  border: `1px solid ${withAlpha(tokens.colors.accent, 0.1)}`,
  borderRadius: 28,
  boxShadow: `0 22px 56px ${withAlpha("#1E2333", 0.08)}`,
};

const defaultLayouts = createDefaultLayouts(tokens);

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
  },
  wrapperStyle,
});

const shellStyle = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...shell,
  padding,
  ...extra,
});

const stackStyle = (
  padding: string,
  gap: number,
  extra: React.CSSProperties = {}
): React.CSSProperties =>
  shellStyle(padding, {
    display: "flex",
    flexDirection: "column",
    gap,
    ...extra,
  });

const cardBox = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...card,
  padding,
  ...extra,
});

const softBox = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...softPanel,
  padding,
  ...extra,
});

const accentEyebrow = (
  extra: React.CSSProperties = {}
) => ({
  color: "accent" as const,
  style: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    ...extra,
  },
});

const teamMemberArea = (padding: string): AreaConfig => ({
  accepts: ["image", "subheadline", "body-text"],
  style: stackStyle(padding, 14, {
    alignItems: "center",
  }),
  elementStyles: {
    image: { style: { ...card, borderRadius: 24 } },
    subheadline: {
      scale: "body-lg",
      color: "primary",
      textAlign: "center",
      style: { fontWeight: 700 },
    },
    "body-text": {
      scale: "caption",
      textAlign: "center",
      style: { maxWidth: 220 },
    },
  },
});

export const newGeneral: Template = {
  id: "new-general",
  name: "New General",
  description:
    "Minimal business presentation template with white surfaces, violet accents, and dashboard-style layouts.",

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
      transitionIn: { id: "slide-up-in", duration: "460ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 14,
      transitionIn: { id: "slide-up-in", duration: "480ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "stat-number": {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "zoom-in-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    image: {
      variant: "rounded",
      transitionIn: { id: "fade-in", duration: "620ms" },
      transitionOut: { id: "fade-out", duration: "300ms" },
    },
    "bar-chart": {
      transitionIn: { id: "fade-in", duration: "620ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "radial-chart": {
      variant: "pie",
      transitionIn: { id: "zoom-in-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "data-table": {
      transitionIn: { id: "fade-in", duration: "620ms" },
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
      variant: "default",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "slide-up-in", duration: "440ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
  },

  layouts: {
    ...defaultLayouts,
    "new-general-title": {
      gridTemplateAreas: `"hero note"`,
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
      areas: {
        hero: {
          accepts: ["headline", "subheadline", "body-text"],
          style: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          elementStyles: {
            headline: {
              scale: "display-xl",
              style: {
                maxWidth: 560,
                fontSize: 84,
                lineHeight: 0.95,
              },
            },
            subheadline: {
              scale: "heading-md",
            },
            "body-text": {
              style: {
                maxWidth: 520,
              },
            },
          },
        },
        note: {
          accepts: ["headline", "subheadline", "body-text", "feature-item"],
          style: shellStyle("92px 80px 92px 20px", {
            display: "flex",
            alignItems: "center",
          }),
          elementStyles: {
            headline: {
              scale: "heading-md",
              style: softBox("34px 36px 0 36px", { minHeight: 260 }),
            },
            subheadline: {
              color: "accent",
              style: softBox("34px 36px 0 36px", { minHeight: 260 }),
            },
            "body-text": {
              style: softBox("76px 36px 34px 36px", { minHeight: 260 }),
            },
            "feature-item": {
              style: softBox("28px 32px"),
            },
          },
          decorations: [
            {
              color: "accent",
              wrapperStyle: { top: 124, left: 44, zIndex: 2 },
              style: { width: 56, height: 4, borderRadius: 999 },
            },
          ],
        },
      },
    },

    "new-general-insights-grid": {
      gridTemplateAreas: `"header" "grid"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        header: {
          accepts: ["headline", "subheadline", "body-text"],
          style: stackStyle("68px 84px 10px 84px", 10),
          elementStyles: {
            headline: {
              scale: "display-lg",
            },
            subheadline: {
              color: "accent",
            },
            "body-text": {
              style: { maxWidth: 860 },
            },
          },
        },
        grid: {
          accepts: ["feature-item"],
          style: {
            ...shell,
            padding: "10px 84px 72px 84px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            alignContent: "center",
          },
          elementStyles: {
            "feature-item": {
              variant: "default",
              style: { minHeight: 120 },
              color: "accent",
            },
          },
        },
      },
    },

    "new-general-funnel-metrics": {
      gridTemplateAreas: `"lead bars"`,
      gridTemplateColumns: "0.72fr 1.28fr",
      gridTemplateRows: "1fr",
      areas: {
        lead: {
          accepts: ["headline", "stat-number", "body-text"],
          style: {
            ...shell,
            padding: "80px 18px 72px 84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          },
          elementStyles: {
            headline: { scale: "display-lg" },
            "stat-number": { style: { alignItems: "flex-start" } },
            "body-text": { scale: "body-md" },
          },
        },
        bars: {
          accepts: ["feature-item"],
          style: shellStyle("110px 84px 72px 18px", {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 14,
            alignContent: "center",
          }),
          elementStyles: {
            "feature-item": {
              style: softBox("18px 22px"),
              color: "primary",
            },
          },
        },
      },
    },

    "new-general-agenda": {
      gridTemplateAreas: `"intro agenda"`,
      gridTemplateColumns: "0.88fr 1.12fr",
      gridTemplateRows: "1fr",
      areas: {
        intro: {
          accepts: ["headline", "subheadline", "body-text"],
          style: stackStyle("86px 32px 72px 78px", 18, {
            justifyContent: "center",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
              style: { maxWidth: 360, lineHeight: 0.96 },
            },
            subheadline: accentEyebrow({ fontSize: 20 }),
            "body-text": {
              style: { maxWidth: 360 },
            },
          },
        },
        agenda: {
          accepts: ["bullet-list", "feature-item", "headline", "body-text"],
          style: {
            ...shell,
            padding: "84px 84px 72px 20px",
            display: "flex",
            alignItems: "center",
          },
          elementStyles: {
            "bullet-list": {
              style: cardBox("36px 40px", { minWidth: 720 }),
              color: "primary",
              gap: 18,
            },
            "feature-item": {
              variant: "with-top-border",
              style: cardBox("26px 28px"),
            },
            headline: {
              scale: "heading-md",
            },
          },
          decorations: [
            orb(withAlpha(tokens.colors.accent, 0.06), 360, { top: -110, right: -100 }),
          ],
        },
      },
    },

    "new-general-dashboard": {
      gridTemplateAreas: `"story visuals"`,
      gridTemplateColumns: "0.82fr 1.18fr",
      gridTemplateRows: "1fr",
      areas: {
        story: {
          accepts: ["headline", "subheadline", "body-text", "stat-number", "feature-item"],
          style: stackStyle("82px 28px 70px 78px", 22, {
            justifyContent: "center",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
              style: { maxWidth: 360, lineHeight: 0.96 },
            },
            subheadline: accentEyebrow({ fontSize: 20, letterSpacing: "0", textTransform: "none" }),
            "body-text": {
              style: { maxWidth: 380 },
            },
            "stat-number": {
              scale: "display-lg",
              style: {
                alignItems: "flex-start",
                paddingTop: 10,
              },
            },
            "feature-item": {
              variant: "with-left-border",
            },
          },
        },
        visuals: {
          accepts: ["bar-chart", "radial-chart", "data-table", "headline", "body-text"],
          style: {
            ...shell,
            padding: "72px 82px 68px 18px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 20,
            alignItems: "stretch",
          },
          elementStyles: {
            "bar-chart": {
              style: cardBox("28px 30px"),
            },
            "radial-chart": {
              style: cardBox("28px 30px"),
            },
            "data-table": {
              style: cardBox("28px 30px", { gridColumn: "1 / -1" }),
            },
            headline: {
              scale: "heading-md",
            },
          },
        },
      },
    },

    "new-general-timeline": {
      gridTemplateAreas: `"header" "steps"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        header: {
          accepts: ["headline", "body-text"],
          style: stackStyle("72px 84px 14px 84px", 14, {
            alignItems: "center",
            textAlign: "center",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
              textAlign: "center",
            },
            "body-text": {
              textAlign: "center",
              style: { maxWidth: 860 },
            },
          },
        },
        steps: {
          accepts: ["feature-item", "headline", "body-text"],
          style: {
            ...shell,
            padding: "18px 84px 74px 84px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 18,
            alignItems: "start",
          },
          elementStyles: {
            "feature-item": {
              variant: "with-top-border",
              style: cardBox("28px", { minHeight: 220 }),
            },
            headline: {
              scale: "heading-md",
            },
          },
          decorations: [
            {
              color: withAlpha(tokens.colors.accent, 0.35),
              wrapperStyle: { top: 120, left: 130, right: 130, zIndex: 0 },
              style: { width: "calc(100% - 260px)", height: 2, borderRadius: 999 },
            },
          ],
        },
      },
    },

    "new-general-team-grid": {
      gridTemplateAreas: `"header header header header" "memberA memberB memberC memberD"`,
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        header: {
          accepts: ["headline", "subheadline", "body-text"],
          style: stackStyle("62px 84px 14px 84px", 10, {
            alignItems: "center",
            textAlign: "center",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
              textAlign: "center",
            },
            subheadline: {
              ...accentEyebrow({ textAlign: "center", textTransform: "none", letterSpacing: "0" }),
            },
            "body-text": {
              textAlign: "center",
              style: { maxWidth: 860 },
            },
          },
        },
        memberA: teamMemberArea("14px 10px 72px 78px"),
        memberB: teamMemberArea("14px 10px 72px 10px"),
        memberC: teamMemberArea("14px 10px 72px 10px"),
        memberD: teamMemberArea("14px 78px 72px 10px"),
      },
    },

    "new-general-quote-image": {
      gridTemplateAreas: `"quote image"`,
      gridTemplateColumns: "0.92fr 1.08fr",
      gridTemplateRows: "1fr",
      areas: {
        quote: {
          accepts: ["headline", "quote", "body-text"],
          style: {
            ...shell,
            padding: "82px 24px 72px 78px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 22,
          },
          elementStyles: {
            headline: {
              scale: "heading-md",
              color: "accent",
            },
            quote: {
              variant: "side-accent",
              style: { maxWidth: 460 },
            },
            "body-text": {
              style: { maxWidth: 430 },
            },
          },
        },
        image: {
          accepts: ["image", "headline", "body-text"],
          style: {
            ...shell,
            padding: "72px 82px 72px 12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          },
          elementStyles: {
            image: {
              variant: "rounded",
              style: {
                ...card,
                minHeight: 520,
              },
            },
            headline: {
              scale: "heading-md",
            },
            "body-text": {
              scale: "body-md",
            },
          },
          decorations: [
            orb(withAlpha(tokens.colors.accent, 0.07), 300, { bottom: -80, right: -70 }),
          ],
        },
      },
    },

    "new-general-full-bleed-quote": {
      gridTemplateAreas: `"background"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      areas: {
        background: {
          accepts: ["image", "headline", "quote", "body-text"],
          style: {
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
            padding: "86px 120px",
            background: "#10131B",
          },
          gradientOverlay: {
            direction: "to right",
            from: withAlpha("#10131B", 0.74),
            to: withAlpha("#10131B", 0.28),
          },
          elementStyles: {
            image: {
              variant: "cover",
            },
            headline: {
              scale: "heading-md",
              color: "primary",
              style: { color: "#FFFFFF", maxWidth: 620 },
            },
            quote: {
              variant: "default",
              color: "primary",
              style: { maxWidth: 760, color: "#FFFFFF" },
            },
            "body-text": {
              color: "primary",
              style: { maxWidth: 680, color: withAlpha("#FFFFFF", 0.82) },
            },
          },
        },
      },
    },

    "new-general-summary-split": {
      gridTemplateAreas: `"summary metrics"`,
      gridTemplateColumns: "1.04fr 0.96fr",
      gridTemplateRows: "1fr",
      areas: {
        summary: {
          accepts: ["headline", "subheadline", "body-text", "bullet-list"],
          style: stackStyle("78px 26px 70px 78px", 18, {
            justifyContent: "center",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
              style: { maxWidth: 560, lineHeight: 0.96 },
            },
            subheadline: accentEyebrow(),
            "body-text": {
              style: { maxWidth: 560 },
            },
            "bullet-list": {
              style: cardBox("28px 32px", { maxWidth: 620 }),
              color: "primary",
            },
          },
        },
        metrics: {
          accepts: ["stat-number"],
          style: {
            ...shell,
            padding: "78px 82px 70px 20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            alignContent: "center",
          },
          elementStyles: {
            "stat-number": {
              style: softBox("26px 28px", {
                alignItems: "flex-start",
                minHeight: 160,
              }),
              scale: "display-lg",
            },
          },
        },
      },
    },

    "new-general-table-focus": {
      gridTemplateAreas: `"header" "table"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        header: {
          accepts: ["headline", "subheadline", "body-text"],
          style: stackStyle("68px 84px 18px 84px", 10),
          elementStyles: {
            headline: {
              scale: "display-lg",
            },
            subheadline: accentEyebrow(),
            "body-text": {
              style: { maxWidth: 840 },
            },
          },
        },
        table: {
          accepts: ["data-table", "headline", "body-text"],
          style: {
            ...shell,
            padding: "12px 84px 74px 84px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
          elementStyles: {
            "data-table": {
              style: cardBox("28px 32px"),
            },
          },
        },
      },
    },

    "new-general-chart-sidebar": {
      gridTemplateAreas: `"chart sidebar"`,
      gridTemplateColumns: "1.08fr 0.92fr",
      gridTemplateRows: "1fr",
      areas: {
        chart: {
          accepts: ["headline", "subheadline", "body-text", "stat-number", "bar-chart", "image"],
          style: {
            ...shell,
            padding: "74px 18px 70px 78px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          },
          elementStyles: {
            headline: {
              scale: "display-lg",
            },
            subheadline: accentEyebrow({ textTransform: "none", letterSpacing: "0" }),
            "body-text": {
              style: { maxWidth: 420 },
            },
            "stat-number": {
              style: { alignItems: "flex-start" },
            },
            "bar-chart": {
              style: cardBox("28px 30px"),
            },
            image: {
              style: { ...card, minHeight: 420 },
            },
          },
        },
        sidebar: {
          accepts: ["feature-item", "headline", "body-text", "stat-number", "image"],
          style: {
            ...shell,
            padding: "98px 82px 70px 18px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            alignContent: "center",
          },
          elementStyles: {
            "feature-item": {
              style: softBox("22px 24px"),
              variant: "default",
            },
            "stat-number": {
              style: softBox("22px 24px", { alignItems: "flex-start" }),
              scale: "display-lg",
            },
            image: {
              style: { ...card, minHeight: 320 },
            },
          },
        },
      },
    },

    "new-general-validation-grid": {
      gridTemplateAreas: `"intro intro" "points media"`,
      gridTemplateColumns: "1.05fr 0.95fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        intro: {
          accepts: ["headline", "subheadline", "body-text"],
          style: stackStyle("68px 84px 14px 84px", 10),
          elementStyles: {
            subheadline: {
              color: "accent",
            },
            headline: {
              scale: "display-lg",
            },
            "body-text": {
              style: { maxWidth: 820 },
            },
          },
        },
        points: {
          accepts: ["feature-item"],
          style: {
            ...shell,
            padding: "10px 18px 72px 84px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            alignContent: "center",
          },
          elementStyles: {
            "feature-item": {
              variant: "with-top-border",
              style: cardBox("24px 24px", { minHeight: 170 }),
            },
          },
        },
        media: {
          accepts: ["image", "body-text"],
          style: {
            ...shell,
            padding: "10px 82px 72px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          },
          elementStyles: {
            image: {
              style: { ...card, minHeight: 330 },
            },
            "body-text": {
              style: softBox("22px 24px"),
            },
          },
        },
      },
    },

    "new-general-thank-you": {
      gridTemplateAreas: `"copy" "placeholder"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      areas: {
        copy: {
          accepts: ["headline", "body-text", "subheadline"],
          style: shellStyle("72px 84px 22px 84px", {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 18,
            alignItems: "start",
          }),
          elementStyles: {
            headline: {
              scale: "display-lg",
            },
            subheadline: {
              color: "accent",
              textAlign: "right",
            },
            "body-text": {
              style: { maxWidth: 760 },
            },
          },
        },
        placeholder: {
          accepts: ["image"],
          maxCount: 1,
          style: {
            ...shell,
            padding: "0 84px 74px 84px",
            display: "flex",
            alignItems: "stretch",
          },
          elementStyles: {
            image: {
              variant: "cover",
              style: {
                background: "#2F3441",
                borderRadius: 12,
                minHeight: 360,
              },
            },
          },
        },
      },
    },
  },
};

export default newGeneral;
