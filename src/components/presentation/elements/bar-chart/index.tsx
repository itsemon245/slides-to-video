import { interpolate, useCurrentFrame } from "remotion";
import { getTypeStyle } from "../../../../designSystem";
import type { BarChartContent } from "../../../../schema/content";
import {
  useTokens,
  useElementConfig,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";

interface Props {
  el: BarChartContent;
}

const BAR_IN_FRAMES = 20;
const STAGGER = BAR_IN_FRAMES * 0.55;

export const BarChart: React.FC<Props> = ({ el }) => {
  const config = useElementConfig("bar-chart");
  const tokens = useTokens();
  const frame = useCurrentFrame();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle = useEditModeStyle(el);

  const maxVal = el.maxValue ?? Math.max(...el.bars.map((b) => b.value));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "48px 40px 24px 16px",
        boxSizing: "border-box",
        ...(config.style as React.CSSProperties | undefined),
        ...(handleClick ? editStyle : {}),
      }}
      onClick={handleClick}
    >
      {el.title && (
        <div
          style={{
            ...getTypeStyle("heading-md"),
            color: tokens.colors.primary,
            fontFamily: tokens.fonts.heading,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          {el.title}
        </div>
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-around",
          gap: 16,
          borderBottom: `2px solid ${tokens.colors.muted}`,
          borderLeft: `2px solid ${tokens.colors.muted}`,
        }}
      >
        {el.bars.map((bar, i) => {
          const startFrame = i * STAGGER;
          const endFrame = startFrame + BAR_IN_FRAMES;
          const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const barHeightPct = (bar.value / maxVal) * 88 * progress;

          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div
                style={{
                  ...getTypeStyle("caption"),
                  color: tokens.colors.accent,
                  fontWeight: 700,
                  marginBottom: 6,
                  opacity: progress,
                }}
              >
                {bar.sublabel ?? String(bar.value)}
              </div>
              <div
                style={{
                  width: "62%",
                  height: `${barHeightPct}%`,
                  background: `linear-gradient(to top, ${tokens.colors.accent}, ${tokens.colors.accent}99)`,
                  borderRadius: "6px 6px 0 0",
                  boxShadow: `0 0 20px ${tokens.colors.accent}44`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 16,
          marginTop: 12,
        }}
      >
        {el.bars.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              ...getTypeStyle("label"),
              color: tokens.colors.secondary,
              textAlign: "center",
            }}
          >
            {bar.label}
          </div>
        ))}
      </div>
    </div>
  );
};
