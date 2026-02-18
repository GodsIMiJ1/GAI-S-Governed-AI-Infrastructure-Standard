# GAI-S Certification Tier Specification

**Document ID:** GAIS-STD-002  
**Version:** 1.0  
**Status:** Normative

## 1. Purpose

This document defines Level 1, Level 2, and Level 3 certification requirements, required evidence depth, and recertification triggers.

## 2. Tier Definitions

| Tier | Name | Intended Context |
|---|---|---|
| Level 1 | Baseline Governance | Internal tooling and low-consequence use |
| Level 2 | Regulated Governance | Regulated or customer-facing consequential use |
| Level 3 | Critical Governance | Safety-critical, rights-impacting, or mission-critical use |

## 3. Control Requirements by Tier

`GAIS-STD-001` defines controls. This section defines mandatory minimums per tier.

| Control | L1 | L2 | L3 |
|---|---|---|---|
| `GAIS-CTRL-RC-01` | MUST | MUST | MUST |
| `GAIS-CTRL-RC-02` | SHOULD | MUST | MUST |
| `GAIS-CTRL-AS-01` | SHOULD | MUST | MUST |
| `GAIS-CTRL-AS-02` | SHOULD | MUST | MUST |
| `GAIS-CTRL-DG-01` | SHOULD | MUST | MUST |
| `GAIS-CTRL-DG-02` | MAY | SHOULD | MUST |
| `GAIS-CTRL-DC-01` | SHOULD | MUST | MUST |
| `GAIS-CTRL-DC-02` | MAY | SHOULD | MUST |
| `GAIS-CTRL-AL-01` | MUST | MUST | MUST |
| `GAIS-CTRL-AL-02` | SHOULD | MUST | MUST |
| `GAIS-CTRL-IR-01` | SHOULD | MUST | MUST |
| `GAIS-CTRL-IR-02` | MAY | SHOULD | MUST |

## 4. Evidence Depth by Tier

## 4.1 Level 1

Minimum submission MUST include:
- Architecture overview
- Control-to-evidence index
- Representative logs for key governance events

## 4.2 Level 2

Level 2 MUST include all Level 1 evidence plus:
- Formal role and authority model
- CRI thresholds, policy tables, and validation tests
- Incident workflow and escalation evidence
- Data provenance and access controls

## 4.3 Level 3

Level 3 MUST include all Level 2 evidence plus:
- Independent validation artifacts
- Stress and failure-mode tests
- Signed governance board approvals for high-risk policies
- Demonstrated non-bypassability of human authority controls

## 5. Certification Outcomes

A tier review MUST result in one outcome:
- Certified
- Certified with Conditions
- Not Certified

Conditions MUST include deadline, remediation owner, and re-evidence requirements.

## 6. Recertification Triggers

Recertification MUST be triggered by:
- Material architecture changes affecting control semantics
- Changes to risk scoring model design
- Expansion into higher-consequence domain or jurisdiction
- Governance incident classified as severe/critical
- Scheduled cycle expiry (Level 1: 24 months, Level 2: 12 months, Level 3: 6 months)

## 7. Cross-References

- Control catalog: `standard/domain-specifications.md`
- Governance process: `standard/certification-governance-model.md`
