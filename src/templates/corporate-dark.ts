import type { Template } from "../schema/template";

export const corporateDark: Template = {
  id: "corporate-dark",
  name: "Corporate Dark",
  description: "Dark professional theme with blue accent. Supports all 6 layouts.",

  tokens: {
    colors: {
      background: "#0a0e1a",
      surface:    "#131929",
      primary:    "#f0f4ff",
      secondary:  "#8899cc",
      accent:     "#4f8eff",
      muted:      "#3a4466",
    },
    fonts: {
      heading: "Inter, sans-serif",
      body:    "Inter, sans-serif",
    },
  },

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
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
    },
    "bullet-list": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      gap: 16,
      variant: "stacked",
    },
    "stat-number": {
      scale: "display-xl",
      color: "accent",
      fontFamily: "heading",
      variant: "with-glow",
    },
    image: {
      variant: "cover",
    },
    "bar-chart": {},
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "default",
    },
  },

  layouts: {
    // ── Title Center ────────────────────────────────────────────────────────
    "title-center": {
      gridTemplateAreas: `"header" "subtext"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto",
      padding: "120px",
      areas: {
        header: {
          accepts: ["headline"],
          required: true,
          maxCount: 1,
          containerStyle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          },
          elementStyles: {
            headline: {
              scale: "display-xl",
              color: "primary",
              textAlign: "center",
              variant: "with-underline",
              underline: { height: 4, color: "accent", marginTop: 16, width: 80 },
            },
          },
        },
        subtext: {
          accepts: ["subheadline", "body-text"],
          maxCount: 2,
          containerStyle: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 24,
          },
          elementStyles: {
            subheadline: { scale: "heading-md", color: "secondary", textAlign: "center" },
            "body-text":  { scale: "body-lg",   color: "secondary", textAlign: "center" },
          },
        },
      },
    },

    // ── Bullet with Image ───────────────────────────────────────────────────
    "bullet-with-image": {
      gridTemplateAreas: `"text image"`,
      gridTemplateColumns: "1fr 45%",
      gridTemplateRows: "1fr",
      areas: {
        text: {
          accepts: ["headline", "subheadline", "bullet-list", "body-text"],
          required: true,
          containerStyle: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 60px 80px 100px",
          },
          elementStyles: {
            headline:     { scale: "display-lg", color: "primary" },
            subheadline:  { scale: "heading-md", color: "secondary" },
            "bullet-list":{ scale: "body-lg",    color: "secondary", variant: "stacked" },
            "body-text":  { scale: "body-lg",    color: "secondary" },
          },
        },
        image: {
          accepts: ["image"],
          maxCount: 1,
          containerStyle: {
            position: "relative",
            overflow: "hidden",
          },
          gradientOverlay: {
            direction: "to right",
            from: "#0a0e1a",
            to: "transparent",
          },
          elementStyles: {
            image: { variant: "cover" },
          },
        },
      },
    },

    // ── Bullet with Graph ───────────────────────────────────────────────────
    "bullet-with-graph": {
      gridTemplateAreas: `"text graph"`,
      gridTemplateColumns: "1fr 46%",
      gridTemplateRows: "1fr",
      areas: {
        text: {
          accepts: ["headline", "subheadline", "bullet-list", "body-text"],
          required: true,
          containerStyle: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 60px 80px 100px",
          },
          elementStyles: {
            headline:     { scale: "display-lg", color: "primary" },
            subheadline:  { scale: "heading-md", color: "secondary" },
            "bullet-list":{ scale: "body-lg",    color: "secondary", variant: "stacked" },
            "body-text":  { scale: "body-lg",    color: "secondary" },
          },
        },
        graph: {
          accepts: ["bar-chart"],
          required: true,
          maxCount: 1,
          containerStyle: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px 60px 24px",
          },
        },
      },
    },

    // ── Stat Grid ───────────────────────────────────────────────────────────
    "stat-grid": {
      gridTemplateAreas: `"header" "stats"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr",
      padding: "80px 120px",
      areas: {
        header: {
          accepts: ["headline"],
          required: true,
          maxCount: 1,
          containerStyle: {
            textAlign: "center",
          },
          separator: {
            height: 3,
            color: "accent",
            width: 80,
            marginBlock: 32,
          },
          elementStyles: {
            headline: { scale: "display-lg", color: "primary", textAlign: "center" },
          },
        },
        stats: {
          accepts: ["stat-number"],
          required: true,
          maxCount: 4,
          containerStyle: {
            display: "flex",
            flexDirection: "row",
            gap: 80,
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
          },
          elementStyles: {
            "stat-number": { scale: "display-xl", color: "accent", variant: "with-glow" },
          },
        },
      },
    },

    // ── Quote Focus ─────────────────────────────────────────────────────────
    "quote-focus": {
      gridTemplateAreas: `"quote" "attribution"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr auto",
      padding: "120px",
      areas: {
        quote: {
          accepts: ["quote"],
          required: true,
          maxCount: 1,
          containerStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          elementStyles: {
            quote: { scale: "display-lg", color: "primary", variant: "default" },
          },
        },
        attribution: {
          accepts: ["subheadline"],
          maxCount: 1,
          containerStyle: {
            textAlign: "center",
            paddingBottom: 16,
          },
          elementStyles: {
            subheadline: { scale: "heading-md", color: "secondary", textAlign: "center" },
          },
        },
      },
    },

    // ── Full Bleed Image ────────────────────────────────────────────────────
    "full-bleed-image": {
      gridTemplateAreas: `"background" "overlay"`,
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      areas: {
        background: {
          accepts: ["image"],
          maxCount: 1,
          containerStyle: {
            position: "absolute",
            inset: 0,
            zIndex: 0,
          },
          elementStyles: {
            image: { variant: "cover" },
          },
        },
        overlay: {
          accepts: ["headline", "body-text"],
          containerStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "80px 100px",
            background: "linear-gradient(to top, rgba(10,14,26,0.95) 0%, transparent 100%)",
          },
          elementStyles: {
            headline:    { scale: "display-lg", color: "primary" },
            "body-text": { scale: "body-lg",    color: "secondary" },
          },
        },
      },
    },
  },
};
