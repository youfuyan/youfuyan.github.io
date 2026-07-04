import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const study = getCaseStudy("multi-region-launch");

export const metadata: Metadata = {
  title: "Multi-Region API Launch",
  description:
    "How Youfu Yan owned a staged AWS region launch, diagnosed a live certificate issue, and completed rollout without customer-facing outage.",
  alternates: {
    canonical: "/work/multi-region-launch/",
  },
};

export default function MultiRegionLaunchPage() {
  if (!study) {
    return null;
  }

  return (
    <CaseStudyPage
      study={study}
      next={{
        label: "Designing for out-of-order events",
        href: routes.eventDrivenNotifications,
      }}
    />
  );
}
