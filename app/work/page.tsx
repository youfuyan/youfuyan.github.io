import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { TagList } from "@/components/TagList";
import { workCaseStudies } from "@/content/caseStudies";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected engineering work from Youfu Yan across production AI, agent systems, AWS reliability, and distributed backend services.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  return (
    <div className="interior-page">
      <PageHeader
        eyebrow="Selected work"
        title="Systems built for production, not the demo reel."
        description="Four deeper case studies show how I evaluate models, constrain agents, design distributed state, and move AWS services through real production risk."
        index="WORK / 01"
        signal="BUILD / VERIFY / OPERATE"
      />

      <section className="site-section">
        <div className="page-shell">
          <header className="section-intro">
            <p className="page-kicker">Primary case studies</p>
            <h2>Concrete systems. Clear ownership.</h2>
            <p>
              Each case study focuses on the engineering decisions, control
              boundaries, and operational path behind the project.
            </p>
          </header>
          <div className="case-index-grid">
            {workCaseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell">
          <header className="section-intro section-intro-row">
            <div>
              <p className="page-kicker">Production notes</p>
              <h2>More range, kept concise.</h2>
            </div>
            <p>
              Smaller examples from the same operating surface: integrations,
              product workflows, test infrastructure, and operational readiness.
            </p>
          </header>
          <div className="production-note-list">
            {profile.projectNotes.map((project, index) => (
              <article key={project.title}>
                <div className="production-note-index">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{project.domain}</p>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <TagList tags={project.tags} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
