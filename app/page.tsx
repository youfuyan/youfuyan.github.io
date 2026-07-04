import Link from "next/link";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactCTA } from "@/components/ContactCTA";
import { Container } from "@/components/Container";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ImpactMetric } from "@/components/ImpactMetric";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/content/caseStudies";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const selectedWork = caseStudies;

export default function HomePage() {
  return (
    <>
      <Container as="section" className="py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-normal text-ink sm:text-6xl">
            {profile.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {profile.hero.description}
          </p>
          <p className="mt-5 text-sm font-semibold text-ink">
            {profile.hero.stack}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={routes.work}
              className="rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              View selected work
            </Link>
            <Link
              href={routes.resume}
              className="rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Read my resume
            </Link>
          </div>
        </div>
      </Container>

      <Container as="section" className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Container as="section" className="py-16">
        <SectionHeading
          eyebrow="Selected work"
          title="Production work with measurable outcomes."
          description="Three case studies focus on Amazon engineering ownership. The research highlight shows how Youfu approaches AI systems when evidence and user understanding matter."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {selectedWork.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>

      <Container as="section" className="py-16">
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

      <Container as="section" className="py-16">
        <div className="grid gap-8 border-y border-line py-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
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
              className="mt-6 inline-flex rounded-md bg-white px-4 py-3 text-sm font-semibold text-accent ring-1 ring-line transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Read the research summary
            </Link>
          </div>
        </div>
      </Container>

      <Container as="section" className="py-16">
        <SectionHeading
          eyebrow="Technical focus"
          title="Where Youfu spends engineering judgment."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {profile.focusAreas.map((area) => (
            <article key={area.title} className="border-t border-line pt-5">
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
