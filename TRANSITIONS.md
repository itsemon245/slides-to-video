# Transition System

This document covers how transitions work at every level of the presentation system — from slide-level to element-level — and describes the planned user-override layer.

---

## Levels of Transition Control

There are four levels at which a transition can be defined, in order from **highest to lowest priority**:

```
┌─────────────────────────────────────────────────────┐
│  1. User overrides (future — web editor)            │  ← highest
│  2. Layout area elementStyles                       │
│  3. Template elementDefaults                        │
│  4. Content element (el.transitionIn/Out)           │  ← lowest / fallback
└─────────────────────────────────────────────────────┘
```

The first non-null value in this chain wins for each element. Slide-level transitions follow the same pattern but are a separate chain (see below).

---

## 1. Transition Reference Shape

Every transition is described by a `TransitionRef` object:

```ts
{
  id: string;                                          // key from TRANSITION_REGISTRY, e.g. "fade-in", "slide-up-in"
  duration?: `${number}ms` | `${number}s` | "inferred" // typed — not a free-form string
}
```

**Duration values:**

| Value | Behaviour |
|---|---|
| omitted | Uses the transition's `canonicalDurationMs` from the registry |
| `` `${number}ms` `` e.g. `"300ms"` | Parsed and used as the explicit duration |
| `` `${number}s` `` e.g. `"0.5s"` | Parsed and used as the explicit duration |
| `"inferred"` | Duration equals the element's active window — avatar video duration for narrated elements, full slide duration for non-narrated |

---

## 2. Element-Level Transitions

### Priority chain

Resolution follows the same 3-level lookup as `useElementConfig`:

```
layout area elementStyles[type].transitionIn   (highest within template)
  └─ template elementDefaults[type].transitionIn
       └─ el.transitionIn                       (content fallback)
```

The resolved config is applied by `ElementTransitionWrapper`, which wraps every rendered element.

### Defining transitions in a template

#### Template-wide defaults (`elementDefaults`)

```ts
// src/templates/your-template.ts
elementDefaults: {
  headline: {
    transitionIn:  { id: "fade-in",      duration: "400ms" },
    transitionOut: { id: "fade-out",     duration: "300ms" },
  },
  subheadline: {
    transitionIn:  { id: "slide-up-in",  duration: "300ms" },
    transitionOut: { id: "slide-up-out" },
  },
  image: {
    transitionIn:  { id: "zoom-in-in",   duration: "inferred" },
  },
},
```

#### Layout-area overrides (`elementStyles`)

A specific layout area can override the template default transition for a given element type. Only the area where the override is defined is affected — other layouts/areas continue using `elementDefaults`.

```ts
layouts: {
  "list-divider-panel": {
    areas: {
      panel: {
        elementStyles: {
          image: {
            transitionIn:  { id: "slide-right-in", duration: "500ms" },
            transitionOut: { id: "slide-right-out" },
          },
        },
      },
    },
  },
},
```

### Defining transitions on a content element (fallback)

An element in a content presentation can carry its own transition reference. This is only used if the template defines no transition for that element type at all.

```ts
// src/sample-presentation.ts
{
  id: "intro-subheadline",
  type: "subheadline",
  content: "A compelling subtitle",
  transitionIn:  { id: "slide-up-in", duration: "300ms" },
  transitionOut: { id: "fade-out" },
}
```

---

## 3. Slide-Level Transitions

Slide transitions animate the whole slide content in/out and are defined directly on `ContentSlide`. They are independent of element-level transitions.

```ts
{
  id: "slide-01",
  layout: "centered",
  transitionIn:  { id: "fade-in" },
  transitionOut: { id: "fade-out" },
  elements: [...],
}
```

Slide transitions are handled by `useSlideTransitionStyle` in `GenericSlideRenderer` and currently do not participate in the element priority chain.

---

## 4. Available Transition IDs

| ID | Direction | Canonical Duration |
|---|---|---|
| `fade-in` | in | 400ms |
| `fade-out` | out | 400ms |
| `slide-up-in` | in | 500ms |
| `slide-up-out` | out | 500ms |
| `slide-down-in` | in | 500ms |
| `slide-down-out` | out | 500ms |
| `slide-left-in` | in | 500ms |
| `slide-left-out` | out | 500ms |
| `slide-right-in` | in | 500ms |
| `slide-right-out` | out | 500ms |
| `zoom-in-in` | in | 450ms |
| `zoom-in-out` | out | 450ms |
| `blur-in` | in | 600ms |
| `blur-out` | out | 600ms |

New transitions are registered in `src/transitions/index.ts` by adding an entry to `TRANSITION_REGISTRY`.

---

## 5. Future: User Overrides (Web Editor)

> **Status: planned — not yet implemented**

The web editor will allow end-users to override transition properties per element (and eventually per slide) without touching the template or content file. These overrides will sit at the **top** of the priority chain — above even the layout area `elementStyles`.

### Planned shape

User overrides will be stored as a separate `overrides` data structure, keyed by element/slide id:

```ts
// Rough sketch — final schema TBD
type UserOverrides = {
  elements?: Record<string, {
    transitionIn?:  TransitionRef;
    transitionOut?: TransitionRef;
    // ...other style props
  }>;
  slides?: Record<string, {
    transitionIn?:  TransitionRef;
    transitionOut?: TransitionRef;
  }>;
};
```

### Resolution chain with user overrides

```
userOverrides.elements[id].transitionIn          ← highest
  └─ layout area elementStyles[type].transitionIn
       └─ template elementDefaults[type].transitionIn
            └─ el.transitionIn                   ← lowest
```

### Design decisions still open

- Where user overrides are persisted (database, local state, file)
- Whether overrides are per-user or per-presentation
- UI surface: properties panel on element selection
- How to surface the transition picker (dropdown of `TRANSITION_REGISTRY` keys + duration input)
- Whether the editor exposes a "reset to template default" action

This section will be updated when implementation begins.
