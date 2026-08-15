import type { Metadata } from "next";
import Link from "next/link";

import { ContactCTA } from "@/components/ContactCTA";
import { PageHeader } from "@/components/PageHeader";
import { TagList } from "@/components/TagList";
import { getCaseStudy } from "@/content/caseStudies";

const study = getCaseStudy("knownet");

export const metadata: Metadata = {
  title: "KNOWNet Research",
  description:
    "KNOWNet research summary: an LLM agent, knowledge-graph grounding, progressive visualization, and human-centered evaluation.",
  alternates: {
    canonical: "/research/knownet/",
  },
};

const publicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: "Guided Health-related Information Seeking from LLMs via Knowledge Graph Integration",
  award: "IEEE VIS 2024 Honorable Mention",
  author: ["Youfu Yan", "Yu Hou", "Yongkang Xiao", "Rui Zhang", "Qianwen Wang"],
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

  const systemStages = [
    {
      label: "Ask",
      title: "Conversational intent",
      description:
        "The user explores a health question through an LLM-powered conversational interface.",
    },
    {
      label: "Ground",
      title: "Knowledge-graph retrieval",
      description:
        "The agent decides what structured evidence to retrieve from Neo4j and validates generated content against it.",
    },
    {
      label: "Reveal",
      title: "Progressive visualization",
      description:
        "D3.js views expose relationships in stages so the user can inspect context without facing the entire graph at once.",
    },
    {
      label: "Continue",
      title: "Guided follow-up",
      description:
        "Recommendation support turns a single answer into an evidence-connected path for further exploration.",
    },
  ];

  return (
    <div className="interior-page research-page">
      <PageHeader
        eyebrow="Research / KNOWNet"
        title="Helping people inspect what an LLM tells them."
        description="An equal-contribution research project combining an LLM agent, knowledge-graph grounding, and progressive visualization for guided health-information seeking."
        index="RESEARCH / 02"
        signal="IEEE TVCG / VIS 2024 HONORABLE MENTION"
      />

      <section className="site-section">
        <div className="page-shell research-question-grid">
          <div>
            <p className="page-kicker">Research question</p>
            <h2>How can an interface make generated information inspectable?</h2>
          </div>
          <div className="longform-copy">
            <p>
              Fluent answers can conceal missing context and weak grounding. KNOWNet
              explores a different interaction model: let the agent retrieve structured
              knowledge, then give the user a progressive visual path through the
              relationships behind the response.
            </p>
            <p>
              The project treats trust as an interface and systems problem. Retrieval,
              graph validation, recommendation, and visualization work together so the
              user can ask a question, inspect supporting structure, and continue
              exploring instead of accepting a single generated paragraph.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell">
          <header className="section-intro">
            <p className="page-kicker">System flow</p>
            <h2>Conversation becomes an evidence path.</h2>
          </header>
          <div className="research-system-flow">
            {systemStages.map((stage, index) => (
              <article key={stage.label}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{stage.label}</p>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="page-shell research-contribution-grid">
          <div>
            <p className="page-kicker">Contribution</p>
            <h2>Research depth backed by system building.</h2>
            <TagList tags={study.technologies} />
          </div>
          <div className="research-contribution-list">
            <article>
              <h3>System implementation</h3>
              <p>
                Worked across the LLM, Flask, Neo4j, Next.js, and D3.js stack as an
                equal-contribution author.
              </p>
            </article>
            <article>
              <h3>Human-centered evaluation</h3>
              <p>
                Evaluated whether progressive graph views helped users understand and
                navigate health information more effectively.
              </p>
            </article>
            <article>
              <h3>Research outcome</h3>
              <p>
                Published in IEEE Transactions on Visualization and Computer Graphics
                and recognized with an IEEE VIS 2024 Honorable Mention.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft">
        <div className="page-shell publication-grid">
          <div>
            <p className="page-kicker">Publication</p>
            <h2>Guided Health-related Information Seeking from LLMs via Knowledge Graph Integration</h2>
            <p>
              Youfu Yan*, Yu Hou*, Yongkang Xiao, Rui Zhang, Qianwen Wang
              <br />*Equal contribution
            </p>
          </div>
          <div className="publication-links">
            {study.links?.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="pressable">
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
                {link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationJsonLd) }}
      />
    </div>
  );
}
