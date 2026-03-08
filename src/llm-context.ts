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
 * - `template` — Full template object. The LLM reads:
 *                  template.layouts[layoutName].areas          → available area names
 *                  template.layouts[layoutName].areas[area].accepts → valid element types
 *                  template.elementDefaults                    → pre-applied styles (don't repeat)
 *                  template.tokens                             → color/font palette
 */
export interface LLMContext {
  schema: object;
  template: Template;
}

export const buildLLMContext = (template: Template): LLMContext => ({
  schema:   z.toJSONSchema(ContentPresentationSchema),
  template,
});
