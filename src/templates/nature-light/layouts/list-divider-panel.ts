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

export const listDividerPanelLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"list divider panel"`,
  gridTemplateColumns: "55% 8% 1fr",
  gridTemplateRows: "1fr",
  areas: {
    list: {
      accepts: ["headline", "feature-item"],
      style: {
        background: tokens.colors.surface,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignContent: "start",
        gap: 24,
        padding: "60px 48px",
        position: "relative",
      },
      elementStyles: {
        headline:       { scale: "heading-md", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
        "feature-item": { variant: "with-top-border", color: "background", transitionIn: { id: "slide-right-in" }, transitionOut: { id: "slide-left-out" } },
      },
    },
    divider: {
      accepts: ["image"],
      maxCount: 1,
      style: { overflow: "hidden" },
      elementStyles: { image: { variant: "cover" } },
    },
    panel: {
      accepts: ["headline", "subheadline", "image", "feature-item"],
      style: {
        background: tokens.colors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
        padding: "60px 60px",
        position: "relative",
      },
      decorations: [d({ placement: "bottom-right", wrapperStyle: { bottom: 40, right: 40 } })],
      elementStyles: {
        headline:       { scale: "display-lg", color: "primary",  transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        subheadline:    {                                          transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        image:          { variant: "rounded",                      transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
        "feature-item": {                                          transitionIn: { id: "slide-left-in" }, transitionOut: { id: "slide-right-out" } },
      },
    },
  },
});
