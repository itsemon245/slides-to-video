# Extending the Presentation System

This guide covers the three main extension points:

1. [Creating a new template](#1-creating-a-new-template)
2. [Adding a new layout](#2-adding-a-new-layout)
3. [Adding a new element type](#3-adding-a-new-element-type)

Each section has a short explanation followed by an exact checklist.

---

## 1. Creating a new template

A template is a TypeScript file that defines all visual decisions: color palette,
typography, avatar position, per-element default styles, and which layout
configurations to use. Templates never contain component code — only data.

**Files to create/edit:**

| Action | File |
|--------|------|
| Create | `src/templates/{your-template-name}.ts` |
| Edit (optional) | `src/Root.tsx` — to preview it in Remotion Studio |

**Checklist:**

```ts
// src/templates/my-theme.ts
import type { Template } from "../schema/template";
import { createDefaultLayouts } from "../layouts";

// 1. Define tokens as a named constant so layouts can reference them
const tokens: Template["tokens"] = {
  colors: {
    background: "#...",
    surface:    "#...",
    primary:    "#...",
    secondary:  "#...",
    accent:     "#...",
    muted:      "#...",
  },
  fonts: {
    heading: "Your Heading Font, sans-serif",
    body:    "Your Body Font, sans-serif",
  },
};

export const myTheme: Template = {
  id: "my-theme",              // unique string — used by ContentPresentation.templateId
  name: "My Theme",
  description: "Optional description",

  tokens,

  // 2. Set avatar defaults (position, size, shape)
  avatarDefaults: {
    position: "bottom-right",
    size: "md",
    shape: "circle",
  },

  // 3. Set global element defaults — these are the visual fallback for any
  //    element not styled more specifically by a layout area
  elementDefaults: {
    headline:      { scale: "display-lg", color: "primary",   fontFamily: "heading" },
    subheadline:   { scale: "heading-md", color: "secondary", fontFamily: "heading" },
    "body-text":   { scale: "body-lg",    color: "secondary", fontFamily: "body" },
    "bullet-list": { scale: "body-lg",    color: "secondary", fontFamily: "body", gap: 16 },
    "stat-number": { scale: "display-xl", color: "accent",    fontFamily: "heading" },
    image:         { variant: "cover" },
    "bar-chart":   {},
    quote:         { scale: "display-lg", color: "primary",   fontFamily: "heading" },
  },

  // 4. All 6 built-in layouts, configured for your tokens (gradient colours
  //    automatically match your background color — no hex duplication)
  layouts: createDefaultLayouts(tokens),

  // 5. (Optional) Override a specific layout while keeping the rest:
  //    layouts: {
  //      ...createDefaultLayouts(tokens),
  //      "title-center": myCustomTitleCenter,
  //    },
};
```

**To preview in Remotion Studio**, update `src/Root.tsx`:

```ts
import { myTheme } from "./templates/my-theme";

// Pass myTheme as the template prop in defaultProps for any Composition
defaultProps={{ slide, template: myTheme, avatarMap: sampleAvatarMap }}
```

**Validate against the Zod schema (optional but recommended):**

```ts
import { TemplateSchema } from "./schema/template";
TemplateSchema.parse(myTheme); // throws if any field is wrong
```

---

## 2. Adding a new layout

We support two ways to add layouts: **Generic** (reusable across templates) and **Template-Specific** (local to one template).

### Strategy

| Type | Best For | Location |
|------|----------|----------|
| **Generic** | Common patterns like `title-center`, `hero-split` that many templates will use. | `src/layouts/{name}.ts` |
| **Template-Specific** | Unique, one-off layouts designed for a specific visual theme (e.g. `nature-light`'s complex grid). | Inline in `src/templates/{template}.ts` |

The `LayoutName` schema is flexible (`z.string()`), so you can register any layout name you want without changing global schemas.

### Option A: Adding a Generic Layout

**Files to create/edit:**

| Action | File |
|--------|------|
| Create | `src/layouts/{name}.ts` — factory function |
| Edit | `src/layouts/index.ts` — export + add to `createDefaultLayouts` |

**Step 1 — Create the factory file**

```ts
// src/layouts/my-generic-layout.ts
import type { LayoutTemplate, DesignTokens } from "../schema/template";

export const myGenericLayout = (tokens: DesignTokens): LayoutTemplate => ({
  // CSS Grid definition
  gridTemplateAreas: `"left right"`,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",

  // Optional layout-level padding/gap/decorations
  padding: "80px",
  gap: 40,
  decorations: [
    { type: "squares", position: "top-right", color: "accent", count: 3 }
  ],

  areas: {
    left: {
      accepts: ["headline", "body-text"],
      required: true,
      // ... area configuration ...
    },
    right: {
      accepts: ["image"],
      // ... area configuration ...
    },
  },
});
```

**Step 2 — Export from the barrel**

```ts
// src/layouts/index.ts

// Add export
export { myGenericLayout } from "./my-generic-layout";

// Add to createDefaultLayouts
export const createDefaultLayouts = (tokens: DesignTokens) => ({
  // ... existing layouts ...
  "my-generic-layout": myGenericLayout(tokens),
});

// Update LAYOUT_AREAS for LLM context/autocomplete
export const LAYOUT_AREAS = {
  // ...
  "my-generic-layout": ["left", "right"],
} as const;
```

### Option B: Adding a Template-Specific Layout

This is faster and keeps the global namespace clean.

**Files to edit:** `src/templates/{your-template}.ts` only.

```ts
// src/templates/nature-light.ts

// 1. Define the layout inline or as a local const
const myCustomGrid = (tokens: DesignTokens): LayoutTemplate => ({
  gridTemplateAreas: `"header" "content" "footer"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto",
  areas: {
    // ... define areas ...
  },
});

export const natureLight: Template = {
  // ...
  layouts: {
    // 2. Spread default layouts
    ...createDefaultLayouts(tokens),

    // 3. Add your local layout
    "custom-grid": myCustomGrid(tokens),
  },
};
```

### Layout Configuration Reference

**Available config fields (all optional except `accepts`):**

| Field | Type | Purpose |
|-------|------|---------|
| `accepts` | `ElementType[]` | Which element types can be placed here |
| `required` | `boolean` | Validation flag for content generation |
| `maxCount` | `number` | Max elements in this area |
| `containerStyle` | CSS object | Flexbox/grid/positioning for the area div |
| `elementStyles` | `Record<ElementType, ElementStyleConfig>` | Per-element visual overrides |
| `separator` | `{ height, color, ... }` | Decorative line |
| `gradientOverlay` | `{ direction, from, to }` | Gradient overlay on top of the area |
| `decorations` | `Decoration[]` | Array of decorative elements (squares, circles, etc.) |

**Decorations:**
Both layouts and areas support a `decorations` array. A decoration is a data-driven visual element (like the accent squares in `nature-light`):

```ts
decorations: [
  {
    position: "top-right",
    top: 40, right: 40,
    color: "accent", // Token color key
    count: 3,
    size: 24,
    gap: 8,
    // ... supports opacity, rotation, etc.
  }
]
```

---

## 3. Adding a new element type

An element type is a discriminated union member in the content schema, a React
component, and a registry entry. All three must be added together.

**Files to create/edit:**

| Action | File |
|--------|------|
| Edit | `src/schema/template.ts` — add type to `ElementTypeSchema` enum |
| Edit | `src/schema/content.ts` — add Zod schema + union member |
| Create | `src/components/presentation/elements/{type}/index.tsx` — React component |
| Edit | `src/components/presentation/elements/index.tsx` — registry + controls |
| Edit | Template files — add `elementDefaults["{type}"]` |
| Edit | Layout files — add `accepts: ["{type}"]` to relevant areas |

**Step 1 — Register the type name in the schema**

```ts
// src/schema/template.ts
export const ElementTypeSchema = z.enum([
  // ... existing types ...
  "callout-box",   // ← add here
]);
```

**Step 2 — Add the content schema**

```ts
// src/schema/content.ts

// Add style overrides type if needed
export const CalloutStyleOverridesSchema = z.object({
  backgroundColor: z.string().optional(),
  borderColor:     z.string().optional(),
  borderRadius:    z.number().optional(),
});

// Add content schema — always extend NarrationSchema to get audioSegmentText + avatarOverride
export const CalloutBoxContentSchema = NarrationSchema.extend({
  id:   z.string(),
  type: z.literal("callout-box"),
  icon:    z.string().optional(),   // e.g. "⚠️" or an icon name
  content: z.string(),
  styleOverrides: CalloutStyleOverridesSchema.optional(),
});

// Add to the discriminated union
export const ContentElementSchema = z.discriminatedUnion("type", [
  // ... existing schemas ...
  CalloutBoxContentSchema,   // ← add here
]);

// Add derived type export
export type CalloutBoxContent = z.infer<typeof CalloutBoxContentSchema>;
```

**Step 3 — Create the React component**

Follow the exact pattern used by all existing elements:

```tsx
// src/components/presentation/elements/callout-box/index.tsx
import React from "react";
import type { CalloutBoxContent } from "../../../../schema/content";
import {
  useElementConfig,
  useTokens,
  useElementSelectHandler,
  useEditModeStyle,
} from "../../TemplateContext";
import { getTypeStyle } from "../../../../designSystem";

interface Props { el: CalloutBoxContent }

// ─── Default Variant ──────────────────────────────────────────────────────────

const Default: React.FC<Props & { style: React.CSSProperties; bg: string }> = ({
  el, style, bg,
}) => (
  <div style={{ background: bg, borderRadius: 12, padding: "24px 32px", ...style }}>
    {el.icon && <span style={{ fontSize: 32 }}>{el.icon}</span>}
    <p style={{ margin: 0 }}>{el.content}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const CalloutBox: React.FC<Props> = ({ el }) => {
  const config      = useElementConfig("callout-box");
  const tokens      = useTokens();
  const handleClick = useElementSelectHandler(el.id);
  const editStyle   = useEditModeStyle(el);

  const style: React.CSSProperties = {
    ...getTypeStyle(config.scale ?? "body-lg"),
    color:      tokens.colors[config.color ?? "primary"],
    fontFamily: tokens.fonts[config.fontFamily ?? "body"],
    ...el.styleOverrides,
  };

  const inner = <Default el={el} style={style} bg={tokens.colors.surface} />;

  if (!handleClick) return inner;
  return <div style={editStyle} onClick={handleClick}>{inner}</div>;
};
```

Key rules for element components:
- Always call `useElementConfig("{type}")` — reads the style cascade
- Always call `useTokens()` — resolves color/font keys to actual values
- Always call `useEditModeStyle(el)` — provides selection highlight in editor
- Always call `useElementSelectHandler(el.id)` — wires click-to-select
- Apply `el.styleOverrides` last so user overrides always win
- Implement variants with a `switch` on `config.variant`

**Step 4 — Register in the element index**

```tsx
// src/components/presentation/elements/index.tsx

// Add import + re-export
import { CalloutBox } from "./callout-box";
export { CalloutBox } from "./callout-box";

// Add to ELEMENT_REGISTRY
export const ELEMENT_REGISTRY = {
  // ... existing entries ...
  "callout-box": CalloutBox,
};

// Add to ELEMENT_CONTROLS (drives the web editor properties panel)
export const ELEMENT_CONTROLS = {
  // ... existing entries ...
  "callout-box": [
    { id: "content",    type: "textarea", label: "Content" },
    { id: "icon",       type: "text",     label: "Icon (emoji or name)" },
    { id: "color",      type: "color-key",label: "Text Color" },
    { id: "scale",      type: "type-scale",label: "Font Size" },
  ],
};
```

**Step 5 — Add to templates and layouts**

```ts
// In any template file (e.g. src/templates/corporate-dark.ts)
elementDefaults: {
  // ... existing defaults ...
  "callout-box": {
    scale: "body-lg",
    color: "primary",
    fontFamily: "body",
  },
},
```

```ts
// In any layout file where the element should be usable
// (e.g. src/layouts/bullet-with-image.ts)
areas: {
  text: {
    accepts: ["headline", "subheadline", "bullet-list", "body-text", "callout-box"],
    //                                                               ↑ add here
    ...
  },
}
```

---

## Style resolution order (reminder)

When an element renders, styles are merged in this priority order (highest first):

```
1. el.styleOverrides        — user edits, always wins
2. area.elementStyles[type] — layout-area-specific template style
3. template.elementDefaults[type] — global template fallback
4. Component default        — last resort (font size 16, color inherit)
```

This means a template's `elementDefaults` provide sensible fallbacks, layout areas
can tighten the visual contract for specific contexts, and users can override
anything via `styleOverrides` without touching template files.
