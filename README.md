# Youfu Yan Portfolio

Recruiter-focused personal website for [youfuyan.github.io](https://youfuyan.github.io/).

The site positions Youfu Yan as a production software engineer working across AI/ML evaluation, distributed backend services, and AWS infrastructure. It is a static Next.js App Router site deployed to GitHub Pages.

## Stack

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- Static export via `output: "export"`
- Playwright smoke tests
- GitHub Pages deployment through GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

`npm run build` writes the static export to `out/`.

To preview the exported site:

```bash
npm run preview
```

## Content

- Profile and homepage facts: `content/profile.ts`
- Case-study data: `content/caseStudies.ts`
- Source notes for case studies: `content/case-studies/`
- Public resume PDF: `public/Youfu_Yan_Public_Resume.pdf`

Use the latest public resume as the authority for dates, titles, education, awards, and public claims. Do not publish internal Amazon service names, account details, hostnames, dashboards, runbooks, prompts, private diagrams, or customer identifiers.

## Routes

- `/`
- `/work/`
- `/work/ai-image-matting/`
- `/work/multi-region-launch/`
- `/work/event-driven-notifications/`
- `/research/knownet/`
- `/about/`
- `/resume/`

## Deployment

This is a GitHub user site, so there is no repository `basePath`.

Deployment uses `.github/workflows/pages.yml`:

1. install dependencies with `npm ci`
2. run typecheck, lint, build, and Playwright smoke tests
3. upload `out/` as the GitHub Pages artifact
4. deploy through GitHub Pages

Repository setting required:

`Settings -> Pages -> Source -> GitHub Actions`

## Maintenance Notes

See:

- `docs/MIGRATION_AUDIT.md`
- `docs/MAINTENANCE.md`
- `migration/rebuild-notes.md`
