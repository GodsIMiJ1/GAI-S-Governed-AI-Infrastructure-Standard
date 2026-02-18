# Authority Separation Specification

**Document ID:** GAIS-STD-003  
**Version:** 1.0  
**Status:** Normative

## 1. Purpose

This specification defines mandatory authority separation controls for GAI-S implementations, with focus on non-bypassable human authority in consequential decisions.

## 2. Normative Controls

This document operationalizes:
- `GAIS-CTRL-AS-01`
- `GAIS-CTRL-AS-02`

Control definitions are canonical in `standard/domain-specifications.md`.

## 3. Role Model

Implementations MUST define at minimum:
- `System Operator`: manages runtime operations but cannot self-approve high-risk outcomes.
- `Human Reviewer`: authorized to approve, reject, or require revision for gated outputs.
- `Governance Owner`: accountable for policy thresholds and override policy.

Role responsibilities MUST be documented and version-controlled.

## 4. Mandatory Separation Requirements

- AI systems MUST separate output generation from final execution authority.
- For high-risk conditions, workflow MUST pause pending human reviewer decision.
- Reviewer identity, timestamp, and rationale MUST be recorded for each override action.
- Systems MUST prevent self-approval where request initiator and approver are the same principal unless an emergency exception policy explicitly allows it and logs justification.

## 5. Gate Trigger Policy

A human authority gate MUST be triggered when one or more are true:
- CRI score meets or exceeds defined threshold.
- Model confidence falls below defined minimum for autonomous routing.
- Drift status indicates out-of-policy behavior.
- Domain policy explicitly requires mandatory review regardless of confidence.

## 6. Exception and Emergency Handling

Emergency bypass MAY exist only if:
- Bypass is restricted to designated emergency roles.
- Every bypass event is logged and flagged for post-event review.
- Post-event governance review occurs within one business day.

## 7. Evidence Requirements

Auditors MUST be able to inspect:
- Authority boundary document
- Reviewer role assignment records
- Override decision logs with rationale
- Evidence that blocked actions do not execute before reviewer decision

## 8. Test Expectations

Implementations SHOULD include tests showing:
- High-risk event routes to mandatory human gate
- Bypass attempts by unauthorized actors fail
- Override logs are generated and immutable

## 9. Cross-References

- Control catalog: `standard/domain-specifications.md`
- Tier strictness: `standard/certification-tier-specification.md`
- Minimum architecture components: `standard/minimum-enforceable-architecture.md`
