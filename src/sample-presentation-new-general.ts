import type { ContentPresentation } from "./schema/content";

const placeholderLandscape =
  "https://placehold.co/1200x720/E8EAF3/2F3441?text=Placeholder%20Image";
const placeholderPortrait =
  "https://placehold.co/720x900/E8EAF3/2F3441?text=Placeholder%20Image";
const placeholderDark =
  "https://placehold.co/1200x600/2F3441/FFFFFF?text=Placeholder%20Image";
const placeholderWide =
  "https://placehold.co/1400x780/F1F2F8/2F3441?text=Placeholder%20Image";

export const newGeneralSamplePresentation: ContentPresentation = {
  id: "pres_new_general_001",
  templateId: "new-general",
  title: "Northstar Growth Plan",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    {
      id: "ng-s1",
      layout: "new-general-title",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s1-kicker", area: "hero", type: "subheadline", content: "Strategy Presentation" },
        { id: "ng-s1-title", area: "hero", type: "headline", content: "Key Insights & Learnings" },
        {
          id: "ng-s1-body",
          area: "hero",
          type: "body-text",
          content:
            "A clean overview of the market, operating priorities, performance signals, and the next strategic moves for the business.",
        },
        {
          id: "ng-s1-note",
          area: "note",
          type: "body-text",
          content:
            "This template is built for general business decks with light editorial layouts, modular analytics panels, and simple closing slides.",
        },
      ],
    },
    {
      id: "ng-s2",
      layout: "new-general-agenda",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s2-kicker", area: "intro", type: "subheadline", content: "Overview" },
        { id: "ng-s2-title", area: "intro", type: "headline", content: "Table of content" },
        {
          id: "ng-s2-copy",
          area: "intro",
          type: "body-text",
          content:
            "The reference deck uses an opening page plus a modular outline page. This slide keeps that structure simple and reusable.",
        },
        {
          id: "ng-s2-list",
          area: "agenda",
          type: "bullet-list",
          items: [
            "Market context and operating environment",
            "Target audience and validation signals",
            "Revenue and campaign performance snapshot",
            "Execution roadmap and team structure",
            "Closing perspective and next steps",
          ],
        },
      ],
    },
    {
      id: "ng-s3",
      layout: "new-general-dashboard",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s3-kicker", area: "story", type: "subheadline", content: "Analytics" },
        { id: "ng-s3-title", area: "story", type: "headline", content: "Spend & ROI dashboard" },
        {
          id: "ng-s3-copy",
          area: "story",
          type: "body-text",
          content:
            "Performance remains healthy across paid channels, with stronger efficiency in the highest-intent segments.",
        },
        {
          id: "ng-s3-stat",
          area: "story",
          type: "stat-number",
          content: "$1.8M",
          label: "Quarterly attributable revenue",
        },
        {
          id: "ng-s3-bars",
          area: "visuals",
          type: "bar-chart",
          title: "Spend allocation",
          bars: [
            { label: "Search", value: 42 },
            { label: "Social", value: 61 },
            { label: "Email", value: 25 },
            { label: "Partners", value: 38 },
          ],
        },
        {
          id: "ng-s3-radial",
          area: "visuals",
          type: "radial-chart",
          title: "Conversion mix",
          totalLabel: "6.2%",
          segments: [
            { label: "Inbound", value: 42, color: "#8B3DFF" },
            { label: "Referral", value: 26, color: "#B98AFF" },
            { label: "Paid", value: 32, color: "#D9C1FF" },
          ],
        },
        {
          id: "ng-s3-table",
          area: "visuals",
          type: "data-table",
          columns: ["Channel", "Leads", "CPA", "ROI"],
          rows: [
            { label: "Search", values: [1240, "$118", "4.6x"] },
            { label: "Social", values: [980, "$144", "3.9x"] },
            { label: "Email", values: [640, "$62", "6.1x"] },
          ],
        },
      ],
    },
    {
      id: "ng-s4",
      layout: "new-general-chart-sidebar",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s4-title", area: "chart", type: "headline", content: "Market size" },
        {
          id: "ng-s4-chart",
          area: "chart",
          type: "bar-chart",
          title: "Total addressable segments",
          bars: [
            { label: "SMB", value: 32 },
            { label: "Mid-market", value: 48 },
            { label: "Enterprise", value: 41 },
            { label: "Strategic", value: 55 },
          ],
        },
        {
          id: "ng-s4-side-1",
          area: "sidebar",
          type: "feature-item",
          title: "Primary segment",
          description: "Enterprise buyers remain the largest near-term opportunity by revenue contribution.",
        },
        {
          id: "ng-s4-side-2",
          area: "sidebar",
          type: "feature-item",
          title: "Fastest growth",
          description: "Mid-market demand is expanding the quickest as activation costs continue to improve.",
        },
        {
          id: "ng-s4-side-3",
          area: "sidebar",
          type: "feature-item",
          title: "Priority move",
          description: "Concentrate outbound and partner coverage where win rates are already strongest.",
        },
      ],
    },
    {
      id: "ng-s5",
      layout: "new-general-table-focus",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s5-kicker", area: "header", type: "subheadline", content: "Go-to-Market Strategy" },
        { id: "ng-s5-title", area: "header", type: "headline", content: "Channel plan by motion" },
        {
          id: "ng-s5-copy",
          area: "header",
          type: "body-text",
          content:
            "The reference deck includes structured strategy tables. This layout uses the existing table element rather than introducing a one-off primitive.",
        },
        {
          id: "ng-s5-table",
          area: "table",
          type: "data-table",
          columns: ["Stage", "Primary Channel", "Objective", "Owner"],
          rows: [
            { label: "Awareness", values: ["Paid social", "Reach new accounts", "Brand team"] },
            { label: "Consideration", values: ["Search", "Capture active demand", "Growth team"] },
            { label: "Conversion", values: ["Email", "Nurture and close", "Lifecycle"] },
            { label: "Expansion", values: ["Customer marketing", "Drive retention", "Success team"] },
          ],
        },
      ],
    },
    {
      id: "ng-s6",
      layout: "stat-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s6-title", area: "header", type: "headline", content: "Top-line metrics at a glance" },
        { id: "ng-s6-stat-1", area: "stats", type: "stat-number", content: "8,450", label: "Qualified leads" },
        { id: "ng-s6-stat-2", area: "stats", type: "stat-number", content: "2,680", label: "Active opportunities" },
        { id: "ng-s6-stat-3", area: "stats", type: "stat-number", content: "$2.4M", label: "Pipeline influenced" },
        { id: "ng-s6-stat-4", area: "stats", type: "stat-number", content: "18%", label: "Quarter-over-quarter growth" },
      ],
    },
    {
      id: "ng-s7",
      layout: "new-general-summary-split",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s7-kicker", area: "summary", type: "subheadline", content: "Executive Summary" },
        { id: "ng-s7-title", area: "summary", type: "headline", content: "What leadership should focus on next" },
        {
          id: "ng-s7-copy",
          area: "summary",
          type: "body-text",
          content:
            "This structure maps to the reference slides that combine short summary copy on the left with stacked metrics on the right.",
        },
        {
          id: "ng-s7-list",
          area: "summary",
          type: "bullet-list",
          items: [
            "Double down on the highest-return acquisition channels",
            "Reduce sales cycle friction at the qualification stage",
            "Improve account scoring before budget is expanded further",
          ],
        },
        { id: "ng-s7-stat-1", area: "metrics", type: "stat-number", content: "8,450", label: "Marketing qualified leads" },
        { id: "ng-s7-stat-2", area: "metrics", type: "stat-number", content: "2,680", label: "Sales accepted opportunities" },
        { id: "ng-s7-stat-3", area: "metrics", type: "stat-number", content: "$2,400", label: "Average deal velocity delta" },
      ],
    },
    {
      id: "ng-s8",
      layout: "new-general-chart-sidebar",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s8-kicker", area: "chart", type: "subheadline", content: "Customer Proof" },
        { id: "ng-s8-title", area: "chart", type: "headline", content: "Custom proof / case snapshot" },
        {
          id: "ng-s8-copy",
          area: "chart",
          type: "body-text",
          content:
            "The reference deck includes proof slides with a media card and a high-level metric callout. This layout handles that pattern directly.",
        },
        { id: "ng-s8-stat", area: "chart", type: "stat-number", content: "$4.2M", label: "Revenue influenced from pilot program" },
        { id: "ng-s8-image", area: "sidebar", type: "image", src: placeholderLandscape, alt: "Placeholder Image" },
        { id: "ng-s8-body", area: "sidebar", type: "body-text", content: "Placeholder media can stand in for product shots, dashboards, or customer imagery." },
        { id: "ng-s8-card-stat", area: "sidebar", type: "stat-number", content: "95%", label: "Renewal intent among pilot accounts" },
      ],
    },
    {
      id: "ng-s9",
      layout: "new-general-timeline",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s9-title", area: "header", type: "headline", content: "Delivery timeline" },
        {
          id: "ng-s9-copy",
          area: "header",
          type: "body-text",
          content:
            "A step-by-step structure mirrors the reference deck’s timeline and process pages without requiring a custom timeline element.",
        },
        { id: "ng-s9-step-1", area: "steps", type: "feature-item", title: "Research", description: "Validate assumptions, segment audiences, and confirm the baseline metrics." },
        { id: "ng-s9-step-2", area: "steps", type: "feature-item", title: "Build", description: "Launch campaign architecture, dashboards, and creative packages for the quarter." },
        { id: "ng-s9-step-3", area: "steps", type: "feature-item", title: "Measure", description: "Track funnel efficiency, spend pacing, and team-level execution each week." },
        { id: "ng-s9-step-4", area: "steps", type: "feature-item", title: "Scale", description: "Reallocate budget toward top performers and expand the highest-converting programs." },
      ],
    },
    {
      id: "ng-s10",
      layout: "bullet-with-image",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s10-kicker", area: "text", type: "subheadline", content: "Solutions" },
        { id: "ng-s10-title", area: "text", type: "headline", content: "Operational fixes with immediate impact" },
        {
          id: "ng-s10-list",
          area: "text",
          type: "bullet-list",
          items: [
            "Shift more budget into the lower-CPA acquisition sources",
            "Replace weak ad groups with clearer value-proposition messaging",
            "Tighten feedback loops between campaign managers and account executives",
          ],
        },
        { id: "ng-s10-image", area: "image", type: "image", src: placeholderLandscape, alt: "Placeholder Image" },
        {
          id: "ng-s10-body",
          area: "text",
          type: "body-text",
          content:
            "This split supports both the reference deck’s solution slide and its mirrored problem slide by swapping the copy.",
        },
      ],
    },
    {
      id: "ng-s11",
      layout: "new-general-validation-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s11-kicker", area: "intro", type: "subheadline", content: "Market Validation" },
        { id: "ng-s11-title", area: "intro", type: "headline", content: "Signals that the next move is credible" },
        {
          id: "ng-s11-copy",
          area: "intro",
          type: "body-text",
          content:
            "The reference deck includes a validation slide with four point blocks and a supporting image. This layout keeps that structure intact.",
        },
        { id: "ng-s11-item-1", area: "points", type: "feature-item", title: "Customer insights", description: "High-intent prospects consistently request the same workflow improvements." },
        { id: "ng-s11-item-2", area: "points", type: "feature-item", title: "Market triggers", description: "Competitive pricing changes are creating a stronger switching window." },
        { id: "ng-s11-item-3", area: "points", type: "feature-item", title: "Retention signals", description: "Accounts with onboarding support remain active longer and expand faster." },
        { id: "ng-s11-item-4", area: "points", type: "feature-item", title: "Expansion fit", description: "The same messaging performs well across adjacent mid-market segments." },
        { id: "ng-s11-image", area: "media", type: "image", src: placeholderLandscape, alt: "Placeholder Image" },
        { id: "ng-s11-body", area: "media", type: "body-text", content: "Use a screenshot, customer photo, or product mockup here depending on the deck." },
      ],
    },
    {
      id: "ng-s12",
      layout: "new-general-team-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s12-title", area: "header", type: "headline", content: "Our team members" },
        { id: "ng-s12-subtitle", area: "header", type: "subheadline", content: "Cross-functional leadership" },
        {
          id: "ng-s12-copy",
          area: "header",
          type: "body-text",
          content:
            "This layout reflects the reference deck’s people slides and keeps portraits in a simple four-up grid.",
        },
        { id: "ng-s12-a-image", area: "memberA", type: "image", src: placeholderPortrait, alt: "Placeholder Image" },
        { id: "ng-s12-a-name", area: "memberA", type: "subheadline", content: "Maya Torres" },
        { id: "ng-s12-a-role", area: "memberA", type: "body-text", content: "Growth lead" },
        { id: "ng-s12-b-image", area: "memberB", type: "image", src: placeholderPortrait, alt: "Placeholder Image" },
        { id: "ng-s12-b-name", area: "memberB", type: "subheadline", content: "Alex Chen" },
        { id: "ng-s12-b-role", area: "memberB", type: "body-text", content: "Operations director" },
        { id: "ng-s12-c-image", area: "memberC", type: "image", src: placeholderPortrait, alt: "Placeholder Image" },
        { id: "ng-s12-c-name", area: "memberC", type: "subheadline", content: "Nessa Reed" },
        { id: "ng-s12-c-role", area: "memberC", type: "body-text", content: "Brand strategist" },
        { id: "ng-s12-d-image", area: "memberD", type: "image", src: placeholderPortrait, alt: "Placeholder Image" },
        { id: "ng-s12-d-name", area: "memberD", type: "subheadline", content: "Jordan Patel" },
        { id: "ng-s12-d-role", area: "memberD", type: "body-text", content: "Revenue analyst" },
      ],
    },
    {
      id: "ng-s13",
      layout: "new-general-quote-image",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s13-kicker", area: "quote", type: "headline", content: "Words of wisdom" },
        {
          id: "ng-s13-quote",
          area: "quote",
          type: "quote",
          content:
            "The clearest presentations do not just report performance. They reveal what matters, what changed, and what should happen next.",
          attribution: "Northstar Strategy Team",
        },
        { id: "ng-s13-image", area: "image", type: "image", src: placeholderWide, alt: "Placeholder Image" },
        {
          id: "ng-s13-body",
          area: "image",
          type: "body-text",
          content:
            "This closing pattern mirrors the image-backed quote slides from the reference directory.",
        },
      ],
    },
    {
      id: "ng-s14",
      layout: "new-general-thank-you",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s14-title", area: "copy", type: "headline", content: "Thank you" },
        {
          id: "ng-s14-body",
          area: "copy",
          type: "body-text",
          content:
            "Thanks for exploring our business presentation template. Reach out if you want this structure adapted for another industry.",
        },
        { id: "ng-s14-contact", area: "copy", type: "subheadline", content: "Contact Us" },
        { id: "ng-s14-image", area: "placeholder", type: "image", src: placeholderDark, alt: "Placeholder Image" },
      ],
    },
    {
      id: "ng-s15",
      layout: "new-general-insights-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s15-title", area: "header", type: "headline", content: "Key Insights & Learnings" },
        {
          id: "ng-s15-item-1",
          area: "grid",
          type: "feature-item",
          title: "Enterprise buyers value workflow automation",
          description: "Messaging that emphasizes orchestration continues to resonate with larger accounts.",
        },
        {
          id: "ng-s15-item-2",
          area: "grid",
          type: "feature-item",
          title: "Content plus paid social improves discovery",
          description: "Awareness performance lifts when educational content is paired with distribution.",
        },
        {
          id: "ng-s15-item-3",
          area: "grid",
          type: "feature-item",
          title: "Mobile optimization needs continued focus",
          description: "Landing page friction still appears more often on smaller devices.",
        },
        {
          id: "ng-s15-item-4",
          area: "grid",
          type: "feature-item",
          title: "Account-based campaigns perform best for enterprise",
          description: "Higher-value targets respond better to tighter segmentation and deeper proof points.",
        },
        {
          id: "ng-s15-item-5",
          area: "grid",
          type: "feature-item",
          title: "Email remains strongest for direct response",
          description: "Nurture flows continue to convert at a lower cost than most paid channels.",
        },
        {
          id: "ng-s15-item-6",
          area: "grid",
          type: "feature-item",
          title: "Lifecycle programs help retention most",
          description: "Post-sale education drives healthier usage and better expansion readiness.",
        },
      ],
    },
    {
      id: "ng-s16",
      layout: "bullet-with-graph",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s16-title", area: "text", type: "headline", content: "Spend & ROI dashboard" },
        {
          id: "ng-s16-copy",
          area: "text",
          type: "body-text",
          content: "A chart-led slide can reuse the shared graph split without needing a template-local variant.",
        },
        {
          id: "ng-s16-chart",
          area: "graph",
          type: "bar-chart",
          title: "Quarterly media performance",
          bars: [
            { label: "Q1", value: 26 },
            { label: "Q2", value: 44 },
            { label: "Q3", value: 31 },
            { label: "Q4", value: 52 },
          ],
        },
      ],
    },
    {
      id: "ng-s17",
      layout: "new-general-chart-sidebar",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s17-title", area: "chart", type: "headline", content: "Spend & ROI overview" },
        { id: "ng-s17-image", area: "chart", type: "image", src: placeholderWide, alt: "Placeholder Image" },
        {
          id: "ng-s17-stat-1",
          area: "sidebar",
          type: "stat-number",
          content: "$1,800K",
          label: "Forecast revenue",
        },
        {
          id: "ng-s17-stat-2",
          area: "sidebar",
          type: "stat-number",
          content: "$1,800K",
          label: "Run-rate pipeline",
        },
        {
          id: "ng-s17-stat-3",
          area: "sidebar",
          type: "stat-number",
          content: "$1,800K",
          label: "Attributed influenced value",
        },
      ],
    },
    {
      id: "ng-s18",
      layout: "new-general-funnel-metrics",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s18-title", area: "lead", type: "headline", content: "Funnel performance" },
        { id: "ng-s18-stat", area: "lead", type: "stat-number", content: "0.24%", label: "Lead to customer conversion" },
        {
          id: "ng-s18-copy",
          area: "lead",
          type: "body-text",
          content:
            "This approximates the horizontal funnel slide from the reference deck using stacked progress-style cards.",
        },
        { id: "ng-s18-item-1", area: "bars", type: "feature-item", title: "Leads", description: "124,800 total volume · 100%" },
        { id: "ng-s18-item-2", area: "bars", type: "feature-item", title: "MQLs", description: "12,430 qualified accounts · 27%" },
        { id: "ng-s18-item-3", area: "bars", type: "feature-item", title: "Meetings", description: "4,356 booked conversations · 13%" },
      ],
    },
    {
      id: "ng-s19",
      layout: "new-general-summary-split",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s19-kicker", area: "summary", type: "subheadline", content: "Business Objective & KPIs" },
        { id: "ng-s19-title", area: "summary", type: "headline", content: "Performance indicators for the next phase" },
        {
          id: "ng-s19-copy",
          area: "summary",
          type: "body-text",
          content:
            "This is the template’s direct answer to the reference slide that pairs a business objective block with a KPI mosaic.",
        },
        { id: "ng-s19-stat-1", area: "metrics", type: "stat-number", content: "$4.2M", label: "Pipeline" },
        { id: "ng-s19-stat-2", area: "metrics", type: "stat-number", content: "4.8x", label: "ROI" },
        { id: "ng-s19-stat-3", area: "metrics", type: "stat-number", content: "$3.5M", label: "Revenue target" },
        { id: "ng-s19-stat-4", area: "metrics", type: "stat-number", content: "6,250", label: "Lead goal" },
        { id: "ng-s19-stat-5", area: "metrics", type: "stat-number", content: "4.0%", label: "Conversion rate" },
        { id: "ng-s19-stat-6", area: "metrics", type: "stat-number", content: "4.8x", label: "LTV/CAC" },
      ],
    },
    {
      id: "ng-s20",
      layout: "new-general-full-bleed-quote",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s20-image", area: "background", type: "image", src: placeholderWide, alt: "Placeholder Image" },
        { id: "ng-s20-title", area: "background", type: "headline", content: "Words of wisdom" },
        {
          id: "ng-s20-quote",
          area: "background",
          type: "quote",
          content:
            "Success is not final; failure is not fatal: it is the courage to continue that counts.",
          attribution: "Winston Churchill",
        },
        {
          id: "ng-s20-body",
          area: "background",
          type: "body-text",
          content:
            "This full-bleed treatment covers the image-led quote pages from the reference deck.",
        },
      ],
    },
    {
      id: "ng-s21",
      layout: "three-column",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s21-title", area: "col1", type: "headline", content: "Table\nof Content" },
        {
          id: "ng-s21-left",
          area: "col2",
          type: "bullet-list",
          items: ["Introduction", "Key findings", "Data analysis", "Recommendations"],
        },
        {
          id: "ng-s21-right",
          area: "col3",
          type: "bullet-list",
          items: ["Introduction", "Key findings", "Data analysis", "Recommendations", "Conclusion"],
        },
      ],
    },
    {
      id: "ng-s22",
      layout: "new-general-dashboard",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s22-kicker", area: "story", type: "subheadline", content: "Data Analytics Dashboard" },
        { id: "ng-s22-title", area: "story", type: "headline", content: "Multi-signal performance view" },
        {
          id: "ng-s22-copy",
          area: "story",
          type: "body-text",
          content:
            "This slide is included specifically to cover the analytics dashboard references from the image set.",
        },
        { id: "ng-s22-stat", area: "story", type: "stat-number", content: "285", label: "Weekly qualified accounts" },
        {
          id: "ng-s22-bars",
          area: "visuals",
          type: "bar-chart",
          title: "Acquisition by source",
          bars: [
            { label: "Paid", value: 22 },
            { label: "Organic", value: 28 },
            { label: "Direct", value: 19 },
            { label: "Referral", value: 31 },
          ],
        },
        {
          id: "ng-s22-radial",
          area: "visuals",
          type: "radial-chart",
          title: "Segment share",
          totalLabel: "100%",
          segments: [
            { label: "SMB", value: 30, color: "#8B3DFF" },
            { label: "Mid", value: 33, color: "#B98AFF" },
            { label: "Ent", value: 37, color: "#D9C1FF" },
          ],
        },
        {
          id: "ng-s22-table",
          area: "visuals",
          type: "data-table",
          columns: ["Metric", "Value", "Delta"],
          rows: [
            { label: "CAC", values: ["$182", "-6%"] },
            { label: "CVR", values: ["4.3%", "+0.8"] },
            { label: "Retention", values: ["92%", "+2"] },
          ],
        },
      ],
    },
  ],
};
