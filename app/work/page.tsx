import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected engineering case studies from Youfu Yan across AI/ML systems, backend services, reliability, and human-centered AI research.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Case studies with ownership, tradeoffs, and results."
        description="A concise set of examples showing production AI/ML systems, AWS-backed distributed services, and research depth."
      />
      <Container as="section" className="pb-20">
        <div className="grid border-l border-t border-line md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
