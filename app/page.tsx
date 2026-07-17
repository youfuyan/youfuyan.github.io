import Link from "next/link";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/Container";
import { ExperienceItem } from "@/components/ExperienceItem";
import { HeroParticleFlowLoader } from "@/components/HeroParticleFlowLoader";
import { HeroSignalBackground } from "@/components/HeroSignalBackground";
import { ImpactMetric } from "@/components/ImpactMetric";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/content/caseStudies";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const selectedWork = caseStudies;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-dark-line bg-ink text-white">
        <HeroParticleFlowLoader />
        <HeroSignalBackground />
        <Container className="hero-content relative z-10 pt-14 sm:pt-20">
          <div className="max-w-4xl pb-14 sm:pb-16 lg:max-w-3xl">
            <p className="hero-reveal hero-delay-1 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.hero.eyebrow}
            </p>
            <h1 className="hero-reveal hero-delay-2 mt-6 max-w-3xl text-[2.65rem] font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl sm:leading-[1.02]">
              {profile.hero.title}
            </h1>
            <p className="hero-reveal hero-delay-3 mt-6 max-w-3xl text-lg leading-8 text-dark-muted sm:text-xl">
              {profile.hero.description}
            </p>
            <p className="hero-reveal hero-delay-4 mt-5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-blue-200">
              {profile.hero.stack}
            </p>
            <div className="hero-reveal hero-delay-4 mt-8 flex flex-wrap gap-3">
              <Link
                href={routes.work}
                className="highlight-button pressable rounded-sm bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                <span>View selected work</span>
              </Link>
              <Link
                href={routes.resume}
                className="pressable rounded-sm border border-dark-line bg-transparent px-4 py-3 text-sm font-semibold text-white hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                Read my resume <span className="button-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Impact snapshot" className="bg-ink">
        <Container>
          <div className="grid grid-cols-2 border-l border-t border-dark-line lg:grid-cols-4">
            {profile.impact.map((metric) => (
              <ImpactMetric
                key={metric.value}
                value={metric.value}
                label={metric.label}
                qualifier={"qualifier" in metric ? metric.qualifier : undefined}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Production work with measurable outcomes."
            description="Three case studies focus on Amazon engineering ownership. The research highlight shows how Youfu approaches AI systems when evidence and user understanding matter."
          />
          <div className="mt-10 grid border-l border-t border-line md:grid-cols-2">
            {selectedWork.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Current production ownership, backed by research depth."
        />
        <div className="mt-8">
          {profile.experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.role}`} {...item} />
          ))}
        </div>
      </Container>

      <section className="border-y border-line bg-research">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
            <SectionHeading
              eyebrow="Research highlight"
              title="LLM answers are easier to trust when people can inspect the evidence."
              description="KNOWNet combines conversational AI, retrieval, knowledge-graph validation, and progressive visualization for health-information seeking."
            />
            <div>
              <p className="text-base leading-7 text-muted">
                Equal-contribution work published in IEEE Transactions on
                Visualization and Computer Graphics, recognized with an IEEE VIS 2024
                Honorable Mention, and reported a 20% improvement in user
                comprehension.
              </p>
              <Link
                href={routes.researchKnownet}
                className="pressable mt-6 inline-flex rounded-sm border border-ink bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                Read the research summary
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Technical focus"
          title="Where Youfu spends engineering judgment."
        />
        <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2">
          {profile.focusAreas.map((area) => (
            <article key={area.title} className="border-b border-r border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-normal text-ink">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <ContactCTA />
    </>
  );
}
