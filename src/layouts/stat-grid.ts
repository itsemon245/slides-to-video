import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const statGridLayout = (tokens: DesignTokens): LayoutTemplate => ({
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
        // Surface card behind the stat row adds depth against the slide background
        background: tokens.colors.surface,
        borderRadius: 20,
        padding: "48px 64px",
      },
      elementStyles: {
        "stat-number": { scale: "display-xl", color: "accent", variant: "with-glow" },
      },
    },
  },
});
