import { getTypeStyle } from "../../../../designSystem";
import type { QuoteContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: QuoteContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────
// Centered quote with large decorative quotation marks in accent color.

const Default: React.FC<
  Props & {
    textStyle: React.CSSProperties;
    attributionStyle: React.CSSProperties;
    accentColor: string;
  }
> = ({ el, textStyle, attributionStyle, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: "80%",
    }}
  >
    <span
      style={{
        fontSize: 120,
        lineHeight: 0.6,
        color: accentColor,
        opacity: 0.4,
        fontFamily: "Georgia, serif",
        marginBottom: 24,
        alignSelf: "flex-start",
      }}
    >
      "
    </span>
    <p style={{ ...textStyle, margin: 0 }}>{el.content}</p>
    {el.attribution && (
      <span style={{ ...attributionStyle, marginTop: 24 }}>
        {el.attribution}
      </span>
    )}
  </div>
);

// ─── Side-Accent Variant ──────────────────────────────────────────────────────
// Left-aligned with a 4px accent border on the left side.

const SideAccent: React.FC<
  Props & {
    textStyle: React.CSSProperties;
    attributionStyle: React.CSSProperties;
    accentColor: string;
  }
> = ({ el, textStyle, attributionStyle, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderLeft: `4px solid ${accentColor}`,
      paddingLeft: 32,
    }}
  >
    <p style={{ ...textStyle, margin: 0 }}>{el.content}</p>
    {el.attribution && (
      <span style={{ ...attributionStyle, marginTop: 16 }}>
        {el.attribution}
      </span>
    )}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const Quote: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("quote");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = el.scale ?? config.scale ?? "display-lg";
  const resolvedColor =
    tokens.colors[el.color ?? config.color ?? "primary"];
  const resolvedFontFamily = tokens.fonts[config.fontFamily ?? "heading"];

  const textStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    fontStyle: "italic",
    ...el.styleOverrides,
  };

  const attributionStyle: React.CSSProperties = {
    ...getTypeStyle("body-md"),
    color: tokens.colors.secondary,
    fontFamily: tokens.fonts.body,
  };

  const variant = config.variant ?? "default";

  const inner =
    variant === "side-accent" ? (
      <SideAccent
        el={el}
        textStyle={textStyle}
        attributionStyle={attributionStyle}
        accentColor={tokens.colors.accent}
      />
    ) : (
      <Default
        el={el}
        textStyle={textStyle}
        attributionStyle={attributionStyle}
        accentColor={tokens.colors.accent}
      />
    );

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle, display: "contents" }} onClick={handleClick}>
      {inner}
    </div>
  );
};
