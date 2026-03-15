# Template Prompts

Starter prompts for common template tasks. All three reference `TEMPLATE_CREATION.md` as the instruction set.

---

## 1. Create a new template

```
Create a new template with id `<template-id>` and name `<Template Name>` following the @TEMPLATE_CREATION.md instruction.

Reference images are in @src/templates/<template-id>/layout-reference/
```

> **Pre-requisite:** Place your reference screenshots in `src/templates/<template-id>/layout-reference/` before starting. If images aren't organized yet, add: "Start from Step 0 to organize the reference images first."

---

## 2. Add layouts to an existing template

```
Add new layouts to the `<template-id>` template following the @TEMPLATE_CREATION.md instruction (Step 3 onward — the template scaffold already exists).

New reference images are in @src/templates/<template-id>/layout-reference/
```

> **Pre-requisite:** Drop the new reference screenshots into the existing `layout-reference/` directory. Only new/unimplemented images need to be there — existing layouts will be left as-is.

---

## 3. Fix a layout in an existing template

```
Fix the `<layout-name>` layout in the `<template-id>` template following the @TEMPLATE_CREATION.md instruction.

Compare the current render against the reference image at @src/templates/<template-id>/layout-reference/<layout-name>.png and iterate until they match.

Use `./scripts/preview-slide.sh <template-id> <slide-id>` to render, then compare the output PNG against the reference image.
```

> **Tip:** If the issue is specific, add a line describing what's wrong — e.g., "The cards are too narrow" or "The left panel background should be dark." This reduces iteration cycles.
