import type { DesignTokens, LayoutTemplate, Decoration } from "../../../schema/template";

const d = ({ style, wrapperStyle, ...rest }: Partial<Decoration> = {}): Decoration => ({
  color: "accent",
  count: 3,
  size: 38,
  gap: 8,
  style: { borderRadius: "6px", ...style },
  ...rest,
  ...(wrapperStyle ? { wrapperStyle } : {}),
});

export const verticalSplitLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"top" "bottom"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  areas: {
    top: {
      accepts: ["headline", "body-text"],
      style: {
        background: tokens.colors.background,
        padding: "60px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      },
      decorations: [d({ wrapperStyle: { top: 40, left: 80 }, size: 36 })],
      elementStyles: {
        headline: { scale: "display-lg", color: "primary" },
      },
    },
    bottom: {
      accepts: ["image"],
      style: {
        background: `linear-gradient(to top, ${tokens.colors.secondary}, ${tokens.colors.background})`,
        padding: "40px 80px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 20,
        alignItems: "stretch",
        position: "relative",
      },
      elementStyles: { image: { variant: "rounded" } },
    },
  },
});
