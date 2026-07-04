import Link from "next/link";

import type { CaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

import { Container } from "./Container";
import { TagList } from "./TagList";

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: readonly string[] | undefined;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="border-t border-line py-8">
      <h2 className="text-xl font-semibold tracking-normal text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-muted">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyPage({
  study,
  next,
}: {
  study: CaseStudy;
  next?: { label: string; href: string };
}) {
  return (
    <>
      <Container as="section" className="py-14 sm:py-20">
        <Link
          href={routes.work}
          className="text-sm font-semibold text-accent transition-colors hover:text-ink focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
        >
          Back to selected work
        </Link>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {study.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted">{study.summary}</p>
        </div>
        <dl className="mt-10 grid gap-4 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-ink">Role</dt>
            <dd className="mt-2 leading-6 text-muted">{study.role}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Timeframe</dt>
            <dd className="mt-2 leading-6 text-muted">{study.period}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Outcome</dt>
            <dd className="mt-2 leading-6 text-muted">{study.outcome}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <TagList tags={study.tags} />
        </div>
      </Container>
      <Container as="section" className="pb-16">
        <div className="max-w-3xl">
          <DetailSection title="Context" items={study.sections.context} />
          <DetailSection title="Problem" items={study.sections.problem} />
          <DetailSection title="Ownership" items={study.sections.ownership} />
          <DetailSection title="Approach" items={study.sections.approach} />
          <DetailSection title="Result" items={study.sections.result} />
          <DetailSection
            title="Engineering decisions"
            items={study.sections.decisions}
          />
          <DetailSection
            title="Reliability or evaluation lessons"
            items={study.sections.lessons}
          />
          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Technologies
            </h2>
            <div className="mt-5">
              <TagList tags={study.technologies} />
            </div>
          </section>
          {study.publicSafetyNote ? (
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Public-safety note
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                {study.publicSafetyNote}
              </p>
            </section>
          ) : null}
          {next ? (
            <div className="border-t border-line pt-8">
              <Link
                href={next.href}
                className="inline-flex rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                Next: {next.label}
              </Link>
            </div>
          ) : null}
        </div>
      </Container>
    </>
  );
}
