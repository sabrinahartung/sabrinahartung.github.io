import HealthFaqArchitecture from "./HealthFaqArchitecture";
import SamsonArchitecture from "./SamsonArchitecture";

/**
 * Hand-drawn SVG diagrams, referenced by key from `projects.ts`
 * (`architecture.diagram`). Add a component here to make it available.
 */
export const diagrams = {
  "health-faq-agent": HealthFaqArchitecture,
  samson: SamsonArchitecture,
};

export type DiagramKey = keyof typeof diagrams;
