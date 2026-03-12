import type { ContentPresentation } from "../../schema/content";

const placeholderLandscape =
  "https://placehold.co/1200x720/E8EAF3/2F3441?text=Placeholder%20Image";
const placeholderPortrait =
  "https://placehold.co/720x900/E8EAF3/2F3441?text=Placeholder%20Image";
const placeholderDark =
  "https://placehold.co/1200x600/2F3441/FFFFFF?text=Placeholder%20Image";

export const newGeneralContent: ContentPresentation = {
  id: "pres_new_general_001",
  templateId: "new-general",
  title: "Northstar Growth Plan",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    // ── 1. Title ────────────────────────────────────────────────────────────────
    {
      id: "ng-s1",
      layout: "new-general-title",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s1-title", area: "hero", type: "headline", content: "Northstar Growth Plan" },
        { id: "ng-s1-sub", area: "hero", type: "subheadline", content: "Marketing Strategy Presentation — Q1 2026" },
        { id: "ng-s1-body", area: "hero", type: "body-text", content: "Accelerating enterprise customer acquisition across EMEA and North America." },
        { id: "ng-s1-img", area: "note", type: "image", src: placeholderDark, alt: "Cover image" },
      ],
    },

    // ── 2. Agenda ───────────────────────────────────────────────────────────────
    {
      id: "ng-s2",
      layout: "new-general-agenda",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s2-title", area: "intro", type: "headline", content: "Agenda" },
        { id: "ng-s2-body", area: "intro", type: "body-text", content: "An overview of key topics for today's discussion." },
        { id: "ng-s2-list", area: "agenda", type: "bullet-list", items: [
          "Executive Summary", "Market Landscape", "Problem Statement",
          "Our Solution", "Competitive Advantage", "Target Audience",
          "Go-to-Market Strategy", "Campaign Performance", "KPI Dashboard", "Next Steps",
        ] },
      ],
    },

    // ── 3. Problem Split ────────────────────────────────────────────────────────
    {
      id: "ng-s3",
      layout: "new-general-problem-split",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s3-title", area: "header", type: "headline", content: "Problem" },
        { id: "ng-s3-img", area: "image", type: "image", src: placeholderLandscape, alt: "Problem illustration" },
        { id: "ng-s3-body", area: "content", type: "body-text", content: "Businesses face challenges with outdated technology and rising costs, limiting efficiency and growth in competitive markets." },
        { id: "ng-s3-f1", area: "content", type: "feature-item", title: "Inefficiency", description: "Businesses struggle to find digital tools that meet their needs, causing operational slowdowns." },
        { id: "ng-s3-f2", area: "content", type: "feature-item", title: "High Costs", description: "Outdated systems increase expenses, while small businesses struggle to expand their market reach." },
      ],
    },

    // ── 4. Solutions Grid ───────────────────────────────────────────────────────
    {
      id: "ng-s4",
      layout: "new-general-solutions-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s4-title", area: "header", type: "headline", content: "Solutions" },
        { id: "ng-s4-f1", area: "features", type: "feature-item", title: "Custom Software", description: "We create tailored software to optimize processes and boost efficiency." },
        { id: "ng-s4-f2", area: "features", type: "feature-item", title: "Digital Consulting", description: "Our consultants guide organizations in leveraging the latest technologies." },
        { id: "ng-s4-f3", area: "features", type: "feature-item", title: "Support Services", description: "We provide ongoing support to help businesses adapt and maintain performance." },
        { id: "ng-s4-f4", area: "features", type: "feature-item", title: "Scalable Marketing", description: "Our data-driven strategies help businesses expand their reach and engagement." },
        { id: "ng-s4-img", area: "image", type: "image", src: placeholderLandscape, alt: "Team working" },
      ],
    },

    // ── 5. Competitive Advantage ────────────────────────────────────────────────
    {
      id: "ng-s5",
      layout: "new-general-competitive-advantage",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s5-img", area: "image", type: "image", src: placeholderDark, alt: "Dashboard" },
        { id: "ng-s5-title", area: "content", type: "headline", content: "Competitive Advantage" },
        { id: "ng-s5-body", area: "content", type: "body-text", content: "Ginyard International Co. stands out by offering custom digital solutions tailored to client needs, alongside long-term support to ensure lasting relationships and continuous adaptation." },
        { id: "ng-s5-stat1", area: "stats", type: "stat-number", content: "200+", label: "Satisfied Clients" },
        { id: "ng-s5-stat2", area: "stats", type: "stat-number", content: "95%", label: "Client Retention Rate" },
      ],
    },

    // ── 6. Target Audience Breakdown ────────────────────────────────────────────
    {
      id: "ng-s6",
      layout: "new-general-audience-breakdown",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s6-title", area: "header", type: "headline", content: "Target Audience Breakdown" },
        { id: "ng-s6-st1", area: "col1", type: "stat-number", content: "01", label: "" },
        { id: "ng-s6-h1", area: "col1", type: "headline", content: "C-Suite Executives" },
        { id: "ng-s6-f1a", area: "col1", type: "feature-item", title: "KEY NEED", description: "Strategic growth & competitive advantage" },
        { id: "ng-s6-f1b", area: "col1", type: "feature-item", title: "PRIMARY CHANNEL", description: "LinkedIn, executive events" },
        { id: "ng-s6-st2", area: "col2", type: "stat-number", content: "02", label: "" },
        { id: "ng-s6-h2", area: "col2", type: "headline", content: "VP of Operations" },
        { id: "ng-s6-f2a", area: "col2", type: "feature-item", title: "KEY NEED", description: "Efficiency & cost optimization" },
        { id: "ng-s6-f2b", area: "col2", type: "feature-item", title: "PRIMARY CHANNEL", description: "Industry publications, webinars" },
        { id: "ng-s6-st3", area: "col3", type: "stat-number", content: "03", label: "" },
        { id: "ng-s6-h3", area: "col3", type: "headline", content: "Technical Leaders" },
        { id: "ng-s6-f3a", area: "col3", type: "feature-item", title: "KEY NEED", description: "Integration capabilities & security" },
        { id: "ng-s6-f3b", area: "col3", type: "feature-item", title: "PRIMARY CHANNEL", description: "Technical content, product demos" },
      ],
    },

    // ── 7. Channel Strategy ─────────────────────────────────────────────────────
    {
      id: "ng-s7",
      layout: "new-general-channel-strategy",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s7-title", area: "header", type: "headline", content: "Go-to-Market Strategy" },
        { id: "ng-s7-desc", area: "description", type: "body-text", content: "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors." },
        { id: "ng-s7-table", area: "table", type: "data-table",
          columns: ["Channel", "Tactic", "Purpose"],
          rows: [
            { label: "Paid Channels", values: ["LinkedIn Ads", "ABM Retargeting"] },
            { label: "Paid Channels", values: ["Google Ads", "Intent Capture"] },
            { label: "Organic", values: ["SEO", "Thought Leadership"] },
            { label: "Organic", values: ["Content", "Education"] },
            { label: "Partnerships", values: ["Events", "Network Building"] },
            { label: "Partnerships", values: ["Co-Marketing", "Reach Extension"] },
          ],
        },
      ],
    },

    // ── 8. Campaign Performance ─────────────────────────────────────────────────
    {
      id: "ng-s8",
      layout: "new-general-campaign-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s8-title", area: "header", type: "headline", content: "Campaign Performance Snapshot" },
        { id: "ng-s8-st1", area: "stats", type: "stat-number", content: "342 SQLs", label: "Enterprise ABM Launch" },
        { id: "ng-s8-st2", area: "stats", type: "stat-number", content: "$1.8M pipeline", label: "Product Feature Release" },
        { id: "ng-s8-st3", area: "stats", type: "stat-number", content: "156 Deals", label: "Industry Summit Sponsorship" },
        { id: "ng-s8-st4", area: "stats", type: "stat-number", content: "28%", label: "Conversion Rate" },
      ],
    },

    // ── 9. Funnel Performance ───────────────────────────────────────────────────
    {
      id: "ng-s9",
      layout: "new-general-funnel-metrics",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s9-title", area: "lead", type: "headline", content: "Funnel Performance" },
        { id: "ng-s9-stat", area: "lead", type: "stat-number", content: "0.24%", label: "Overall Visit → Customer" },
        { id: "ng-s9-chart", area: "bars", type: "bar-chart", title: "Conversion Funnel", bars: [
          { label: "Visitors", value: 124500 },
          { label: "Leads", value: 12450 },
          { label: "MQL", value: 4356 },
        ] },
      ],
    },

    // ── 10. Insights Grid ───────────────────────────────────────────────────────
    {
      id: "ng-s10",
      layout: "new-general-insights-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s10-title", area: "header", type: "headline", content: "Key Insights" },
        { id: "ng-s10-f1", area: "grid", type: "feature-item", title: "Pipeline Growth", description: "30% increase in qualified pipeline quarter over quarter." },
        { id: "ng-s10-f2", area: "grid", type: "feature-item", title: "Content ROI", description: "Blog content drives 45% of inbound MQLs at lowest CAC." },
        { id: "ng-s10-f3", area: "grid", type: "feature-item", title: "ABM Success", description: "Enterprise ABM campaigns show 4.8x ROAS." },
        { id: "ng-s10-f4", area: "grid", type: "feature-item", title: "Event Pipeline", description: "Industry events generate highest quality SQLs." },
        { id: "ng-s10-f5", area: "grid", type: "feature-item", title: "Retention", description: "Customer retention above 95% across all cohorts." },
        { id: "ng-s10-f6", area: "grid", type: "feature-item", title: "Expansion", description: "Upsell revenue grew 22% driving net revenue retention." },
      ],
    },

    // ── 11. Insights Card ───────────────────────────────────────────────────────
    {
      id: "ng-s11",
      layout: "new-general-insights-card",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s11-title", area: "title", type: "headline", content: "Key Insights & Learnings" },
        { id: "ng-s11-card", area: "card", type: "feature-item", title: "CONTENT + PAID SOCIAL COMBINATION DRIVES HIGHEST QUALITY LEADS", description: "Leads from integrated campaigns had 47% faster time-to-close and 28% higher average contract value." },
      ],
    },

    // ── 12. Chart Sidebar ───────────────────────────────────────────────────────
    {
      id: "ng-s12",
      layout: "new-general-chart-sidebar",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s12-chart", area: "chart", type: "bar-chart", title: "Revenue by Quarter", bars: [
          { label: "Q1", value: 100000 }, { label: "Q2", value: 130000 }, { label: "Q3", value: 90000 }, { label: "Q4", value: 160000 },
        ] },
        { id: "ng-s12-st1", area: "sidebar", type: "stat-number", content: "$480K", label: "Total Revenue" },
        { id: "ng-s12-st2", area: "sidebar", type: "stat-number", content: "23%", label: "Growth Rate" },
        { id: "ng-s12-st3", area: "sidebar", type: "stat-number", content: "4.2x", label: "ROAS" },
        { id: "ng-s12-st4", area: "sidebar", type: "stat-number", content: "156", label: "New Accounts" },
      ],
    },

    // ── 13. Chart Fullwidth ─────────────────────────────────────────────────────
    {
      id: "ng-s13",
      layout: "new-general-chart-fullwidth",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s13-title", area: "header", type: "headline", content: "Spend & ROI Dashboard" },
        { id: "ng-s13-chart", area: "chart", type: "bar-chart", bars: [
          { label: "Jan Revenue", value: 520 }, { label: "Jan Spend", value: 140 },
          { label: "Feb Revenue", value: 660 }, { label: "Feb Spend", value: 245 },
          { label: "Mar Revenue", value: 185 }, { label: "Mar Spend", value: 400 },
        ] },
      ],
    },

    // ── 14. KPI Dashboard ───────────────────────────────────────────────────────
    {
      id: "ng-s14",
      layout: "new-general-kpi-dashboard",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s14-title", area: "text", type: "headline", content: "Business Objective & KPIs" },
        { id: "ng-s14-sub", area: "text", type: "subheadline", content: "Accelerate enterprise customer acquisition across EMEA and North America" },
        { id: "ng-s14-body", area: "text", type: "body-text", content: "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline." },
        { id: "ng-s14-k1", area: "kpis", type: "stat-number", content: "$4.2M", label: "Pipeline Generated" },
        { id: "ng-s14-k2", area: "kpis", type: "stat-number", content: "8,420", label: "Marketing Qualified Leads" },
        { id: "ng-s14-k3", area: "kpis", type: "stat-number", content: "4.8X", label: "Return on Ad Spend" },
        { id: "ng-s14-k4", area: "kpis", type: "stat-number", content: "6,250", label: "Target Leads" },
      ],
    },

    // ── 15. Dashboard Sidebar ───────────────────────────────────────────────────
    {
      id: "ng-s15",
      layout: "new-general-dashboard",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s15-title", area: "story", type: "headline", content: "Data Analytics Dashboard" },
        { id: "ng-s15-body", area: "story", type: "body-text", content: "Comprehensive overview of key metrics and performance indicators." },
        { id: "ng-s15-list", area: "story", type: "bullet-list", items: ["Pipeline coverage above 3x target", "CAC payback under 6 months", "Enterprise conversion improved QoQ"] },
        { id: "ng-s15-c1", area: "visuals", type: "bar-chart", title: "Revenue by Quarter", bars: [
          { label: "Q1", value: 100000 }, { label: "Q2", value: 130000 }, { label: "Q3", value: 90000 }, { label: "Q4", value: 160000 },
        ] },
        { id: "ng-s15-c2", area: "visuals", type: "radial-chart", segments: [
          { label: "A", value: 35 }, { label: "B", value: 25 }, { label: "C", value: 28 }, { label: "D", value: 12 },
        ] },
      ],
    },

    // ── 16. Dashboard Compact ───────────────────────────────────────────────────
    {
      id: "ng-s16",
      layout: "new-general-dashboard-compact",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s16-title", area: "header", type: "headline", content: "Data Analytics Dashboard" },
        { id: "ng-s16-desc", area: "header", type: "body-text", content: "Comprehensive overview of key metrics across multiple data dimensions." },
        { id: "ng-s16-st1", area: "stats", type: "stat-number", content: "$3.5M", label: "PIPELINE" },
        { id: "ng-s16-st2", area: "stats", type: "stat-number", content: "28%", label: "CONVERSION" },
        { id: "ng-s16-st3", area: "stats", type: "stat-number", content: "1.9x", label: "ROI" },
        { id: "ng-s16-st4", area: "stats", type: "stat-number", content: "42", label: "ACCOUNTS" },
        { id: "ng-s16-c1", area: "charts", type: "bar-chart", title: "Revenue by Quarter", bars: [
          { label: "Q1", value: 100 }, { label: "Q2", value: 130 }, { label: "Q3", value: 90 }, { label: "Q4", value: 160 },
        ] },
        { id: "ng-s16-c2", area: "charts", type: "radial-chart", segments: [
          { label: "A", value: 35 }, { label: "B", value: 25 }, { label: "C", value: 28 }, { label: "D", value: 12 },
        ] },
        { id: "ng-s16-c3", area: "charts", type: "bar-chart", title: "Growth Trend", bars: [
          { label: "Jan", value: 30 }, { label: "Feb", value: 45 }, { label: "Mar", value: 55 }, { label: "Apr", value: 50 }, { label: "May", value: 70 },
        ] },
      ],
    },

    // ── 17. Risks & Constraints ─────────────────────────────────────────────────
    {
      id: "ng-s17",
      layout: "new-general-risks-columns",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s17-title", area: "header", type: "headline", content: "Risks & Constraints" },
        { id: "ng-s17-c1h", area: "col1", type: "headline", content: "MARKET" },
        { id: "ng-s17-c1f", area: "col1", type: "feature-item", title: "Market Saturation", description: "Increasing competition in key verticals may pressure conversion rates." },
        { id: "ng-s17-c2h", area: "col2", type: "headline", content: "BUDGET" },
        { id: "ng-s17-c2f", area: "col2", type: "feature-item", title: "Budget Constraints", description: "Q1 budget reduction of 15% may limit ability to scale successful campaigns." },
        { id: "ng-s17-c3h", area: "col3", type: "headline", content: "CAPACITY" },
        { id: "ng-s17-c3f", area: "col3", type: "feature-item", title: "Resource Capacity", description: "Content production team at 110% capacity; may impact content velocity." },
      ],
    },

    // ── 18. Case Snapshot ───────────────────────────────────────────────────────
    {
      id: "ng-s18",
      layout: "new-general-case-snapshot",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s18-title", area: "story", type: "headline", content: "Customer Proof / Case Snapshot" },
        { id: "ng-s18-sub1", area: "story", type: "subheadline", content: "CHALLENGE" },
        { id: "ng-s18-body1", area: "story", type: "body-text", content: "Fragmented marketing operations across 12 regions leading to inefficient spend allocation. CAC increased 43% YoY." },
        { id: "ng-s18-sub2", area: "story", type: "subheadline", content: "OUTCOME" },
        { id: "ng-s18-list", area: "story", type: "bullet-list", items: ["34% reduction in CAC within 6 months", "Unified operations across all regions", "$4.2M additional pipeline generated"] },
        { id: "ng-s18-company", area: "company", type: "headline", content: "TechCorp Global" },
        { id: "ng-s18-desc", area: "company", type: "body-text", content: "Fortune 500 Technology Company" },
        { id: "ng-s18-stat", area: "company", type: "stat-number", content: "$4.2M", label: "incremental pipeline in Q4" },
      ],
    },

    // ── 19. Summary Split ───────────────────────────────────────────────────────
    {
      id: "ng-s19",
      layout: "new-general-summary-split",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s19-title", area: "summary", type: "headline", content: "Executive Summary" },
        { id: "ng-s19-body", area: "summary", type: "body-text", content: "Our marketing strategy targets enterprise accounts across EMEA and North America with a multi-channel approach." },
        { id: "ng-s19-list", area: "summary", type: "bullet-list", items: ["Pipeline target: $3.5M", "CAC goal: sub-$150", "Focus: Financial Services, Healthcare, Technology"] },
        { id: "ng-s19-st1", area: "metrics", type: "stat-number", content: "$3.5M", label: "Pipeline Target" },
        { id: "ng-s19-st2", area: "metrics", type: "stat-number", content: "4.8x", label: "ROAS Target" },
        { id: "ng-s19-st3", area: "metrics", type: "stat-number", content: "28%", label: "Conversion Rate" },
      ],
    },

    // ── 20. Table Focus ─────────────────────────────────────────────────────────
    {
      id: "ng-s20",
      layout: "new-general-table-focus",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s20-title", area: "header", type: "headline", content: "Quarterly Performance" },
        { id: "ng-s20-table", area: "table", type: "data-table",
          columns: ["Metric", "Q1", "Q2", "Q3", "Q4"],
          rows: [
            { label: "Revenue", values: ["$120K", "$145K", "$98K", "$180K"] },
            { label: "Pipeline", values: ["$350K", "$420K", "$380K", "$510K"] },
            { label: "SQLs", values: ["85", "102", "78", "134"] },
            { label: "Win Rate", values: ["22%", "26%", "24%", "31%"] },
          ],
        },
      ],
    },

    // ── 21. Timeline ────────────────────────────────────────────────────────────
    {
      id: "ng-s21",
      layout: "new-general-timeline",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s21-title", area: "header", type: "headline", content: "Timeline" },
        { id: "ng-s21-f1", area: "steps", type: "feature-item", title: "Q1 2026", description: "Foundation — build team, define ICP, launch ABM pilot." },
        { id: "ng-s21-f2", area: "steps", type: "feature-item", title: "Q2 2026", description: "Scale — expand paid channels, optimize content engine." },
        { id: "ng-s21-f3", area: "steps", type: "feature-item", title: "Q3 2026", description: "Accelerate — double budget on winning channels, launch partnerships." },
        { id: "ng-s21-f4", area: "steps", type: "feature-item", title: "Q4 2026", description: "Optimize — refine messaging, target new verticals, hit $3.5M pipeline." },
      ],
    },

    // ── 22. Team Grid ───────────────────────────────────────────────────────────
    {
      id: "ng-s22",
      layout: "new-general-team-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s22-title", area: "header", type: "headline", content: "Meet the Team" },
        { id: "ng-s22-body", area: "header", type: "body-text", content: "Our cross-functional team combines deep expertise in demand generation, content strategy, and sales enablement." },
        { id: "ng-s22-img1", area: "members", type: "image", src: placeholderPortrait, alt: "Team member" },
        { id: "ng-s22-n1", area: "members", type: "subheadline", content: "Sarah Chen" },
        { id: "ng-s22-r1", area: "members", type: "body-text", content: "VP Marketing" },
        { id: "ng-s22-img2", area: "members", type: "image", src: placeholderPortrait, alt: "Team member" },
        { id: "ng-s22-n2", area: "members", type: "subheadline", content: "James Rivera" },
        { id: "ng-s22-r2", area: "members", type: "body-text", content: "Head of Demand Gen" },
      ],
    },

    // ── 23. Quote + Image ───────────────────────────────────────────────────────
    {
      id: "ng-s23",
      layout: "new-general-quote-image",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s23-quote", area: "quote", type: "quote", content: "The best marketing doesn't feel like marketing.", attribution: "Tom Fishburne" },
        { id: "ng-s23-img", area: "image", type: "image", src: placeholderDark, alt: "Inspirational" },
      ],
    },

    // ── 24. Full Bleed Quote ────────────────────────────────────────────────────
    {
      id: "ng-s24",
      layout: "new-general-full-bleed-quote",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s24-img", area: "background", type: "image", src: placeholderDark, alt: "Background" },
        { id: "ng-s24-quote", area: "background", type: "headline", content: "Innovation distinguishes between a leader and a follower." },
        { id: "ng-s24-attr", area: "background", type: "body-text", content: "— Steve Jobs" },
      ],
    },

    // ── 25. Market Validation ───────────────────────────────────────────────────
    {
      id: "ng-s25",
      layout: "new-general-validation-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s25-title", area: "intro", type: "headline", content: "Market Validation" },
        { id: "ng-s25-body", area: "intro", type: "body-text", content: "Key supporting details that reinforce the title and guide the audience toward your main message." },
        { id: "ng-s25-f1", area: "points", type: "feature-item", title: "Customer Insights", description: "78% of businesses are planning to invest in digital solutions." },
        { id: "ng-s25-f2", area: "points", type: "feature-item", title: "Pilot Success", description: "85% prefer customized approaches over off-the-shelf solutions." },
        { id: "ng-s25-f3", area: "points", type: "feature-item", title: "Industry Trends", description: "Digital transformation budgets increased 34% year-over-year." },
        { id: "ng-s25-f4", area: "points", type: "feature-item", title: "Competitive Edge", description: "First-mover advantage in underserved mid-market segment." },
        { id: "ng-s25-img", area: "media", type: "image", src: placeholderLandscape, alt: "Validation" },
      ],
    },

    // ── 26. Text + Stacked Images ───────────────────────────────────────────────
    {
      id: "ng-s26",
      layout: "new-general-text-stacked-images",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s26-title", area: "text", type: "headline", content: "Executive Summary" },
        { id: "ng-s26-body", area: "text", type: "body-text", content: "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline with sub-$150 CAC." },
        { id: "ng-s26-img1", area: "images", type: "image", src: placeholderDark, alt: "Image 1" },
        { id: "ng-s26-img2", area: "images", type: "image", src: placeholderDark, alt: "Image 2" },
      ],
    },

    // ── 27. Thank You ───────────────────────────────────────────────────────────
    {
      id: "ng-s27",
      layout: "new-general-thank-you",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        { id: "ng-s27-title", area: "copy", type: "headline", content: "Thank You" },
        { id: "ng-s27-body", area: "copy", type: "body-text", content: "Thanks for your time and attention. We look forward to partnering on this growth journey." },
        { id: "ng-s27-contact", area: "copy", type: "subheadline", content: "Contact Us" },
        { id: "ng-s27-img", area: "placeholder", type: "image", src: placeholderDark, alt: "Contact" },
      ],
    },
  ],
};
