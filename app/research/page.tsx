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
          <article className="max-w-3xl border border-line bg-white p-6 shadow-subtle">
            <p className="text-sm font-semibold text-accent">{study.category}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-ink">
              {study.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">{study.summary}</p>
            <Link
              href={routes.researchKnownet}
              className="mt-6 inline-flex rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Read KNOWNet summary
            </Link>
          </article>
        ) : null}
      </Container>
    </>
  );
}
