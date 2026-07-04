# QA and acceptance criteria

## Content

- [ ] Current title and dates match the latest resume.
- [ ] No invented claims or metrics.
- [ ] No stale intern-only positioning.
- [ ] No generic template copy.
- [ ] No confidential code, diagrams, identifiers, or operational procedures.
- [ ] Every case study explains ownership and technical judgment.
- [ ] Contact information includes email, LinkedIn, and GitHub.
- [ ] Phone number is not shown on the public site by default.

## Recruiter usability

- [ ] Current role is visible without scrolling on desktop and mobile.
- [ ] AI/ML, backend, and AWS focus is clear within 15 seconds.
- [ ] Resume is reachable in one click.
- [ ] Selected work is reachable in one click.
- [ ] Case studies are understandable to engineers outside Amazon.
- [ ] The page does not require animation to communicate meaning.

## Accessibility

- [ ] Semantic headings follow a logical order.
- [ ] Skip link is present.
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Color contrast meets WCAG AA.
- [ ] Interactive controls have accessible names.
- [ ] Reduced-motion preference is respected.
- [ ] Images have useful alt text or are decorative.

## Responsive design

- [ ] 375px width has no horizontal scroll.
- [ ] 768px layout is intentional.
- [ ] 1440px layout does not become excessively wide.
- [ ] Long titles and metric values wrap gracefully.
- [ ] Navigation works on touch devices.

## Engineering

- [ ] strict TypeScript passes.
- [ ] lint passes.
- [ ] production build passes.
- [ ] static export is generated in `out/`.
- [ ] all internal routes work under GitHub Pages.
- [ ] no broken assets after export.
- [ ] key routes have Playwright smoke tests.
- [ ] no production dependency is included without a clear purpose.

## Performance targets

On the home page, mobile Lighthouse targets:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Prefer 95+ across all categories, but do not fake or suppress valid audits.

## Launch

- [ ] GitHub Actions deployment completes.
- [ ] live URL loads over HTTPS.
- [ ] canonical URLs are correct.
- [ ] Open Graph image renders.
- [ ] favicon renders.
- [ ] resume link works.
- [ ] LinkedIn, GitHub, publication, and email links work.
