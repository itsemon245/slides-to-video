import type { ContentPresentation } from "../../schema/content";

export const neoModernContent: ContentPresentation = {
  id: "pres_neo_modern_001",
  templateId: "neo-modern",
  title: "Strategic Growth Plan",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [

    // ── Slide 1 · Key Takeaways (takeaway-cards) ────────────────────────────
    {
      id: "s1",
      layout: "takeaway-cards",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el1",
          area: "summary",
          type: "headline",
          content: "Key Takeaways",
          audioSegmentText:
            "Here are the key takeaways from our strategic growth plan.",
        },
        {
          id: "el2",
          area: "summary",
          type: "body-text",
          content:
            "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline with sub-$150 CAC through account-based marketing and content-led strategies.",
        },
        {
          id: "el3",
          area: "cards",
          type: "feature-item",
          title: "Market expansion",
          description:
            "Prioritize high-growth verticals and geographic regions with strong demand.",
        },
        {
          id: "el4",
          area: "cards",
          type: "feature-item",
          title: "Customer retention",
          description:
            "Reduce churn through proactive support and tailored success programs.",
        },
        {
          id: "el5",
          area: "cards",
          type: "feature-item",
          title: "Product innovation",
          description:
            "Ship features that align with top customer requests and usage data.",
        },
        {
          id: "el6",
          area: "cards",
          type: "feature-item",
          title: "Operational efficiency",
          description:
            "Automate repetitive workflows to free capacity for strategic work.",
        },
        {
          id: "el7",
          area: "cards",
          type: "feature-item",
          title: "Team enablement",
          description:
            "Invest in training and tools so teams can execute at scale.",
        },
      ],
    },

    // ── Slide 2 · Thank You Contact (thank-you-contact) ─────────────────────
    {
      id: "s2",
      layout: "thank-you-contact",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el8",
          area: "summary",
          type: "headline",
          content: "Thank you",
          audioSegmentText:
            "Thank you for your time. Here is how to reach us.",
        },
        {
          id: "el9",
          area: "summary",
          type: "body-text",
          content:
            "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline with sub-$150 CAC through account-based marketing and content-led strategies.",
        },
        {
          id: "el10",
          area: "cards",
          type: "feature-item",
          title: "Email",
          description: "presenton@gmail.com",
        },
        {
          id: "el11",
          area: "cards",
          type: "feature-item",
          title: "Phone",
          description: "+977-98000000",
        },
        {
          id: "el12",
          area: "cards",
          type: "feature-item",
          title: "Website",
          description: "www.presenton.com",
        },
      ],
    },

    // ── Slide 3 · Description & Metrics (description-metrics) ───────────────
    {
      id: "s3",
      layout: "description-metrics",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el13",
          area: "summary",
          type: "headline",
          content: "Description and Metrix",
          audioSegmentText:
            "Let us look at the key metrics behind our strategy.",
        },
        {
          id: "el14",
          area: "summary",
          type: "body-text",
          content:
            "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline with sub-$150 CAC through account-based marketing and content-led strategies.",
        },
        {
          id: "el15",
          area: "accentStats",
          type: "stat-number",
          content: "85%",
          label: "Main Challenge: Delayed Client",
        },
        {
          id: "el16",
          area: "accentStats",
          type: "stat-number",
          content: "85%",
          label: "Main Challenge: Delayed Client",
        },
        {
          id: "el17",
          area: "accentStats",
          type: "stat-number",
          content: "85%",
          label: "Main Challenge: Delayed Client",
        },
        {
          id: "el18",
          area: "lightStats",
          type: "stat-number",
          content: ">500 M",
          label: "Total Registered Users",
        },
        {
          id: "el19",
          area: "lightStats",
          type: "stat-number",
          content: ">500 M",
          label: "Total Registered Users",
        },
        {
          id: "el20",
          area: "lightStats",
          type: "stat-number",
          content: ">500 M",
          label: "Total Registered Users",
        },
      ],
    },
  ],
};
