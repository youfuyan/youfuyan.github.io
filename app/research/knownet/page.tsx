import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { TagList } from "@/components/TagList";
import { getCaseStudy } from "@/content/caseStudies";

const study = getCaseStudy("knownet");

export const metadata: Metadata = {
  title: "KNOWNet Research",
  description:
    "KNOWNet research summary: LLM health answers, knowledge-graph validation, progressive visualization, and human-centered AI evaluation.",
  alternates: {
    canonical: "/research/knownet/",
  },
};

const publicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: "Guided Health-related Information Seeking from LLMs via Knowledge Graph Integration",
  award: "IEEE VIS 2024 Honorable Mention",
  author: [
    "Youfu Yan",
    "Yu Hou",
    "Yongkang Xiao",
    "Rui Zhang",
    "Qianwen Wang",
  ],
  url: "https://www.computer.org/csdl/journal/tg/2025/01/10670469/207JDmbejAY",
  isPartOf: {
    "@type": "Periodical",
    name: "IEEE Transactions on Visualization and Computer Graphics",
  },
};

export default function KnownetPage() {
  if (!study) {
    return null;
  }

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={study.title}
        description="KNOWNET: Guided Health Information Seeking from LLMs via Knowledge Graph Integration."
      />
      <Container as="section" className="pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)]">
          <div className="max-w-3xl">
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Plain-language abstract
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                KNOWNet explores how health-information interfaces can make LLM
                answers more inspectable. It combines conversation, retrieval,
                knowledge-graph validation, progressive visualization, and follow-up
                recommendations so users can reason about relationships and evidence.
              </p>
            </section>
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Research question
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                How can an interface help people inspect, connect, and understand
                health information returned by an LLM instead of accepting a fluent
                answer at face value?
              </p>
            </section>
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                System overview
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                {study.sections.approach.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Personal contribution
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                {study.sections.ownership.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>
            <section className="border-t border-line py-8">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Result and recognition
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                {study.sections.result.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>
            <section className="border-t border-line py-8" id="publication-links">
              <h2 className="text-xl font-semibold tracking-normal text-ink">
                Citation and public links
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Guided Health-related Information Seeking from LLMs via Knowledge
                Graph Integration. IEEE Transactions on Visualization and Computer
                Graphics, IEEE VIS 2024.
              </p>
              {study.links?.length ? (
                <ul className="mt-5 space-y-4">
                  {study.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="pressable font-semibold text-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </Link>
                      {link.description ? (
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {link.description}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-5 text-sm leading-6 text-muted">
                Demo and video links are not shown because they were not supplied as
                verified public sources.
              </p>
            </section>
          </div>

          <aside className="h-fit border border-line bg-white p-6">
            <SectionHeading eyebrow="Metadata" title="Publication details" />
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Role</dt>
                <dd className="mt-1 leading-6 text-muted">{study.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Period</dt>
                <dd className="mt-1 leading-6 text-muted">{study.period}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Paper title</dt>
                <dd className="mt-1 leading-6 text-muted">
                  Guided Health-related Information Seeking from LLMs via Knowledge
                  Graph Integration
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Recognition</dt>
                <dd className="mt-1 leading-6 text-muted">
                  IEEE VIS 2024 Honorable Mention
                </dd>
              </div>
            </dl>
            {study.links?.length ? (
              <div className="mt-6 border-t border-line pt-5">
                <h2 className="text-sm font-semibold text-ink">Public sources</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {study.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="pressable font-semibold text-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-6">
              <TagList tags={study.tags} />
            </div>
          </aside>
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationJsonLd) }}
      />
    </>
  );
}
