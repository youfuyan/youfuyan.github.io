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

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="editorial-card group flex min-h-[22rem] h-full flex-col border-b border-r border-line bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">
          {String(index + 1).padStart(2, "0")} / {study.category}
        </p>
        <span
          className="editorial-card-arrow flex h-8 w-8 items-center justify-center rounded-full border border-line text-base text-muted"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
      <h3 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-normal text-ink sm:text-3xl">
        <Link
          href={caseStudyHref[study.slug]}
          className="outline-none transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          {study.title}
        </Link>
      </h3>
      <p className="mt-4 text-base leading-7 text-muted">{study.summary}</p>
      <div className="mt-auto pt-8">
        <TagList tags={study.tags.slice(0, 4)} />
      </div>
      <Link
        href={caseStudyHref[study.slug]}
        className="pressable mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      >
        Read case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
