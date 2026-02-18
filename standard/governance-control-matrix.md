# Governance Control Matrix

**Document ID:** GAIS-STD-005  
**Version:** 1.0  
**Status:** Normative (Mapping Reference)

## 1. Purpose

This matrix maps GAI-S controls to major regulatory and assurance frameworks to support implementation traceability and audit preparation.

## 2. Scope Note

Mappings are interpretive implementation aids. They do not independently confer legal or regulatory compliance.

## 3. Control Mapping Matrix

| GAI-S Control | Domain | EU AI Act (high-level) | ISO/IEC 42001 (high-level) | NIST AI RMF (high-level) |
|---|---|---|---|---|
| `GAIS-CTRL-RC-01` | Risk Classification | Risk management system and classification expectations | AI risk assessment and treatment lifecycle | MAP, MEASURE |
| `GAIS-CTRL-RC-02` | Risk Classification | Human oversight and risk mitigation controls | Operational planning and control | MANAGE |
| `GAIS-CTRL-AS-01` | Authority Separation | Human oversight obligations | Roles, responsibilities, and operational controls | GOVERN, MANAGE |
| `GAIS-CTRL-AS-02` | Authority Separation | Accountability and traceability expectations | Monitoring, logging, and evidence retention | GOVERN, MEASURE |
| `GAIS-CTRL-DG-01` | Data Governance | Data governance and quality requirements | Data management and lifecycle controls | MAP, MEASURE |
| `GAIS-CTRL-DG-02` | Data Governance | Security and access governance expectations | Access control and information protection | GOVERN |
| `GAIS-CTRL-DC-01` | Deployment Containment | Technical robustness and secure operation | Operational control and system integrity | MANAGE |
| `GAIS-CTRL-DC-02` | Deployment Containment | Risk mitigation and misuse prevention | Supplier/interface and integration controls | MANAGE |
| `GAIS-CTRL-AL-01` | Audit and Logging | Logging/traceability supporting conformity | Performance evaluation and auditability | MEASURE |
| `GAIS-CTRL-AL-02` | Audit and Logging | Post-market monitoring support | Documented information retention and control | GOVERN |
| `GAIS-CTRL-IR-01` | Incident Response | Serious incident reporting and remediation posture | Nonconformity and corrective action | MANAGE |
| `GAIS-CTRL-IR-02` | Incident Response | Continuous mitigation and oversight | Continual improvement and CAPA | GOVERN, MANAGE |

## 4. Implementation Traceability Requirement

Certified entities SHOULD maintain an internal traceability sheet linking:
- Control ID
- Architecture component
- Enforcing code path
- Evidence artifacts
- Relevant external obligations

## 5. Cross-References

- Domain controls: `standard/domain-specifications.md`
- Tier strictness: `standard/certification-tier-specification.md`
- Detailed regulatory alignment notes: `standard/regulatory-alignment/`
