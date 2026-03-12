import type { Template } from "../../schema/template";
import { academicHeroLayout } from "./layouts/academic-hero";
import { academicAgendaLayout } from "./layouts/academic-agenda";
import { academicEditorialLayout } from "./layouts/academic-editorial";
import { academicProgramHighlightLayout } from "./layouts/academic-program-highlight";
import { academicSplitFocusLayout } from "./layouts/academic-split-focus";
import { academicStatPanelLayout } from "./layouts/academic-stat-panel";
import { academicTeamGridLayout } from "./layouts/academic-team-grid";
import { academicDataTableLayout } from "./layouts/academic-data-table";
import { academicPerformanceLayout } from "./layouts/academic-performance";
import { academicClosingLayout } from "./layouts/academic-closing";

const tokens: Template["tokens"] = {
  colors: {
    background: "#08080C",
    surface: "#15141D",
    primary: "#F8F3FB",
    secondary: "#CFC5DA",
    accent: "#6D47FF",
    muted: "#E3A5E5",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
};

export const academicEducation: Template = {
  id: "academic-education",
  name: "Academic Education",
  description:
    "Education-focused dark and violet template derived from the Academic Education reference deck.",

  tokens,

  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "circle",
  },

  slideDefaults: {
    padding: "0",
  },

  elementDefaults: {
    headline: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "slide-up-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 14,
      transitionIn: { id: "slide-up-in", duration: "500ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "stat-number": {
      scale: "display-xl",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "zoom-in-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    image: {
      variant: "rounded",
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "bar-chart": {
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "radial-chart": {
      variant: "pie",
      transitionIn: { id: "zoom-in-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "data-table": {
      transitionIn: { id: "fade-in", duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "side-accent",
      transitionIn: { id: "slide-right-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "feature-item": {
      variant: "with-left-border",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "slide-up-in", duration: "440ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
  },

  layouts: {
    "academic-hero":              academicHeroLayout(tokens),
    "academic-agenda":            academicAgendaLayout(tokens),
    "academic-editorial":         academicEditorialLayout(tokens),
    "academic-program-highlight": academicProgramHighlightLayout(tokens),
    "academic-split-focus":       academicSplitFocusLayout(tokens),
    "academic-stat-panel":        academicStatPanelLayout(tokens),
    "academic-team-grid":         academicTeamGridLayout(tokens),
    "academic-data-table":        academicDataTableLayout(tokens),
    "academic-performance":       academicPerformanceLayout(tokens),
    "academic-closing":           academicClosingLayout(tokens),
  },
};

export default academicEducation;
