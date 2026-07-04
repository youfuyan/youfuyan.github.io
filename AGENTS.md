# Repository instructions

## Product standard

This is a professional portfolio, not a template showcase. Every section must help
a recruiter or hiring manager answer one of these questions:

- What kind of engineer is Youfu?
- What has he owned?
- What measurable impact did he have?
- Does he have production depth?
- Is there evidence beyond claims?
- How can I contact him?

Delete or omit anything that does not help answer those questions.

## Voice

Write in a direct, calm, specific voice.

Good:
- `Built the first version of an event-driven notification service.`
- `Rolled traffic from 1% to 100% and handled a live certificate issue without an outage.`

Avoid:
- passionate
- cutting-edge
- innovative professional
- results-driven
- leveraging
- synergy
- rockstar
- ninja
- crazy full-stack developer
- transforming the future
- excessive emoji
- unsupported superlatives

Prefer concrete verbs, plain English, short paragraphs, and visible evidence.

## Factual integrity

- Never invent or round metrics upward.
- Preserve qualifiers such as `approximately`, `projected`, or `across the program`.
- Do not imply sole ownership when the source says contributed.
- Do not present Amazon internal names, security procedures, customer data, or
  unpublished architecture details unless they are already approved for public use.
- When uncertain, generalize the implementation without weakening the result.
- Keep the original resume as the authority for dates, titles, education, and awards.

## Public-safety transformations

Use externally understandable descriptions.

Examples:

- Internal service names → `business-critical content API`
- Internal launch process acronyms → `production change plan`
- ASIN-level details → `production examples`
- Internal organization names → `creator and content systems`
- Security-review workflow details → `reduced repeated security-review overhead`

## Technical constraints

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- static export using `output: "export"`
- no server actions or runtime API routes
- GitHub Pages deployment through GitHub Actions
- root user-site deployment, so no repository `basePath`
- `trailingSlash: true`
- images must work in static export
- no client-side JavaScript unless interaction requires it
- no external API required for core rendering
- no automatic GitHub repository feed
- no animation library in v1
- respect `prefers-reduced-motion`

## Component rules

Prefer small, reusable components:

- `SiteHeader`
- `SiteFooter`
- `Hero`
- `ImpactMetric`
- `CaseStudyCard`
- `ExperienceItem`
- `ResearchCard`
- `SectionHeading`
- `TagList`
- `ContactCTA`

Keep content separate from presentation.

## Testing

Required before completion:

- typecheck
- lint
- production build
- Playwright smoke tests for key routes
- no broken internal links
- keyboard navigation check
- visible focus states
- mobile layouts at 375px
- desktop layouts at 1440px
- Lighthouse targets from `docs/07_QA_ACCEPTANCE.md`

## Git workflow

- Work on `codex/portfolio-rebuild`.
- Use focused commits.
- Do not rewrite `master`.
- Keep the old implementation recoverable until the new build passes.
- Include migration notes in the pull request.
