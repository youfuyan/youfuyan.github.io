import Link from "next/link";

import { ContactCTA } from "@/components/ContactCTA";
import { HomeWorkStack } from "@/components/HomeWorkStack";
import { PortalHero } from "@/components/PortalHero";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

export default function HomePage() {
  return (
    <div className="home-page">
      <PortalHero />

      <section aria-label="Engineering domains" className="home-capabilities">
        <div className="home-shell home-capability-inner">
          <div className="home-statement-grid" data-reveal>
            <p className="home-kicker">02 / Engineering range</p>
            <h2 className="home-statement">
              Four domains. <span>One production mindset.</span>
            </h2>
            <p className="home-lede home-statement-lede">{profile.hero.description}</p>
          </div>

          <div className="domain-atlas" aria-label="Technical focus">
            {profile.focusAreas.map((area, index) => (
              <article key={area.title} data-reveal>
                <div className="domain-atlas-heading">
                  <span>0{index + 1}</span>
                  <p>{area.label}</p>
                </div>
                <h3>{area.title}</h3>
                <p className="domain-atlas-copy">{area.description}</p>
                <p className="domain-atlas-evidence">{area.evidence}</p>
                <ul aria-label={`${area.title} technologies`}>
                  {area.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeWorkStack />

      <section className="home-evidence" aria-labelledby="evidence-title">
        <div className="home-shell">
          <header className="evidence-heading" data-reveal>
            <p className="home-kicker">04 / Evidence</p>
            <h2 id="evidence-title" className="home-section-title">
              Production ownership.<br />Research discipline.
            </h2>
          </header>

          <div className="evidence-grid">
            <article className="research-feature" data-reveal>
              <p className="evidence-label">IEEE TVCG · VIS 2024 Honorable Mention</p>
              <h3>Helping people verify LLM-generated health information.</h3>
              <p>
                KNOWNet connects conversational AI, retrieval, and knowledge-graph
                evidence so users can inspect why an answer should be trusted.
              </p>
              <Link href={routes.researchKnownet} className="home-text-link pressable">
                Read the research summary <span aria-hidden="true">↗</span>
              </Link>
            </article>

            <div className="experience-rows" aria-label="Experience summary">
              {profile.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} data-reveal>
                  <div>
                    <p>{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                  <p>{item.period}</p>
                </article>
              ))}
              <Link href={routes.resume} className="home-text-link pressable">
                Full experience in Resume.pdf <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
