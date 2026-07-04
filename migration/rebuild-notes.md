# Portfolio rebuild notes

## Current deployment behavior

- The previous implementation was a Create React App developerFolio site.
- It deployed through the `gh-pages` package and a `deploy` script that pushed a
  generated `build` directory.
- The rebuild uses Next.js App Router with `output: "export"` and writes static
  files to `out/`.
- GitHub Pages deployment is configured through GitHub Actions and uploads `out/`
  with the official Pages artifact workflow.
- The site remains a root user-site deployment for `https://youfuyan.github.io/`;
  no repository `basePath` is configured.

## Migration scope

- Old template sections, splash animations, skill bars, automatic repository feeds,
  and generic illustration-driven sections are replaced by recruiter-focused pages.
- Content is grounded in `content/profile.ts` and the case-study markdown files.
- Amazon-specific details are generalized into externally understandable language.
- `/resume/` provides a readable HTML summary and links to
  `public/Youfu_Yan_Public_Resume.pdf`, generated from the latest public resume
  facts without publishing a phone number.
- Obsolete CRA source files, old build artifacts, prompt handoff files, old Docker
  scaffolding, and the old GitHub feed output are removed from the rebuild branch.

## Follow-up assets

- Add verified demo, video, and public figure links for KNOWNet when available.
