import type { ContentPresentation } from "../../schema/content";

export const neoSwiftContent: ContentPresentation = {
  id: "pres_neo_swift_001",
  templateId: "neo-swift",
  title: "Strategic Growth Plan",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    // ── Slide 1 · Key Takeaways (takeaway-list) ──────────────────────────────
    {
      id: "s1",
      layout: "takeaway-list",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el1",
          area: "left",
          type: "headline",
          content: "Key Takeaways",
        },
        {
          id: "el2",
          area: "left",
          type: "body-text",
          content:
            "Focus on companies with 500+ employees in Financial Services, Healthcare, and Technology sectors. Target $3.5M in new pipeline with sub-$150 CAC through account-based marketing and content-led strategies.",
          audioSegmentText:
            "Here are the key takeaways from our strategic growth plan, covering market expansion, customer retention, innovation, efficiency, and team enablement.",
        },
        {
          id: "el3",
          area: "right",
          type: "feature-item",
          title: "Market expansion",
          description:
            "Prioritize high-growth verticals and geographic regions with strong demand.",
        },
        {
          id: "el4",
          area: "right",
          type: "feature-item",
          title: "Customer retention",
          description:
            "Reduce churn through proactive support and tailored success programs.",
        },
        {
          id: "el5",
          area: "right",
          type: "feature-item",
          title: "Product innovation",
          description:
            "Ship features that align with top customer requests and usage data.",
        },
        {
          id: "el6",
          area: "right",
          type: "feature-item",
          title: "Operational efficiency",
          description:
            "Automate repetitive workflows to free capacity for strategic work.",
        },
        {
          id: "el7",
          area: "right",
          type: "feature-item",
          title: "Team enablement",
          description:
            "Invest in training and tools so teams can execute at scale.",
        },
      ],
    },
  ],
};
