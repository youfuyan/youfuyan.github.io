export const profile = {
  name: "Youfu Yan",
  role: "Software Development Engineer at Amazon",
  location: "New York, NY",
  email: "arnoldyyf@gmail.com",
  links: {
    github: "https://github.com/youfuyan",
    linkedin: "https://www.linkedin.com/in/youfuyan/",
    website: "https://youfuyan.github.io/",
  },
  hero: {
    eyebrow: "Software Development Engineer at Amazon",
    title: "I build production AI and backend systems that ship.",
    description:
      "I build and evaluate production AI, design evidence-gated agent workflows, and ship distributed services on AWS — from architecture and implementation to rollout, observability, and on-call.",
    stack: "AI/ML · Agents · AWS · Distributed systems",
  },
  focusAreas: [
    {
      label: "AI / ML",
      title: "Production AI and evaluation",
      description:
        "GPU model serving, multi-backend benchmarking, blinded LLM evaluation, pairwise bias controls, computer vision, RAG, and knowledge grounding.",
      evidence: "AWS-native image-matting evaluation and runtime integration",
      skills: ["SageMaker", "Bedrock", "PyTorch", "FastAPI", "LLM evaluation"],
    },
    {
      label: "Agents",
      title: "Agent systems with control boundaries",
      description:
        "Reusable coding and production-support workflows with deterministic checks, browser and observability evidence, read-only defaults, and human-approved writes.",
      evidence: "Agent-assisted build, test, diagnosis, and review workflows",
      skills: ["Tool use", "Evaluation", "Browser testing", "CloudWatch", "Human in the loop"],
    },
    {
      label: "AWS",
      title: "Cloud platforms and reliability",
      description:
        "Multi-region services, staged releases, production observability, incident response, load testing, and infrastructure built with AWS primitives.",
      evidence: "New-region API launch with controlled rollback and recovery",
      skills: ["Lambda", "DynamoDB", "SQS/SNS", "CloudWatch", "AWS CDK"],
    },
    {
      label: "Systems",
      title: "Distributed product engineering",
      description:
        "Event ordering, conditional writes, OAuth ingestion, API design, Java services, React workflows, and end-to-end test infrastructure.",
      evidence: "Event-driven notifications and external-content ingestion",
      skills: ["Java", "Spring Boot", "React", "TypeScript", "Playwright"],
    },
  ],
  operatingPrinciples: [
    {
      title: "Make evidence part of the system",
      description:
        "A model score, agent answer, or passing test is a signal — not a release decision. I design explicit evaluation, observability, and review gates around it.",
    },
    {
      title: "Keep failure reversible",
      description:
        "Canary traffic, read-only diagnosis, feature flags, retries, and rollback thresholds create room to learn without turning uncertainty into customer impact.",
    },
    {
      title: "Own the path to production",
      description:
        "I stay with a project through architecture, implementation, testing, cross-team integration, rollout, and the operational work after launch.",
    },
  ],
  projectNotes: [
    {
      domain: "Agent systems",
      title: "Agent-assisted engineering workflows",
      summary:
        "Helped operationalize reusable workflows across architecture, implementation, browser testing, review follow-ups, and production diagnosis, with deterministic evidence and human release ownership.",
      tags: ["Agent tool use", "Playwright", "CloudWatch", "Evaluation"],
    },
    {
      domain: "AWS integrations",
      title: "External-content ingestion",
      summary:
        "Designed and implemented production ingestion paths across OAuth account linking, serverless processing, field mapping, durable storage, security analysis, and operational monitoring.",
      tags: ["Java", "Lambda", "DynamoDB", "OAuth 2.0"],
    },
    {
      domain: "Product systems",
      title: "Scheduling and content workflows",
      summary:
        "Built and tested React and Java workflows for scheduling, rescheduling, editing, and content-state management across multiple content types and locales.",
      tags: ["React", "Redux", "TypeScript", "Java"],
    },
    {
      domain: "Quality infrastructure",
      title: "Cross-origin end-to-end testing",
      summary:
        "Led a Cypress-to-Playwright migration to cover an embedded third-party workflow, then expanded state and right-to-left marketplace coverage.",
      tags: ["Playwright", "Cypress", "E2E", "CI/CD"],
    },
  ],
  experience: [
    {
      company: "Amazon",
      role: "Software Development Engineer",
      period: "June 2024 – Present",
      summary:
        "Build and operate production AI/ML, agent-assisted engineering workflows, and distributed services on AWS, from architecture and evaluation through rollout and on-call.",
    },
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      period: "June 2023 – August 2023",
      summary:
        "Built a cross-platform real-time notification system using Java, React Native, AWS Lambda, and SQS.",
    },
    {
      company: "University of Minnesota",
      role: "Research Assistant — AI/ML & Human-Centered Computing Lab",
      period: "September 2023 – May 2024",
      summary:
        "Co-developed KNOWNet, an LLM and knowledge-graph system for more verifiable health-information seeking.",
    },
  ],
  education: [
    {
      school: "University of Minnesota, Twin Cities",
      degree: "M.S. in Computer Science",
      detail: "GPA 3.95",
    },
    {
      school: "University of Minnesota, Twin Cities",
      degree: "M.A. in Quantitative Methods in Education",
    },
    {
      school: "University of California, Santa Barbara",
      degree: "M.A. in Statistics",
    },
  ],
  certification: "AWS Certified Solutions Architect",
} as const;
