import Link from "next/link";

import { workCaseStudies } from "@/content/caseStudies";
import { routes } from "@/lib/routes";

const signals = {
  "agent-engineering-workflows": "Tool use · deterministic checks · human approval",
  "ai-image-matting": "GPU inference · benchmark design · LLM evaluation",
  "multi-region-launch": "Canary rollout · incident diagnosis · recovery",
  "event-driven-notifications": "Event ordering · conditional writes · retry paths",
  knownet: "RAG · knowledge graphs · progressive visualization",
} as const;

export function HomeWorkStack() {
  return (
    <section id="work" className="home-work" aria-labelledby="work-title">
      <div className="home-shell home-work-grid">
        <header className="home-work-intro" data-reveal>
          <p className="home-kicker">03 / Selected work</p>
          <h2 id="work-title" className="home-section-title">
            Four systems.<br />One operating style.
          </h2>
          <p className="home-lede">
            Design the path, test the hard parts, ship in stages, and stay close to
            production. The full engineering notes live one click deeper.
          </p>
          <Link href={routes.work} className="home-text-link pressable">
            Browse every case study <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div className="work-stack">
          {workCaseStudies.map((study, index) => (
            <article
              key={study.slug}
              className={`work-stack-card work-stack-card-${index + 1}`}
              style={{ top: `${5.5 + index * 1.25}rem` }}
            >
              <div className="work-card-topline">
                <span>0{index + 1}</span>
                <span>{study.category}</span>
                <span>{study.period}</span>
              </div>
              <div className="work-card-body" data-reveal>
                <p className="work-card-signal">{signals[study.slug]}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </div>
              <div className="work-card-footer">
                <ul aria-label="Technologies">
                  {study.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link href={`/work/${study.slug}/`} className="work-card-link pressable">
                  Read case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
