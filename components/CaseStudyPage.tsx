import Link from "next/link";

import type { CaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

import { ContactCTA } from "./ContactCTA";
import { PageHeader } from "./PageHeader";
import { TagList } from "./TagList";

function DetailSection({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: readonly string[] | undefined;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="case-detail-section">
      <header>
        <span>{index}</span>
        <h2>{title}</h2>
      </header>
      <div>
        {items.map((item) => <p key={item}>{item}</p>)}
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
  const sections = [
    { title: "Context", items: study.sections.context },
    { title: "Problem", items: study.sections.problem },
    { title: "Ownership", items: study.sections.ownership },
    { title: "Approach", items: study.sections.approach },
    { title: "Result", items: study.sections.result },
    { title: "Engineering decisions", items: study.sections.decisions },
    { title: "What I learned", items: study.sections.lessons },
  ];

  return (
    <div className="interior-page">
      <PageHeader
        eyebrow="Engineering case study"
        title={study.title}
        description={study.summary}
        index="CASE STUDY"
        signal={`${study.category} / ${study.period}`}
      />

      <section className="case-overview">
        <div className="page-shell">
          <Link href={routes.work} className="site-text-link pressable">
            <span aria-hidden="true">←</span> All selected work
          </Link>
          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{study.outcome}</dd>
            </div>
          </dl>
          <TagList tags={study.tags} />
        </div>
      </section>

      <section className="case-body">
        <div className="page-shell case-body-grid">
          <aside className="case-system-map">
            <p className="page-kicker">System map</p>
            <h2>Tools are part of the design, not the headline.</h2>
            <TagList tags={study.technologies} />
            {study.publicSafetyNote ? (
              <p className="case-safety-note">{study.publicSafetyNote}</p>
            ) : null}
          </aside>

          <div className="case-detail-list">
            {sections.map((section, index) => (
              <DetailSection
                key={section.title}
                index={String(index + 1).padStart(2, "0")}
                title={section.title}
                items={section.items}
              />
            ))}
            {next ? (
              <Link href={next.href} className="case-next pressable">
                <span>Next case study</span>
                <strong>{next.label}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
