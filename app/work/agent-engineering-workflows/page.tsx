import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const study = getCaseStudy("agent-engineering-workflows");

export const metadata: Metadata = {
  title: "Evidence-Gated Agent Engineering Workflows",
  description:
    "How Youfu Yan builds agent-assisted engineering workflows around deterministic verification, operational evidence, and human approval boundaries.",
  alternates: {
    canonical: "/work/agent-engineering-workflows/",
  },
};

export default function AgentEngineeringWorkflowsPage() {
  if (!study) {
    return null;
  }

  return (
    <CaseStudyPage
      study={study}
      next={{
        label: "Evaluating an in-house image-matting platform",
        href: routes.aiImageMatting,
      }}
    />
  );
}
