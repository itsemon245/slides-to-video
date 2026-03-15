import type { ContentPresentation } from "../schema/content";
import type { Template } from "../schema/template";
import academicEducation from "./academic-education";
import newGeneral from "./new-general";
import natureLight from "./nature-light";
import neoModern from "./neo-modern";
import { academicEducationContent } from "./academic-education/content";
import { newGeneralContent } from "./new-general/content";
import { natureLightContent } from "./nature-light/content";
import { neoModernContent } from "./neo-modern/content";

export const TEMPLATE_REGISTRY = {
  "academic-education": academicEducation,
  "new-general": newGeneral,
  "nature-light": natureLight,
  "neo-modern": neoModern,
} satisfies Record<string, Template>;

export const CONTENT_REGISTRY = {
  "academic-education": academicEducationContent,
  "new-general": newGeneralContent,
  "nature-light": natureLightContent,
  "neo-modern": neoModernContent,
} satisfies Record<keyof typeof TEMPLATE_REGISTRY, ContentPresentation>;

export type DefaultTemplateName = keyof typeof TEMPLATE_REGISTRY;

export const DEFAULT_TEMPLATE_NAME: DefaultTemplateName = "academic-education";

export const isValidTemplateName = (
  value: string | null | undefined
): value is DefaultTemplateName =>
  !!value && value in TEMPLATE_REGISTRY;

export const getTemplateNameFromQuery = (
  search: string
): DefaultTemplateName => {
  const params = new URLSearchParams(search);
  const template = params.get("template");
  return isValidTemplateName(template) ? template : DEFAULT_TEMPLATE_NAME;
};

export const resolveActivePreview = (search = "") => {
  const templateName = getTemplateNameFromQuery(search);

  return {
    templateName,
    template: TEMPLATE_REGISTRY[templateName],
    content: CONTENT_REGISTRY[templateName],
  };
};

export const activeTemplate = TEMPLATE_REGISTRY[DEFAULT_TEMPLATE_NAME];
export const activeContent = CONTENT_REGISTRY[DEFAULT_TEMPLATE_NAME];

export default activeTemplate;
