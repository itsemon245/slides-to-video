import React from "react";
import { Decoration, DesignTokens } from "../../schema/template";

type DecorationRendererProps = {
  decorations?: Decoration[];
  parentTokens: DesignTokens;
};

function resolvePlacement(placement?: string): React.CSSProperties {
  switch (placement) {
    case "top-left":      return { top: 0, left: 0 };
    case "top-center":    return { top: 0, left: "50%", transform: "translateX(-50%)" };
    case "top-right":     return { top: 0, right: 0 };
    case "center-left":   return { top: "50%", left: 0, transform: "translateY(-50%)" };
    case "center":        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    case "center-right":  return { top: "50%", right: 0, transform: "translateY(-50%)" };
    case "bottom-left":   return { bottom: 0, left: 0 };
    case "bottom-center": return { bottom: 0, left: "50%", transform: "translateX(-50%)" };
    case "bottom-right":  return { bottom: 0, right: 0 };
    default:              return {};
  }
}

export const DecorationRenderer: React.FC<DecorationRendererProps> = ({
  decorations,
  parentTokens,
}) => {
  if (!decorations || decorations.length === 0) return null;

  return (
    <>
      {decorations.map((decoration, index) => {
        const {
          color,
          placement,
          size,
          count = 1,
          gap,
          direction = "row",
          style,
          className,
          wrapperStyle,
          wrapperClassName,
        } = decoration;

        const resolvedColor =
          color && parentTokens.colors[color as keyof typeof parentTokens.colors]
            ? parentTokens.colors[color as keyof typeof parentTokens.colors]
            : color;

        const wrapperStyles: React.CSSProperties = {
          position: "absolute",
          ...resolvePlacement(placement),  // default coordinates from shorthand
          display: "flex",
          flexDirection: direction,
          gap,
          pointerEvents: "none",
          zIndex: 0,
          ...wrapperStyle,                 // explicit wrapperStyle overrides placement defaults
        };

        const itemStyles: React.CSSProperties = {
          width: size,
          height: size,
          backgroundColor: resolvedColor,
          ...style,                        // style can override width/height/opacity/etc.
        };

        return (
          <div
            key={index}
            style={wrapperStyles}
            className={wrapperClassName}
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                style={itemStyles}
                className={className}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};
