// dummySlides.ts
// This is your dummy presentation data to experiment with.
// Shape of this JSON is what your LLM will eventually produce.

import { PresentationJSON } from "./types";

export const dummyPresentation: PresentationJSON = {
  presentationId: "pres_001",
  theme: "dark",                        // "dark" | "light"
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    {
      slideId: "s1",
      duration: 8,                      // seconds
      layout: "title-center",
      palette: "midnight-blue",
      elements: [
        {
          id: "el1",
          type: "headline",
          content: "Wildlife of Kenya",
          scale: "display-xl",
          color: "primary",
        },
        {
          id: "el2",
          type: "subheadline",
          content: "A journey through the savanna",
          scale: "heading-md",
          color: "secondary",
        },
      ],
      avatar: {
        position: "top-right",       // "top-left" | "top-right" | "bottom-left" | "bottom-right"
        shape: "circle",                // "circle" | "squircle"
        size: "md",                     // "sm" | "md" | "lg"
        videoSrc: "/avatars/speaker1.mp4",
      },
      transition: {
        in: {
          type: "fade",
          durationFrames: 20,
        },
        out: {
          type: "fade",
          durationFrames: 15,
        },
      },
    },

    {
      slideId: "s2",
      duration: 10,
      layout: "bullet-with-image",
      palette: "forest-dark",
      elements: [
        {
          id: "el3",
          type: "headline",
          content: "The Big Five",
          scale: "display-lg",
          color: "primary",
        },
        {
          id: "el4",
          type: "bullet-list",
          scale: "body-lg",
          color: "secondary",
          items: [
            "Lion — apex predator of the grasslands",
            "Elephant — largest land animal on Earth",
            "Buffalo — fiercely protective herd animal",
            "Leopard — solitary and elusive hunter",
            "Rhinoceros — critically endangered giant",
          ],
        },
        {
          id: "el5",
          type: "image",
          src: "/images/kenya-savanna.jpg",
          region: "right-half",
          alt: "Kenya savanna at golden hour",
        },
      ],
      avatar: {
        position: "bottom-left",
        shape: "squircle",
        size: "md",
        videoSrc: "/avatars/speaker1.mp4",
      },
      transition: {
        in: {
          type: "slide-up",
          durationFrames: 25,
        },
        out: {
          type: "fade",
          durationFrames: 15,
        },
      },
    },

    {
      slideId: "s3",
      duration: 7,
      layout: "stat-grid",
      palette: "sunset-warm",
      elements: [
        {
          id: "el6",
          type: "headline",
          content: "Kenya by the Numbers",
          scale: "display-lg",
          color: "primary",
        },
        {
          id: "el7",
          type: "stat-number",
          content: "58",
          label: "National Parks & Reserves",
          scale: "display-xl",
          accent: true,
          gridPosition: 1,
        },
        {
          id: "el8",
          type: "stat-number",
          content: "25K",
          label: "Lions remaining in the wild",
          scale: "display-xl",
          accent: true,
          gridPosition: 2,
        },
        {
          id: "el9",
          type: "stat-number",
          content: "1.5M",
          label: "Wildebeest in annual migration",
          scale: "display-xl",
          accent: true,
          gridPosition: 3,
        },
      ],
      avatar: {
        position: "bottom-right",
        shape: "circle",
        size: "sm",
        videoSrc: "/avatars/speaker1.mp4",
      },
      transition: {
        in: {
          type: "fade",
          durationFrames: 20,
        },
        out: {
          type: "slide-down",
          durationFrames: 20,
        },
      },
    },
  ],
};