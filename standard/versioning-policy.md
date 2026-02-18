# GAI-S Versioning Policy

**Document ID:** GAIS-GOV-002  
**Version:** 1.0  
**Status:** Normative

## 1. Purpose

This policy defines versioning, compatibility, and release discipline for GAI-S normative standards and reference implementation artifacts.

## 2. Version Model

GAI-S uses Semantic Versioning (`MAJOR.MINOR.PATCH`) for both:
- Framework documents in `standard/`
- Reference implementation components in `engine/`

### 2.1 MAJOR

Increment when compatibility is broken, including:
- Control removal or redefinition that invalidates previous conformance claims.
- Certification tier criteria changes that require re-baselining evidence.

### 2.2 MINOR

Increment when backward-compatible capabilities are added, including:
- New controls that are optional for current certified entities.
- New guidance annexes that do not invalidate prior requirements.

### 2.3 PATCH

Increment for backward-compatible corrections, including:
- Wording clarifications, typo fixes, and non-normative improvements.
- Implementation bug fixes that do not change control semantics.

## 3. Compatibility Rules

- `standard/` MUST declare the active framework version in `README.md`.
- `engine/` MUST declare the framework version(s) it supports.
- Any release that changes control semantics MUST include a migration note.
- Certification decisions MUST reference the exact framework version used for review.

## 4. Release Artifacts

Each release MUST include:
- Updated `VERSION`
- Updated `CHANGELOG.md`
- If normative semantics changed, updated affected files in `standard/`
- If engine behavior changed, updated tests proving expected behavior

## 5. Deprecation

- Deprecated controls MUST remain documented for at least one MINOR release.
- Deprecations MUST include replacement guidance and an effective sunset version.
- Certification evaluations MUST NOT use sunset controls after the sunset version date.

## 6. Governance

- Normative version changes to `standard/` MUST be reviewed by governance maintainers.
- Emergency PATCH releases MAY be issued for critical correction of normative defects, with rationale logged in `DEVLOG.md`.
