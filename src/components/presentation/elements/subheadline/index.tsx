import { getTypeStyle } from "../../../../designSystem";
import type { SubheadlineContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: SubheadlineContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────

const Default: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => <h2 style={style}>{el.content}</h2>;

// ─── Overline Variant ─────────────────────────────────────────────────────────
// Renders a small uppercase label above the subheadline text.
// Useful as a section tag or category indicator.

const Overline: React.FC<
  Props & { style: React.CSSProperties; accentColor: string }
> = ({ el, style, accentColor }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <span
      style={{
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: accentColor,
      }}
    >
      {el.content}
    </span>
    <h2 style={style}>{el.content}</h2>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const Subheadline: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("subheadline");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = config.scale ?? "heading-md";
  const resolvedColor = tokens.colors[config.color ?? "secondary"];
  const resolvedFontFamily = tokens.fonts[config.fontFamily ?? "heading"];

  const baseStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    margin: config.margin ?? "16px 0 0 0",
    padding: 0,
    textAlign: config.textAlign ?? "left",
    ...(config.style as React.CSSProperties | undefined),
    ...el.styleOverrides,
  };

  const variant = config.variant ?? "default";

  const inner =
    variant === "overline" ? (
      <Overline
        el={el}
        style={baseStyle}
        accentColor={tokens.colors.accent}
      />
    ) : (
      <Default el={el} style={baseStyle} />
    );

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle, display: "contents" }} onClick={handleClick}>
      {inner}
    </div>
  );
};
