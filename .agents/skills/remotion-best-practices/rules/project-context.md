# AI-Powered Presentation Video Generator — Project Context

## Current Focus

**We are only working on the Slide JSON → Video part of the pipeline.**

Everything else in the architecture (LLM generation, Fabric.js editor, BullMQ jobs, FFmpeg concatenation, avatar/TTS pipeline) is out of scope for now. The full architecture is documented below for context only.

The only input that matters right now is a valid `PresentationJSON` object. The only output that matters is a correctly rendered MP4 per slide with transitions and avatar overlay. All work should be scoped to:

- `SlideComposition.tsx` and its layout components
- `AvatarOverlay.tsx`
- `designSystem.ts`
- `types.ts`
- `Root.tsx`

---


## What We're Building
A tool where users provide a topic/prompt + optional docs. An LLM generates structured slide JSON, users lightly edit content in a canvas editor, and the result gets rendered to a final MP4 with a talking avatar overlay and voiceover audio.

---

## Stack Decisions

| Layer | Tool |
|---|---|
| Video renderer | Remotion |
| Slide editor | Fabric.js |
| Job queue | BullMQ + Redis |
| Asset storage | S3 / MinIO |
| Final composition | FFmpeg (concat slides + mix audio) |
| Content generation | Claude / GPT-4o (structured JSON output) |
| Transition generation | Haiku / GPT-4o mini |
| Image generation | Flux / DALL-E 3 |

---

## Architecture

```
User Prompt + Docs
      ↓
LLM (Claude/GPT-4o) → Slide JSON (content, layout tokens, palette tokens)
      ↓
Image Generator (Flux/DALL-E) → assets stored in S3
      ↓
Fabric.js Editor → user edits text, positions, avatar placement → Edited Slide JSON
      ↓
LLM (Haiku/GPT-4o mini) → transition params injected into Final Render JSON
      ↓
BullMQ job → Remotion renders each slide to MP4
Avatar .webm overlaid per slide at JSON-defined position/shape/size
      ↓
FFmpeg → concatenate slide videos + mix voiceover audio → Final MP4
```

---

## LLM Generation Strategy

- LLM outputs **design tokens only** — never x/y coordinates, raw CSS, or font sizes
- LLM picks from predefined string tokens: layout names, palette names, type scale tokens, element types
- All visual resolution happens in the renderer via `designSystem.ts`
- Zod validation on every LLM response — retry with error message fed back on failure
- Two separate LLM calls:
  1. **Content generation** — heavy model, produces full slide JSON including `imagePrompt` per slide
  2. **Transition generation** — lightweight model, runs after user editing, injects transition params

---

## Design System Approach

The design system is the contract between the LLM and the renderer. LLM picks token names, renderer resolves them to CSS values. Defined once in `designSystem.ts`, never touched by the LLM.

**Palettes:** `midnight-blue` | `forest-dark` | `sunset-warm` | `slate-pro` | `warm-cream`

**Type scale:** `display-xl` | `display-lg` | `heading-md` | `body-lg` | `body-md` | `caption`

**Layouts:** `title-center` | `bullet-with-image` | `stat-grid` | `quote-focus` | `full-bleed-image`

**Element types:** `headline` | `subheadline` | `body-text` | `bullet-list` | `stat-number` | `image`

Adding a new layout = one new React component + one entry in `LAYOUT_MAP`. Nothing else changes.

---

## Slide JSON Schema

```ts
{
  presentationId: string
  theme: "dark" | "light"
  fps: number
  resolution: { width: number; height: number }
  slides: [
    {
      slideId: string
      duration: number                    // seconds
      layout: Layout
      palette: Palette
      elements: SlideElement[]            // typed per element, no x/y coords
      avatar: {
        position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
        shape: "circle" | "squircle"
        size: "sm" | "md" | "lg"
        videoSrc: string                  // path to .webm with alpha channel
      }
      transition: {
        in:  { type: TransitionType; durationFrames: number }
        out: { type: TransitionType; durationFrames: number }
      }
    }
  ]
}
```

---

## Project File Structure

```
src/
├── index.ts                  — entry point, registerRoot(), never touch
├── Root.tsx                  — registers one <Composition> per slide from JSON
├── SlideComposition.tsx      — main composition: transitions + layout routing + avatar
├── components/
│   └── AvatarOverlay.tsx     — avatar .webm overlay, handles shape/position/size
├── designSystem.ts           — palette and type scale token definitions
├── types.ts                  — full TypeScript schema, single source of truth
└── dummySlides.ts            — 3-slide dummy presentation for experimentation
```

---

## Key Implementation Patterns

**Transition hook** — inside `SlideComposition`, interpolates opacity and transform across the full frame range:
```ts
const frame = useCurrentFrame();
const { durationInFrames } = useVideoConfig();

const opacity = interpolate(
  frame,
  [0, transIn.durationFrames, durationInFrames - transOut.durationFrames, durationInFrames],
  [0, 1, 1, 0],
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
);
```

**Layout routing** — string token from JSON maps to React component:
```ts
const LAYOUT_MAP: Record<Layout, React.FC<{ slide: Slide }>> = {
  "title-center": TitleCenterLayout,
  "bullet-with-image": BulletWithImageLayout,
  "stat-grid": StatGridLayout,
};
const LayoutComponent = LAYOUT_MAP[slide.layout];
```

**Avatar outside transition wrapper** — avatar does not animate with slide content:
```tsx
<AbsoluteFill>
  <AbsoluteFill style={transitionStyle}>
    <LayoutComponent slide={slide} />
  </AbsoluteFill>
  <AvatarOverlay {...slide.avatar} />
</AbsoluteFill>
```

**Programmatic render** via Node.js (used in BullMQ workers):
```ts
import { renderMedia, selectComposition } from "@remotion/renderer";

const composition = await selectComposition({ serveUrl, id: slide.slideId });
await renderMedia({
  composition,
  serveUrl,
  codec: "h264",
  outputLocation: `out/${slide.slideId}.mp4`,
  inputProps: { slide },
});
```

**Render per slide from CLI:**
```bash
npx remotion render src/index.ts s1 out/slide1.mp4
```

---

## Current State

- `types.ts`, `designSystem.ts`, `dummySlides.ts`, `SlideComposition.tsx`, `AvatarOverlay.tsx`, `Root.tsx` all implemented
- Layered video with avatar `.mp4` overlay rendering confirmed working
- Three layouts implemented: `title-center`, `bullet-with-image`, `stat-grid`
- Two layouts stubbed as placeholders: `quote-focus`, `full-bleed-image`

---

## Current Focus

**We are only working on the Slide JSON → Video part of the pipeline.**

Everything else in the architecture (LLM generation, Fabric.js editor, BullMQ jobs, FFmpeg concatenation, avatar/TTS pipeline) is out of scope for now. The full architecture is documented above for context only.

The only input that matters right now is a valid `PresentationJSON` object. The only output that matters is a correctly rendered MP4 per slide with transitions and avatar overlay. All work should be scoped to:

- `SlideComposition.tsx` and its layout components
- `AvatarOverlay.tsx`
- `designSystem.ts`
- `types.ts`
- `Root.tsx`