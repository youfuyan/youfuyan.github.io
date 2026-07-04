# Maintenance

## Local checks

Run these before opening or updating a pull request:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

For Lighthouse, build first, run the static preview, then audit the home page.

## Content rules

- Treat the latest public resume as the authority for dates, titles, awards, and
  public claims.
- Label projected metrics as projected.
- Keep program-level metrics worded as program-level outcomes.
- Do not publish internal Amazon service names, hostnames, account details,
  runbooks, dashboards, prompts, private diagrams, or customer identifiers.
- Do not restore the obsolete high six-figure background-removal claim.

## Resume PDF

- Public PDF path: `public/Youfu_Yan_Public_Resume.pdf`.
- The PDF should not include a phone number.
- If the public TeX resume changes, regenerate the PDF and update `/resume/` only
  with public-safe facts.

## Deployment

- The site is a GitHub user site at `https://youfuyan.github.io/`.
- Do not set a repository `basePath`.
- Use the GitHub Pages artifact workflow in `.github/workflows/pages.yml`.
- Repository setting: `Settings -> Pages -> Source -> GitHub Actions`.

## Rollback

- The old implementation remains recoverable from Git history.
- If deployment fails, revert the rebuild branch or restore the prior deployment
  workflow only as a temporary fallback.
