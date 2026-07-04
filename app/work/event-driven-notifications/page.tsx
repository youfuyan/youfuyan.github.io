import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const study = getCaseStudy("event-driven-notifications");

export const metadata: Metadata = {
  title: "Event-Driven Notifications",
  description:
    "How Youfu Yan designed an event-driven notification service with DynamoDB conditional writes, retry handling, and protection against out-of-order events.",
  alternates: {
    canonical: "/work/event-driven-notifications/",
  },
};

export default function EventDrivenNotificationsPage() {
  if (!study) {
    return null;
  }

  return (
    <CaseStudyPage
      study={study}
      next={{ label: "KNOWNet research", href: routes.researchKnownet }}
    />
  );
}
