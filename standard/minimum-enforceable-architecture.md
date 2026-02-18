# Minimum Enforceable Architecture (MEA)

**Document ID:** GAIS-STD-004  
**Version:** 1.0  
**Status:** Normative

## 1. Purpose

MEA defines the minimum technical architecture required to claim GAI-S conformance.

## 2. Required Components

A conformant implementation MUST include all components below.

| Component | Purpose | Mapped Controls |
|---|---|---|
| Risk Engine | Computes deterministic CRI and risk bands | `GAIS-CTRL-RC-01`, `GAIS-CTRL-RC-02` |
| Authority Gate | Enforces non-bypassable human review for gated events | `GAIS-CTRL-AS-01`, `GAIS-CTRL-AS-02` |
| Data Governance Layer | Enforces provenance checks and role-based access | `GAIS-CTRL-DG-01`, `GAIS-CTRL-DG-02` |
| Containment Layer | Enforces trust boundaries and least-privilege execution | `GAIS-CTRL-DC-01`, `GAIS-CTRL-DC-02` |
| Audit Pipeline | Produces immutable time-ordered governance records | `GAIS-CTRL-AL-01`, `GAIS-CTRL-AL-02` |
| Incident Workflow | Handles governance failures and CAPA tracking | `GAIS-CTRL-IR-01`, `GAIS-CTRL-IR-02` |

## 3. Architectural Constraints

- Governance decisions MUST be evaluated before consequential actuation.
- Control policy and threshold values MUST be externally configurable and versioned.
- Governance failures MUST fail safe, not fail open.
- Core governance controls MUST be testable independently from application UI.

## 4. Interface Requirements

Each required component MUST expose:
- Deterministic input/output contract
- Versioned policy configuration reference
- Structured event output for audit pipeline

## 5. Minimum Evidence for MEA

Organizations MUST provide:
- Architecture diagram with trust zones
- Control-to-component mapping
- Test evidence for each required component
- Sample end-to-end trace for a gated high-risk flow

## 6. Non-Conformance Conditions

A system is non-conformant if any required MEA component is missing, disabled in production, or documented without operational evidence.

## 7. Cross-References

- Control catalog: `standard/domain-specifications.md`
- Authority specifics: `standard/authority-separation-spec.md`
