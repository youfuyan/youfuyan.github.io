import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const study = getCaseStudy("ai-image-matting");

export const metadata: Metadata = {
  title: "In-House Image-Matting Platform",
  description:
    "How Youfu Yan drove an AWS-native image-matting migration with benchmarking, LLM evaluation, and production ownership.",
  alternates: {
    canonical: "/work/ai-image-matting/",
  },
};

export default function AiImageMattingPage() {
  if (!study) {
    return null;
  }

  return (
    <CaseStudyPage
      study={study}
      next={{
        label: "Launching a critical API in a new AWS region",
        href: routes.multiRegionLaunch,
      }}
    />
  );
}
