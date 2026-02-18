# EU AI Act Alignment

**Document ID:** GAIS-REG-001  
**Version:** 1.0  
**Status:** Informative Mapping

## 1. Purpose

This document provides a practical mapping between GAI-S control IDs and key EU AI Act obligation themes for high-risk systems.

## 2. Mapping

| EU AI Act Obligation Theme | Relevant GAI-S Controls | Expected Evidence |
|---|---|---|
| Risk management lifecycle | `GAIS-CTRL-RC-01`, `GAIS-CTRL-RC-02`, `GAIS-CTRL-IR-01` | Risk model docs, threshold policies, incident records |
| Data and data governance | `GAIS-CTRL-DG-01`, `GAIS-CTRL-DG-02` | Data provenance records, access controls |
| Human oversight | `GAIS-CTRL-AS-01`, `GAIS-CTRL-AS-02` | Approval gate design, override logs |
| Technical robustness and security | `GAIS-CTRL-DC-01`, `GAIS-CTRL-DC-02` | Trust boundary docs, least-privilege policy |
| Logging and traceability | `GAIS-CTRL-AL-01`, `GAIS-CTRL-AL-02` | Audit schema, retention policy |
| Post-market/incident discipline | `GAIS-CTRL-IR-01`, `GAIS-CTRL-IR-02` | Incident response and CAPA artifacts |

## 3. Notes

- Implementers MUST validate legal applicability based on deployment role and jurisdiction.
- This mapping is control-oriented and is not a legal opinion.

## 4. Cross-References

- Control catalog: `standard/domain-specifications.md`
- Governance control matrix: `standard/governance-control-matrix.md`
