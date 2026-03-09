import { createContext, useContext } from "react";
import type {
  Template,
  ElementStyleConfig,
  ElementType,
  LayoutName,
  DesignTokens,
  AvatarConfig,
  TransitionRef,
} from "../../schema/template";
import type { ContentElement } from "../../schema/content";

// ─── Context Shape ────────────────────────────────────────────────────────────

export interface ElementFrameRange {
  start: number;
  end: number;
}

export interface TemplateContextValue {
  template: Template;

  // Current rendering context — set by GenericSlideRenderer before rendering elements
  currentLayout: LayoutName | null;
  currentArea: string | null;

  // Per-element active frame ranges (keyed by element id).
  // Narrated elements: derived from avatarMap durations.
  // Non-narrated elements: { start: 0, end: durationInFrames }.
  elementFrameRanges: Record<string, ElementFrameRange>;

  // Web editor integration
  editMode: boolean;
  selectedElementId: string | null;
  onSelectElement: ((id: string) => void) | null;
}

const TemplateContext = createContext<TemplateContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface TemplateProviderProps {
  template: Template;
  editMode?: boolean;
  selectedElementId?: string | null;
  onSelectElement?: ((id: string) => void) | null;
  currentLayout?: LayoutName | null;
  currentArea?: string | null;
  elementFrameRanges?: Record<string, ElementFrameRange>;
  children: React.ReactNode;
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({
  template,
  editMode = false,
  selectedElementId = null,
  onSelectElement = null,
  currentLayout = null,
  currentArea = null,
  elementFrameRanges = {},
  children,
}) => {
  return (
    <TemplateContext.Provider
      value={{
        template,
        currentLayout,
        currentArea,
        elementFrameRanges,
        editMode,
        selectedElementId,
        onSelectElement,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

export const useTemplate = (): TemplateContextValue => {
  const ctx = useContext(TemplateContext);
  if (!ctx) {
    throw new Error("useTemplate must be used inside a TemplateProvider");
  }
  return ctx;
};

/**
 * Resolves the ElementStyleConfig for a given element type using the
 * 4-level priority chain:
 *   0. el.styleOverrides  (caller merges this on top after calling this hook)
 *   1. template.layouts[layout].areas[area].elementStyles[type]
 *   2. template.elementDefaults[type]
 *   3. Empty object (component-level minimum defaults apply)
 */
export const useElementConfig = (type: ElementType): ElementStyleConfig => {
  const { template, currentLayout, currentArea } = useTemplate();

  const areaConfig =
    currentLayout && currentArea
      ? template.layouts[currentLayout]?.areas[currentArea]?.elementStyles?.[type]
      : undefined;

  const globalDefault = template.elementDefaults?.[type];

  return { ...globalDefault, ...areaConfig };
};

/**
 * Resolves the tokens object from the current template.
 */
export const useTokens = (): DesignTokens => {
  return useTemplate().template.tokens;
};

/**
 * Resolves the avatar config for a given element using the 3-level chain:
 *   0. element.avatarOverride
 *   1. slide.avatarOverride  (passed explicitly — caller responsibility)
 *   2. presentation.avatarDefaults
 *   3. template.avatarDefaults
 */
export const resolveAvatarConfig = (
  templateDefaults: AvatarConfig,
  presentationDefaults?: Partial<AvatarConfig>,
  slideOverride?: Partial<AvatarConfig>,
  elementOverride?: Partial<AvatarConfig>
): AvatarConfig => {
  return {
    ...templateDefaults,
    ...presentationDefaults,
    ...slideOverride,
    ...elementOverride,
  };
};

/**
 * Returns whether the given element is currently selected in edit mode.
 */
export const useIsElementSelected = (id: string): boolean => {
  const { editMode, selectedElementId } = useTemplate();
  return editMode && selectedElementId === id;
};

/**
 * Returns an onClick handler that selects an element in edit mode.
 * Returns undefined outside of edit mode.
 */
export const useElementSelectHandler = (
  id: string
): React.MouseEventHandler | undefined => {
  const { editMode, onSelectElement } = useTemplate();
  if (!editMode || !onSelectElement) return undefined;
  return (e) => {
    e.stopPropagation();
    onSelectElement(id);
  };
};

/**
 * Returns a wrapper style for edit mode selection highlight.
 */
export const useEditModeStyle = (
  el: ContentElement
): React.CSSProperties => {
  const isSelected = useIsElementSelected(el.id);
  const { editMode } = useTemplate();

  if (!editMode) return {};

  return {
    outline: isSelected
      ? "2px solid rgba(79, 142, 255, 0.9)"
      : "1px solid rgba(79, 142, 255, 0.25)",
    outlineOffset: 4,
    borderRadius: 4,
    cursor: "pointer",
  };
};

/**
 * Resolves the transitionIn and transitionOut for a given element using the
 * 3-level priority chain (template wins, content element is last fallback):
 *
 *   1. template.layouts[layout].areas[area].elementStyles[type].transitionIn/Out
 *   2. template.elementDefaults[type].transitionIn/Out
 *   3. el.transitionIn / el.transitionOut
 */
export const useElementTransitionConfig = (
  el: ContentElement
): { transitionIn: TransitionRef | undefined; transitionOut: TransitionRef | undefined } => {
  const { template, currentLayout, currentArea } = useTemplate();

  const areaStyles =
    currentLayout && currentArea
      ? template.layouts[currentLayout]?.areas[currentArea]?.elementStyles?.[el.type]
      : undefined;

  const globalDefaults = template.elementDefaults?.[el.type];

  const transitionIn =
    areaStyles?.transitionIn ??
    globalDefaults?.transitionIn ??
    (el as any).transitionIn;

  const transitionOut =
    areaStyles?.transitionOut ??
    globalDefaults?.transitionOut ??
    (el as any).transitionOut;

  return { transitionIn, transitionOut };
};

/**
 * Returns the active frame range for a given element id.
 * Falls back to { start: 0, end: 0 } if not found (e.g. outside a slide context).
 */
export const useElementFrameRange = (id: string): ElementFrameRange => {
  const { elementFrameRanges } = useTemplate();
  return elementFrameRanges[id] ?? { start: 0, end: 0 };
};
