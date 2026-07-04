# Technical architecture

## Recommended stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX or typed local content for case studies
- Playwright for smoke tests
- GitHub Actions for Pages deployment

## Static export

`next.config.ts` should include the equivalent of:

```ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

Do not set a repository base path because this is a GitHub user site at the root.

## Suggested structure

```text
app/
  layout.tsx
  page.tsx
  work/
    page.tsx
    ai-image-matting/page.tsx
    multi-region-launch/page.tsx
  research/
    knownet/page.tsx
  about/page.tsx
  resume/page.tsx
  not-found.tsx
components/
content/
  profile.ts
  case-studies/
lib/
public/
tests/
```

## Content model

Store claims and metrics centrally.

Suggested types:

```ts
type ImpactMetric = {
  value: string;
  label: string;
  qualifier?: string;
};

type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  tags: string[];
  outcome: string;
  sections: {
    context: string[];
    problem: string[];
    ownership: string[];
    approach: string[];
    result: string[];
    lessons: string[];
  };
};
```

## Deployment

Use the official GitHub Pages artifact workflow:

- checkout
- setup Node
- install with lockfile
- lint/typecheck/test/build
- upload Pages artifact from `out`
- deploy Pages

Set Pages source to GitHub Actions.

## Metadata

Include:
- canonical URL
- title templates
- Open Graph metadata
- Twitter card metadata
- `Person` JSON-LD
- publication metadata on KNOWNet page
- sitemap
- robots

## Analytics

Not required for v1. If added later, make it optional through environment variables
and choose a privacy-respecting provider.

## Security

- no contact-form backend in v1
- no secrets in client code
- no unnecessary third-party scripts
- external links use appropriate `rel`
- validate resume and paper links
