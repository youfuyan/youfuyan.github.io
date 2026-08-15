import Link from "next/link";

import type { CaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

import { TagList } from "./TagList";

const caseStudyHref: Record<CaseStudy["slug"], string> = {
  "agent-engineering-workflows": routes.agentEngineeringWorkflows,
  "ai-image-matting": routes.aiImageMatting,
  "multi-region-launch": routes.multiRegionLaunch,
  "event-driven-notifications": routes.eventDrivenNotifications,
  knownet: routes.researchKnownet,
};

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className={`case-index-card case-index-card-${(index % 4) + 1}`}>
      <div className="case-index-topline">
        <p>
          {String(index + 1).padStart(2, "0")} / {study.category}
        </p>
        <span aria-hidden="true">{study.period}</span>
      </div>
      <h3>
        <Link
          href={caseStudyHref[study.slug]}
          className="pressable"
        >
          {study.title}
        </Link>
      </h3>
      <p className="case-index-summary">{study.summary}</p>
      <div className="case-index-footer">
        <TagList tags={study.tags.slice(0, 4)} />
        <Link href={caseStudyHref[study.slug]} className="case-index-link pressable">
          Open case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
