# Drift Monitoring Pattern

## Metrics

Recommended baseline metrics:

- PSI (population stability index) for feature drift
- Prediction entropy shift for behavior instability
- Error-rate delta (where labeled feedback exists)
- Policy-decision divergence rate

## Threshold Example

| Metric | Warning | Actionable |
|---|---|---|
| PSI | `> 0.10` | `> 0.25` |
| Entropy shift | `> 10%` | `> 20%` |
| Policy divergence | `> 2%` | `> 5%` |

## Operational Flow

1. Collect rolling window metrics.
2. Compare against baseline thresholds.
3. Classify drift severity.
4. Trigger response router actions.
5. Record evidence bundle.

## Remediation Workflow

- Assign owner and SLA by severity.
- Freeze affected autonomous paths when actionable threshold is crossed.
- Validate recovery using post-fix windows before restoring autonomy.

## Test Expectations

- Synthetic shifted dataset triggers expected severity levels.
- Restored distribution clears drift state after cooldown window.
- Drift incidents produce complete evidence trail.
