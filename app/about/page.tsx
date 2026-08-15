import type { Metadata } from "next";
import Link from "next/link";

import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { TagList } from "@/components/TagList";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Youfu Yan: a software engineer working across production AI, agent systems, AWS reliability, and distributed product engineering.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="interior-page">
      <PageHeader
        eyebrow="About"
        title="I like systems that have to earn trust."
        description="My work sits where model behavior, agent control boundaries, backend reliability, and product execution meet."
        index="ABOUT / 03"
        signal="ENGINEERING / RESEARCH / OPERATIONS"
      />

      <section className="site-section">
        <div className="page-shell about-intro-grid">
          <div>
            <p className="page-kicker">Current practice</p>
            <h2>Production depth with an evaluation mindset.</h2>
          </div>
          <div className="longform-copy">
            <p>
              I am a Software Development Engineer at Amazon building production AI
              integrations, agent-assisted engineering workflows, distributed backend
              services, and AWS infrastructure. I usually enter when the problem is
              still ambiguous and stay through design, implementation, validation,
              rollout, and operations.
            </p>
            <p>
              My AI work combines GPU inference with evaluation design: production-shaped
              benchmarks, blinded model comparisons, bias controls, and debugging the
              evaluation itself when automated judgment diverges from reality.
            </p>
            <p>
              My agent work follows the same principle. Agents can accelerate coding,
              testing, diagnosis, and review, but their output needs deterministic
              checks, observable evidence, read-only defaults, and clear human ownership
              of writes and releases.
            </p>
            <p>
              A background in computer science, statistics, and quantitative methods
              shapes how I make decisions: define the signal, control the comparison,
              and design a reversible path through uncertainty.
            </p>
            <div className="inline-actions">
              <Link href={routes.work} className="site-primary-button pressable">
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
              <Link href={routes.resume} className="site-secondary-button pressable">
                Read the resume <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell">
          <header className="section-intro">
            <p className="page-kicker">Engineering domains</p>
            <h2>A connected systems practice.</h2>
          </header>
          <div className="about-domain-list">
            {profile.focusAreas.map((area, index) => (
              <article key={area.title}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{area.label}</p>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <TagList tags={area.skills} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="page-shell principle-grid">
          <header className="section-intro">
            <p className="page-kicker">How I operate</p>
            <h2>Good systems leave room to verify.</h2>
          </header>
          <div className="principle-list">
            {profile.operatingPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell education-grid">
          <header className="section-intro">
            <p className="page-kicker">Education</p>
            <h2>Computer science, statistics, and quantitative methods.</h2>
          </header>
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
      </section>

      <ContactCTA />
    </div>
  );
}
