import { createContext, useContext } from "react";
import type {
  Template,
  ElementStyleConfig,
  ElementType,
  LayoutName,
  DesignTokens,
  AvatarConfig,
} from "../../schema/template";
import type { ContentElement } from "../../schema/content";

// ─── Context Shape ────────────────────────────────────────────────────────────

export interface TemplateContextValue {
  template: Template;

  // Current rendering context — set by GenericSlideRenderer before rendering elements
  currentLayout: LayoutName | null;
  currentArea: string | null;

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
  children: React.ReactNode;
}

export const TemplateProvider: React.FC<TemplateProviderProps> = ({
  template,
  editMode = false,
  selectedElementId = null,
  onSelectElement = null,
  currentLayout = null,
  currentArea = null,
  children,
}) => {
  return (
    <TemplateContext.Provider
      value={{
        template,
        currentLayout,
        currentArea,
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
