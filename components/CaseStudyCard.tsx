import Link from "next/link";

import type { CaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

import { TagList } from "./TagList";

const caseStudyHref: Record<CaseStudy["slug"], string> = {
  "ai-image-matting": routes.aiImageMatting,
  "multi-region-launch": routes.multiRegionLaunch,
  "event-driven-notifications": routes.eventDrivenNotifications,
  knownet: routes.researchKnownet,
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-5 shadow-subtle">
      <p className="text-sm font-semibold text-accent">{study.category}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-normal text-ink">
        <Link
          href={caseStudyHref[study.slug]}
          className="outline-none transition-colors hover:text-accent focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          {study.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{study.summary}</p>
      <div className="mt-5">
        <TagList tags={study.tags.slice(0, 4)} />
      </div>
      <Link
        href={caseStudyHref[study.slug]}
        className="mt-6 inline-flex w-fit rounded-md text-sm font-semibold text-accent transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      >
        Read case study
      </Link>
    </article>
  );
}
