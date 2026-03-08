import { getTypeStyle } from "../../../../designSystem";
import type { HeadlineContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: HeadlineContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────

const Default: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => (
  <h1 style={style}>{el.content}</h1>
);

// ─── With-Underline Variant ───────────────────────────────────────────────────

const WithUnderline: React.FC<
  Props & { style: React.CSSProperties; accentColor: string; underlineWidth?: number }
> = ({ el, style, accentColor, underlineWidth }) => (
  <div>
    <h1 style={style}>{el.content}</h1>
    <div
      style={{
        height: 4,
        width: underlineWidth ?? 80,
        backgroundColor: accentColor,
        borderRadius: 2,
        marginTop: 12,
      }}
    />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const Headline: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("headline");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = config.scale ?? "display-lg";
  const resolvedColor = tokens.colors[config.color ?? "primary"];
  const resolvedFontFamily =
    tokens.fonts[config.fontFamily ?? "heading"];

  const baseStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    margin: config.margin ?? 0,
    padding: 0,
    textAlign: config.textAlign ?? "left",
    ...el.styleOverrides,
  };

  const wrapperStyle: React.CSSProperties = {
    ...editStyle,
    display: "contents",
  };

  const variant = config.variant ?? "default";

  const inner =
    variant === "with-underline" ? (
      <WithUnderline
        el={el}
        style={baseStyle}
        accentColor={
          config.underline
            ? tokens.colors[config.underline.color]
            : tokens.colors.accent
        }
        underlineWidth={config.underline?.width}
      />
    ) : (
      <Default el={el} style={baseStyle} />
    );

  if (!handleClick) return inner;

  return (
    <div style={wrapperStyle} onClick={handleClick}>
      {inner}
    </div>
  );
};
