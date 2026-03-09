// llm-context.ts
// Builds a self-contained context payload for an LLM that needs to generate
// ContentPresentation JSON for a given template.
//
// Usage:
//   import { buildLLMContext } from "./llm-context";
//   import { natureLight } from "./templates/nature-light";
//
//   const ctx = buildLLMContext(natureLight);
//   const systemPrompt = JSON.stringify(ctx, null, 2);
//   // → include in your LLM system message

import { z } from "zod";
import { ContentPresentationSchema } from "./schema/content";
import type { Template } from "./schema/template";

/**
 * The payload passed to the LLM as context.
 *
 * - `schema`   — JSON Schema of ContentPresentation. Tells the LLM the exact
 *                shape, field names, and constraints of the JSON to produce.
 * - `template` — Stripped template object (visual-only noise removed). The LLM reads:
 *                  template.layouts[layoutName].areas          → available area names
 *                  template.layouts[layoutName].areas[area].accepts → valid element types
 *                  template.elementDefaults                    → pre-applied styles (don't repeat)
 *                  template.tokens                             → color/font palette
 */
export interface LLMContext {
  schema: object;
  template: object;
}

const VISUAL_KEYS = new Set([
  "style",
  "className",
  "wrapperStyle",
  "wrapperClassName",
]);

/**
 * Recursively strips purely visual keys (style, className, wrapperStyle,
 * wrapperClassName) from a template before sending it to the LLM.
 * These fields carry no structural meaning for content generation.
 */
function stripVisualProps(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stripVisualProps);
  }
  if (value !== null && typeof value === "object") {
    const src = value as Record<string, unknown>;
    return Object.keys(src).reduce<Record<string, unknown>>((acc, key) => {
      if (!VISUAL_KEYS.has(key)) {
        acc[key] = stripVisualProps(src[key]);
      }
      return acc;
    }, {});
  }
  return value;
}

export const buildLLMContext = (template: Template): LLMContext => ({
  schema:   z.toJSONSchema(ContentPresentationSchema),
  template: stripVisualProps(template) as object,
});
