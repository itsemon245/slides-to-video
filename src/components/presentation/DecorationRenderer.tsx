import React from "react";
import { Decoration, DesignTokens } from "../../schema/template";

type DecorationRendererProps = {
  decorations?: Decoration[];
  parentTokens: DesignTokens;
};

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
          opacity,
          position = "absolute",
          top,
          left,
          right,
          bottom,
          width,
          height,
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
          position: position as any,
          top,
          left,
          right,
          bottom,
          display: "flex",
          flexDirection: direction,
          gap,
          pointerEvents: "none", // Decorations shouldn't block interaction usually
          zIndex: 0, // Should be behind content by default unless specified otherwise
          ...wrapperStyle,
        };

        const itemStyles: React.CSSProperties = {
          width: size ?? width,
          height: size ?? height,
          backgroundColor: resolvedColor,
          opacity,
          ...style,
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
