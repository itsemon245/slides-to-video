import type React from "react";
import type { Decoration } from "../../schema/template";
import { withAlpha } from "../../designSystem";

export { withAlpha };

export const purpleBg = "linear-gradient(135deg, #5F40FF 0%, #7D58FF 54%, #6B47FF 100%)";

export const orb = (
  color: string,
  size: number,
  wrapperStyle: NonNullable<Decoration["wrapperStyle"]>
): Decoration => ({
  color,
  size,
  style: {
    borderRadius: "999px",
    opacity: 0.9,
    filter: "blur(0px)",
  },
  wrapperStyle,
});

export const darkShell: React.CSSProperties = {
  background: "#08080C",
  position: "relative",
  overflow: "hidden",
};

export const purpleShell: React.CSSProperties = {
  background: purpleBg,
  position: "relative",
  overflow: "hidden",
};

export const glassCard: React.CSSProperties = {
  background: withAlpha("#ffffff", 0.06),
  border: `1px solid ${withAlpha("#ffffff", 0.08)}`,
  borderRadius: 28,
  boxShadow: `0 18px 60px ${withAlpha("#000000", 0.24)}`,
};
