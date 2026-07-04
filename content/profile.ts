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
      "I work across GenAI/ML evaluation, distributed services, and AWS infrastructure — from design and implementation to rollout, monitoring, and the fixes that make systems reliable.",
    stack: "Java · Python · TypeScript · AWS · SageMaker · Bedrock",
  },
  impact: [
    {
      value: "~1M/month",
      label: "uncached image requests evaluated for an AWS-native migration",
    },
    {
      value: "~$96K/year",
      label: "projected run-rate reduction using public cloud pricing",
      qualifier: "projected",
    },
    {
      value: "1% to 100%",
      label: "staged regional production traffic shift with no customer-facing outage",
    },
    {
      value: "IEEE VIS 2024",
      label: "Honorable Mention",
    },
  ],
  focusAreas: [
    {
      title: "AI/ML systems and evaluation",
      description:
        "GPU inference, model benchmarking, blinded evaluation, pairwise comparison, bias controls, RAG, and knowledge graphs.",
    },
    {
      title: "Distributed backend services",
      description:
        "Event-driven workflows, out-of-order events, idempotency, DynamoDB data modeling, service integrations, and API design.",
    },
    {
      title: "AWS infrastructure and operations",
      description:
        "SageMaker, Bedrock, Lambda, DynamoDB, SQS/SNS, CloudWatch, staged rollouts, monitoring, and incident response.",
    },
    {
      title: "Product engineering",
      description:
        "End-to-end delivery across Java services, React workflows, testing, rollout, and production support.",
    },
  ],
  experience: [
    {
      company: "Amazon",
      role: "Software Development Engineer",
      period: "June 2024 – Present",
      summary:
        "Build and operate production AI/ML and distributed systems across AWS, from architecture and model evaluation through implementation, staged rollout, and on-call operations.",
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
