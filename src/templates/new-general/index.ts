import type { Template } from "../../schema/template";
import { createDefaultLayouts } from "../../layouts";
import { newGeneralTitleLayout } from "./layouts/new-general-title";
import { newGeneralAgendaLayout } from "./layouts/new-general-agenda";
import { newGeneralDashboardLayout } from "./layouts/new-general-dashboard";
import { newGeneralChartSidebarLayout } from "./layouts/new-general-chart-sidebar";
import { newGeneralTableFocusLayout } from "./layouts/new-general-table-focus";
import { newGeneralSummarySplitLayout } from "./layouts/new-general-summary-split";
import { newGeneralTimelineLayout } from "./layouts/new-general-timeline";
import { newGeneralTeamGridLayout } from "./layouts/new-general-team-grid";
import { newGeneralQuoteImageLayout } from "./layouts/new-general-quote-image";
import { newGeneralFullBleedQuoteLayout } from "./layouts/new-general-full-bleed-quote";
import { newGeneralValidationGridLayout } from "./layouts/new-general-validation-grid";
import { newGeneralThankYouLayout } from "./layouts/new-general-thank-you";
import { newGeneralInsightsGridLayout } from "./layouts/new-general-insights-grid";
import { newGeneralFunnelMetricsLayout } from "./layouts/new-general-funnel-metrics";
import { newGeneralProblemSplitLayout } from "./layouts/new-general-problem-split";
import { newGeneralCompetitiveAdvantageLayout } from "./layouts/new-general-competitive-advantage";
import { newGeneralSolutionsGridLayout } from "./layouts/new-general-solutions-grid";
import { newGeneralRisksColumnsLayout } from "./layouts/new-general-risks-columns";
import { newGeneralAudienceBreakdownLayout } from "./layouts/new-general-audience-breakdown";
import { newGeneralChartFullwidthLayout } from "./layouts/new-general-chart-fullwidth";
import { newGeneralInsightsCardLayout } from "./layouts/new-general-insights-card";
import { newGeneralCampaignGridLayout } from "./layouts/new-general-campaign-grid";
import { newGeneralCaseSnapshotLayout } from "./layouts/new-general-case-snapshot";
import { newGeneralChannelStrategyLayout } from "./layouts/new-general-channel-strategy";
import { newGeneralKpiDashboardLayout } from "./layouts/new-general-kpi-dashboard";
import { newGeneralTextStackedImagesLayout } from "./layouts/new-general-text-stacked-images";
import { newGeneralDashboardCompactLayout } from "./layouts/new-general-dashboard-compact";

const tokens: Template["tokens"] = {
  colors: {
    background: "#FFFFFF",
    surface:    "#2F3441",
    primary:    "#1E1E2E",
    secondary:  "#6B7280",
    accent:     "#8B3DFF",
    muted:      "#E8EAF3",
  },
  fonts: {
    heading: "Nunito, sans-serif",
    body:    "Nunito, sans-serif",
  },
};

const defaultLayouts = createDefaultLayouts(tokens);

export const newGeneral: Template = {
  id: "new-general",
  name: "New General",
  description: "Clean white business template with purple accent and modular analytics layouts.",

  tokens,

  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "squircle",
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
      transitionIn:  { id: "slide-down-in", duration: "450ms" },
      transitionOut: { id: "slide-up-out",  duration: "350ms" },
    },
    subheadline: {
      scale: "heading-md",
      color: "secondary",
      fontFamily: "heading",
      textAlign: "left",
      transitionIn:  { id: "slide-up-in",    duration: "450ms" },
      transitionOut: { id: "slide-down-out", duration: "330ms" },
    },
    "body-text": {
      scale: "body-lg",
      color: "secondary",
      fontFamily: "body",
      textAlign: "left",
      transitionIn:  { id: "fade-in",  duration: "520ms" },
      transitionOut: { id: "fade-out", duration: "320ms" },
    },
    "bullet-list": {
      scale: "body-md",
      color: "secondary",
      fontFamily: "body",
      gap: 16,
      variant: "stacked",
      transitionIn:  { id: "slide-up-in",  duration: "520ms" },
      transitionOut: { id: "slide-up-out", duration: "330ms" },
    },
    "stat-number": {
      scale: "display-xl",
      color: "primary",
      fontFamily: "heading",
      variant: "default",
      transitionIn:  { id: "zoom-in-in",  duration: "500ms" },
      transitionOut: { id: "zoom-in-out", duration: "350ms" },
    },
    image: {
      variant: "rounded",
      transitionIn:  { id: "fade-in",  duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "400ms" },
    },
    "bar-chart": {
      transitionIn:  { id: "fade-in",  duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "350ms" },
    },
    "radial-chart": {
      transitionIn:  { id: "zoom-in-in",  duration: "520ms" },
      transitionOut: { id: "fade-out",    duration: "260ms" },
    },
    "data-table": {
      transitionIn:  { id: "fade-in",  duration: "650ms" },
      transitionOut: { id: "fade-out", duration: "260ms" },
    },
    quote: {
      scale: "display-lg",
      color: "primary",
      fontFamily: "heading",
      variant: "side-accent",
      transitionIn:  { id: "slide-right-in", duration: "550ms" },
      transitionOut: { id: "slide-left-out", duration: "350ms" },
    },
    "feature-item": {
      variant: "with-top-border",
      color: "primary",
      fontFamily: "heading",
      transitionIn:  { id: "slide-up-in",    duration: "440ms" },
      transitionOut: { id: "slide-down-out", duration: "320ms" },
    },
  },

  layouts: {
    ...defaultLayouts,

    // ── Custom layouts (new-general specific) ────────────────────────────────
    "new-general-title":            newGeneralTitleLayout(tokens),
    "new-general-agenda":           newGeneralAgendaLayout(tokens),
    "new-general-dashboard":        newGeneralDashboardLayout(tokens),
    "new-general-chart-sidebar":    newGeneralChartSidebarLayout(tokens),
    "new-general-table-focus":      newGeneralTableFocusLayout(tokens),
    "new-general-summary-split":    newGeneralSummarySplitLayout(tokens),
    "new-general-timeline":         newGeneralTimelineLayout(tokens),
    "new-general-team-grid":        newGeneralTeamGridLayout(tokens),
    "new-general-quote-image":      newGeneralQuoteImageLayout(tokens),
    "new-general-full-bleed-quote": newGeneralFullBleedQuoteLayout(tokens),
    "new-general-validation-grid":  newGeneralValidationGridLayout(tokens),
    "new-general-thank-you":        newGeneralThankYouLayout(tokens),
    "new-general-insights-grid":    newGeneralInsightsGridLayout(tokens),
    "new-general-funnel-metrics":   newGeneralFunnelMetricsLayout(tokens),
    "new-general-problem-split":    newGeneralProblemSplitLayout(tokens),
    "new-general-competitive-advantage": newGeneralCompetitiveAdvantageLayout(tokens),
    "new-general-solutions-grid":   newGeneralSolutionsGridLayout(tokens),
    "new-general-risks-columns":    newGeneralRisksColumnsLayout(tokens),
    "new-general-audience-breakdown": newGeneralAudienceBreakdownLayout(tokens),
    "new-general-chart-fullwidth":  newGeneralChartFullwidthLayout(tokens),
    "new-general-insights-card":    newGeneralInsightsCardLayout(tokens),
    "new-general-campaign-grid":    newGeneralCampaignGridLayout(tokens),
    "new-general-case-snapshot":    newGeneralCaseSnapshotLayout(tokens),
    "new-general-channel-strategy": newGeneralChannelStrategyLayout(tokens),
    "new-general-kpi-dashboard":    newGeneralKpiDashboardLayout(tokens),
    "new-general-text-stacked-images": newGeneralTextStackedImagesLayout(tokens),
    "new-general-dashboard-compact": newGeneralDashboardCompactLayout(tokens),
  },
};

export default newGeneral;
