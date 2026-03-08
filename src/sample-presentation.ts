// sample-presentation.ts
// "The Mangrove Ecosystem" — matches the reference design image.
// Uses the nature-light template and exercises all 10 layouts.

import type { ContentPresentation } from "./schema/content";

export const samplePresentation: ContentPresentation = {
  id: "pres_mangrove_001",
  templateId: "nature-light",
  title: "The Mangrove Ecosystem",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    // ── Slide 1 · Title (hero-split) ──────────────────────────────────────────
    // Left: large headline + accent squares. Right: dark green panel with 2 stacked photos.
    {
      id: "s1",
      layout: "hero-split",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el1",
          area: "left",
          type: "headline",
          content: "The\nMangrove\nEcosystem",
          audioSegmentText:
            "Welcome to our exploration of mangrove ecosystems — one of the most productive and biodiverse environments on Earth.",
        },
        {
          id: "el3",
          area: "right",
          type: "image",
          src: "https://placehold.co/960x500/1A4030/C5E229?text=Mangrove+Birds",
          alt: "Birds flying above mangrove waterway",
        },
        {
          id: "el4",
          area: "right",
          type: "image",
          src: "https://placehold.co/960x500/1A4030/D0DDD0?text=Mangrove+Roots",
          alt: "Aerial roots of mangrove trees",
        },
      ],
    },

    // ── Slide 2 · What is a Mangrove Ecosystem? (vertical-split) ──────────────
    // Top: White area with Headline + Text. Bottom: Green area with 2 images.
    {
      id: "s2",
      layout: "vertical-split",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el5",
          area: "top",
          type: "headline",
          content: "What is a\nMangrove\nEcosystem?",
          audioSegmentText:
            "A mangrove ecosystem is a coastal wetland dominated by salt-tolerant trees that thrive in tidal zones, supporting biodiversity and protecting shorelines worldwide.",
        },
        {
          id: "el6",
          area: "top",
          type: "body-text",
          content:
            "A mangrove ecosystem is a coastal wetland environment dominated by salt-tolerant trees, thriving in tidal zones, supporting biodiversity, protecting shorelines, and maintaining ecological balance globally.",
        },
        {
          id: "el7a",
          area: "bottom",
          type: "image",
          src: "https://placehold.co/1200x800/1A4030/C5E229?text=Mangrove+Forest",
          alt: "Mangrove forest",
        },
        {
          id: "el7b",
          area: "bottom",
          type: "image",
          src: "https://placehold.co/600x800/1A4030/D0DDD0?text=Roots+Detail",
          alt: "Close up of mangrove roots",
        },
      ],
    },

    // ── Slide 3 · Distribution (list-divider-panel) ───────────────────────────
    // Left: List of regions. Center: Divider image. Right: Title + Map.
    {
      id: "s3",
      layout: "list-divider-panel",
      transitionIn: { id: "slide-left-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        // List Area (Left)
        {
          id: "el8",
          area: "list",
          type: "feature-item",
          title: "01 Tropical Regions",
          description: "Primarily found along warm tropical coastal regions worldwide.",
        },
        {
          id: "el9",
          area: "list",
          type: "feature-item",
          title: "02 Subtropical Areas",
          description: "Present in subtropical coastlines with moderate saline conditions.",
        },
        {
          id: "el10",
          area: "list",
          type: "feature-item",
          title: "03 Southeast Asian Coastlines",
          description: "Highest mangrove coverage occurs across Southeast Asian coastlines.",
        },
        {
          id: "el11",
          area: "list",
          type: "feature-item",
          title: "04 American Coastlines",
          description: "Mangroves spread along Central and South American coastlines.",
        },
        {
          id: "el12",
          area: "list",
          type: "feature-item",
          title: "05 African Shorelines",
          description: "Found along eastern and western tropical African shorelines.",
        },
        {
          id: "el13",
          area: "list",
          type: "feature-item",
          title: "06 Australian Coastlines",
          description: "Extensive mangrove habitats exist across northern Australian coastlines.",
        },
        // Divider Area (Center)
        {
          id: "el14_div",
          area: "divider",
          type: "image",
          src: "https://placehold.co/200x1080/1A4030/5A6A5A?text=Divider",
          alt: "Decorative vertical image",
        },
        // Panel Area (Right)
        {
          id: "el14",
          area: "panel",
          type: "headline",
          content: "Distribution\nof Mangrove\nForests",
          audioSegmentText:
            "Mangrove forests span over 120 countries across tropical and subtropical coastlines, covering roughly 150,000 square kilometres globally.",
        },
        {
          id: "el16",
          area: "panel",
          type: "image",
          src: "https://placehold.co/800x600/1A4030/D0DDD0?text=Global+Map",
          alt: "Global mangrove distribution map",
        },
      ],
    },

    // ── Slide 4 · Structure & Adaptations (image-feature-cards) ───────────────
    // (Renumbered from s5)
    {
      id: "s4",
      layout: "image-feature-cards",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el17",
          area: "photo",
          type: "image",
          src: "https://placehold.co/960x1080/1A4030/C5E229?text=Root+System",
          alt: "Mangrove root system",
        },
        {
          id: "el18",
          area: "cards",
          type: "headline",
          content: "Structure & Adaptations",
          audioSegmentText:
            "Mangroves have evolved remarkable adaptations to survive in waterlogged, saline, and oxygen-poor coastal environments.",
        },
        {
          id: "el19",
          area: "cards",
          type: "feature-item",
          title: "Prop and Stilt Roots",
          description:
            "Interlocking root networks anchor trees in soft sediments.",
        },
        {
          id: "el20",
          area: "cards",
          type: "feature-item",
          title: "Salt Excretion Glands",
          description:
            "Leaf glands actively expel salt, allowing survival in saline water.",
        },
        {
          id: "el21",
          area: "cards",
          type: "feature-item",
          title: "Pneumatophores",
          description:
            "Pencil-like root projections absorb atmospheric oxygen.",
        },
      ],
    },

    // ── Slide 5 · Biodiversity (dark-side-panel) ──────────────────────────────
    // (Renumbered from s6)
    {
      id: "s5",
      layout: "dark-side-panel",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el22",
          area: "panel",
          type: "headline",
          content: "Biodiversity in Mangrove Ecosystems",
          audioSegmentText:
            "Mangrove forests are among the most biodiverse environments on the planet, acting as critical nurseries for marine life.",
        },
        {
          id: "el23",
          area: "panel",
          type: "bullet-list",
          items: [
            "Marine De-Mersal — fish breeding grounds",
            "Bird Wildlife Species — nesting habitats",
            "Aquatic Vertebrate Species — marine nurseries",
          ],
        },
        {
          id: "el24",
          area: "content",
          type: "image",
          src: "https://placehold.co/1152x1080/1A4030/C5E229?text=Wildlife+Photos",
          alt: "Mangrove wildlife",
        },
      ],
    },

    // ── Slide 6 · Coastal Protection (image-feature-cards) ────────────────────
    // (Renumbered from s7)
    {
      id: "s6",
      layout: "image-feature-cards",
      transitionIn: { id: "slide-left-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el25",
          area: "photo",
          type: "image",
          src: "https://placehold.co/960x1080/1A4030/D0DDD0?text=Coastal+Shield",
          alt: "Mangroves protecting a coastline",
        },
        {
          id: "el26",
          area: "cards",
          type: "headline",
          content: "Importance to Coastal Protection",
          audioSegmentText:
            "Mangroves act as a natural coastal shield, dramatically cutting wave energy and guarding millions of people from storm damage.",
        },
        {
          id: "el27",
          area: "cards",
          type: "feature-item",
          title: "Prevention of Erosion",
          description: "Roots bind sediment and stabilise shorelines.",
        },
        {
          id: "el28",
          area: "cards",
          type: "feature-item",
          title: "Natural Storm Barrier",
          description: "Absorb wave energy from storms and tsunamis.",
        },
        {
          id: "el29",
          area: "cards",
          type: "feature-item",
          title: "Flood Control",
          description: "Dense roots slow water movement during rainfall.",
        },
        {
          id: "el30",
          area: "cards",
          type: "feature-item",
          title: "Carbon Storage",
          description: "Store carbon 5× faster than rainforests.",
        },
      ],
    },

    // ── Slide 7 · Threats (image-feature-cards) ───────────────────────────────
    // (Renumbered from s8)
    {
      id: "s7",
      layout: "image-feature-cards",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el31",
          area: "photo",
          type: "image",
          src: "https://placehold.co/960x1080/1A4030/C5E229?text=Deforestation",
          alt: "Degraded mangrove habitat",
        },
        {
          id: "el32",
          area: "cards",
          type: "headline",
          content: "Threats to Mangrove Ecosystems",
          audioSegmentText:
            "Mangroves are disappearing at an alarming rate due to human activity, with losses estimated at 0.4% per year globally.",
        },
        {
          id: "el33",
          area: "cards",
          type: "feature-item",
          title: "Global Loss",
          description: "Rapid loss driven by coastal development.",
        },
        {
          id: "el34",
          area: "cards",
          type: "feature-item",
          title: "Deforestation",
          description: "Clearance for timber and urban development.",
        },
        {
          id: "el35",
          area: "cards",
          type: "feature-item",
          title: "Pollution",
          description: "Agricultural runoff degrades water quality.",
        },
        {
          id: "el36",
          area: "cards",
          type: "feature-item",
          title: "Climate Change",
          description: "Sea level rise pushes tolerance thresholds.",
        },
        {
          id: "el37",
          area: "cards",
          type: "feature-item",
          title: "Aquaculture",
          description: "Shrimp farms drive 40% of loss in SE Asia.",
        },
      ],
    },

    // ── Slide 8 · Conservation (dark-side-panel) ──────────────────────────────
    // (Renumbered from s9)
    {
      id: "s8",
      layout: "dark-side-panel",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el38",
          area: "panel",
          type: "headline",
          content: "Conservation Efforts",
          audioSegmentText:
            "Governments, NGOs, and local communities are uniting to protect and restore mangrove forests around the world.",
        },
        {
          id: "el39",
          area: "panel",
          type: "feature-item",
          title: "Protection Programs",
          description: "Legislation establishing marine protected areas.",
        },
        {
          id: "el40",
          area: "panel",
          type: "feature-item",
          title: "Community Action",
          description: "Education and sustainable fishing initiatives.",
        },
        {
          id: "el41",
          area: "content",
          type: "image",
          src: "https://placehold.co/1152x540/1A4030/C5E229?text=Restoration+Work",
          alt: "Mangrove restoration planting",
        },
        {
          id: "el42",
          area: "content",
          type: "feature-item",
          title: "Reforestation",
          description: "Planting with 70–85% survival rates.",
        },
        {
          id: "el43",
          area: "content",
          type: "feature-item",
          title: "Sustainable Management",
          description: "Incorporating buffers into planning.",
        },
      ],
    },

    // ── Slide 9 · Future Importance (image-feature-cards) ────────────────────
    // (Renumbered from s10)
    {
      id: "s9",
      layout: "image-feature-cards",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el44",
          area: "photo",
          type: "image",
          src: "https://placehold.co/960x1080/1A4030/C5E229?text=Future+Forests",
          alt: "Mangrove forest canopy",
        },
        {
          id: "el45",
          area: "cards",
          type: "headline",
          content: "Future Importance",
          audioSegmentText:
            "As climate change accelerates, mangroves' role in carbon storage and coastal protection becomes ever more critical.",
        },
        {
          id: "el46",
          area: "cards",
          type: "feature-item",
          title: "Climate Mitigation",
          description: "Stores carbon to reduce warming effects.",
        },
        {
          id: "el47",
          area: "cards",
          type: "feature-item",
          title: "Biodiversity Support",
          description: "Nurtures species for long-term health.",
        },
        {
          id: "el48",
          area: "cards",
          type: "feature-item",
          title: "Community Safety",
          description: "Safeguards livelihoods from rising seas.",
        },
      ],
    },

    // ── Slide 10 · Conclusion (bullet-with-image) ─────────────────────────────
    // (Renumbered from s11)
    {
      id: "s10",
      layout: "bullet-with-image",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el49",
          area: "text",
          type: "headline",
          content: "Conclusion",
          audioSegmentText:
            "Mangrove ecosystems are irreplaceable — protecting them is not just an environmental imperative but a human one.",
        },
        {
          id: "el50",
          area: "text",
          type: "body-text",
          content:
            "Mangrove ecosystems play a vital role in protecting coastlines, supporting biodiversity, and maintaining sea-water balance, highlighting the need for conservation.",
        },
        {
          id: "el51",
          area: "image",
          type: "image",
          src: "https://placehold.co/864x1080/1A4030/C5E229?text=Mangrove+Canopy",
          alt: "Lush mangrove canopy",
        },
      ],
    },
  ],
};
