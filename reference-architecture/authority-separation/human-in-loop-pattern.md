# Human-in-the-Loop Pattern

## Pattern Overview

This pattern operationalizes mandatory review paths for consequential AI outputs.

## Trigger Inputs

A HITL checkpoint is required when any condition is true:

- CRI band is `HIGH` or `CRITICAL`
- Confidence is below autonomous threshold
- Drift monitor status is out-of-policy
- Domain rule forces manual review

## Decision States

| State | Meaning | Next Action |
|---|---|---|
| `pending_review` | Gate opened, awaiting reviewer | Hold execution |
| `approved` | Reviewer allows action | Execute and log |
| `rejected` | Reviewer denies action | Block and log |
| `needs_revision` | Reviewer requests changes | Return to generation step |

## Non-Bypassability Rules

- Execution service MUST reject requests missing an approved gate token.
- Gate tokens MUST be short-lived and scoped to a single action payload.
- Emergency bypasses MUST be role-restricted and post-reviewed.

## Evidence Outputs

- Review record: actor, role, decision, rationale, event time
- Gate token issuance and consumption records
- Enforcement failures (if any) with incident linkage

## Validation Tests

- Simulate high-risk event and assert `pending_review` state before execution.
- Attempt execution without approval token and assert denial.
- Assert audit events for approve/reject/revise transitions.
