# Migrating the Presentation Layer to Laravel + Inertia

This guide explains how to move the headless presentation rendering system out of
this Remotion project and into a Laravel + Inertia (React) web editor.

---

## What this system is

The presentation layer is split into three concerns that are completely independent of Remotion:

| Concern | Lives in | Used by |
|---------|----------|---------|
| **Content JSON** | Database / API | Renderer + Editor |
| **Template JSON** | Static files or DB | Renderer + Editor |
| **Element components** | `src/components/presentation/` | Renderer + Editor |

Element components are **headless** — they hold no hardcoded colors, fonts, or sizes.
All visual decisions come from the Template JSON via `TemplateContext`. Swapping the template
produces a completely different look with zero code changes.

---

## What to copy

Copy these directories verbatim into your Inertia `resources/js/` folder:

```
src/
├── components/
│   └── presentation/          → resources/js/components/presentation/
│       ├── elements/
│       │   ├── headline/
│       │   ├── subheadline/
│       │   ├── body-text/
│       │   ├── bullet-list/
│       │   ├── stat-number/
│       │   ├── image/
│       │   ├── bar-chart/
│       │   ├── quote/
│       │   └── index.tsx          ← ELEMENT_REGISTRY + renderElement + ELEMENT_CONTROLS
│       ├── GenericSlideRenderer.tsx
│       ├── TemplateContext.tsx
│       └── index.ts               ← public barrel, import everything from here
│
├── schema/
│   ├── content.ts             → resources/js/schema/content.ts
│   ├── template.ts            → resources/js/schema/template.ts
│   └── index.ts               → resources/js/schema/index.ts
│
├── transitions/
│   └── index.ts               → resources/js/transitions/index.ts
│
├── templates/
│   └── corporate-dark.ts      → resources/js/templates/corporate-dark.ts
│
└── designSystem.ts            → resources/js/designSystem.ts
```

Do **not** copy `Root.tsx`, `FullPresentation.tsx`, `SlideComposition.tsx`, or
`sample-presentation.ts` — those are Remotion-specific entry points.

---

## npm dependencies

Install these in your Inertia project:

```bash
npm install zod
```

**Optional — only needed for video playback in a preview player:**

```bash
npm install @remotion/media
```

In the web editor you render slides as **static snapshots** (no video playback),
so `@remotion/media` is not required. The `<Video>` element inside
`AvatarOverlayItem` is guarded by the `editMode` flag and never rendered when
`editMode={true}`.

---

## Handling Remotion API surface

Three Remotion APIs are used inside `GenericSlideRenderer.tsx`. In the web editor
these need shims so the component works outside of a Remotion composition.

### 1. `useCurrentFrame` + `useVideoConfig`

These drive animations. In the editor, slides are static (frame 0). Provide shims
via a React context or a simple module alias:

```tsx
// resources/js/remotion-shims.ts

export const useCurrentFrame = () => 0;

export const useVideoConfig = () => ({
  fps: 30,
  durationInFrames: 900,
  width: 1920,
  height: 1080,
  id: "editor",
});
```

Then configure your bundler (Vite/Webpack) to alias `remotion` to this shim file
for the editor bundle:

```ts
// vite.config.ts (Inertia uses Vite by default)
export default defineConfig({
  resolve: {
    alias: {
      // In editor builds only — do not alias for the Remotion renderer
      remotion: path.resolve(__dirname, "resources/js/remotion-shims.ts"),
    },
  },
});
```

Alternatively, create a thin wrapper around `GenericSlideRenderer` that passes
`frame=0` as a prop and replaces the hooks internally — useful if you want to
avoid build-time aliasing.

### 2. `staticFile`

`staticFile()` converts a local path like `/avatars/speaker1.mp4` into a URL
Remotion can serve from its dev server. In your Laravel app, files are served
directly from `public/`, so the path is already a valid URL. Add this shim:

```ts
// resources/js/remotion-shims.ts (add to the file above)
export const staticFile = (path: string) => `/${path}`;
```

Update `GenericSlideRenderer.tsx` to import from the shim path instead of
`"remotion"` after migration — or rely on the bundler alias above.

### 3. Remotion `<Sequence>` and `<AbsoluteFill>`

`<AbsoluteFill>` is just a div with `position: absolute; inset: 0`. `<Sequence>`
is a passthrough wrapper. Both can be shimmed:

```tsx
// resources/js/remotion-shims.ts

export const AbsoluteFill: React.FC<{ style?: React.CSSProperties; children?: React.ReactNode }> =
  ({ style, children }) => (
    <div style={{ position: "absolute", inset: 0, ...style }}>{children}</div>
  );

export const Sequence: React.FC<{ children?: React.ReactNode; name?: string; from?: number }> =
  ({ children }) => <>{children}</>;
```

---

## Wiring `TemplateContext` in the editor

`GenericSlideRenderer` accepts three editor props alongside `slide` and `template`:

```tsx
<GenericSlideRenderer
  slide={currentSlide}
  template={selectedTemplate}
  avatarMap={avatarMap}          // see next section
  editMode={true}                // enables selection highlight + avatar placeholder
  selectedElementId={selectedId}
  onSelectElement={(id) => setSelectedId(id)}
/>
```

When `editMode={true}`:
- Clicking any element calls `onSelectElement(id)`
- The selected element gets a highlight ring (driven by `useEditModeStyle`)
- The avatar overlay renders as a static placeholder div (no `<video>`)

Use the `ELEMENT_CONTROLS` spec exported from `components/presentation` to build
the properties panel on the right-hand side. It describes which controls to show
for each element type (text inputs, color pickers, font selectors, etc.):

```tsx
import { ELEMENT_CONTROLS } from "@/components/presentation";

// When user selects an element:
const controls = ELEMENT_CONTROLS[selectedElement.type];
// Render controls.map(...) in your sidebar
```

---

## Avatar overlay in the editor

Since every narrated slide has at least one element with `audioSegmentText`, the
avatar placeholder always renders in edit mode. The user can:

- Resize it (change `size`: `sm | md | lg`)
- Reposition it (change `position`: `top-left | top-right | bottom-left | bottom-right`)
- Reshape it (change `shape`: `circle | squircle`)

These changes are stored in the Content JSON at three levels:

```
element.avatarOverride          ← per-element (highest priority)
presentation.avatarDefaults     ← applies to all slides ("apply to all" checkbox)
template.avatarDefaults         ← template's designed default (lowest priority)
```

Pass `avatarMap` with CDN URLs once the ML pipeline has generated the videos:

```tsx
// Before generation: no avatarMap → placeholder shown
<GenericSlideRenderer slide={slide} template={template} editMode />

// After generation: pass CDN URLs → video plays in preview
const avatarMap: AvatarMap = {
  "el-abc123": { src: "https://cdn.example.com/el-abc123.mp4", durationInSeconds: 8.4 },
};
<GenericSlideRenderer slide={slide} template={template} avatarMap={avatarMap} />
```

---

## Template + Content JSON in Laravel

**Content JSON** is LLM-generated and user-edited. Store it in the database:

```php
// migrations/create_presentations_table.php
$table->json('content');   // ContentPresentation JSON blob
$table->string('template_id');
```

Validate on write using the Zod schema converted to JSON Schema (use the
`zod-to-json-schema` npm package to generate it):

```ts
import { zodToJsonSchema } from "zod-to-json-schema";
import { ContentPresentationSchema } from "@/schema/content";

export const contentJsonSchema = zodToJsonSchema(ContentPresentationSchema);
// Ship this to your Laravel backend for server-side validation
```

**Template JSON** is developer-authored (not user-generated). Store it as static
TypeScript files in `resources/js/templates/`. The user selects a template by
`templateId`; the editor imports the matching file and passes it to
`GenericSlideRenderer`. No database needed for templates unless you want
user-created templates.

---

## Extending the system

See the **Extension guide** in the main [Headless Slide Rendering System plan](../)
for step-by-step instructions on adding new element types, layouts, templates,
and transitions. The same steps apply in the Inertia project — no Remotion-specific
changes are needed for any of those extension points.
