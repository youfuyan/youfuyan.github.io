export type CaseStudy = {
  slug:
    | "agent-engineering-workflows"
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
    slug: "agent-engineering-workflows",
    category: "Agent systems",
    title: "Making AI-agent workflows evidence-gated",
    summary:
      "Helped turn coding and production-support agents into reusable engineering workflows with deterministic verification, operational evidence, and explicit human approval boundaries.",
    role: "Workflow designer and contributor across implementation, evaluation, and operational safety",
    period: "2026",
    tags: ["Agent tool use", "Evaluation", "Playwright", "CloudWatch", "Human in the loop"],
    outcome:
      "Established reusable patterns for agent-assisted implementation, browser testing, review follow-ups, and production diagnosis while keeping merge, rollout, and write operations under human control.",
    sections: {
      context: [
        "Cross-service engineering work spans architecture, implementation, test generation, review feedback, deployment checks, and operational analysis. Agents can help across that path, but only if their output is inspectable and bounded.",
        "Production-support automation adds a second constraint: useful diagnosis often needs real evidence, while state-changing actions must remain deliberate and human-owned.",
      ],
      problem: [
        "A plausible agent response is not enough to merge code or act on a production system. The workflow needed deterministic checks, evidence from the running product, and clear authority boundaries.",
        "The same pattern had to be reusable across coding and operational work without encoding private data or making unrestricted writes.",
      ],
      ownership: [
        "Contributed to an agent-driven build, deploy, and browser-test loop with user-interface and observability assertions.",
        "Authored an upgrade to a production-support agent workflow with identifier-only diagnosis, read-only production checks, evidence-based routing, and human approval before writes.",
        "Coordinated parallel agent work across implementation, testing, design iteration, and review follow-ups.",
      ],
      approach: [
        "Required deterministic builds, targeted test coverage, browser smoke tests, and trace or metric evidence before an agent-authored change could advance.",
        "Made diagnosis read-only by default and separated evidence collection from any action that could change production state.",
        "Used benchmark scenarios to evaluate whether the support workflow routed ambiguous cases safely and produced evidence a human could verify.",
      ],
      result: [
        "The resulting workflows supported faster parallel engineering while preserving human ownership of merge and rollout decisions.",
        "Evidence gates also surfaced a semantic product-policy defect that conventional tests and automated security analysis had not caught, preventing the change from advancing until it was corrected.",
      ],
      decisions: [
        "Treated agent output as a proposal backed by artifacts, not as authority.",
        "Kept production access read-only unless a human explicitly approved the next action.",
        "Evaluated the workflow on end-to-end outcomes rather than only prompt quality.",
      ],
      lessons: [
        "Reliable agent systems look less like autonomous demos and more like well-designed engineering processes: scoped tools, observable evidence, deterministic checks, and explicit control boundaries.",
      ],
    },
    technologies: ["Agent workflows", "Playwright", "CloudWatch", "CI/CD", "Evaluation harnesses", "Human approval"],
    publicSafetyNote:
      "Internal prompts, production identifiers, account details, private traces, and write procedures are intentionally omitted.",
  },
  {
    slug: "ai-image-matting",
    category: "AI/ML systems",
    title: "Evaluating an in-house image-matting platform",
    summary:
      "Designed a GPU inference and evaluation workflow to compare multiple backends and recommend an AWS-native alternative to a third-party image-processing API.",
    role: "Technical owner across architecture, benchmarking, evaluation, and migration proposal",
    period: "2026",
    tags: ["SageMaker", "Bedrock", "Python", "GPU inference", "LLM evaluation"],
    outcome:
      "Produced the runtime and evaluation evidence for an AWS-native image-matting direction, then advanced a vendor-neutral integration through pre-production validation.",
    sections: {
      context: [
        "Several creator workflows depended on a third-party background-removal API. The migration question involved model quality, production latency, runtime integration, security boundaries, and operational ownership.",
        "An in-account AWS path could consolidate those workflows behind shared inference, caching, and quality evaluation.",
      ],
      problem: [
        "The decision could not rest on model preference alone. The migration plan needed production-shaped inference infrastructure, comparable latency data, repeatable quality criteria, and a safe runtime path.",
        "The evaluation also had to be trustworthy when automated verdicts contradicted visual inspection.",
      ],
      ownership: [
        "Designed and drove the AWS-native migration plan.",
        "Built a GPU SageMaker real-time endpoint and a Python benchmark harness.",
        "Designed the blinded LLM-as-a-judge evaluation pipeline.",
        "Corrected an input-representation issue and used evaluation evidence to recommend the in-house path.",
      ],
      approach: [
        "Built a Python and FastAPI benchmark harness that fanned out to self-hosted and managed model backends, capturing output quality, client latency, and server-side model latency.",
        "Used blinded model identity, multi-vote review, explicit matting criteria, pairwise comparisons, and position swapping to reduce ordering bias.",
        "When automated verdicts contradicted visual inspection, traced the failure to flat composite inputs and corrected the judge workflow to inspect the alpha mask.",
      ],
      result: [
        "The proof of concept validated an AWS-native direction and identified a self-hosted model that cleared the quality non-regression gate.",
        "The integration advanced behind a feature flag with a fail-closed fallback through pre-production validation; production rollout remains pending approval.",
      ],
      decisions: [
        "Used a real-time GPU endpoint for a production-shaped latency comparison rather than only offline model tests.",
        "Used blinded pairwise review because no reliable pixel-level ground truth existed for the production image set.",
        "Kept the runtime integration vendor-neutral so the selected backend could change without rewriting each consuming workflow.",
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
      "Completed a controlled canary-to-full-production launch after diagnosing and recovering from a live certificate mismatch, with no customer-facing outage.",
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
        "During an intermediate checkpoint, stopped the rollout after downstream requests began returning errors and rolled traffic back safely.",
        "Localized the failure to a certificate-subject mismatch, coordinated renewal and fleet restart with partner teams, verified recovery with the downstream on-call, and resumed the staged rollout.",
      ],
      result: [
        "The service reached full production traffic without a customer-facing outage.",
        "The launch plan gave the team a safe path to pause, repair, verify, and resume.",
      ],
      decisions: [
        "Used staged traffic movement so failures would surface before full customer exposure.",
        "Stopped the rollout when downstream failures appeared and resumed only after recovery was verified with the partner team.",
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
      "Built the first version of an event-driven notification service with race-safe DynamoDB writes and durable retry handling.",
    role: "Initial service designer and backend implementer",
    period: "2024-2026",
    tags: ["Java", "DynamoDB", "SQS/SNS", "Event-driven", "Correctness"],
    outcome:
      "Designed and built the first version of an event-driven creator-notification service, with event-time conditional writes and retry/DLQ handling to preserve correctness under out-of-order events.",
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
        "Worked across adopting teams on integration expectations.",
      ],
      approach: [
        "Used event timestamps in DynamoDB conditional writes to discard stale state transitions.",
        "Separated transient retries from dead-letter handling so failed messages could be inspected without blocking healthy traffic.",
        "Kept the public design description at the architectural-pattern level rather than exposing internal service names or message schemas.",
      ],
      result: [
        "The service gave multiple teams a shared first version for event-driven creator notifications.",
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
      "Equal-contribution work published in IEEE Transactions on Visualization and Computer Graphics and recognized with an IEEE VIS 2024 Honorable Mention.",
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
        "The reported user study found improved comprehension with the progressive knowledge-graph interface.",
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
