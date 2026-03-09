import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const titleCenterLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "subtext"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  padding: "120px",
  areas: {
    header: {
      accepts: ["headline"],
      required: true,
      maxCount: 1,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        // Subtle vertical gradient fades in from transparent to surface
        background: `linear-gradient(to bottom, transparent 0%, ${tokens.colors.surface}33 100%)`,
        borderRadius: 16,
        padding: "48px 80px 40px",
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
      style: {
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
});
