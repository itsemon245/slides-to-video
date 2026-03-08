// sample-presentation.ts
// Sample ContentPresentation using the new schema.
// Mirrors the old llm-presentation.ts data but typed against ContentPresentationSchema.

import type { ContentPresentation } from "./schema/content";

export const samplePresentation: ContentPresentation = {
  id: "pres_llm_001",
  templateId: "corporate-dark",
  title: "Large Language Models",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    // ── Slide 1 · Title ──────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "title-center",
      transitionIn:  { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el1",
          type: "headline",
          content: "Large Language Models",
          audioSegmentText: "Today we explore one of the most transformative technologies of our time — Large Language Models.",
        },
        {
          id: "el2",
          type: "subheadline",
          content: "How machines learned to speak — and think",
        },
      ],
    },

    // ── Slide 2 · What is an LLM? ────────────────────────────────────────────
    {
      id: "s2",
      layout: "bullet-with-image",
      transitionIn:  { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el3",
          type: "headline",
          content: "What Is an LLM?",
          audioSegmentText: "A Large Language Model is a neural network trained on vast amounts of text data.",
        },
        {
          id: "el4",
          type: "bullet-list",
          items: [
            "A neural network trained on vast amounts of text data",
            "Predicts the next token given a sequence of tokens",
            "Billions — sometimes trillions — of learnable parameters",
            "Emergent capabilities arise at scale",
            "Foundation for chatbots, coding assistants, and more",
          ],
        },
        {
          id: "el5",
          type: "image",
          src: "https://placehold.co/960x1080/131929/8899cc?text=Neural+Network",
          alt: "Abstract neural network visualization",
        },
      ],
    },

    // ── Slide 3 · Transformer Architecture ──────────────────────────────────
    {
      id: "s3",
      layout: "bullet-with-graph",
      transitionIn:  { id: "slide-left-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el6",
          type: "headline",
          content: "The Transformer Architecture",
          audioSegmentText: "The transformer architecture, introduced in 2017, revolutionized how we build language models.",
        },
        {
          id: "el7",
          type: "bullet-list",
          items: [
            "Introduced in \"Attention Is All You Need\" (2017)",
            "Self-attention lets every token relate to every other",
            "Encoder–Decoder or Decoder-only designs",
            "Scales efficiently on modern GPU clusters",
            "Replaced RNNs and LSTMs as the dominant paradigm",
          ],
        },
        {
          id: "el8",
          type: "bar-chart",
          title: "Parameter Growth",
          maxValue: 100,
          bars: [
            { label: "GPT-1",  value: 1,   sublabel: "117 M"  },
            { label: "BERT",   value: 3,   sublabel: "340 M"  },
            { label: "GPT-2",  value: 13,  sublabel: "1.5 B"  },
            { label: "GPT-3",  value: 58,  sublabel: "175 B"  },
            { label: "GPT-4",  value: 100, sublabel: "~1.8 T" },
          ],
        },
      ],
    },

    // ── Slide 4 · Scale by the Numbers ───────────────────────────────────────
    {
      id: "s4",
      layout: "stat-grid",
      transitionIn:  { id: "zoom-in-in" },
      transitionOut: { id: "slide-down-out" },
      elements: [
        {
          id: "el9",
          type: "headline",
          content: "LLMs at Scale",
          audioSegmentText: "The numbers behind modern language models are staggering.",
        },
        {
          id: "el10",
          type: "stat-number",
          content: "1.8T",
          label: "Parameters in GPT-4 (est.)",
          accent: true,
        },
        {
          id: "el11",
          type: "stat-number",
          content: "15T",
          label: "Tokens in LLaMA 3 training set",
          accent: true,
        },
        {
          id: "el12",
          type: "stat-number",
          content: "100M+",
          label: "ChatGPT users in first 2 months",
          accent: true,
        },
      ],
    },

    // ── Slide 5 · Quote ───────────────────────────────────────────────────────
    {
      id: "s5",
      layout: "quote-focus",
      transitionIn:  { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el13",
          type: "quote",
          content: "These models are doing something that looks a lot like thinking — and that should make us think.",
          attribution: "— Geoffrey Hinton, 2023",
          audioSegmentText: "Geoffrey Hinton, known as the Godfather of AI, made this striking observation in 2023.",
        },
      ],
    },

    // ── Slide 6 · Full Bleed ─────────────────────────────────────────────────
    {
      id: "s6",
      layout: "full-bleed-image",
      transitionIn:  { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "el14",
          type: "image",
          src: "https://placehold.co/1920x1080/0a0e1a/4f8eff?text=The+Road+Ahead",
          alt: "The road ahead for AI",
        },
        {
          id: "el15",
          type: "headline",
          content: "The Road Ahead",
          audioSegmentText: "Agents, multimodality, reasoning, and alignment — the next decade will redefine what software can do.",
        },
        {
          id: "el16",
          type: "body-text",
          content: "Agents · Multimodality · Reasoning · Alignment",
        },
      ],
    },
  ],
};
