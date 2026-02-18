# Governance Records

This document defines the minimum record structures required for GAI-S auditability.

## Record Types

## 1) Review Decision Record

Purpose: evidence for authority separation controls (`GAIS-CTRL-AS-01`, `GAIS-CTRL-AS-02`).

Required fields:

- `decision_id`
- `request_id`
- `reviewer_actor_id`
- `reviewer_role`
- `decision` (`approved|rejected|needs_revision`)
- `decision_rationale`
- `cri_score`
- `confidence_score`
- `policy_version`
- `event_time`

## 2) Override Record

Purpose: evidence for confidence and risk-based override actions.

Required fields:

- `override_id`
- `decision_id`
- `trigger_reasons` (array, e.g. `high_cri`, `low_confidence`)
- `applied_by_actor_id`
- `approval_actor_id`
- `event_time`
- `trace_id`

## 3) Escalation Record

Purpose: evidence for deterministic escalation routing.

Required fields:

- `escalation_id`
- `request_id`
- `selected_tier` (`E0|E1|E2|E3`)
- `reason_codes`
- `destination_queue`
- `sla_target`
- `event_time`

## 4) Drift Event Record

Purpose: evidence for monitoring and containment responses.

Required fields:

- `drift_event_id`
- `metric_name`
- `metric_value`
- `severity` (`none|minor|moderate|severe|critical`)
- `window_start`
- `window_end`
- `response_action`
- `event_time`

## 5) Incident Record

Purpose: evidence for incident response controls (`GAIS-CTRL-IR-01`, `GAIS-CTRL-IR-02`).

Required fields:

- `incident_id`
- `severity`
- `status`
- `owner_actor_id`
- `summary`
- `opened_at`
- `closed_at` (nullable)
- `capa_plan`

## Linkage and Integrity Rules

- Every record MUST include `trace_id` or a resolvable reference path to `audit_event`.
- Records SHOULD include evidence bundle references with checksums.
- Record mutations MUST be append-only; corrections are represented as superseding records.

## Retention Guidance

- Review, override, escalation, and drift records: minimum 24 months.
- Incident records and associated CAPA artifacts: minimum 60 months.
- Active legal hold records: retained until legal hold is released.
