import type { Metadata } from "next";
import Link from "next/link";

import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { TagList } from "@/components/TagList";
import { workCaseStudies } from "@/content/caseStudies";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Readable resume for Youfu Yan, Software Development Engineer focused on production AI, agents, distributed systems, and AWS.",
  alternates: {
    canonical: "/resume/",
  },
};

export default function ResumePage() {
  return (
    <div className="interior-page resume-page">
      <PageHeader
        eyebrow="Resume"
        title="Youfu Yan"
        description="Software Development Engineer at Amazon building production AI, evidence-gated agent workflows, distributed services, and reliable AWS systems."
        index="RESUME / 04"
        signal="NEW YORK / SOFTWARE ENGINEERING"
      />

      <section className="resume-command-bar">
        <div className="page-shell">
          <div className="resume-links">
            <Link href={`mailto:${profile.email}`} className="site-text-link pressable">
              {profile.email}
            </Link>
            <Link href={profile.links.linkedin} className="site-text-link pressable" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </Link>
            <Link href={profile.links.github} className="site-text-link pressable" target="_blank" rel="noreferrer">
              GitHub ↗
            </Link>
          </div>
          <Link href="/Youfu_Yan_Public_Resume.pdf" className="site-primary-button pressable">
            Download PDF <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      <section className="site-section">
        <div className="page-shell resume-layout">
          <aside className="resume-section-label">
            <span>01</span>
            <p>Profile</p>
          </aside>
          <div className="resume-summary">
            <h2>I build systems where intelligence has to survive production.</h2>
            <p>
              My work spans GPU inference and model evaluation, reusable agent
              workflows, event-driven backends, cloud infrastructure, product
              interfaces, release engineering, and on-call operations. I own ambiguous
              work end to end and make uncertainty visible through evaluation,
              observability, and staged delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell resume-layout">
          <aside className="resume-section-label">
            <span>02</span>
            <p>Domains</p>
          </aside>
          <div className="resume-domain-grid">
            {profile.focusAreas.map((area) => (
              <article key={area.title}>
                <p>{area.label}</p>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
                <TagList tags={area.skills} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="page-shell resume-layout">
          <aside className="resume-section-label">
            <span>03</span>
            <p>Experience</p>
          </aside>
          <div className="resume-experience-list">
            {profile.experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <div>
                  <p>{item.company}</p>
                  <h2>{item.role}</h2>
                </div>
                <p>{item.summary}</p>
                <p>{item.period}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell resume-layout">
          <aside className="resume-section-label">
            <span>04</span>
            <p>Selected systems</p>
          </aside>
          <div className="resume-project-list">
            {workCaseStudies.map((study, index) => (
              <article key={study.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{study.category}</p>
                  <h2>
                    <Link href={`/work/${study.slug}/`} className="pressable">
                      {study.title}
                    </Link>
                  </h2>
                  <p>{study.summary}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="page-shell resume-layout">
          <aside className="resume-section-label">
            <span>05</span>
            <p>Research & education</p>
          </aside>
          <div className="resume-credentials">
            <article>
              <p className="page-kicker">Publication</p>
              <h2>KNOWNet: Guided Health Information Seeking from LLMs via Knowledge Graph Integration</h2>
              <p>
                Equal-contribution first author. IEEE Transactions on Visualization
                and Computer Graphics. IEEE VIS 2024 Honorable Mention.
              </p>
            </article>
            <div className="education-list">
              {profile.education.map((item) => (
                <article key={`${item.school}-${item.degree}`}>
                  <h3>{item.school}</h3>
                  <p>
                    {item.degree}
                    {"detail" in item && item.detail ? ` / ${item.detail}` : ""}
                  </p>
                </article>
              ))}
              <p className="certification-line">{profile.certification}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
