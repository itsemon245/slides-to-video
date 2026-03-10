import { Img } from "remotion";
import type { ImageContent } from "../../../../schema/content";
import {
  useElementConfig,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: ImageContent;
}

// ─── Cover Variant (default) ──────────────────────────────────────────────────

const Cover: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => (
  <Img
    src={el.src}
    alt={el.alt}
    style={{ ...style, objectFit: "cover" }}
  />
);

// ─── Contained Variant ────────────────────────────────────────────────────────

const Contained: React.FC<Props & { style: React.CSSProperties }> = ({
  el,
  style,
}) => (
  <Img
    src={el.src}
    alt={el.alt}
    style={{ ...style, objectFit: "contain", padding: 16 }}
  />
);

// ─── Rounded Variant ──────────────────────────────────────────────────────────

const Rounded: React.FC<Props & { style: React.CSSProperties; radius: number }> = ({
  el,
  style,
  radius,
}) => (
  <Img
    src={el.src}
    alt={el.alt}
    style={{ ...style, objectFit: "cover", borderRadius: radius, overflow: "hidden" }}
  />
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const ImageElement: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("image");
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const overrides = el.styleOverrides;

  const baseStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectPosition: overrides?.objectPosition ?? "center",
    opacity: overrides?.opacity ?? 1,
    boxShadow: overrides?.boxShadow,
    ...(config.style as React.CSSProperties | undefined),
    borderRadius: overrides?.borderRadius,
  };

  const variant =
    overrides?.objectFit === "contain"
      ? "contained"
      : config.variant ?? "cover";

  let inner: React.ReactElement;
  if (variant === "contained") {
    inner = <Contained el={el} style={baseStyle} />;
  } else if (variant === "rounded") {
    inner = (
      <Rounded el={el} style={baseStyle} radius={overrides?.borderRadius ?? 24} />
    );
  } else {
    inner = <Cover el={el} style={baseStyle} />;
  }

  if (!handleClick) return inner;

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%", ...editStyle }}
      onClick={handleClick}
    >
      {inner}
    </div>
  );
};
