import { getTypeStyle } from "../../../../designSystem";
import type { BodyTextContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: BodyTextContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────

const Default: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => <p style={style}>{el.content}</p>;

// ─── Lead Variant ─────────────────────────────────────────────────────────────
// Slightly larger weight — for intro/summary paragraphs.

const Lead: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => (
  <p style={{ ...style, fontWeight: 500 }}>{el.content}</p>
);

// ─── Callout Variant ──────────────────────────────────────────────────────────
// Left accent border + surface background — for highlighted notes or quotes.

const Callout: React.FC<
  Props & { style: React.CSSProperties; accentColor: string; surfaceColor: string }
> = ({ el, style, accentColor, surfaceColor }) => (
  <div
    style={{
      borderLeft: `4px solid ${accentColor}`,
      backgroundColor: surfaceColor,
      padding: "16px 20px",
      borderRadius: "0 8px 8px 0",
    }}
  >
    <p style={{ ...style, margin: 0 }}>{el.content}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const BodyText: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("body-text");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = config.scale ?? "body-lg";
  const resolvedColor = tokens.colors[config.color ?? "secondary"];
  const resolvedFontFamily = tokens.fonts[config.fontFamily ?? "body"];

  const baseStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    margin: config.margin ?? "24px 0 0 0",
    textAlign: config.textAlign ?? "left",
    ...el.styleOverrides,
  };

  const variant = config.variant ?? "default";

  let inner: React.ReactElement;
  if (variant === "lead") {
    inner = <Lead el={el} style={baseStyle} />;
  } else if (variant === "callout") {
    inner = (
      <Callout
        el={el}
        style={baseStyle}
        accentColor={tokens.colors.accent}
        surfaceColor={tokens.colors.surface}
      />
    );
  } else {
    inner = <Default el={el} style={baseStyle} />;
  }

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle, display: "contents" }} onClick={handleClick}>
      {inner}
    </div>
  );
};
