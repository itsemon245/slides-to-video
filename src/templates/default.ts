import type { ContentPresentation } from "../schema/content";
import type { Template } from "../schema/template";
import academicEducation from "./academic-education";
import natureLight from "./nature-light";
import { academicEducationContent } from "../contents/academic-education.content";
import { natureLightContent } from "../contents/nature-light.content";

export const TEMPLATE_REGISTRY = {
  "academic-education": academicEducation,
  "nature-light": natureLight,
} satisfies Record<string, Template>;

export const CONTENT_REGISTRY = {
  "academic-education": academicEducationContent,
  "nature-light": natureLightContent,
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
