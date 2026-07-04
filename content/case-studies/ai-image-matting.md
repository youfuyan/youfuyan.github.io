---
slug: ai-image-matting
title: Evaluating an in-house image-matting platform
summary: Designed a GPU inference and evaluation workflow to compare five backends and recommend a lower-cost AWS-native alternative to a third-party API.
role: Technical owner across architecture, benchmarking, evaluation, and migration proposal
period: 2026
tags:
  - SageMaker
  - Bedrock
  - Python
  - GPU inference
  - LLM evaluation
---

## Outcome

Designed and drove an AWS-native background-removal migration plan for
approximately 1M uncached image requests per month, projected to reduce annual
run-rate by about $96K, or approximately 80%, versus the third-party API based on
current traffic and public SageMaker pricing.

## Context

Several creator workflows depended on a third-party background-removal API serving
approximately 1M uncached image requests per month.

At approximately $0.01 per image, the third-party run-rate was about $10K per
month. A public SageMaker endpoint estimate was about $2K per month for the
evaluated in-house path.

## Problem

This was not only a model-selection problem. A replacement needed:

- production inference infrastructure
- a fair comparison across very different backends
- repeatable quality criteria
- debugging when evaluation results contradicted visual inspection
- a public-safe financial model

## Ownership

Youfu:

- designed and drove the AWS-native migration plan
- built a GPU SageMaker real-time endpoint
- built a parallel benchmark harness
- designed the LLM-as-a-judge evaluation pipeline
- corrected an input-representation issue
- used evaluation evidence to recommend the in-house path

## Approach

The benchmark harness fanned out to five candidate backends and captured output
quality, client latency, and server-side model latency.

The evaluation pipeline used:

- blinded model identity
- three independent votes
- five matting criteria
- pairwise A/B comparisons
- position swapping to reduce ordering bias

When the evaluation produced approximately 70–79% false-failure verdicts, Youfu
traced the issue to the input representation and corrected the judge workflow.

## Result

The POC validated an AWS-native direction and produced evidence for a lower-cost
migration plan.

Based on current traffic, public vendor pricing, and public SageMaker pricing, the
plan was projected to reduce annual run-rate by about $96K, or approximately 80%.

## Engineering lesson

AI evaluation is a software system. Dataset construction, representation, prompt
design, voting, bias controls, and debugging all affect whether a model decision is
trustworthy.

## Public-safety note

Do not publish internal prompts, production images, customer identifiers, detailed
security-review procedures, internal discounted cost, or unpublished architecture
diagrams.
