# Youfu Yan Portfolio Rebuild — Start Here

This package is designed to be placed in the root of `youfuyan/youfuyan.github.io`
or uploaded to a Codex Project together with that repository.

## Recommended workflow

1. Connect Codex to `youfuyan/youfuyan.github.io`.
2. Add every file in this package to the repository root.
3. Paste the contents of `CODEX_MASTER_PROMPT.md` into Codex.
4. Ask Codex to work on a new branch named `codex/portfolio-rebuild`.
5. Review the first visual checkpoint before allowing it to finish all pages.
6. Merge only after the acceptance checks in `docs/07_QA_ACCEPTANCE.md` pass.

## What this project should produce

A recruiter-focused personal website that positions Youfu as a production software
engineer who builds AI/ML systems, distributed backend services, and reliable AWS
infrastructure — not as a generic full-stack developer or student.

The site must remain deployable at:

`https://youfuyan.github.io/`

## Source-of-truth order

1. The latest resume supplied by Youfu
2. `content/profile.ts`
3. The case-study files in `content/case-studies/`
4. Existing repository content, only when it does not conflict with the sources above

Never invent metrics, users, savings, awards, technologies, or ownership claims.
