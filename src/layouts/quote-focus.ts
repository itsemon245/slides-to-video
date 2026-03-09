import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const quoteFocusLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"quote" "attribution"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr auto",
  padding: "120px",
  areas: {
    quote: {
      accepts: ["quote"],
      required: true,
      maxCount: 1,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Accent-tinted glow behind the quote block
        background: `radial-gradient(ellipse at 50% 50%, ${tokens.colors.accent}18 0%, transparent 70%)`,
      },
      elementStyles: {
        quote: { scale: "display-lg", color: "primary", variant: "default" },
      },
    },
    attribution: {
      accepts: ["subheadline"],
      maxCount: 1,
      style: {
        textAlign: "center",
        paddingBottom: 16,
        // Muted divider line above attribution
        borderTop: `1px solid ${tokens.colors.muted}`,
        paddingTop: 24,
      },
      elementStyles: {
        subheadline: { scale: "heading-md", color: "secondary", textAlign: "center" },
      },
    },
  },
});
