# Template Creation Guide

Use this guide as the default instruction set when creating a new presentation template from a PDF, PPTX-exported PDF, or similar reference deck.

## Goal

Create a new template that fits the existing presentation engine and follows the project conventions in:

- [`src/schema/template.ts`](/home/emon/Work/remotion-experiment/src/schema/template.ts)
- [`src/templates/nature-light.ts`](/home/emon/Work/remotion-experiment/src/templates/nature-light.ts)

The output should be production-oriented, not a rough visual mock.

## Default Inputs

When starting a new template, gather:

- Source PDF path or reference images
- Target template `id`
- Target template `name`

If the source is a PDF exported from PPTX:

- Some elements may be missing or rendered incorrectly.
- Some pages may contain interactive website/navigation elements that do not matter for the actual slide template.
- Ignore broken interactive elements and obvious export artifacts.
- If a specific slide cannot be parsed reliably, it is acceptable to skip that slide instead of forcing a bad implementation.

## Primary References

Always use these as the main implementation references:

- [`src/schema/template.ts`](/home/emon/Work/remotion-experiment/src/schema/template.ts) for the template contract
- [`src/templates/nature-light.ts`](/home/emon/Work/remotion-experiment/src/templates/nature-light.ts) as the baseline example for structure and style

When evaluating whether an element already exists, check:

- [`src/components/presentation/elements/index.tsx`](/home/emon/Work/remotion-experiment/src/components/presentation/elements/index.tsx)

When evaluating whether a layout should be extracted and reused, check:

- [`src/layouts/index.ts`](/home/emon/Work/remotion-experiment/src/layouts/index.ts)
- the existing files in `src/layouts/`

## Core Rules

### 1. Build the template around the existing schema

- The new template must conform to [`src/schema/template.ts`](/home/emon/Work/remotion-experiment/src/schema/template.ts).
- Follow the same overall structure as [`src/templates/nature-light.ts`](/home/emon/Work/remotion-experiment/src/templates/nature-light.ts):
  - `tokens`
  - `avatarDefaults`
  - `slideDefaults`
  - `elementDefaults`
  - `layouts`

### 2. Keep layouts inline by default

- Define layouts inline inside the template file by default.
- Most template layouts are unique to that template and should stay local to it.
- Do not extract layouts prematurely.

### 3. Extract layouts only when they are genuinely reusable

If a layout is clearly generic and likely reusable across templates:

- Move it into its own isolated file in `src/layouts/`
- Export it through [`src/layouts/index.ts`](/home/emon/Work/remotion-experiment/src/layouts/index.ts)
- Keep the extracted layout structure generic and token-driven

A layout is worth extracting only if:

- Its structure is content-agnostic
- It does not depend on one template’s unique visual gimmicks
- It is likely to be reused across multiple templates

Otherwise, keep it inline in the template file.

### 4. Reuse existing elements first

Before creating a new element:

- Check [`src/components/presentation/elements/index.tsx`](/home/emon/Work/remotion-experiment/src/components/presentation/elements/index.tsx)
- Reuse the existing element set whenever it can represent the design cleanly

Do not add a new element just because a slide looks visually different. Prefer solving visual differences with:

- template tokens
- area styles
- element style configs
- decorations
- layout structure

### 5. Add new elements only when the current set is insufficient

If the currently available elements are not enough, create the missing element(s).

When adding a new element:

- Keep it similar in architecture to the existing elements
- Keep it headless
- Visual tokens, colors, typography, and most presentation-specific behavior should come from the template, not be hardcoded inside the component
- Avoid baking template-specific branding into the component
- Keep the primitive reusable

If a new element is added, update all necessary places, including as applicable:

- content schema in `src/schema/content.ts`
- template element type support in `src/schema/template.ts`
- component implementation in `src/components/presentation/elements/<element>/index.tsx`
- exports/registry/controls in [`src/components/presentation/elements/index.tsx`](/home/emon/Work/remotion-experiment/src/components/presentation/elements/index.tsx)

## PDF Interpretation Rules

When building from a PDF:

- Identify repeated layout patterns first
- Build the reusable visual system of the deck, not a pixel-perfect copy of every page artifact
- Infer missing details where the export is clearly broken
- Ignore website-like navigation/header interactions unless they are clearly part of the slide identity
- Skip pages that are too corrupted or ambiguous to model well

Focus on:

- recurring layouts
- typography hierarchy
- palette and token system
- shapes, cards, dividers, overlays, and decorations
- element types actually required by the deck

## Recommended Workflow

1. Inspect the PDF and group slides by recurring layout pattern.
2. Derive the template tokens from the deck.
3. Create the new template file in `src/templates/`.
4. Implement layouts inline in the template file.
5. Reuse existing elements where possible.
6. Add new headless elements only if the current registry is insufficient.
7. Extract a layout into `src/layouts/` only if it is clearly reusable beyond this template.
8. Validate the template against the existing schema and project conventions.

## Expected Output

For a normal new template, expect to create:

- `src/templates/<template-id>.ts`

Optionally create, only if needed:

- one or more reusable layout files in `src/layouts/`
- one or more new element components in `src/components/presentation/elements/`
- schema/registry updates required for those new elements

## Quality Bar

The finished template should:

- feel native to this codebase
- follow the structure and discipline of `nature-light`
- keep layout logic mostly inside the template file
- keep shared primitives generic
- avoid unnecessary extra abstractions
- prefer correctness and maintainability over forcing every broken PDF page into the system
