# Preliminary current-site audit

## Observed implementation

- The repository is based on the developerFolio template.
- It uses Create React App and React 16-era dependencies.
- Portfolio content is concentrated in `src/portfolio.js`.
- The current presentation still describes Youfu as a generic full-stack developer.
- The skills section contains template-style promotional wording.
- The work section is centered on the 2023 Amazon internship and does not represent
  the current Amazon SDE role.
- GitHub Pages deployment is tied to an older `gh-pages` flow.

## Recommendation

Perform a clean rebuild on a branch instead of incrementally editing the template.

Reasons:

- the information architecture is wrong for the current career level
- the visual and motion conventions signal a generic portfolio template
- the dependency stack is old
- case-study pages require a content structure the current single-file configuration
  does not provide
- a static Next.js architecture can keep GitHub Pages while improving maintainability,
  SEO, accessibility, and recruiter readability

## Preserve

- domain and repository identity
- verified social links
- useful personal assets after review
- historical implementation until the new branch passes QA

## Replace

- splash screen
- generic hero illustration
- skill proficiency bars
- generic technology wall
- stale work history
- template copy
- automatic display of low-signal repositories
- old deployment workflow
