import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Youfu Yan: software development engineer focused on production AI systems, backend reliability, AWS infrastructure, and evaluation.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I work on systems where model behavior, backend reliability, and product execution meet."
        description="I’m a software engineer at Amazon working across AI/ML evaluation, distributed backend services, and AWS infrastructure."
      />
      <Container as="section" className="pb-20">
        <div className="max-w-3xl space-y-6 text-base leading-7 text-muted">
          <p>
            I’m most interested in problems that require both production engineering
            and careful measurement: how a model should be evaluated, how a service
            behaves under failure, and how a system moves safely from design to real
            traffic.
          </p>
          <p>
            My recent work spans GenAI/ML evaluation, GPU inference infrastructure,
            distributed backend services, staged production launches, event-driven
            correctness, and React product workflows.
          </p>
          <p>
            My background in computer science, statistics, and quantitative methods
            shapes how I approach engineering decisions: define the signal, control
            the comparison, measure what can be measured, and leave enough
            operational room for the system to fail safely.
          </p>
          <p>
            Before my current SDE role, I built a cross-platform real-time
            notification system during an Amazon internship and co-developed KNOWNet
            at the University of Minnesota, combining LLMs, retrieval, Neo4j,
            Next.js, and D3.js for more verifiable health-information seeking.
          </p>
          <p>
            I’m interested in teams where AI systems, backend reliability, and
            product execution overlap: systems that need thoughtful evaluation,
            careful rollout, and engineers who can own the path from design to
            operation.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
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
              Read resume
            </Link>
          </div>
        </div>
        <section className="mt-14 max-w-3xl border-t border-line pt-8">
          <h2 className="text-xl font-semibold tracking-normal text-ink">Education</h2>
          <div className="mt-5 grid gap-4">
            {profile.education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="bg-white p-5 ring-1 ring-line">
                <h3 className="font-semibold text-ink">{item.school}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.degree}
                  {"detail" in item && item.detail ? `, ${item.detail}` : ""}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
