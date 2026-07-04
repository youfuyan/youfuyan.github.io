export type CaseStudy = {
  slug:
    | "ai-image-matting"
    | "multi-region-launch"
    | "event-driven-notifications"
    | "knownet";
  category: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  tags: readonly string[];
  outcome: string;
  sections: {
    context: readonly string[];
    problem?: readonly string[];
    ownership: readonly string[];
    approach: readonly string[];
    result: readonly string[];
    decisions: readonly string[];
    lessons: readonly string[];
  };
  technologies: readonly string[];
  publicSafetyNote?: string;
  links?: readonly {
    label: string;
    href: string;
    description?: string;
  }[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "ai-image-matting",
    category: "AI/ML systems",
    title: "Evaluating an in-house image-matting platform",
    summary:
      "Designed a GPU inference and evaluation workflow to compare five backends and recommend a lower-cost AWS-native alternative to a third-party API.",
    role: "Technical owner across architecture, benchmarking, evaluation, and migration proposal",
    period: "2026",
    tags: ["SageMaker", "Bedrock", "Python", "GPU inference", "LLM evaluation"],
    outcome:
      "Designed and drove an AWS-native background-removal migration plan for approximately 1M uncached image requests per month, projected to reduce annual run-rate by about $96K, or approximately 80%, versus the third-party API based on current traffic and public SageMaker pricing.",
    sections: {
      context: [
        "Several creator workflows depended on a third-party background-removal API serving approximately 1M uncached image requests per month.",
        "At approximately $0.01 per image, the third-party run-rate was about $10K per month. A public SageMaker endpoint estimate was about $2K per month for the evaluated in-house path.",
      ],
      problem: [
        "The decision could not rest on model preference alone. The migration plan needed production inference infrastructure, comparable latency data, repeatable quality criteria, and a public-safe financial model.",
        "The evaluation also had to be trustworthy when automated verdicts contradicted visual inspection.",
      ],
      ownership: [
        "Designed and drove the AWS-native migration plan.",
        "Built a GPU SageMaker real-time endpoint and a Python benchmark harness.",
        "Designed the blinded LLM-as-a-judge evaluation pipeline.",
        "Corrected an input-representation issue and used evaluation evidence to recommend the in-house path.",
      ],
      approach: [
        "Built a benchmark harness that fanned out to five candidate backends and captured output quality, client latency, and server-side model latency.",
        "Used blinded model identity, three-vote majority, five matting criteria, pairwise A/B comparisons, and position swapping to reduce ordering bias.",
        "When the evaluation produced approximately 70-79% false-failure verdicts, traced the issue to the input representation and corrected the judge workflow.",
      ],
      result: [
        "The POC validated an AWS-native direction and produced evidence for a lower-cost migration plan.",
        "Based on current traffic, public vendor pricing, and public SageMaker pricing, the plan was projected to reduce annual run-rate by about $96K, or approximately 80%.",
      ],
      decisions: [
        "Used a real-time GPU endpoint for a production-shaped latency comparison rather than only offline model tests.",
        "Used blinded pairwise review because no reliable pixel-level ground truth existed for the production image set.",
        "Separated projected public cloud pricing from internal discounted cost so the public case study would not expose internal financial details.",
      ],
      lessons: [
        "AI evaluation is a software system. Dataset construction, representation, prompt design, voting, bias controls, and debugging all affect whether a model decision is trustworthy.",
      ],
    },
    technologies: ["Amazon SageMaker", "AWS Bedrock", "Python", "PyTorch", "GPU inference", "LLM-as-a-judge evaluation"],
    publicSafetyNote:
      "Internal discounted cost, internal prompts, production images, customer identifiers, review procedures, and unpublished architecture diagrams are intentionally omitted.",
  },
  {
    slug: "multi-region-launch",
    category: "Production reliability",
    title: "Launching a critical API in a new AWS region",
    summary:
      "Owned a staged production traffic shift, diagnosed a live certificate issue, and completed the launch without customer-facing outage.",
    role: "Launch owner and production change owner",
    period: "2025",
    tags: ["Java", "AWS", "Multi-region", "Reliability", "Incident response"],
    outcome:
      "Traffic moved from 1% to 100% over five days, and the launch completed without a customer-facing outage.",
    sections: {
      context: [
        "A business-critical content API needed to launch in a new AWS region.",
        "The work required infrastructure readiness, cross-region authentication, downstream coordination, production monitoring, and a controlled traffic shift.",
      ],
      ownership: [
        "Authored and executed the production change plan.",
        "Served as the sole change owner during rollout.",
        "Coordinated with downstream and partner teams when the launch hit a live integration issue.",
      ],
      approach: [
        "Moved traffic gradually with observable checkpoints and rollback thresholds.",
        "At 20% traffic, stopped the rollout after downstream requests began returning 502 errors and rolled traffic back to 0%.",
        "Localized the failure to a certificate-subject mismatch, coordinated renewal and fleet restart with partner teams, verified recovery with the downstream on-call, and resumed the staged rollout.",
      ],
      result: [
        "The service reached 100% traffic without a customer-facing outage.",
        "The launch plan gave the team a safe path to pause, repair, verify, and resume.",
      ],
      decisions: [
        "Used staged traffic movement so failures would surface before full customer exposure.",
        "Stopped the rollout at 20% when downstream failures appeared and resumed only after recovery was verified with the partner team.",
      ],
      lessons: [
        "A strong launch plan is not a script for when everything works. It defines observable checkpoints, rollback thresholds, ownership, and a safe path to resume after the unexpected happens.",
      ],
    },
    technologies: ["Java", "AWS", "Multi-region deployment", "Monitoring", "Incident response"],
    publicSafetyNote:
      "Internal service names, region codenames, account details, hostnames, certificates, dashboards, and runbook steps are intentionally omitted.",
  },
  {
    slug: "event-driven-notifications",
    category: "Distributed systems",
    title: "Designing for out-of-order events",
    summary:
      "Built the first version of an event-driven notification service with race-safe DynamoDB writes and retry handling across three teams.",
    role: "Initial service designer and backend implementer",
    period: "2024-2026",
    tags: ["Java", "DynamoDB", "SQS/SNS", "Event-driven", "Correctness"],
    outcome:
      "Designed and built the first version of an event-driven creator-notification service used across three teams, with event-time conditional writes and retry/DLQ handling to preserve correctness under out-of-order events.",
    sections: {
      context: [
        "Creator-facing workflows needed a notification path that multiple teams could use without depending on brittle point-to-point status checks.",
        "The service had to handle follow and unfollow state transitions that could arrive late or out of order.",
      ],
      problem: [
        "A naive write path could overwrite newer state with stale events and send incorrect notifications.",
        "The first version needed clear ownership boundaries, durable retry behavior, and data modeling that kept state transitions correct under normal distributed-system failure modes.",
      ],
      ownership: [
        "Designed and built the first service version.",
        "Modeled event-time state updates in DynamoDB.",
        "Added retry and dead-letter handling for failed event processing.",
        "Worked with three adopting teams on integration expectations.",
      ],
      approach: [
        "Used event timestamps in DynamoDB conditional writes to discard stale state transitions.",
        "Separated transient retries from dead-letter handling so failed messages could be inspected without blocking healthy traffic.",
        "Kept the public design description at the architectural-pattern level rather than exposing internal service names or message schemas.",
      ],
      result: [
        "The service gave three teams a shared first version for event-driven creator notifications.",
        "Conditional writes protected correctness when follow and unfollow events arrived out of order.",
      ],
      decisions: [
        "Chose event-time conditional writes because arrival order was not a reliable source of truth.",
        "Used retry and dead-letter handling so transient downstream failures did not silently drop important transitions.",
      ],
      lessons: [
        "Event-driven systems need correctness rules at the write boundary. Idempotency and timestamp checks are easier to reason about than cleanup after stale state is persisted.",
      ],
    },
    technologies: ["Java", "AWS Lambda", "DynamoDB", "SQS/SNS", "Retry and DLQ handling"],
    publicSafetyNote:
      "Internal service names, event schemas, team names, and operational details are intentionally omitted.",
  },
  {
    slug: "knownet",
    category: "Research",
    title: "Helping users verify LLM-generated health information",
    summary:
      "KNOWNet combines conversational AI, knowledge-graph validation, and progressive visualization for guided health-information seeking.",
    role: "Equal-contribution author and full-stack researcher",
    period: "2023-2024",
    tags: ["OpenAI GPT-4", "RAG", "Neo4j", "Next.js", "D3.js", "Human-centered AI"],
    outcome:
      "Equal-contribution work published in IEEE Transactions on Visualization and Computer Graphics, recognized with an IEEE VIS 2024 Honorable Mention, and reported a 20% improvement in user comprehension.",
    sections: {
      context: [
        "The research asked how an interface can help people inspect, connect, and understand health information returned by an LLM instead of accepting a fluent answer at face value.",
      ],
      ownership: [
        "Worked across system design and implementation as an equal-contribution author.",
        "Built with OpenAI GPT-4, Flask, Neo4j, Next.js, and D3.js.",
      ],
      approach: [
        "Combined a conversational interface, retrieval-augmented generation, knowledge-graph validation, progressive graph visualization, and recommendation support for follow-up exploration.",
      ],
      result: [
        "The reported evaluation showed a 20% improvement in user comprehension.",
        "The equal-contribution work was published in IEEE Transactions on Visualization and Computer Graphics and recognized with an IEEE VIS 2024 Honorable Mention.",
      ],
      decisions: [
        "Used a knowledge graph to expose structured relationships and supporting evidence instead of relying only on fluent generated text.",
        "Used progressive visualization so users could build understanding step by step rather than receiving a static answer.",
      ],
      lessons: [
        "Trustworthy AI is not solved by adding a disclaimer. Interfaces can expose relationships, evidence, and exploration paths that help users reason about an answer.",
      ],
    },
    technologies: ["OpenAI GPT-4", "RAG", "Neo4j", "Flask", "Next.js", "D3.js"],
    links: [
      {
        label: "IEEE Computer Society article",
        href: "https://www.computer.org/csdl/journal/tg/2025/01/10670469/207JDmbejAY",
        description: "Published article page for IEEE Transactions on Visualization and Computer Graphics.",
      },
      {
        label: "IEEE VIS 2024 program page",
        href: "https://content-staging.ieeevis.org/year/2024/paper_v-full-1503.html",
        description: "VIS page listing the paper, authors, Honorable Mention, and public materials.",
      },
    ],
  },
] as const;

export function getCaseStudy(slug: CaseStudy["slug"]) {
  return caseStudies.find((study) => study.slug === slug);
}

export const workCaseStudies = caseStudies.filter(
  (study) => study.slug !== "knownet",
);
