# Template Creation Guide

Use this guide as the default instruction set when creating a new presentation template from a PDF, PPTX-exported PDF, or similar reference deck.

## Goal

Create a new template that fits the existing presentation engine and follows the project conventions in:

- [`src/schema/template.ts`](src/schema/template.ts) for the template contract
- [`src/templates/nature-light/index.ts`](src/templates/nature-light/index.ts) as the baseline example

The output should be production-oriented, not a rough visual mock.

## Directory Structure

Each template lives in its own directory:

```
src/templates/<template-id>/
├── index.ts          # tokens + defaults + layout imports
├── content.ts        # default sample content for this template
├── helpers.ts        # (optional) shared style helpers for this template's layouts
└── layouts/
    ├── layout-name-a.ts
    ├── layout-name-b.ts
    └── ...
```

Shared/reusable layouts live at `src/layouts/` and are imported via `createDefaultLayouts(tokens)`.

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

- [`src/schema/template.ts`](src/schema/template.ts) for the template contract
- [`src/templates/nature-light/index.ts`](src/templates/nature-light/index.ts) as the baseline example for structure and style

When evaluating whether an element already exists, check:

- [`src/components/presentation/elements/index.tsx`](src/components/presentation/elements/index.tsx)

When evaluating whether a layout should be extracted and reused, check:

- [`src/layouts/index.ts`](src/layouts/index.ts)
- the existing files in `src/layouts/`

## Core Rules

### 1. Build the template around the existing schema

- The new template must conform to [`src/schema/template.ts`](src/schema/template.ts).
- Follow the same overall structure as [`src/templates/nature-light/index.ts`](src/templates/nature-light/index.ts):
  - `tokens`
  - `avatarDefaults`
  - `slideDefaults`
  - `elementDefaults`
  - `layouts`

### 2. One layout per file

- Each custom layout goes in its own file under `src/templates/<template-id>/layouts/`.
- Each file exports a factory function: `(tokens: DesignTokens) => LayoutTemplate`.
- The template `index.ts` imports and assembles all layouts.
- This keeps context small and allows iterative development/verification of individual layouts.

### 3. Extract shared layouts only when genuinely reusable

If a layout is clearly generic and likely reusable across templates:

- Move it into its own isolated file in `src/layouts/`
- Export it through [`src/layouts/index.ts`](src/layouts/index.ts)
- Keep the extracted layout structure generic and token-driven

A layout is worth extracting only if:

- Its structure is content-agnostic
- It does not depend on one template's unique visual gimmicks
- It is likely to be reused across multiple templates

Otherwise, keep it in the template's `layouts/` directory.

### 4. Reuse existing elements first

Before creating a new element:

- Check [`src/components/presentation/elements/index.tsx`](src/components/presentation/elements/index.tsx)
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
- exports/registry/controls in [`src/components/presentation/elements/index.tsx`](src/components/presentation/elements/index.tsx)

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

## Common Layout Recipes

Use these as building blocks when translating reference images to CSS Grid. Pick the closest match and adjust proportions.

### Equal two-column split (50/50)

```ts
gridTemplateAreas: `"left right"`,
gridTemplateColumns: "1fr 1fr",
gridTemplateRows: "1fr",
```

### Weighted two-column split (e.g., 60/40)

```ts
gridTemplateAreas: `"main side"`,
gridTemplateColumns: "1.2fr 0.8fr",   // adjust ratio to match reference
gridTemplateRows: "1fr",
```

### Two-column with fixed sidebar (e.g., 40% sidebar)

```ts
gridTemplateAreas: `"panel content"`,
gridTemplateColumns: "40% 1fr",
gridTemplateRows: "1fr",
```

### Three-column equal

```ts
gridTemplateAreas: `"col1 col2 col3"`,
gridTemplateColumns: "1fr 1fr 1fr",
gridTemplateRows: "1fr",
```

### Three-column weighted (e.g., narrow-wide-medium)

```ts
gridTemplateAreas: `"left media right"`,
gridTemplateColumns: "0.82fr 0.92fr 1.06fr",
gridTemplateRows: "1fr",
```

### Header + body (stacked)

```ts
gridTemplateAreas: `"header" "body"`,
gridTemplateColumns: "1fr",
gridTemplateRows: "auto 1fr",
```

### Header + two-column body

```ts
gridTemplateAreas: `"header header" "left right"`,
gridTemplateColumns: "1fr 1fr",
gridTemplateRows: "auto 1fr",
```

### Header + three-column body (e.g., team grid)

```ts
gridTemplateAreas: `"header header header" "a b c"`,
gridTemplateColumns: "1fr 1fr 1fr",
gridTemplateRows: "auto 1fr",
```

### Header + four-column body (e.g., timeline/steps)

```ts
gridTemplateAreas: `"header header header header" "a b c d"`,
gridTemplateColumns: "1fr 1fr 1fr 1fr",
gridTemplateRows: "auto 1fr",
```

### Top hero + bottom content (vertical split)

```ts
gridTemplateAreas: `"top" "bottom"`,
gridTemplateColumns: "1fr",
gridTemplateRows: "1fr 1fr",          // adjust ratio as needed
```

### Header + body + footer (three rows)

```ts
gridTemplateAreas: `"header" "body" "footer"`,
gridTemplateColumns: "1fr",
gridTemplateRows: "auto 1fr auto",
```

### Full-bleed single area

```ts
gridTemplateAreas: `"content"`,
gridTemplateColumns: "1fr",
gridTemplateRows: "1fr",
```

### Header + two-row body with different widths

```ts
gridTemplateAreas: `"intro intro" "points media"`,
gridTemplateColumns: "1.05fr 0.95fr",
gridTemplateRows: "auto 1fr",
```

### Common area padding values

- Generous: `"80px 84px"` (spacious presentation feel)
- Standard: `"60px 64px"` (balanced)
- Tight: `"40px 48px"` (dense content)
- Asymmetric: `"72px 82px 68px 18px"` (top right bottom left — used when areas share a visual border)

### Common gap values

- Between areas: `gap: 0` (areas share borders)
- Within a flex column: `gap: 18-26` (stacked elements)
- Within a grid: `gap: 16-20` (card grids)

## Recommended Workflow

### Step 1: Extract tokens

Inspect the reference images and derive:

- Color palette → map to `background`, `surface`, `primary`, `secondary`, `accent`, `muted`
- Typography → `heading` and `body` font families

This step is straightforward — LLMs do this well from reference images.

### Step 2: Create the template scaffold

Create the template directory and `index.ts` with:

- `tokens`
- `avatarDefaults`
- `slideDefaults`
- `elementDefaults`
- `layouts: { ...createDefaultLayouts(tokens) }` (start with shared layouts only)

### Step 3: Create layouts one at a time

For each reference slide that needs a custom layout:

1. **Annotate the spatial structure** before writing code. Describe in plain text:
   - How many columns/rows?
   - What's the approximate width ratio? (e.g., "60/40 split")
   - What content goes in each area? (e.g., "left: headline + body text, right: image")
   - What's the background treatment? (e.g., "dark left panel, light right panel")

2. **Pick the closest recipe** from the Common Layout Recipes section above.

3. **Create the layout file** at `src/templates/<template-id>/layouts/<layout-name>.ts`.

4. **Preview the result:**
   ```bash
   ./scripts/preview-slide.sh <template-id> <slide-id>
   ```

5. **Compare the rendered PNG** (`out/preview/<template-id>-<slide-id>.png`) against the reference image.

6. **Iterate** — show both images to the LLM and ask it to fix differences. Repeat until the layout matches the reference acceptably.

7. **Move to the next layout** only after the current one is verified.

### Step 4: Register the template

- Add the template to `src/templates/registry.ts`
- Add the layout area names to `LAYOUT_AREAS` in `src/layouts/index.ts`

### Step 5: Validate

- Run `npx tsc --noEmit` to verify types
- Run `npx remotion bundle` to verify the build
- Preview in Remotion Studio: `pnpm dev`, then select your template via `?template=<id>`

## Expected Output

For a normal new template, expect to create:

```
src/templates/<template-id>/
├── index.ts
├── content.ts
├── helpers.ts           # if needed
└── layouts/
    ├── <layout-a>.ts
    ├── <layout-b>.ts
    └── ...
```

Optionally create, only if needed:

- one or more reusable layout files in `src/layouts/`
- one or more new element components in `src/components/presentation/elements/`
- schema/registry updates required for those new elements

## Quality Bar

The finished template should:

- feel native to this codebase
- follow the structure and discipline of `nature-light`
- keep each layout in its own file under the template directory
- keep shared primitives generic
- avoid unnecessary extra abstractions
- prefer correctness and maintainability over forcing every broken PDF page into the system
