import { getTypeStyle } from "../../../../designSystem";
import type { BulletListContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: BulletListContent;
}

// ─── Stacked Variant (default) ────────────────────────────────────────────────

const Stacked: React.FC<Props & { itemStyle: React.CSSProperties; gap: number; containerStyle?: React.CSSProperties }> = ({
  el,
  itemStyle,
  gap,
  containerStyle,
}) => (
  <ul
    style={{
      margin: "32px 0 0 0",
      padding: "0 0 0 32px",
      display: "flex",
      flexDirection: "column",
      gap,
      listStyleType: "disc",
      ...containerStyle,
    }}
  >
    {el.items.map((item, i) => (
      <li key={i} style={{ ...itemStyle, lineHeight: 1.4 }}>
        {item}
      </li>
    ))}
  </ul>
);

// ─── Columned Variant ─────────────────────────────────────────────────────────
// Items flow into two columns using flex wrap.

const Columned: React.FC<Props & { itemStyle: React.CSSProperties; gap: number; containerStyle?: React.CSSProperties }> = ({
  el,
  itemStyle,
  gap,
  containerStyle,
}) => (
  <div
    style={{
      margin: "32px 0 0 0",
      display: "flex",
      flexWrap: "wrap",
      gap,
      rowGap: gap * 0.75,
      ...containerStyle,
    }}
  >
    {el.items.map((item, i) => (
      <div
        key={i}
        style={{
          width: "calc(50% - 16px)",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <span style={{ ...itemStyle, opacity: 0.5, flexShrink: 0, marginTop: 2 }}>
          ●
        </span>
        <span style={{ ...itemStyle, lineHeight: 1.4 }}>{item}</span>
      </div>
    ))}
  </div>
);

// ─── Numbered Variant ─────────────────────────────────────────────────────────
// Accent-colored counters instead of standard list markers.

const Numbered: React.FC<
  Props & { itemStyle: React.CSSProperties; gap: number; accentColor: string }
  & { containerStyle?: React.CSSProperties }
> = ({ el, itemStyle, gap, accentColor, containerStyle }) => (
  <div
    style={{
      margin: "32px 0 0 0",
      display: "flex",
      flexDirection: "column",
      gap,
      ...containerStyle,
    }}
  >
    {el.items.map((item, i) => (
      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <span
          style={{
            ...getTypeStyle("label"),
            color: accentColor,
            fontWeight: 700,
            minWidth: 28,
            flexShrink: 0,
            marginTop: 3,
          }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <span style={{ ...itemStyle, lineHeight: 1.4 }}>{item}</span>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const BulletList: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("bullet-list");
  const tokens = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const resolvedScale = config.scale ?? "body-lg";
  const resolvedColor = tokens.colors[config.color ?? "secondary"];
  const resolvedFontFamily = tokens.fonts[config.fontFamily ?? "body"];
  const resolvedGap = config.gap ?? 16;

  const itemStyle: React.CSSProperties = {
    ...getTypeStyle(resolvedScale),
    color: resolvedColor,
    fontFamily: resolvedFontFamily,
    ...el.styleOverrides,
  };
  const containerStyle = config.style as React.CSSProperties | undefined;

  const variant = config.variant ?? "stacked";

  let inner: React.ReactElement;
  if (variant === "columned") {
    inner = <Columned el={el} itemStyle={itemStyle} gap={resolvedGap} containerStyle={containerStyle} />;
  } else if (variant === "numbered") {
    inner = (
      <Numbered
        el={el}
        itemStyle={itemStyle}
        gap={resolvedGap}
        accentColor={tokens.colors.accent}
        containerStyle={containerStyle}
      />
    );
  } else {
    inner = <Stacked el={el} itemStyle={itemStyle} gap={resolvedGap} containerStyle={containerStyle} />;
  }

  if (!handleClick) return inner;

  return (
    <div style={{ ...editStyle, display: "contents" }} onClick={handleClick}>
      {inner}
    </div>
  );
};
