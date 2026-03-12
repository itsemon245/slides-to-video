import { staticFile } from "remotion";
import type { ContentPresentation } from "../../schema/content";

export const natureLightContent: ContentPresentation = {
  id: "pres_mangrove_001",
  templateId: "nature-light",
  title: "The Mangrove Ecosystem",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [

    // ── Slide 2 · What is a Mangrove Ecosystem? (vertical-split) ──────────────
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
        },
        {
          id: "el6",
          area: "top",
          type: "body-text",
          content:
            "A mangrove ecosystem is a coastal wetland environment dominated by salt-tolerant trees, thriving in tidal zones, supporting biodiversity, protecting shorelines, and maintaining ecological balance globally.",
          audioSegmentText:
            "A mangrove ecosystem is a coastal wetland dominated by salt-tolerant trees that thrive in tidal zones, supporting biodiversity and protecting shorelines worldwide.",
        },
        {
          id: "el7a",
          area: "bottom",
          type: "image",
          src: staticFile("assets/templates/nature-light/mangrove-forest.png"),
          alt: "Mangrove forest",
        },
        {
          id: "el7b",
          area: "bottom",
          type: "image",
          src: staticFile("assets/templates/nature-light/mangrove-roots-detail.png"),
          alt: "Close up of mangrove roots",
        },
      ],
    },

    // ── Slide 5 · Biodiversity (dark-side-panel) ──────────────────────────────
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
          audioSegmentText:
            "Mangrove forests are among the most biodiverse environments on the planet, acting as critical nurseries for marine life.",
        },
        {
          id: "el24",
          area: "content",
          type: "image",
          src: staticFile("assets/templates/nature-light/mangrove-wildlife.png"),
          alt: "Mangrove wildlife",
        },
      ],
    },

    // ── Slide 6 · Coastal Protection (image-feature-cards) ────────────────────
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
          src: staticFile("assets/templates/nature-light/mangrove-coastal-protection.png"),
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

    // ── Slide 8 · Conservation (dark-side-panel) ──────────────────────────────
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
          src: staticFile("assets/templates/nature-light/mangrove-restoration.png"),
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

    // ── Slide 10 · Conclusion (bullet-with-image) ─────────────────────────────
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
          src: staticFile("assets/templates/nature-light/mangrove-canopy.webp"),
          alt: "Lush mangrove canopy",
        },
      ],
    },
  ],
};
