# Master prompt for Codex

You are rebuilding the personal portfolio in `youfuyan/youfuyan.github.io`.

Read these files before changing code:

- `AGENTS.md`
- `.agent/PLANS.md`
- `docs/01_PRODUCT_BRIEF.md`
- `docs/03_INFORMATION_ARCHITECTURE.md`
- `docs/04_DESIGN_SYSTEM.md`
- `docs/05_TECHNICAL_ARCHITECTURE.md`
- `docs/07_QA_ACCEPTANCE.md`
- `content/profile.ts`
- every file under `content/case-studies/`

## Objective

Replace the outdated developerFolio-style portfolio with a clean, fast,
recruiter-oriented website for Youfu Yan.

The new site should make the following clear within 15 seconds:

1. Youfu is a production Software Development Engineer at Amazon.
2. He works across GenAI/ML systems, distributed backend services, and AWS.
3. He owns ambiguous work from design through production rollout and operations.
4. He has measurable engineering impact and credible research depth.
5. Recruiters can quickly view selected work, research, resume, GitHub, LinkedIn,
   and contact information.

## Execution rules

- Create and work on a new branch: `codex/portfolio-rebuild`.
- Do not push directly to `master`.
- Start by auditing the repository and documenting the current build/deploy behavior.
- Prefer a clean rebuild over patching the old template.
- Use Next.js App Router, TypeScript, Tailwind CSS, static export, and GitHub Actions.
- Preserve deployment at the root user site: `https://youfuyan.github.io/`.
- Do not require a server, database, API key, or paid service.
- Do not expose a phone number.
- Do not invent information.
- Keep Amazon descriptions public-safe and understandable outside Amazon.
- Do not use generic stock illustrations, animated coding characters, skill bars,
  splash screens, emoji-heavy headings, or buzzword-filled copy.
- Do not auto-list every GitHub repository. Curate projects manually.
- Use accessible semantic HTML and keyboard-friendly interactions.
- Build the smallest polished version first, then add enhancements.

## Required pages

- `/` — recruiter landing page
- `/work` — selected engineering case studies
- `/work/ai-image-matting`
- `/work/multi-region-launch`
- `/research/knownet`
- `/about`
- `/resume` — readable HTML summary plus PDF download link
- custom `404`

A separate writing/blog system is not required in v1.

## Required home-page sections

1. Navigation
2. Hero
3. Impact snapshot
4. Selected work
5. Experience summary
6. Research highlight
7. Technical focus
8. Contact CTA
9. Footer

## Hero copy

Eyebrow:
`Software Development Engineer at Amazon`

Headline:
`I build production AI and backend systems that ship.`

Supporting copy:
`I work across GenAI/ML evaluation, distributed services, and AWS infrastructure —
from design and implementation to rollout, on-call, and the fixes that make systems reliable.`

Primary CTA:
`View selected work`

Secondary CTA:
`Read my resume`

## Implementation sequence

1. Audit and migration plan
2. Project scaffold and GitHub Pages deployment
3. Global design system and layout
4. Home page
5. Work and research case studies
6. About and resume pages
7. Metadata, structured data, and social preview
8. Accessibility, responsive behavior, tests, and performance
9. Final content review for public safety and factual accuracy

## Stop conditions

Pause and ask for clarification only when:

- a requested claim is not grounded in the supplied content;
- a private/internal artifact would need to be published;
- a headshot, resume PDF, publication PDF, or project screenshot is missing;
- an existing deployment setting cannot be determined safely.

Otherwise, make reasonable implementation decisions and document them.
