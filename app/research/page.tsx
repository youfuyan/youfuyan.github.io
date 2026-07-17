import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { getCaseStudy } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const study = getCaseStudy("knownet");

export const metadata: Metadata = {
  title: "Research",
  description: "Research work from Youfu Yan, including KNOWNet.",
  alternates: {
    canonical: "/research/",
  },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Human-centered AI research with system-building depth."
        description="The current research page focuses on KNOWNet, an LLM and knowledge-graph system for more verifiable health-information seeking."
      />
      <Container as="section" className="pb-20">
        {study ? (
          <article className="editorial-card max-w-3xl border border-line bg-white p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">{study.category}</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-normal text-ink">
              {study.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{study.summary}</p>
            <Link
              href={routes.researchKnownet}
              className="pressable mt-6 inline-flex rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Read KNOWNet summary
            </Link>
          </article>
        ) : null}
      </Container>
    </>
  );
}
