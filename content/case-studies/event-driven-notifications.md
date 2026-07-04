---
slug: event-driven-notifications
title: Designing for out-of-order events
summary: Built the first version of an event-driven notification service with race-safe DynamoDB writes and retry handling across three teams.
role: Initial service designer and backend implementer
period: 2024–2026
tags:
  - Java
  - DynamoDB
  - SQS/SNS
  - Event-driven
  - Correctness
---

## Outcome

Designed and built the first version of an event-driven creator-notification
service used across three teams, with event-time conditional writes and retry/DLQ
handling to preserve correctness under out-of-order events.

## Context

Creator-facing workflows needed a notification path that multiple teams could use
without depending on brittle point-to-point status checks.

The service had to handle follow and unfollow state transitions that could arrive
late or out of order.

## Problem

A naive write path could overwrite newer state with stale events and send
incorrect notifications.

The first version needed clear ownership boundaries, durable retry behavior, and
data modeling that kept state transitions correct under normal distributed-system
failure modes.

## Ownership

Youfu:

- designed and built the first service version
- modeled event-time state updates in DynamoDB
- added retry and dead-letter handling for failed event processing
- worked with three adopting teams on integration expectations

## Approach

The service used event timestamps in DynamoDB conditional writes to discard stale
state transitions.

Retry and dead-letter handling separated transient failures from messages that
needed inspection.

## Result

The service gave three teams a shared first version for event-driven creator
notifications and protected correctness when follow and unfollow events arrived
out of order.

## Engineering lesson

Event-driven systems need correctness rules at the write boundary. Idempotency and
timestamp checks are easier to reason about than cleanup after stale state is
persisted.

## Public-safety note

Do not publish internal service names, event schemas, team names, or operational
details.
