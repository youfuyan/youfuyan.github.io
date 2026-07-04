# GitHub profile cleanup

## Current risk

A recruiter who lands on the GitHub profile may see many older class exercises,
tutorial repositories, and generic project names. That can dilute the production
engineering story even when the resume is strong.

## Recommended pinned repositories

Pin only repositories that reinforce the target role.

Suggested eventual set:

1. `youfuyan.github.io` — polished portfolio and case studies
2. `multimodal-eval-lab` — public-safe LLM-as-a-judge evaluation demo
3. `event-ordering-playground` — race-safe event processing demo
4. a cleaned full-stack project with a live demo
5. a research artifact or KNOWNet public companion, if publication rules allow
6. one technically distinctive project, such as the interactive sorting experience,
   after its README and demo are improved

Do not pin LeetCode, basic tutorials, unfinished course repositories, or generic
to-do applications.

## Profile README

Create `youfuyan/youfuyan` with a short profile README.

Recommended structure:

```md
# Youfu Yan

Software Development Engineer building production AI/ML and distributed systems.

- Amazon SDE working across GenAI evaluation, backend services, and AWS
- IEEE VIS 2024 Honorable Mention co-author
- Java, Python, TypeScript, Bedrock, SageMaker, DynamoDB, React

[Portfolio] · [LinkedIn] · [Resume] · [Email]
```

Keep it under one screen. Avoid GitHub-stat widgets, contribution trophies, animated
typing banners, and huge icon grids.

## Repository standards

Every pinned repository should have:

- one-sentence purpose
- screenshot or short demo
- architecture overview
- local setup
- tradeoffs
- tests
- live demo link when practical
- clear license
- recent working CI

## Two high-value demo ideas

### Multimodal Eval Lab

A synthetic, public-safe implementation of:

- blinded model labels
- three-vote majority
- pairwise A/B comparison
- position-swap debiasing
- configurable criteria
- JSONL result export
- simple review dashboard

Never copy Amazon data, prompts, images, metrics, or internal code.

### Event Ordering Playground

A small service and simulator demonstrating:

- out-of-order events
- event-time conditional writes
- idempotency
- retry and DLQ behavior
- concurrency tests
- timeline visualization

Use local DynamoDB or an in-memory adapter so recruiters can run it easily.
