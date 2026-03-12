import type { Template } from "../../schema/template";
import { createDefaultLayouts } from "../../layouts";
import { newGeneralTitleLayout } from "./layouts/new-general-title";
import { newGeneralInsightsGridLayout } from "./layouts/new-general-insights-grid";
import { newGeneralFunnelMetricsLayout } from "./layouts/new-general-funnel-metrics";
import { newGeneralAgendaLayout } from "./layouts/new-general-agenda";
import { newGeneralDashboardLayout } from "./layouts/new-general-dashboard";
import { newGeneralTimelineLayout } from "./layouts/new-general-timeline";
import { newGeneralTeamGridLayout } from "./layouts/new-general-team-grid";
import { newGeneralQuoteImageLayout } from "./layouts/new-general-quote-image";
import { newGeneralFullBleedQuoteLayout } from "./layouts/new-general-full-bleed-quote";
import { newGeneralSummarySplitLayout } from "./layouts/new-general-summary-split";
import { newGeneralTableFocusLayout } from "./layouts/new-general-table-focus";
import { newGeneralChartSidebarLayout } from "./layouts/new-general-chart-sidebar";
import { newGeneralValidationGridLayout } from "./layouts/new-general-validation-grid";
import { newGeneralThankYouLayout } from "./layouts/new-general-thank-you";

const tokens: Template["tokens"] = {
  colors: {
    background: "#F7F7FA",
    surface: "#ECECF3",
    primary: "#1E2333",
    secondary: "#6E7385",
    accent: "#8B3DFF",
    muted: "#D7D9E4",
  },
  fonts: {
    heading: "Manrope, sans-serif",
    body: "DM Sans, sans-serif",
  },
};

const defaultLayouts = createDefaultLayouts(tokens);

export const newGeneral: Template = {
  id: "new-general",
  name: "New General",
  description:
    "Minimal business presentation template with white surfaces, violet accents, and dashboard-style layouts.",

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
      transitionIn: { id: "slide-up-in", duration: "460ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn: { id: "fade-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 14,
      transitionIn: { id: "slide-up-in", duration: "480ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "stat-number": {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "zoom-in-in", duration: "420ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    image: {
      variant: "rounded",
      transitionIn: { id: "fade-in", duration: "620ms" },
      transitionOut: { id: "fade-out", duration: "300ms" },
    },
    "bar-chart": {
      transitionIn: { id: "fade-in", duration: "620ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    "radial-chart": {
      variant: "pie",
      transitionIn: { id: "zoom-in-in", duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
    "data-table": {
      transitionIn: { id: "fade-in", duration: "620ms" },
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
      variant: "default",
      color: "primary",
      fontFamily: "heading",
      transitionIn: { id: "slide-up-in", duration: "440ms" },
      transitionOut: { id: "fade-out", duration: "240ms" },
    },
  },

  layouts: {
    ...defaultLayouts,
    "new-general-title":            newGeneralTitleLayout(tokens),
    "new-general-insights-grid":    newGeneralInsightsGridLayout(tokens),
    "new-general-funnel-metrics":   newGeneralFunnelMetricsLayout(tokens),
    "new-general-agenda":           newGeneralAgendaLayout(tokens),
    "new-general-dashboard":        newGeneralDashboardLayout(tokens),
    "new-general-timeline":         newGeneralTimelineLayout(tokens),
    "new-general-team-grid":        newGeneralTeamGridLayout(tokens),
    "new-general-quote-image":      newGeneralQuoteImageLayout(tokens),
    "new-general-full-bleed-quote": newGeneralFullBleedQuoteLayout(tokens),
    "new-general-summary-split":    newGeneralSummarySplitLayout(tokens),
    "new-general-table-focus":      newGeneralTableFocusLayout(tokens),
    "new-general-chart-sidebar":    newGeneralChartSidebarLayout(tokens),
    "new-general-validation-grid":  newGeneralValidationGridLayout(tokens),
    "new-general-thank-you":        newGeneralThankYouLayout(tokens),
  },
};

export default newGeneral;
