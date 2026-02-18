# GAI-S Domain Specifications

**Document ID:** GAIS-STD-001  
**Version:** 1.0  
**Status:** Normative  
**Terminology:** RFC 2119

## 1. Purpose and Scope

This document defines the six primary GAI-S governance domains, mandatory controls per domain, required evidence, and audit evaluation expectations.

The domains apply to all certified systems. Tier-specific strictness is defined in `standard/certification-tier-specification.md`.

## 2. Control Catalog

Control IDs are canonical and MUST be used consistently in architecture docs, engine implementations, templates, and audit records.

| Domain | Control ID | Requirement |
|---|---|---|
| Risk Classification | `GAIS-CTRL-RC-01` | System MUST compute a deterministic Composite Risk Index (CRI) before release of consequential outputs. |
| Risk Classification | `GAIS-CTRL-RC-02` | System MUST define CRI bands and associated action policy. |
| Authority Separation | `GAIS-CTRL-AS-01` | High-risk outputs MUST require human decision authority before action. |
| Authority Separation | `GAIS-CTRL-AS-02` | Human override decisions MUST be logged with reviewer identity and rationale. |
| Data Governance | `GAIS-CTRL-DG-01` | Inputs used in consequential decisions MUST have traceable provenance. |
| Data Governance | `GAIS-CTRL-DG-02` | Access to sensitive governance data MUST be role restricted and logged. |
| Deployment Containment | `GAIS-CTRL-DC-01` | AI systems MUST enforce trust boundaries between model inference and execution surfaces. |
| Deployment Containment | `GAIS-CTRL-DC-02` | External tool/action integrations MUST be least-privilege scoped. |
| Audit and Logging | `GAIS-CTRL-AL-01` | Governance events MUST be immutably recorded with timestamps and actor context. |
| Audit and Logging | `GAIS-CTRL-AL-02` | Audit records MUST be retained according to declared retention policy. |
| Incident Response | `GAIS-CTRL-IR-01` | Governance failures MUST trigger incident workflow with severity classification. |
| Incident Response | `GAIS-CTRL-IR-02` | Corrective and preventive actions MUST be documented and tracked to closure. |

## 3. Domain Requirements

## 3.1 Risk Classification

- Systems MUST implement `GAIS-CTRL-RC-01` and `GAIS-CTRL-RC-02`.
- CRI scoring inputs and weighting logic MUST be documented and reproducible.
- Escalation thresholds MUST be formally defined and version-controlled.

Evidence:
- CRI methodology document
- Policy table mapping CRI bands to routing actions
- Test artifacts showing deterministic behavior for fixed inputs

## 3.2 Authority Separation

- Systems MUST implement `GAIS-CTRL-AS-01` and `GAIS-CTRL-AS-02`.
- Non-bypassable approval gates MUST exist for defined risk conditions.
- AI output generation and final execution authority MUST be logically separated.

Evidence:
- Authority boundary specification
- Override decision log samples
- Access control policy and reviewer role map

## 3.3 Data Governance

- Systems MUST implement `GAIS-CTRL-DG-01` and `GAIS-CTRL-DG-02`.
- Data classification and provenance requirements MUST be documented.
- Governance evidence stores MUST enforce least privilege.

Evidence:
- Data lineage documentation
- Access control matrix
- Data quality and provenance checks

## 3.4 Deployment Containment

- Systems MUST implement `GAIS-CTRL-DC-01` and `GAIS-CTRL-DC-02`.
- Trust zones MUST be documented and enforced in runtime architecture.
- Tool invocation policies MUST limit high-impact actions.

Evidence:
- Trust boundary diagram
- Service-to-service authorization policy
- Integration allowlist/denylist

## 3.5 Audit and Logging

- Systems MUST implement `GAIS-CTRL-AL-01` and `GAIS-CTRL-AL-02`.
- Logs MUST support time-order reconstruction of governance decisions.
- Evidence integrity controls MUST be documented.

Evidence:
- Audit schema
- Retention policy
- Sample trace linking decision, override, and incident records

## 3.6 Incident Response

- Systems MUST implement `GAIS-CTRL-IR-01` and `GAIS-CTRL-IR-02`.
- Governance incidents MUST have severity taxonomy and response SLAs.
- Post-incident CAPA records MUST be reviewable by auditors.

Evidence:
- Incident runbook
- Incident report samples
- CAPA tracker excerpts

## 4. Audit Evaluation Method

Auditors MUST evaluate each control against:
- Design evidence (documented architecture/policy)
- Operational evidence (logs/records/events)
- Repeatability evidence (tests/simulations)

A control is conformant only when all three evidence classes are present.

## 5. Cross-References

- Tier strictness: `standard/certification-tier-specification.md`
- Authority specifics: `standard/authority-separation-spec.md`
- Baseline architecture: `standard/minimum-enforceable-architecture.md`
- Regulatory mapping: `standard/governance-control-matrix.md`
