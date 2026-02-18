# Drift Detection Architecture

## Purpose

This package defines drift monitoring for governance safety, especially routing confidence and behavior stability.

## Drift Types

- Feature Drift: input distribution changes over time.
- Concept Drift: model behavior/outcomes shift versus expectations.
- Policy Drift: runtime behavior diverges from declared governance policy.

## Monitoring Pipeline

| Stage | Responsibility |
|---|---|
| Baseline Builder | Defines reference distributions and guardrails |
| Window Aggregator | Computes rolling statistics |
| Drift Analyzer | Scores deviation and classifies severity |
| Response Router | Triggers alerts, review gates, or incidents |
| Audit Writer | Persists drift evidence |

## Response Policy

- Minor drift: monitor + increase logging.
- Moderate drift: lower autonomy threshold.
- Severe drift: mandatory human review until resolved.
- Critical drift: block autonomous execution and open incident.

## Acceptance Criteria

- Drift state transitions are reproducible for fixed windows.
- Severe/critical drift blocks autonomous path.
- Every drift-triggered action is audit-linked to metrics snapshot.
