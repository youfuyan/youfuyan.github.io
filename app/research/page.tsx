import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { getCaseStudy } from "@/content/caseStudies";

const study = getCaseStudy("knownet");

export const metadata: Metadata = {
  title: "Research",
  description: "Human-centered AI research from Youfu Yan, including KNOWNet.",
  alternates: {
    canonical: "/research/",
  },
};

export default function ResearchPage() {
  return (
    <div className="interior-page">
      <PageHeader
        eyebrow="Research"
        title="Human-centered AI, built as a real system."
        description="Research into how retrieval, knowledge graphs, and interface design can make LLM-generated information easier to inspect and understand."
        index="RESEARCH / 02"
        signal="LLM / RAG / KNOWLEDGE GRAPHS"
      />
      <section className="site-section">
        <div className="page-shell">
          {study ? <CaseStudyCard study={study} index={0} /> : null}
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
