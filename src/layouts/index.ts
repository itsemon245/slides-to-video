// src/layouts/index.ts
// Layout factory functions — one per named layout.
// Each factory accepts DesignTokens so visual decisions (gradient colours, etc.)
// reference token values instead of hardcoded hex strings.
//
// To add a new layout:
//   1. Create src/layouts/{name}.ts and export a factory function
//   2. Add the name to LayoutNameSchema in src/schema/template.ts
//   3. Export it below and add it to createDefaultLayouts

import type { DesignTokens } from "../schema/template";

export { titleCenterLayout }      from "./title-center";
export { bulletWithImageLayout }  from "./bullet-with-image";
export { bulletWithGraphLayout }  from "./bullet-with-graph";
export { statGridLayout }         from "./stat-grid";
export { quoteFocusLayout }       from "./quote-focus";
export { fullBleedImageLayout }   from "./full-bleed-image";

import { titleCenterLayout }      from "./title-center";
import { bulletWithImageLayout }  from "./bullet-with-image";
import { bulletWithGraphLayout }  from "./bullet-with-graph";
import { statGridLayout }         from "./stat-grid";
import { quoteFocusLayout }       from "./quote-focus";
import { fullBleedImageLayout }   from "./full-bleed-image";

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
export const createDefaultLayouts = (tokens: DesignTokens) => ({
  "title-center":      titleCenterLayout(tokens),
  "bullet-with-image": bulletWithImageLayout(tokens),
  "bullet-with-graph": bulletWithGraphLayout(tokens),
  "stat-grid":         statGridLayout(tokens),
  "quote-focus":       quoteFocusLayout(tokens),
  "full-bleed-image":  fullBleedImageLayout(tokens),
});
