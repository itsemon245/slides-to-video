# Template Restructure Plan

## Problem Statement

LLMs (even flagship models like Opus 4.6, Codex 5.4 High) produce mediocre template layouts when generating from reference images. The root causes are:

1. **Visual-to-CSS spatial reasoning gap** — LLMs cannot accurately "measure" a screenshot and translate pixel positions into CSS Grid/Flexbox values. This is the primary bottleneck.
2. **Context degradation from file size** — Template files reach 900+ lines when all custom layouts are inline. By layout #10-14, attention dilutes, styles bleed between layouts, and cumulative errors compound.
3. **No feedback loop** — Layouts are generated blind with no way to verify output against the reference image.
4. **The creation guide addresses conventions, not the hard problem** — `TEMPLATE_CREATION.md` is about schema conformance, not about how to translate visual designs into CSS grid values.

## Solution

### Phase 1: Directory Restructure

Move from flat template files to per-template directories with isolated layout files.

**Before:**
```
src/templates/
├── default.ts              # registry
├── nature-light.ts         # 228 lines (tokens + defaults + 2 custom layouts inline)
├── academic-education.ts   # 953 lines (tokens + defaults + 10 custom layouts inline)
├── new-general.ts          # 927 lines (tokens + defaults + 14 custom layouts inline)
└── corporate-dark.ts       # 82 lines (tokens + defaults, no custom layouts)

src/contents/
├── nature-light.content.ts
├── academic-education.content.ts
└── new-general.content.ts
```

**After:**
```
src/templates/
├── registry.ts                              # renamed from default.ts
│
├── nature-light/
│   ├── index.ts                             # tokens + defaults + layout imports (~55 lines)
│   ├── content.ts                           # default sample content
│   └── layouts/
│       ├── vertical-split.ts
│       └── list-divider-panel.ts
│
├── academic-education/
│   ├── index.ts
│   ├── content.ts
│   └── layouts/
│       ├── academic-hero.ts
│       ├── academic-agenda.ts
│       ├── academic-editorial.ts
│       ├── academic-program-highlight.ts
│       ├── academic-split-focus.ts
│       ├── academic-stat-panel.ts
│       ├── academic-team-grid.ts
│       ├── academic-data-table.ts
│       ├── academic-performance.ts
│       └── academic-closing.ts
│
├── new-general/
│   ├── index.ts
│   ├── content.ts
│   └── layouts/
│       ├── new-general-title.ts
│       ├── new-general-insights-grid.ts
│       ├── new-general-funnel-metrics.ts
│       ├── new-general-agenda.ts
│       ├── new-general-dashboard.ts
│       ├── new-general-timeline.ts
│       ├── new-general-team-grid.ts
│       ├── new-general-quote-image.ts
│       ├── new-general-full-bleed-quote.ts
│       ├── new-general-summary-split.ts
│       ├── new-general-table-focus.ts
│       ├── new-general-chart-sidebar.ts
│       ├── new-general-validation-grid.ts
│       └── new-general-thank-you.ts
│
└── corporate-dark/
    ├── index.ts
    └── content.ts                           # no layouts/ dir — uses only shared defaults
```

Shared/reusable layouts stay at `src/layouts/` unchanged.

**No template-specific components.** The existing element architecture (shared elements + variants + ElementStyleConfig + tokens) is sufficient. If a new visual primitive is ever needed, add it to the shared element registry.

### Phase 2: Layout Preview Script

Create `scripts/preview-layout.ts` that:
- Takes a template ID + layout name (or slide ID)
- Auto-generates dummy content from the layout's `accepts` arrays
- Renders a Remotion still (single frame PNG) via `npx remotion still`
- Outputs the PNG path for visual verification

This enables the generate → screenshot → compare → fix loop.

### Phase 3: Update TEMPLATE_CREATION.md

- Add "Common Layout Recipes" section (~10-15 grid patterns with exact CSS values)
- Change workflow to single-layout iterative generation
- Add spatial annotation instructions
- Document the preview script usage

### Phase 4: New Template Generation Workflow

When creating a new template from reference images:
1. Extract tokens (colors, fonts) — LLMs do this well
2. Set up elementDefaults and avatarDefaults
3. For each reference slide:
   a. Annotate spatial structure ("60/40 split, left has text, right has image")
   b. Generate one layout file
   c. Preview with the preview script
   d. Show reference vs rendered to LLM for correction
   e. Iterate until acceptable
   f. Move to next layout

## Decisions

- **No template-specific components** — the shared element system handles styling via tokens, variants, and ElementStyleConfig
- **Keep common elements** — they are the foundation; removing them would break the declarative template model and the future web editor
- **Shared layouts stay at `src/layouts/`** — only template-specific custom layouts move into `<template>/layouts/`
- **Content files move into template directories** — colocated with their template for cleaner organization
