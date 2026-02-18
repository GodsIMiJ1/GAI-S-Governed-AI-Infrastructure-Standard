# GAI-S Certification Governance Model

**Document ID:** GAIS-GOV-001  
**Reference File:** standard/certification-governance-model.md  
**Version:** 1.0  
**Status:** Normative  
**Classification:** Public — Governance Documentation  
**Issuing Body:** GodsIMiJ AI Solutions | James Derek Ingersoll  
**Terminology Standard:** RFC 2119 — MUST / SHOULD / MAY  
**Supersedes:** None (initial issuance)  
**Effective Date:** Upon publication

---

> *This document defines the operational governance model for the issuance, maintenance, verification, and revocation of GAI-S certification. All normative requirements are stated in RFC 2119 terms. This document is intended to support institutional review, independent audit, and operationally implementable certification administration.*

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Certification Issuance Authority](#3-certification-issuance-authority)
4. [Third-Party Auditor Model](#4-third-party-auditor-model)
5. [Certification Validity Period](#5-certification-validity-period)
6. [Required Certification Dossier](#6-required-certification-dossier)
7. [Review Methodology](#7-review-methodology)
8. [Revocation and Suspension](#8-revocation-and-suspension)
9. [Recertification Process](#9-recertification-process)
10. [Conflict-of-Interest Rules](#10-conflict-of-interest-rules)
11. [Public Listing and Verification](#11-public-listing-and-verification)
12. [Certification Mark Usage Rules](#12-certification-mark-usage-rules)
13. [Document Control](#13-document-control)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the normative governance model governing the issuance, maintenance, suspension, revocation, and verification of GAI-S certification. It defines the operational procedures, authority structures, dossier requirements, and accountability mechanisms that make GAI-S certification administratively implementable and institutionally defensible.

This document is a governance instrument, not a technical specification. It operates as a companion to `GAIS-STD-002` (Certification Tier Specification), which defines what must be demonstrated for certification; this document defines how certification is formally administered.

### 1.2 Scope

This document applies to:

- All entities seeking GAI-S certification at any tier (Level 1, Level 2, or Level 3).
- All auditors conducting GAI-S certification reviews, whether internal or third-party.
- GodsIMiJ AI Solutions in its capacity as the certification issuance authority.
- All certified entities during their active certification period.
- Any party referencing or relying upon a GAI-S certification claim.

### 1.3 Out of Scope

This document does not:

- Define technical control requirements (see `GAIS-STD-001`, `GAIS-STD-002`).
- Establish sector-specific certification annexes.
- Constitute legal advice or a substitute for applicable regulatory compliance obligations.
- Bind third parties who are not voluntary participants in the GAI-S certification program.

### 1.4 Normative Language

All requirements in this document use RFC 2119 terminology:

- **MUST / MUST NOT** — Absolute requirement. Non-compliance constitutes an administrative violation of the certification governance model.
- **SHOULD / SHOULD NOT** — Strong recommendation. Deviation requires documented justification retained in the certification record.
- **MAY** — Optional capability permitted within the governance framework.

---

## 2. Definitions

For the purposes of this document, the following definitions apply.

**Applicant** — Any organization or individual entity formally applying for GAI-S certification in respect of a defined AI system.

**Certification Authority (CA)** — GodsIMiJ AI Solutions, acting as the exclusive issuance authority for GAI-S certification under this governance model.

**Certification Dossier** — The complete package of documentation and evidence artifacts submitted by an Applicant in support of a certification application or recertification.

**Certification Record** — The formal internal record maintained by the Certification Authority for each issued certification, including the Dossier, review findings, issuance decision, and all subsequent maintenance records.

**Certified Entity** — An Applicant that has received a valid GAI-S certification at a defined tier in respect of a defined AI system.

**Compliance Officer of Record (COR)** — The individual designated by a Certified Entity as the accountable officer for GAI-S compliance obligations. This person MUST be named in the Certification Dossier.

**Dossier Review** — The structured assessment of a Certification Dossier against the normative requirements of the applicable certification tier.

**Material Change** — Any modification to an AI system's architecture, governance structure, deployment context, risk classification methodology, data governance model, or oversight staffing that could affect the validity of existing certification. Material Change triggers are defined in Section 9.3.

**Qualified Auditor** — An individual meeting the qualification requirements defined in Section 4.2, whether internal or third-party.

**System Boundary** — The defined technical and organizational perimeter within which GAI-S certification applies. A certification is valid only within the System Boundary declared at issuance.

**Tier** — One of three GAI-S certification levels: Level 1 (Baseline Governance), Level 2 (Regulated Governance), or Level 3 (Critical Governance), as defined in `GAIS-STD-002`.

---

## 3. Certification Issuance Authority

### 3.1 Sole Issuance Authority

GodsIMiJ AI Solutions, operating under the direction of James Derek Ingersoll, is the sole issuance authority for GAI-S certification. No other party may issue, grant, assign, or confer GAI-S certification without explicit written delegation from GodsIMiJ AI Solutions.

### 3.2 Authority Responsibilities

The Certification Authority MUST:

3.2.1 Maintain the normative GAI-S standard documentation and publish changes under version control with documented rationale.

3.2.2 Administer the Dossier Review process for all certification applications, either directly or through approved third-party reviewers operating under Section 4 of this document.

3.2.3 Issue, maintain, suspend, or revoke certifications in accordance with the procedures defined in this document.

3.2.4 Maintain the certification public registry defined in Section 11.

3.2.5 Retain a Certification Record for each issued certification for a minimum of five (5) years from the date of issuance or, if certification has lapsed, from the date of lapse.

3.2.6 Respond to substantiated third-party complaints regarding the validity or misrepresentation of a GAI-S certification within thirty (30) calendar days.

### 3.3 Authority Limitations

The Certification Authority:

3.3.1 MUST NOT issue certification to itself in respect of its own AI systems without an independent third-party audit conducted under Section 4 of this document.

3.3.2 MUST NOT issue certification based on incomplete Dossier submissions. Partial certifications are not permitted.

3.3.3 MUST NOT guarantee or warrant the operational performance or regulatory compliance of any Certified Entity's AI system. Certification attests to governance posture as documented, not operational outcomes.

3.3.4 MUST publicly disclose the basis on which any certification was issued if a Certified Entity is subject to a publicly reported material governance failure.

### 3.4 Delegation

3.4.1 The Certification Authority MAY delegate Dossier Review functions to approved Third-Party Auditors as defined in Section 4. Such delegation does not transfer issuance authority.

3.4.2 All certification decisions — issuance, suspension, revocation — MUST be made by the Certification Authority directly and MUST NOT be sub-delegated.

---

## 4. Third-Party Auditor Model

### 4.1 Role of Third-Party Auditors

Third-Party Auditors (TPAs) are independent organizations or individuals approved by the Certification Authority to conduct Dossier Reviews on behalf of or alongside the Certification Authority. TPA engagement is:

- **Optional** for Level 1 certification.
- **Recommended** for Level 2 certification.
- **Required** for Level 3 initial certification and for any Level 3 recertification following a Critical-severity incident.

Third-Party Auditors do not possess issuance authority. Their role is to review evidence, test controls, produce an Audit Report, and deliver findings to the Certification Authority. The final issuance decision remains with the Certification Authority.

### 4.2 Auditor Qualification Requirements

To be approved as a GAI-S Third-Party Auditor, an individual or organization MUST satisfy all of the following:

4.2.1 **Technical competence.** Demonstrated expertise in at least two of the following: AI/ML governance, information security auditing, regulatory compliance auditing, enterprise risk management. Evidence of competence MUST include professional credentials, documented project history, or equivalent demonstrated experience.

4.2.2 **Independence.** No material financial, operational, or ownership relationship with the Applicant within the preceding twenty-four (24) months. Independence is defined in Section 10 of this document.

4.2.3 **Execution capability.** Capacity to review technical architecture documentation, audit log samples, change control records, and governance board materials without live system access.

4.2.4 **Confidentiality undertaking.** Execution of a written confidentiality agreement with the Certification Authority prior to receiving any Dossier materials.

4.2.5 **Liability acknowledgment.** Written acknowledgment that the TPA is responsible for the accuracy and completeness of its Audit Report and that the Certification Authority may rely on TPA findings in its issuance decision.

### 4.3 Approved Auditor Registry

The Certification Authority SHOULD maintain an internal registry of approved Third-Party Auditors. Applicants MAY propose their own auditor, subject to Certification Authority approval against the criteria in Section 4.2.

### 4.4 Auditor Obligations

An approved TPA MUST:

4.4.1 Conduct all review activities in accordance with the GAI-S Dossier Review methodology defined in Section 7.

4.4.2 Produce a written Audit Report conforming to the structure defined in Section 7.4 within the timeline agreed with the Certification Authority.

4.4.3 Disclose any conflict of interest identified during the review to the Certification Authority immediately upon discovery.

4.4.4 Retain workpapers supporting Audit Report findings for a minimum of three (3) years following report delivery.

4.4.5 Not disclose Dossier contents or review findings to any party other than the Applicant and the Certification Authority without written authorization.

### 4.5 Auditor Accountability

The Certification Authority MAY suspend or revoke a Third-Party Auditor's approved status for:

- Submission of a materially inaccurate or incomplete Audit Report.
- Failure to disclose a conflict of interest.
- Breach of confidentiality obligations.
- Evidence of coordination with an Applicant to produce findings inconsistent with the evidence reviewed.

---

## 5. Certification Validity Period

### 5.1 Standard Validity Period

GAI-S certifications are valid for a fixed period from the date of issuance, as follows:

| Tier | Standard Validity Period | Maintenance Requirement |
|------|--------------------------|------------------------|
| Level 1 | Twenty-four (24) months | Annual self-attestation |
| Level 2 | Twelve (12) months | Annual internal audit |
| Level 3 | Twelve (12) months | Annual full-scope audit |

### 5.2 Conditional Issuance

The Certification Authority MAY issue a certification with conditions attached, where minor gaps exist that do not individually constitute grounds for denial but require remediation within a defined timeframe. Conditional certifications MUST:

5.2.1 Identify each condition as a named finding with an associated remediation deadline not exceeding ninety (90) calendar days.

5.2.2 Be noted as conditional in the public certification registry.

5.2.3 Convert to unconditional status only upon the Certification Authority's written confirmation that all conditions have been satisfied. Failure to satisfy all conditions within the defined period MUST result in certification suspension.

### 5.3 No Retroactive Extension

Certification validity periods are fixed at issuance and MUST NOT be extended retroactively. A Certified Entity whose certification has lapsed before recertification is granted MUST be treated as uncertified for the gap period. This gap MUST be reflected in the public certification registry.

### 5.4 Lapse Without Prejudice

A certification that lapses due to administrative delay (i.e., a complete and compliant recertification Dossier was submitted on time but review has not concluded) MAY be maintained in an "Under Review" status in the public registry, provided the Certified Entity has submitted a complete Dossier within the required timeframe.

---

## 6. Required Certification Dossier

### 6.1 Dossier Composition — All Tiers

The following artifacts are required for any GAI-S certification application regardless of tier. All artifacts MUST be current as of the date of submission (not older than six months unless otherwise specified).

| Artifact | Description | Format |
|----------|-------------|--------|
| **System Definition Statement** | Formal description of the AI system subject to certification, including modality, inference architecture, deployment context, and defined System Boundary | Written document |
| **Authority Boundary Declaration** | Normative statement of AI advisory vs. human decision authority, including trigger conditions and escalation pathways | Written document |
| **Risk Classification Model** | Description of the risk scoring methodology applied to AI outputs, including CRI parameters and escalation thresholds | Written document + schema |
| **Data Governance Summary** | Summary of data residency, classification, access controls, and inference boundary constraints | Written document |
| **Compliance Officer of Record Designation** | Named individual, title, contact information, and acceptance signature | Signed form |
| **Applicant Attestation** | Signed statement affirming the accuracy and completeness of the Dossier | Signed statement |

### 6.2 Additional Artifacts — Level 2

In addition to Section 6.1, Level 2 certification MUST include:

| Artifact | Description |
|----------|-------------|
| **Quantitative Risk Classification Evidence** | Logs or outputs demonstrating CRI scores assigned to sampled AI outputs during a defined review period |
| **Human Review Gate Architecture Document** | Technical or procedural documentation of the enforcement mechanism for human review at escalation thresholds |
| **Override Log Sample** | Sample of human override records demonstrating that the override process is operational |
| **Data Governance Architecture Document** | Full classification model, residency declaration, inference boundary document, encryption and RBAC documentation |
| **Deployment Architecture Document** | Environment separation, dependency manifest, trust boundary diagram |
| **Incident Response Plan** | Operational IRP including classification taxonomy and response timelines |
| **IRP Test Record** | Documentation of most recent annual IRP exercise |
| **Change Management Log** | Record of all material system changes during the relevant review period with approval trail |
| **Internal Audit Report** | Annual audit report with findings and management response |

### 6.3 Additional Artifacts — Level 3

In addition to Sections 6.1 and 6.2, Level 3 certification MUST include:

| Artifact | Description |
|----------|-------------|
| **Governance Board Charter** | Formal charter of the Domain Oversight Board including membership criteria, quorum requirements, meeting cadence, and decision authority |
| **Governance Board Meeting Records** | Minutes or equivalent records for all Board meetings in the review period demonstrating quorum and decision documentation |
| **Model Performance Validation Reports** | Quarterly validation reports covering false positive rate (FPR), false negative rate (FNR), and bias analysis |
| **External Audit Report** | Independent third-party audit report for Level 3 initial certification and post-Critical-incident recertification |
| **BC/DR Plan and Test Record** | Business continuity and disaster recovery plan with documented test results |
| **Regulatory Alignment Matrix** | Mapping of GAI-S controls to applicable regulatory requirements in the Certified Entity's operating jurisdiction |
| **Annual Attestation Statement** | Signed attestation by Compliance Officer of Record and Domain Oversight Board Chair in the format specified in `GAIS-STD-002` Section 5.6 |
| **Governance Feedback Loop Log** | Record of trigger conditions met and corresponding governance responses initiated |

### 6.4 Submission Requirements

6.4.1 All Dossier artifacts MUST be submitted in written, readable form. Live system demonstrations are not accepted as substitutes for documented evidence.

6.4.2 Artifacts MAY be submitted in PDF, DOCX, or structured plain text (Markdown) format. Where a structured schema is referenced (e.g., CRI model), the schema and a sample output dataset MUST both be included.

6.4.3 Redacted versions of sensitive artifacts (e.g., sanitized override log samples, anonymized incident records) are acceptable where confidentiality constraints apply, provided the redaction does not obscure the evidence required to assess control effectiveness.

6.4.4 The Applicant MUST certify that no material information relevant to certification has been withheld or obscured in the submitted Dossier.

---

## 7. Review Methodology

### 7.1 Overview

The Dossier Review is a structured, document-based assessment of the Applicant's governance posture against the normative requirements of the applicable certification tier. The Review MUST be completable without live system access. Any review conclusion that requires live system access to substantiate is not a valid basis for certification.

### 7.2 Review Phases

All Dossier Reviews MUST proceed through the following phases in order:

**Phase 1 — Completeness Check**
The reviewer verifies that all required artifacts for the applicable tier are present, current, and in an acceptable format. Incomplete submissions MUST be returned to the Applicant with a written completeness notice. The review clock does not begin until a complete submission is received.

**Phase 2 — Structural Assessment**
The reviewer assesses whether each artifact addresses the control objective it is intended to evidence. Artifacts that are formally present but substantively empty (e.g., an IRP that contains no classification taxonomy) MUST be flagged as deficient.

**Phase 3 — Control Effectiveness Assessment**
The reviewer assesses whether the documented controls, if implemented as described, are capable of satisfying the mandatory requirements of the applicable tier. This includes:

- Verification that CRI parameters are quantitative and produce actionable escalation triggers.
- Verification that the human review gate is architecturally enforced, not merely policy-stated.
- Verification that override logs demonstrate actual override events with documented rationale.
- Verification that governance board records demonstrate functional oversight, not merely formal existence.

**Phase 4 — Gap Identification and Classification**
All identified gaps MUST be classified by severity:

| Severity | Definition | Certification Impact |
|----------|------------|---------------------|
| **Critical** | Control is absent, non-functional, or evidence is fabricated or withheld | Certification denied |
| **Major** | Control is present but materially deficient; the gap creates meaningful governance risk | Certification denied or conditioned |
| **Minor** | Control is present and functional; the gap is a documentation or process improvement opportunity | Condition attached or observation noted |
| **Observation** | Best practice enhancement; no compliance gap | Noted in report; no condition |

**Phase 5 — Report Production**
The reviewer MUST produce a written Audit Report as defined in Section 7.4.

**Phase 6 — Issuance Decision**
The Certification Authority reviews the Audit Report and renders the issuance decision. For TPA-reviewed files, the Certification Authority MUST independently evaluate the report before rendering a decision.

### 7.3 Review Timelines

| Tier | Target Review Period |
|------|---------------------|
| Level 1 | Fifteen (15) business days from complete submission |
| Level 2 | Thirty (30) business days from complete submission |
| Level 3 | Forty-five (45) business days from complete submission |

The Certification Authority SHOULD notify the Applicant of expected delays if review timelines cannot be met. Timeline extensions do not extend the certification validity period.

### 7.4 Audit Report Structure

Every Audit Report MUST contain the following sections:

7.4.1 **Cover information** — Applicant name, AI system name, certification tier applied for, review period, reviewer identity and qualification basis, report date.

7.4.2 **Scope statement** — Explicit definition of the System Boundary reviewed, including what is included and what is excluded.

7.4.3 **Methodology statement** — Description of review approach, evidence categories reviewed, and limitations.

7.4.4 **Artifact inventory** — Complete list of submitted artifacts with assessment of completeness and currency.

7.4.5 **Control assessment** — For each mandatory control at the applicable tier: control identifier, evidence reviewed, assessment conclusion (Compliant / Conditionally Compliant / Non-Compliant), and rationale.

7.4.6 **Findings register** — All findings identified, classified by severity per Section 7.2, with evidence basis and recommended remediation action.

7.4.7 **Overall compliance conclusion** — Reviewer's conclusion as to whether the Applicant's governance posture satisfies the requirements of the applied-for certification tier, stated as: Recommend Certification / Recommend Conditional Certification / Recommend Denial.

7.4.8 **Reviewer attestation** — Reviewer's signed statement affirming that the report accurately reflects findings from the review, that no material conflict of interest exists, and that no live system access was required to reach the stated conclusions.

---

## 8. Revocation and Suspension

### 8.1 Suspension

The Certification Authority MAY suspend a GAI-S certification where there is credible evidence of a material compliance gap that has not been remediated, pending further investigation. Suspension:

8.1.1 MUST be notified to the Certified Entity in writing, stating the basis for suspension and the remediation or investigation timeline.

8.1.2 MUST be reflected in the public certification registry within five (5) business days of the suspension decision.

8.1.3 Suspends all certification claims and use of any certification mark for the duration of the suspension period.

8.1.4 MUST be resolved within ninety (90) calendar days through either: (a) lifting of suspension upon satisfactory remediation evidence, or (b) escalation to revocation.

### 8.2 Mandatory Suspension Triggers

The Certification Authority MUST initiate a suspension review within thirty (30) calendar days upon any of the following:

8.2.1 A Critical-severity incident involving risk classification failure, human review gate bypass, unauthorized autonomous action, or data boundary violation — reported by any party.

8.2.2 Credible third-party allegation of misrepresentation of certification status.

8.2.3 Failure by a Certified Entity to submit a required annual attestation or recertification Dossier within the required timeframe without documented prior notification to the Certification Authority.

8.2.4 Departure of the Compliance Officer of Record without notification and successor designation.

8.2.5 Public evidence of a material governance failure inconsistent with the certified governance posture.

### 8.3 Revocation

Revocation terminates certification with immediate effect. The Certification Authority MUST revoke a certification upon any of the following:

8.3.1 Submission of materially false or fabricated evidence in a Certification Dossier or Annual Attestation.

8.3.2 Failure to remediate a confirmed Critical finding within the agreed timeline following conditional certification.

8.3.3 Persistent suspension exceeding ninety (90) calendar days without satisfactory remediation.

8.3.4 Material evidence that the certified AI system has caused substantive harm attributable to the failure of governance controls that the certification represented as operational.

8.3.5 Voluntary withdrawal by the Certified Entity.

8.3.6 Dissolution, liquidation, or insolvency of the Certified Entity without a confirmed successor organization.

### 8.4 Revocation Procedure

8.4.1 Prior to revocation (except in cases of documented fraud or voluntary withdrawal), the Certification Authority MUST issue a Notice of Proposed Revocation with a minimum fifteen (15) calendar day response period.

8.4.2 The Certified Entity MUST have the opportunity to submit a written response. The Certification Authority MUST consider the response before rendering a final revocation decision.

8.4.3 Revocation decisions MUST be documented in the Certification Record with the factual basis stated.

8.4.4 Revocation MUST be reflected in the public certification registry within five (5) business days.

8.4.5 A revoked entity MAY apply for recertification no earlier than twelve (12) months following the revocation date, subject to a full re-application under Section 9.

### 8.5 Effect of Revocation on Third Parties

Revocation does not create a guarantee or warranty of harm to any third party relying on a prior certification. The Certification Authority's role is attestation of governance posture; it does not function as an insurer or guarantor of operational outcomes.

---

## 9. Recertification Process

### 9.1 Scheduled Recertification

Recertification is the process by which a Certified Entity renews its certification at the end of a standard validity period. Recertification MUST be initiated by the Certified Entity and MUST follow the same Dossier submission process as initial certification, subject to the following:

9.1.1 Recertification Dossiers MUST be submitted no later than sixty (60) calendar days before the expiry of the current certification. Submission within this window enables "Under Review" status to be maintained during the review period.

9.1.2 Recertification Dossiers MUST cover the full certification period since the prior certification or most recent gap assessment. Evidence artifacts MUST demonstrate continuous governance, not only point-in-time compliance.

9.1.3 Recertification at the same tier does not require re-demonstration of controls that have remained unchanged and were previously assessed as compliant, provided the Applicant provides a written attestation of continuity with reference to the prior Audit Report findings.

### 9.2 Tiered Recertification Audit Requirements

| Tier | Recertification Audit Requirement |
|------|-----------------------------------|
| Level 1 | Self-attestation with Dossier update; TPA audit optional |
| Level 2 | Internal audit by independent personnel; TPA optional |
| Level 3 | Full-scope audit required; TPA required for any recertification following a Critical-severity incident |

### 9.3 Out-of-Cycle Gap Assessment Triggers

A gap assessment MUST be initiated within thirty (30) calendar days of any of the following Material Changes:

9.3.1 Any Critical-severity incident involving risk classification failure, human review gate bypass, data boundary violation, or regulatory notification obligation.

9.3.2 Material change to the AI system's risk classification methodology, threshold values, or escalation architecture.

9.3.3 Deployment of the AI system in a materially new context, sector, jurisdiction, or user population.

9.3.4 Material change to a foundation model provider or external inference partner.

9.3.5 Structural change to the human review gate or escalation pathway architecture.

9.3.6 Governance board structural change (Chair vacancy, quorum loss, or failure to achieve required meeting cadence for two consecutive quarters) — Level 3 only.

9.3.7 Loss of Compliance Officer of Record without documented successor designation.

9.3.8 Regulatory change creating new compliance obligations not addressed by the current governance architecture.

### 9.4 Gap Assessment Output

A gap assessment MUST produce:

9.4.1 A written Gap Assessment Report identifying each gap against the applicable tier requirements, classified by severity per Section 7.2.

9.4.2 A remediation plan with defined completion dates for each identified gap.

9.4.3 An update to the Certification Record held by the Certification Authority.

9.4.4 If any Critical gap is identified, the Certification Authority MUST determine within ten (10) business days whether suspension is warranted pending remediation.

### 9.5 Tier Changes

A Certified Entity seeking to upgrade to a higher tier MUST submit a full Dossier for the target tier. Upgrade does not require re-demonstrating controls previously assessed as compliant at the lower tier, provided continuity attestation is provided. Downgrade from Level 3 or Level 2 to a lower tier MUST be treated as a new certification application at the target tier.

---

## 10. Conflict-of-Interest Rules

### 10.1 General Principle

No person or organization with a material conflict of interest in the outcome of a certification decision may participate in the review, issuance, or verification of that certification. The integrity of GAI-S certification depends on the operational independence of all parties involved in review and issuance.

### 10.2 Prohibited Relationships — Reviewers and Auditors

A Qualified Auditor or reviewer MUST NOT conduct a GAI-S review for any Applicant where the reviewer or their organization:

10.2.1 Has a current or recent (within twenty-four months) employment, consulting, or contracting relationship with the Applicant.

10.2.2 Has a financial interest in the Applicant's AI system, including equity ownership, revenue sharing, or licensing arrangements.

10.2.3 Has provided the AI governance architecture, risk classification model, or control framework that is the subject of the review.

10.2.4 Has a personal relationship (family, close personal association) with a key decision-maker at the Applicant organization that could reasonably be expected to impair objective judgment.

### 10.3 Disclosure Obligation

All reviewers and auditors MUST disclose any relationship with the Applicant — including those not listed in Section 10.2 but which could be perceived as affecting objectivity — to the Certification Authority prior to commencing review. The Certification Authority MUST determine whether disclosed relationships constitute a disqualifying conflict.

### 10.4 Certification Authority Conflicts

Where a GAI-S certification application is received from an entity in which the Certification Authority has a material financial or operational interest, the Certification Authority MUST:

10.4.1 Disclose the relationship in the public certification record.

10.4.2 Require a Level 3-equivalent third-party audit regardless of the applied-for tier.

10.4.3 Not render the issuance decision without the independent Audit Report.

### 10.5 Conflict Remediation

Where a conflict is identified after review has commenced:

10.5.1 The conflicted reviewer MUST withdraw immediately and disclose the conflict to the Certification Authority.

10.5.2 The Certification Authority MUST determine whether work completed by the conflicted reviewer can be relied upon, or whether that portion of the review must be recommenced by a qualified, unconflicted reviewer.

10.5.3 Any certification issued based on work later found to have been produced by a conflicted reviewer is subject to suspension pending a clean review.

---

## 11. Public Listing and Verification

### 11.1 Public Certification Registry

The Certification Authority MUST maintain a public certification registry listing all current, suspended, and revoked GAI-S certifications. The registry MUST be publicly accessible without authentication and MUST be updated within five (5) business days of any status change.

### 11.2 Required Registry Fields

Each registry entry MUST include the following fields:

| Field | Description |
|-------|-------------|
| **Certified Entity Name** | Legal name of the organization holding the certification |
| **AI System Name** | Name or identifier of the certified AI system as declared in the System Definition Statement |
| **Certification Tier** | Level 1, 2, or 3 |
| **Certification Status** | Active / Conditional / Suspended / Revoked / Lapsed / Under Review |
| **Issuance Date** | Date of initial certification issuance |
| **Expiry Date** | Date on which current certification validity period expires |
| **Conditions (if any)** | Summary of any conditions attached to a conditional certification |
| **Revocation Basis (if applicable)** | High-level basis for revocation where revocation has occurred |
| **Certificate Reference Number** | Unique identifier assigned to each certification |

### 11.3 Verification Mechanism

The registry MUST support verification of certification status by Certificate Reference Number. Any party MAY query the registry to verify whether a stated certification is current, conditional, suspended, or revoked.

### 11.4 Confidentiality of Dossier Contents

Registry entries MUST NOT disclose the contents of the Certification Dossier or internal Audit Report without the written consent of the Certified Entity. The registry attests to the status of certification; it does not publish the evidence on which certification was based.

### 11.5 Correction and Dispute of Registry Entries

A Certified Entity that believes a registry entry contains a material error MUST submit a written correction request to the Certification Authority. The Certification Authority MUST respond within ten (10) business days and MUST correct verified errors within five (5) business days of confirmation.

---

## 12. Certification Mark Usage Rules

### 12.1 Mark Authorization

The Certification Authority MAY make available a certification mark or badge for use by Certified Entities to indicate GAI-S certification status. Use of any such mark is governed by this section.

### 12.2 Authorized Use

A Certified Entity holding an Active GAI-S certification MAY use the certification mark:

12.2.1 In documentation, marketing materials, and institutional communications, provided the mark is accompanied by a statement of the specific certification tier and the certified system name.

12.2.2 In vendor qualification materials and regulatory submissions, where the mark is presented accurately as evidence of governance posture, not operational performance guarantees.

12.2.3 On digital interfaces (e.g., websites, application interfaces), provided the displayed tier, system name, and validity period are accurate at the time of display.

### 12.3 Prohibited Use

A Certified Entity MUST NOT:

12.3.1 Use the certification mark in connection with any AI system other than the system named in the certification.

12.3.2 Continue to display the certification mark following expiry, suspension, or revocation of certification.

12.3.3 Use the certification mark in a manner that implies that GAI-S certification constitutes regulatory approval, product endorsement, or a warranty of safety.

12.3.4 Modify the certification mark in any way that obscures its source, tier designation, or associated system identification.

12.3.5 Transfer or sublicense the right to use the certification mark to any other entity.

### 12.4 Mark Withdrawal

The Certification Authority MAY require a Certified Entity to cease use of the certification mark immediately upon suspension or revocation. Failure to comply with a mark withdrawal notice constitutes a basis for legal action by the Certification Authority.

### 12.5 Verification Statement Requirement

Wherever the certification mark or a certification claim appears in written form, the Certified Entity SHOULD include a verification statement directing the reader to the public certification registry. A recommended format is:

> *"This system holds GAI-S [Level] certification issued by GodsIMiJ AI Solutions. Certification status may be verified at [registry URL] using reference number [Certificate Reference Number]."*

---

## 13. Document Control

### 13.1 Version History

| Version | Date | Change Summary | Author |
|---------|------|----------------|--------|
| 1.0 | 2026 | Initial issuance | GodsIMiJ AI Solutions |

### 13.2 Review Cycle

This document MUST be reviewed for accuracy and completeness at least once every twelve (12) months. Material changes to the certification governance model MUST be published as a new version with documented rationale. Version changes that alter substantive requirements MUST be communicated to all Certified Entities and MUST include a defined transition period of not less than ninety (90) calendar days.

### 13.3 Relationship to Other Documents

This document is part of the GAI-S normative documentation suite. It MUST be read in conjunction with:

- `GAIS-STD-001` — Domain Specifications (`standard/domain-specifications.md`)
- `GAIS-STD-002` — Certification Tier Specification (`standard/certification-tier-specification.md`)
- `GAIS-REF-001` — Minimum Enforceable Architecture (`standard/minimum-enforceable-architecture.md`)

In cases of conflict between this document and `GAIS-STD-002`, `GAIS-STD-002` governs on matters of technical control requirements. This document governs on matters of certification administration.

### 13.4 Enquiries

Enquiries regarding GAI-S certification governance should be directed to GodsIMiJ AI Solutions. Contact information is maintained at the Certification Authority's official publication channel.

---

*End of Document — GAIS-GOV-001 v1.0*

*© 2026 GodsIMiJ AI Solutions | James Derek Ingersoll. This document is published under the GAI-S framework. Reproduction for institutional review and audit purposes is permitted with attribution.*
