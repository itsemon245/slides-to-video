import type { DesignTokens, LayoutTemplate } from "../../../schema/template";

/**
 * Two-column layout: left headline + body text, right feature-items list.
 * Matches the "Key Takeaways" reference slide.
 */
export const takeawayListLayout = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"left right"`,
  gridTemplateColumns: "1.1fr 0.9fr",
  gridTemplateRows: "1fr",
  gap: 0,

  areas: {
    left: {
      accepts: ["headline", "subheadline", "body-text", "bullet-list"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 64px 100px 84px",
        gap: 24,
      },
      elementStyles: {
        headline: {
          scale: "display-lg",
          color: "primary",
          fontFamily: "heading",
          textAlign: "left",
          decorations: [
            {
              color: "accent",
              count: 1,
              size: 18,
              style: {
                transform: "rotate(45deg)",
                borderRadius: 2,
              },
              wrapperStyle: {
                marginBottom: 8,
              },
            },
          ],
        },
        "body-text": {
          scale: "body-lg",
          color: "secondary",
          fontFamily: "body",
          textAlign: "left",
          style: {
            lineHeight: 1.7,
          },
        },
      },
    },
    right: {
      accepts: ["feature-item"],
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "50px 64px 100px 48px",
        gap: 0,
      },
      separator: {
        height: 1,
        color: "muted",
        marginBlock: 0,
      },
      elementStyles: {
        "feature-item": {
          variant: "with-bullet",
          color: "primary",
          fontFamily: "body",
          style: {
            padding: "24px 0",
          },
          valueStyle: {
            fontWeight: 700,
            fontSize: 20,
          },
          labelStyle: {
            color: tokens.colors.secondary,
            fontSize: 16,
            lineHeight: 1.5,
            marginTop: 4,
          },
        },
      },
    },
  },

  decorations: [
    // Footer line
    {
      color: "muted",
      count: 1,
      style: {
        width: "85%",
        height: 2,
        background: tokens.colors.secondary,
        borderRadius: 1,
      },
      wrapperStyle: {
        position: "absolute",
        bottom: 40,
        left: "7%",
        right: "7%",
        display: "flex",
        justifyContent: "center",
      },
    },
    // Footer diamond
    {
      color: "accent",
      count: 1,
      size: 28,
      style: {
        transform: "rotate(45deg)",
        borderRadius: 3,
      },
      wrapperStyle: {
        position: "absolute",
        bottom: 26,
        right: 64,
      },
    },
  ],
});
