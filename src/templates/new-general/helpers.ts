import type { Decoration } from "../../schema/template";

/** Accent underline decoration used across new-general layouts. */
export const accentBar = (
  overrides: Partial<Decoration> = {},
): Decoration => ({
  color: "accent",
  count: 1,
  size: 4,
  style: { width: 64, borderRadius: 2 },
  ...overrides,
});
