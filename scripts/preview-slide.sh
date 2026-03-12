#!/usr/bin/env bash
# preview-slide.sh — Render a single slide as a PNG still for visual verification.
#
# Usage:
#   ./scripts/preview-slide.sh <template-id> <slide-id> [frame]
#
# Examples:
#   ./scripts/preview-slide.sh academic-education academic-s1
#   ./scripts/preview-slide.sh nature-light mangrove-s3 45
#   ./scripts/preview-slide.sh new-general ng-s1 0
#
# The composition ID is derived as: <template-id>-<slide-id>
# Frame defaults to 30 (1 second in at 30fps, after transitions settle).
# Output goes to: out/preview/<template-id>-<slide-id>.png

set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Usage: $0 <template-id> <slide-id> [frame]"
  echo ""
  echo "Available templates: academic-education, new-general, nature-light"
  echo ""
  echo "To list available slide IDs for a template, run:"
  echo "  npx remotion compositions src/index.ts --props '{}'  2>/dev/null | grep <template-id>"
  exit 1
fi

TEMPLATE_ID="$1"
SLIDE_ID="$2"
FRAME="${3:-30}"
COMP_ID="${TEMPLATE_ID}-${SLIDE_ID}"
OUT_DIR="out/preview"
OUT_FILE="${OUT_DIR}/${COMP_ID}.png"

mkdir -p "$OUT_DIR"

echo "Rendering still: ${COMP_ID} (frame ${FRAME})"
echo "Output: ${OUT_FILE}"
echo ""

npx remotion still src/index.ts "${COMP_ID}" "${OUT_FILE}" \
  --frame="${FRAME}" \
  --props='{}' \
  --log=error \
  --input-props="{\"template\":\"${TEMPLATE_ID}\"}"

echo ""
echo "Done: ${OUT_FILE}"
