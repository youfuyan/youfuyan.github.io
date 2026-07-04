---
slug: multi-region-launch
title: Launching a critical API in a new AWS region
summary: Owned a staged production traffic shift, diagnosed a live certificate issue, and completed the launch without customer-facing outage.
role: Launch owner and production change owner
period: 2025
tags:
  - Java
  - AWS
  - Multi-region
  - Reliability
  - Incident response
---

## Outcome

Traffic was moved from 1% to 100% over five days, and the launch completed without
a customer-facing outage.

## Context

A business-critical content API needed to launch in a new AWS region. The work
required infrastructure readiness, cross-region authentication, downstream
coordination, production monitoring, and a controlled traffic shift.

## Ownership

Youfu authored and executed the production change plan and served as the sole
change owner during the rollout.

## Incident

At 20% traffic, downstream requests began returning 502 errors.

Youfu:

1. stopped the rollout
2. rolled traffic back to 0%
3. localized the failure to a certificate-subject mismatch
4. coordinated certificate renewal and a fleet restart with partner teams
5. verified recovery with the downstream on-call
6. resumed the staged rollout

## Result

The service reached 100% traffic without customer-facing outage.

## Engineering lesson

A strong launch plan is not a script for when everything works. It defines
observable checkpoints, rollback thresholds, ownership, and a safe path to resume
after the unexpected happens.

## Public-safety note

Use an externally understandable service description. Do not publish internal
service names, account details, hostnames, certificates, dashboards, or runbook steps.
