import { getTypeStyle, glowShadow } from "../../../../designSystem";
import type { StatNumberContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: StatNumberContent;
}

// ─── Default Variant ──────────────────────────────────────────────────────────

const Default: React.FC<
  Props & {
    valueStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
  }
> = ({ el, valueStyle, labelStyle, wrapperStyle }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      ...wrapperStyle,
    }}
  >
    <span style={valueStyle}>{el.content}</span>
    <span style={labelStyle}>{el.label}</span>
  </div>
);

// ─── With-Glow Variant ────────────────────────────────────────────────────────
// Adds a glow shadow effect on the value using the accent color.

const WithGlow: React.FC<
  Props & {
    valueStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    accentColor: string;
    wrapperStyle?: React.CSSProperties;
  }
> = ({ el, valueStyle, labelStyle, accentColor, wrapperStyle }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      ...wrapperStyle,
    }}
  >
    <span
      style={{
        ...valueStyle,
        textShadow: glowShadow(accentColor, 0.6),
      }}
    >
      {el.content}
    </span>
    <span style={labelStyle}>{el.label}</span>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const StatNumber: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("stat-number");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = el.scale ?? config.scale ?? "display-xl";
  const isAccent = el.accent ?? false;
  const resolvedValueColor = isAccent ? tokens.colors.accent : tokens.colors.primary;

  const valueStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedValueColor,
    fontFamily: tokens.fonts[config.fontFamily ?? "heading"],
    ...el.styleOverrides,
  };

  const labelStyle: React.CSSProperties = {
    ...getTypeStyle("body-md"),
    color: tokens.colors.secondary,
    textAlign: "center",
    maxWidth: 280,
    fontFamily: tokens.fonts.body,
  };

  const variant = config.variant ?? "default";
  const wrapperStyle = config.style as React.CSSProperties | undefined;

  const inner =
    variant === "with-glow" ? (
      <WithGlow
        el={el}
        valueStyle={valueStyle}
        labelStyle={labelStyle}
        accentColor={tokens.colors.accent}
        wrapperStyle={wrapperStyle}
      />
    ) : (
      <Default
        el={el}
        valueStyle={valueStyle}
        labelStyle={labelStyle}
        wrapperStyle={wrapperStyle}
      />
    );

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle }} onClick={handleClick}>
      {inner}
    </div>
  );
};
