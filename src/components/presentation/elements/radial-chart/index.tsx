import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { RadialChartContent } from "../../../../schema/content";
import { getTypeStyle, withAlpha } from "../../../../designSystem";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: RadialChartContent;
}

const DEFAULT_COLORS = ["accent", "muted", "secondary"] as const;

export const RadialChart: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("radial-chart");
  const tokens = useTokens();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const total = Math.max(
    1,
    el.segments.reduce((sum, segment) => sum + Math.max(segment.value, 0), 0)
  );

  const reveal = spring({
    fps,
    frame,
    config: { damping: 18, stiffness: 110, mass: 0.9 },
  });

  const rotation = interpolate(reveal, [0, 1], [-24, 0]);
  const scale = interpolate(reveal, [0, 1], [0.84, 1]);
  const variant = config.variant ?? "pie";
  const gradientStops: string[] = [];
  let currentPercent = 0;

  el.segments.forEach((segment, index) => {
    const color =
      segment.color ??
      tokens.colors[DEFAULT_COLORS[index % DEFAULT_COLORS.length]];
    const nextPercent = currentPercent + (segment.value / total) * 100;
    gradientStops.push(`${color} ${currentPercent}% ${nextPercent}%`);
    currentPercent = nextPercent;
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        ...(config.style as React.CSSProperties | undefined),
        ...(handleClick ? editStyle : {}),
      }}
      onClick={handleClick}
    >
      {el.title ? (
        <div
          style={{
            ...getTypeStyle("heading-md"),
            color: tokens.colors.primary,
            fontFamily: tokens.fonts.heading,
            textAlign: "center",
            maxWidth: "100%",
          }}
        >
          {el.title}
        </div>
      ) : null}

      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <div
          style={{
            width: "min(100%, 380px)",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
            background: `conic-gradient(${gradientStops.join(", ")})`,
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            opacity: reveal,
            boxShadow: `24px 26px 0 ${withAlpha("#000000", 0.28)}`,
            position: "relative",
          }}
        >
          {variant === "donut" ? (
            <div
              style={{
                position: "absolute",
                inset: "44%",
                borderRadius: "50%",
                background: tokens.colors.background,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                boxSizing: "border-box",
              }}
            >
              {el.totalLabel ? (
                <span
                  style={{
                    ...getTypeStyle("body-md"),
                    color: tokens.colors.primary,
                    fontFamily: tokens.fonts.body,
                    textAlign: "center",
                  }}
                >
                  {el.totalLabel}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
