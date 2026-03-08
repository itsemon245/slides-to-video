import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const fullBleedImageLayout = (tokens: DesignTokens): LayoutTemplate => ({
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
        background: `linear-gradient(to top, ${tokens.colors.background}f2 0%, transparent 100%)`,
      },
      elementStyles: {
        headline:    { scale: "display-lg", color: "primary" },
        "body-text": { scale: "body-lg",    color: "secondary" },
      },
    },
  },
});
