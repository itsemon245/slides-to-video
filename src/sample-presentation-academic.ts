import { staticFile } from "remotion";
import type { ContentPresentation } from "./schema/content";

export const academicSamplePresentation: ContentPresentation = {
  id: "pres_academic_education_001",
  templateId: "academic-education",
  title: "Academic Education",
  fps: 30,
  resolution: { width: 1920, height: 1080 },

  slides: [
    {
      id: "academic-s1",
      layout: "academic-hero",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s1-headline",
          area: "content",
          type: "headline",
          content: "Academic Education School",
        },
        {
          id: "ae-s1-subheadline",
          area: "content",
          type: "subheadline",
          content:
            "A modern learning environment built around curiosity, confidence, and community.",
        },
        {
          id: "ae-s1-body",
          area: "content",
          type: "body-text",
          content:
            "This deck introduces the school vision, core programs, teaching approach, student support, faculty, and outcomes.",
        },
      ],
    },
    {
      id: "academic-s2",
      layout: "academic-agenda",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s2-title",
          area: "list",
          type: "headline",
          content: "Table of Content",
        },
        {
          id: "ae-s2-list",
          area: "list",
          type: "bullet-list",
          items: [
            "About the school",
            "Vision and mission",
            "Academic programs",
            "Teaching methodology",
            "Student support",
            "Assessment results",
          ],
        },
        {
          id: "ae-s2-detail-title",
          area: "detail",
          type: "headline",
          content:
            "A complete overview of how the school teaches, supports, and measures growth.",
        },
        {
          id: "ae-s2-detail-body",
          area: "detail",
          type: "body-text",
          content:
            "Each section mirrors the original academic deck while translating it into reusable content structures for this template.",
        },
      ],
    },
    {
      id: "academic-s3",
      layout: "academic-editorial",
      transitionIn: { id: "slide-right-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s3-headline",
          area: "lead",
          type: "headline",
          content: "About Our School",
        },
        {
          id: "ae-s3-quote",
          area: "lead",
          type: "quote",
          content:
            "Building a strong foundation for success through knowledge, care, and real-world preparation.",
          attribution: "Academic Education School",
        },
        {
          id: "ae-s3-stat",
          area: "lead",
          type: "stat-number",
          content: "2026",
          label: "Future-ready learning roadmap",
        },
        {
          id: "ae-s3-feature-1",
          area: "aside",
          type: "feature-item",
          title: "Brief Overview",
          description:
            "A student-centered school focused on academic achievement, personal growth, and inclusive participation.",
        },
        {
          id: "ae-s3-feature-2",
          area: "aside",
          type: "feature-item",
          title: "School Philosophy",
          description:
            "Learning should be rigorous, supportive, and connected to the confidence students need beyond the classroom.",
        },
      ],
    },
    {
      id: "academic-s4",
      layout: "academic-program-highlight",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s4-left-title",
          area: "left",
          type: "headline",
          content: "Our Academic Programs",
        },
        {
          id: "ae-s4-left-copy",
          area: "left",
          type: "body-text",
          content:
            "Structured pathways help students build strong fundamentals while exploring advanced interests.",
        },
        {
          id: "ae-s4-left-stat",
          area: "left",
          type: "stat-number",
          content: "85.2%",
          label: "Students exceeding annual progress benchmarks",
        },
        {
          id: "ae-s4-media",
          area: "media",
          type: "image",
          src: staticFile("assets/templates/academic-education/campus-arch.svg"),
          alt: "Stylized school campus",
        },
        {
          id: "ae-s4-right-title",
          area: "right",
          type: "headline",
          content: "Programs That Inspire Curiosity",
        },
        {
          id: "ae-s4-right-item-1",
          area: "right",
          type: "feature-item",
          title: "Core Curriculum",
          description:
            "Mathematics, language, science, and humanities delivered through clear progression.",
        },
        {
          id: "ae-s4-right-item-2",
          area: "right",
          type: "feature-item",
          title: "Special Programs",
          description:
            "Clubs, labs, project studios, and enrichment modules that extend beyond the timetable.",
        },
      ],
    },
    {
      id: "academic-s5",
      layout: "academic-split-focus",
      transitionIn: { id: "slide-up-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s5-story-title",
          area: "story",
          type: "headline",
          content: "Unlocking Student Potential Through Quality Teaching",
        },
        {
          id: "ae-s5-story-body",
          area: "story",
          type: "body-text",
          content:
            "Teachers combine explicit instruction, collaborative practice, and measurable feedback so students understand how to improve.",
        },
        {
          id: "ae-s5-story-bullets",
          area: "story",
          type: "bullet-list",
          items: [
            "Interactive classroom routines",
            "Clear learning goals and reflection",
            "Balanced academic and personal development",
          ],
        },
        {
          id: "ae-s5-focus-title",
          area: "focus",
          type: "headline",
          content: "Education Focused on Developing Confident Learners",
        },
        {
          id: "ae-s5-focus-stat",
          area: "focus",
          type: "stat-number",
          content: "75%",
          label: "Students report higher confidence after project-based learning cycles",
        },
        {
          id: "ae-s5-focus-card",
          area: "focus",
          type: "feature-item",
          title: "Student Development",
          description:
            "Academic mastery is paired with resilience, communication, and participation in school life.",
        },
      ],
    },
    {
      id: "academic-s6",
      layout: "academic-stat-panel",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s6-lead-title",
          area: "lead",
          type: "headline",
          content: "Safety and Student Support",
        },
        {
          id: "ae-s6-lead-copy",
          area: "lead",
          type: "body-text",
          content:
            "Support systems are designed to keep students safe, connected, and ready to participate every day.",
        },
        {
          id: "ae-s6-lead-stat",
          area: "lead",
          type: "stat-number",
          content: "72%",
          label: "Families reporting stronger confidence in student wellbeing support",
        },
        {
          id: "ae-s6-card-1",
          area: "cards",
          type: "feature-item",
          title: "Wellbeing Check-ins",
          description:
            "Structured teacher touchpoints help identify issues early and guide students to support.",
        },
        {
          id: "ae-s6-card-2",
          area: "cards",
          type: "feature-item",
          title: "Learning Support",
          description:
            "Targeted interventions provide academic scaffolding without isolating learners.",
        },
        {
          id: "ae-s6-media",
          area: "media",
          type: "image",
          src: staticFile("assets/templates/academic-education/classroom-tech.svg"),
          alt: "Stylized classroom technology scene",
        },
        {
          id: "ae-s6-media-copy",
          area: "media",
          type: "body-text",
          content:
            "Support spaces, digital tools, and family communication are coordinated as one system.",
        },
      ],
    },
    {
      id: "academic-s7",
      layout: "academic-team-grid",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s7-header",
          area: "header",
          type: "headline",
          content: "Meet Our Great Teachers",
        },
        {
          id: "ae-s7-a-image",
          area: "memberA",
          type: "image",
          src: staticFile("assets/templates/academic-education/teacher-maya.svg"),
          alt: "Teacher portrait Maya",
        },
        {
          id: "ae-s7-a-name",
          area: "memberA",
          type: "subheadline",
          content: "Maya Yulliana",
        },
        {
          id: "ae-s7-a-role",
          area: "memberA",
          type: "body-text",
          content: "Primary learning specialist",
        },
        {
          id: "ae-s7-b-image",
          area: "memberB",
          type: "image",
          src: staticFile("assets/templates/academic-education/teacher-alex.svg"),
          alt: "Teacher portrait Alex",
        },
        {
          id: "ae-s7-b-name",
          area: "memberB",
          type: "subheadline",
          content: "Alex Grimaldo",
        },
        {
          id: "ae-s7-b-role",
          area: "memberB",
          type: "body-text",
          content: "Academic performance lead",
        },
        {
          id: "ae-s7-c-image",
          area: "memberC",
          type: "image",
          src: staticFile("assets/templates/academic-education/teacher-nessa.svg"),
          alt: "Teacher portrait Nessa",
        },
        {
          id: "ae-s7-c-name",
          area: "memberC",
          type: "subheadline",
          content: "Nessa Leony",
        },
        {
          id: "ae-s7-c-role",
          area: "memberC",
          type: "body-text",
          content: "Student wellbeing coordinator",
        },
      ],
    },
    {
      id: "academic-s8",
      layout: "academic-data-table",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s8-title",
          area: "header",
          type: "headline",
          content: "Assessment Results Data",
        },
        {
          id: "ae-s8-table",
          area: "table",
          type: "data-table",
          columns: [
            "Student Assessment",
            "Result A",
            "Result B",
            "Result C",
            "Result D",
            "Result E",
          ],
          rows: [
            { label: "Student Assessment A", values: [88, 95, 58, 55, 90] },
            { label: "Student Assessment B", values: [45, 75, 78, 90, 85] },
            { label: "Student Assessment C", values: [75, 45, 80, 65, 70] },
            { label: "Student Assessment D", values: [65, 88, 90, 48, 75] },
          ],
        },
        {
          id: "ae-s8-footer",
          area: "footer",
          type: "body-text",
          content:
            "Results are reviewed term by term to identify growth trends, reteaching needs, and strong-performing groups.",
        },
      ],
    },
    {
      id: "academic-s9",
      layout: "academic-performance",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s9-headline",
          area: "left",
          type: "headline",
          content: "Academic Performance",
        },
        {
          id: "ae-s9-stat-1",
          area: "left",
          type: "stat-number",
          content: "46.2%",
          label: "Student potential through quality support",
        },
        {
          id: "ae-s9-stat-2",
          area: "left",
          type: "stat-number",
          content: "72.9%",
          label: "Student potential through quality instruction",
        },
        {
          id: "ae-s9-right-title",
          area: "right",
          type: "headline",
          content: "Inspiring Excellence Through Interactive Learning",
        },
        {
          id: "ae-s9-right-date",
          area: "right",
          type: "subheadline",
          content: "25 January 2026",
        },
        {
          id: "ae-s9-chart",
          area: "right",
          type: "radial-chart",
          segments: [
            { label: "Engaged learners", value: 58, color: "#A58BF6" },
            { label: "Growth cohort", value: 42, color: "#E3A5E5" },
          ],
        },
        {
          id: "ae-s9-body",
          area: "right",
          type: "body-text",
          content:
            "Performance reflects stronger engagement in blended instruction, higher participation, and more visible student ownership.",
        },
      ],
    },
    {
      id: "academic-s10",
      layout: "academic-closing",
      transitionIn: { id: "fade-in" },
      transitionOut: { id: "fade-out" },
      elements: [
        {
          id: "ae-s10-title",
          area: "content",
          type: "headline",
          content: "Get in Touch With Us",
        },
        {
          id: "ae-s10-subheadline",
          area: "content",
          type: "subheadline",
          content: "Thank you for your attention",
        },
        {
          id: "ae-s10-body",
          area: "content",
          type: "body-text",
          content:
            "Academic Education School continues to grow through strong teaching, measurable outcomes, and a clear commitment to every learner.",
        },
      ],
    },
  ],
};
