# Migration audit

## Current framework and dependency age

- The old site is based on the developerFolio Create React App template.
- The previous dependency set used React 16-era packages, `react-scripts`, Lottie
  animations, `gh-pages`, and template components that no longer match the desired
  portfolio direction.
- The rebuild uses Next.js App Router, strict TypeScript, Tailwind CSS, static
  export, and Playwright smoke tests.

## Current GitHub Pages deployment behavior

- The old deployment path used `gh-pages` and generated a `build/` directory.
- Legacy workflows also included a Pages deployment from the `gh-pages` branch and
  a format workflow that called removed scripts.
- The rebuild replaces those with the official GitHub Pages artifact workflow,
  uploading `out/` after typecheck, lint, build, and smoke tests.
- Repository setting required: `Settings -> Pages -> Source -> GitHub Actions`.

## Reusable assets

- Existing favicon and platform icons in `public/` are preserved.
- Public profile links, email, and verified resume facts are preserved.
- The supplied public resume TeX is used as the authority for the HTML resume and
  downloadable PDF content.

## Stale template content

- Splash animation, large coding illustrations, skill bars, generic template copy,
  and automatic GitHub repository feeds are not used in the rebuild.
- Internship-first positioning is replaced with current Amazon SDE positioning.
- Old background-removal savings language is replaced with the public projected
  ~$96K/year run-rate reduction from the public resume.

## Dead or risky links

- Automatic repository feed data is not used because it surfaces low-signal and
  stale repositories.
- KNOWNet links are limited to verified public IEEE Computer Society and IEEE VIS
  pages.
- Demo/video links are omitted until verified public sources are supplied.

## Accessibility and performance issues

- The old template depended on animation and older client-side React patterns.
- The rebuild uses semantic HTML, a skip link, visible focus states, static export,
  no animation library, and `prefers-reduced-motion` support.

## Files to preserve

- `content/` source files and public-safe case-study notes.
- Existing favicon assets.
- Historical old implementation through Git history until the rebuild is accepted.

## Files to replace

- CRA runtime scripts and old deployment workflow.
- Template-driven sections, splash screen, skill bars, and automatic repository
  cards.
- Old generated resume PDF with obsolete public claims.

## Migration risks

- GitHub Pages must be switched to GitHub Actions as the source.
- KNOWNet demo/video/public figure links remain unavailable until verified.
- The old `gh-pages` branch should not be used for this rebuild unless repository
  settings require a fallback.
