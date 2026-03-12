// src/layouts/index.ts
// Layout factory functions — one per named layout.
// Each factory accepts DesignTokens so visual decisions (gradient colours, etc.)
// reference token values instead of hardcoded hex strings.
//
// To add a new layout:
//   1. Create src/layouts/{name}.ts and export a factory function
//   2. Add the name to LayoutNameSchema in src/schema/template.ts
//   3. Export it below and add it to createDefaultLayouts
//   4. Add its area names to LAYOUT_AREAS below

import type { DesignTokens, LayoutName } from "../schema/template";
import type { ContentElement, ContentSlide } from "../schema/content";

export { titleCenterLayout }        from "./title-center";
export { bulletWithImageLayout }    from "./bullet-with-image";
export { bulletWithGraphLayout }    from "./bullet-with-graph";
export { statGridLayout }           from "./stat-grid";
export { quoteFocusLayout }         from "./quote-focus";
export { fullBleedImageLayout }     from "./full-bleed-image";
export { heroSplitLayout }          from "./hero-split";
export { threeColumnLayout }        from "./three-column";
export { imageFeatureCardsLayout }  from "./image-feature-cards";
export { darkSidePanelLayout }      from "./dark-side-panel";

import { titleCenterLayout }        from "./title-center";
import { bulletWithImageLayout }    from "./bullet-with-image";
import { bulletWithGraphLayout }    from "./bullet-with-graph";
import { statGridLayout }           from "./stat-grid";
import { quoteFocusLayout }         from "./quote-focus";
import { fullBleedImageLayout }     from "./full-bleed-image";
import { heroSplitLayout }          from "./hero-split";
import { threeColumnLayout }        from "./three-column";
import { imageFeatureCardsLayout }  from "./image-feature-cards";
import { darkSidePanelLayout }      from "./dark-side-panel";

/**
 * Returns all built-in layouts configured for the given design tokens.
 * Use this in template files to avoid duplicating layout structure:
 *
 *   layouts: createDefaultLayouts(tokens)
 *
 * Override a specific layout by spreading:
 *
 *   layouts: {
 *     ...createDefaultLayouts(tokens),
 *     "title-center": myCustomVersion,
 *   }
 */
// ─── Layout Area Map ──────────────────────────────────────────────────────────
// Single source of truth for the named areas in each layout.
// Used by:
//   - ContentSlideTyped<L>  → TypeScript autocomplete for the `area` field
//   - buildLLMContext()     → LLM prompt payload
//   - EXTENDING.md          → documentation reference
//
// Keep in sync with the area keys in each layout factory file.

// We need to broaden this type to allow it to be indexed by `LayoutName` which is now `string`
export const LAYOUT_AREAS: Record<string, readonly string[]> = {
  "title-center":        ["header", "subtext"],
  "bullet-with-image":   ["text", "image"],
  "bullet-with-graph":   ["text", "graph"],
  "stat-grid":           ["header", "stats"],
  "quote-focus":         ["quote", "attribution"],
  "full-bleed-image":    ["background", "overlay"],
  "hero-split":          ["left", "right"],
  "three-column":        ["col1", "col2", "col3"],
  "image-feature-cards": ["photo", "cards"],
  "dark-side-panel":     ["panel", "content"],
  "vertical-split":      ["top", "bottom"],
  "list-divider-panel":  ["list", "divider", "panel"],
  "academic-hero":       ["content"],
  "academic-agenda":     ["list", "detail"],
  "academic-editorial":  ["lead", "aside"],
  "academic-program-highlight": ["left", "media", "right"],
  "academic-split-focus": ["story", "focus"],
  "academic-stat-panel": ["lead", "cards", "media"],
  "academic-team-grid":  ["header", "memberA", "memberB", "memberC"],
  "academic-data-table": ["header", "table", "footer"],
  "academic-performance": ["left", "right"],
  "academic-closing":    ["content"],
  "new-general-title": ["hero", "note"],
  "new-general-insights-grid": ["header", "grid"],
  "new-general-funnel-metrics": ["lead", "bars"],
  "new-general-agenda": ["intro", "agenda"],
  "new-general-dashboard": ["story", "visuals"],
  "new-general-timeline": ["header", "steps"],
  "new-general-team-grid": ["header", "memberA", "memberB", "memberC", "memberD"],
  "new-general-quote-image": ["quote", "image"],
  "new-general-full-bleed-quote": ["background"],
  "new-general-summary-split": ["summary", "metrics"],
  "new-general-table-focus": ["header", "table"],
  "new-general-chart-sidebar": ["chart", "sidebar"],
  "new-general-validation-grid": ["intro", "points", "media"],
  "new-general-thank-you": ["copy", "placeholder"],
  "neo-slide-title":        ["hero", "note"],
  "neo-slide-stat-panel":   ["chart", "stats"],
  "neo-slide-team-grid":    ["intro", "memberA", "memberB"],
  "neo-slide-chart-sidebar": ["chart", "sidebar"],
  "neo-slide-validation":   ["intro", "points", "media"],
};

/** Union of valid area name strings for a given layout. */
export type AreaName<L extends LayoutName> = L extends keyof typeof LAYOUT_AREAS
  ? (typeof LAYOUT_AREAS)[L][number]
  : string;

/**
 * Narrows the `area` field on elements to the valid literal values for layout L.
 *
 * Use when authoring slide data in TypeScript for a specific known layout:
 *   const s: ContentSlideTyped<"three-column"> = { ... }
 *   // element.area now autocompletes as "col1" | "col2" | "col3"
 *
 * The base ContentSlide keeps area?: string for runtime permissiveness.
 */
export type ContentSlideTyped<L extends LayoutName> =
  Omit<ContentSlide, "layout" | "elements"> & {
    layout: L;
    elements: Array<ContentElement & { area?: AreaName<L> }>;
  };

// ─── Layout Factory ───────────────────────────────────────────────────────────

export const createDefaultLayouts = (tokens: DesignTokens) => ({
  "title-center":        titleCenterLayout(tokens),
  "bullet-with-image":   bulletWithImageLayout(tokens),
  "bullet-with-graph":   bulletWithGraphLayout(tokens),
  "stat-grid":           statGridLayout(tokens),
  "quote-focus":         quoteFocusLayout(tokens),
  "full-bleed-image":    fullBleedImageLayout(tokens),
  "hero-split":          heroSplitLayout(tokens),
  "three-column":        threeColumnLayout(tokens),
  "image-feature-cards": imageFeatureCardsLayout(tokens),
  "dark-side-panel":     darkSidePanelLayout(tokens),
});
