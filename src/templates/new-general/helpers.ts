import type React from "react";
import type { Decoration, Template } from "../../schema/template";
import { withAlpha } from "../../designSystem";

export { withAlpha };

type AreaConfig = Template["layouts"][string]["areas"][string];

const shell: React.CSSProperties = {
  background: "#F7F7FA",
  position: "relative",
  overflow: "hidden",
};

const card: React.CSSProperties = {
  background: "#FFFFFF",
  border: `1px solid ${withAlpha("#1E2333", 0.08)}`,
  borderRadius: 28,
  boxShadow: `0 20px 54px ${withAlpha("#1E2333", 0.08)}`,
};

const softPanel: React.CSSProperties = {
  background: `linear-gradient(180deg, #FFFFFF 0%, ${withAlpha("#8B3DFF", 0.035)} 100%)`,
  border: `1px solid ${withAlpha("#8B3DFF", 0.1)}`,
  borderRadius: 28,
  boxShadow: `0 22px 56px ${withAlpha("#1E2333", 0.08)}`,
};

export { shell, card };

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
  },
  wrapperStyle,
});

export const shellStyle = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...shell,
  padding,
  ...extra,
});

export const stackStyle = (
  padding: string,
  gap: number,
  extra: React.CSSProperties = {}
): React.CSSProperties =>
  shellStyle(padding, {
    display: "flex",
    flexDirection: "column",
    gap,
    ...extra,
  });

export const cardBox = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...card,
  padding,
  ...extra,
});

export const softBox = (
  padding: string,
  extra: React.CSSProperties = {}
): React.CSSProperties => ({
  ...softPanel,
  padding,
  ...extra,
});

export const accentEyebrow = (
  extra: React.CSSProperties = {}
) => ({
  color: "accent" as const,
  style: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    ...extra,
  },
});

export const teamMemberArea = (padding: string): AreaConfig => ({
  accepts: ["image", "subheadline", "body-text"],
  style: stackStyle(padding, 14, {
    alignItems: "center",
  }),
  elementStyles: {
    image: { style: { ...card, borderRadius: 24 } },
    subheadline: {
      scale: "body-lg",
      color: "primary",
      textAlign: "center",
      style: { fontWeight: 700 },
    },
    "body-text": {
      scale: "caption",
      textAlign: "center",
      style: { maxWidth: 220 },
    },
  },
});
