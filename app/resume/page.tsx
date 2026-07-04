import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Readable resume summary for Youfu Yan, Software Development Engineer at Amazon.",
  alternates: {
    canonical: "/resume/",
  },
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Youfu Yan"
        description="Software Development Engineer at Amazon. Production AI/ML systems, distributed backend services, AWS infrastructure, and research-backed evaluation."
      />
      <Container as="section" className="pb-20">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 border-y border-line py-5 text-sm">
            <Link
              href={`mailto:${profile.email}`}
              className="font-semibold text-accent transition-colors hover:text-ink focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              {profile.email}
            </Link>
            <Link
              href={profile.links.linkedin}
              className="font-semibold text-accent transition-colors hover:text-ink focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.links.github}
              className="font-semibold text-accent transition-colors hover:text-ink focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>

          <section className="py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">Summary</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Software Development Engineer with 2+ years at Amazon building and
              operating production AI/ML and distributed systems across AWS. Owns
              ambiguous cross-team work from architecture and model evaluation
              through implementation, staged rollout, and on-call operations.
              Equal-contribution first author of IEEE VIS 2024 Honorable Mention
              research on LLM and knowledge graph systems.
            </p>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Technical skills
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-muted">
              <p>
                <strong className="font-semibold text-ink">AI/ML and GenAI:</strong>{" "}
                Amazon SageMaker, AWS Bedrock, PyTorch, LLM-as-a-judge evaluation,
                pairwise A/B testing, RAG, knowledge graphs, prompt engineering,
                image matting and segmentation.
              </p>
              <p>
                <strong className="font-semibold text-ink">Languages:</strong> Java,
                Python, TypeScript, JavaScript, SQL, C/C++, Bash.
              </p>
              <p>
                <strong className="font-semibold text-ink">Backend and cloud:</strong>{" "}
                Spring Boot, REST APIs, AWS Lambda, DynamoDB, SQS/SNS, S3,
                CloudWatch, event-driven architecture, microservices, OAuth 2.0,
                multi-region deployment, AWS CDK, Docker.
              </p>
              <p>
                <strong className="font-semibold text-ink">Frontend and quality:</strong>{" "}
                React, Redux, Next.js, React Native, D3.js, Playwright, Cypress,
                JUnit, Mockito, Jest, integration/load/stress testing.
              </p>
            </div>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Experience
            </h2>
            <div className="mt-5 space-y-6">
              {profile.experience.map((item) => (
                <article key={`${item.company}-${item.role}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-semibold text-ink">
                      {item.company} - {item.role}
                    </h3>
                    <p className="text-sm font-medium text-muted">{item.period}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Selected work
            </h2>
            <div className="mt-5 space-y-5 text-sm leading-6 text-muted">
              <p>
                <strong className="font-semibold text-ink">
                  AI/ML platform migration:
                </strong>{" "}
                Designed and drove an AWS-native background-removal migration plan
                for approximately 1M uncached image requests per month; projected to
                reduce annual run-rate by about $96K, or approximately 80%, versus
                the third-party API based on current traffic, $0.01/request vendor
                pricing, and an estimated $2K/month hosted endpoint.
              </p>
              <p>
                <strong className="font-semibold text-ink">
                  Distributed systems and production reliability:
                </strong>{" "}
                Owned the launch of a business-critical content API in a new AWS
                region and executed a staged 1% to 100% traffic shift; diagnosed a
                live certificate mismatch at 20%, rolled back safely, coordinated
                the fix, and completed the launch with no customer-facing outage.
              </p>
              <p>
                Designed and built the first version of an event-driven
                creator-notification service used across three teams, including
                event-time DynamoDB conditional writes and retry/DLQ handling to
                preserve correctness under out-of-order events.
              </p>
              <p>
                Drove production content-ingestion workflows for a program
                supporting approximately 2,300 creators and 85K ingested items;
                contributed to a scheduling platform serving 8,000+ creators across
                256K+ workflows.
              </p>
            </div>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Technical focus
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {profile.focusAreas.map((area) => (
                <article key={area.title}>
                  <h3 className="font-semibold text-ink">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              Publication
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              <strong className="font-semibold text-ink">
                KNOWNET: Guided Health Information Seeking from LLMs via Knowledge
                Graph Integration
              </strong>
              . Youfu Yan*, Yu Hou*, Yongkang Xiao, Rui Zhang, Qianwen Wang (*equal
              contribution). IEEE TVCG. IEEE VIS 2024 Honorable Mention.
            </p>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">Education</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-muted">
              {profile.education.map((item) => (
                <p key={`${item.school}-${item.degree}`}>
                  <strong className="font-semibold text-ink">{item.school}</strong> -{" "}
                  {item.degree}
                  {"detail" in item && item.detail ? `, ${item.detail}` : ""}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              <strong className="font-semibold text-ink">Certification:</strong>{" "}
              {profile.certification}
            </p>
          </section>

          <section className="border-t border-line py-8">
            <h2 className="text-xl font-semibold tracking-normal text-ink">
              PDF download
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              The PDF uses the same public-safe source content as this page and
              intentionally excludes a phone number.
            </p>
            <Link
              href="/Youfu_Yan_Public_Resume.pdf"
              className="mt-5 inline-flex rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
            >
              Download PDF
            </Link>
          </section>
        </div>
      </Container>
    </>
  );
}
