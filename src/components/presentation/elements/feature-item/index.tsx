import { getTypeStyle } from "../../../../designSystem";
import type { FeatureItemContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: FeatureItemContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────
// Title + description stacked vertically, no border decoration.

const Default: React.FC<
  Props & { titleStyle: React.CSSProperties; descStyle: React.CSSProperties }
> = ({ el, titleStyle, descStyle }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <p style={{ ...titleStyle, margin: 0 }}>{el.title}</p>
    <p style={{ ...descStyle, margin: 0 }}>{el.description}</p>
  </div>
);

// ─── With-Top-Border Variant ──────────────────────────────────────────────────
// Accent bar across the top, then title + description.

const WithTopBorder: React.FC<
  Props & {
    titleStyle: React.CSSProperties;
    descStyle: React.CSSProperties;
    accentColor: string;
  }
> = ({ el, titleStyle, descStyle, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderTop: `3px solid ${accentColor}`,
      paddingTop: 16,
    }}
  >
    <p style={{ ...titleStyle, margin: 0 }}>{el.title}</p>
    <p style={{ ...descStyle, margin: 0 }}>{el.description}</p>
  </div>
);

// ─── With-Left-Border Variant ─────────────────────────────────────────────────
// Accent bar on the left, title + description indented.

const WithLeftBorder: React.FC<
  Props & {
    titleStyle: React.CSSProperties;
    descStyle: React.CSSProperties;
    accentColor: string;
  }
> = ({ el, titleStyle, descStyle, accentColor }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderLeft: `4px solid ${accentColor}`,
      paddingLeft: 20,
    }}
  >
    <p style={{ ...titleStyle, margin: 0 }}>{el.title}</p>
    <p style={{ ...descStyle, margin: 0 }}>{el.description}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const FeatureItem: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("feature-item");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedColor = tokens.colors[config.color ?? "primary"];
  const resolvedFontFamily = tokens.fonts[config.fontFamily ?? "heading"];

  const titleStyle: React.CSSProperties = {
    ...getTypeStyle(config.scale ?? "heading-md"),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    fontWeight: 700,
    ...el.styleOverrides,
  };

  const descStyle: React.CSSProperties = {
    ...getTypeStyle("body-md"),
    color: tokens.colors.secondary,
    fontFamily: tokens.fonts.body,
  };

  const variant = config.variant ?? "default";

  let inner: React.ReactElement;
  if (variant === "with-top-border") {
    inner = (
      <WithTopBorder
        el={el}
        titleStyle={titleStyle}
        descStyle={descStyle}
        accentColor={tokens.colors.accent}
      />
    );
  } else if (variant === "with-left-border") {
    inner = (
      <WithLeftBorder
        el={el}
        titleStyle={titleStyle}
        descStyle={descStyle}
        accentColor={tokens.colors.accent}
      />
    );
  } else {
    inner = <Default el={el} titleStyle={titleStyle} descStyle={descStyle} />;
  }

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle, display: "contents" }} onClick={handleClick}>
      {inner}
    </div>
  );
};
