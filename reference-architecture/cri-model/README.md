# CRI Model Architecture

## Purpose

This package defines the reference risk scoring model and routing semantics for `GAIS-CTRL-RC-01` and `GAIS-CTRL-RC-02`.

## Model

Baseline formula:

`CRI = Probability × Severity`

Normalized range: `0.0` to `1.0`.

## Scoring Bands

| Band | Range | Routing Policy |
|---|---|---|
| Low | `0.00 - 0.24` | Autonomous allowed |
| Moderate | `0.25 - 0.49` | Autonomous with enhanced logging |
| High | `0.50 - 0.74` | Mandatory human review |
| Critical | `0.75 - 1.00` | Human review + incident precheck |

## Model Inputs

- Probability estimate
- Severity estimate
- Domain constraints and hard floors
- Optional policy multipliers (jurisdiction, user type, workflow class)

## Model Constraints

- Same inputs MUST produce same CRI output.
- Threshold table MUST be version-controlled.
- Changes in scoring semantics MUST trigger recertification review.

## Acceptance Criteria

- Deterministic CRI output for fixed test vectors.
- Complete routing coverage for all band boundaries.
- Versioned policy metadata attached to each CRI event.
