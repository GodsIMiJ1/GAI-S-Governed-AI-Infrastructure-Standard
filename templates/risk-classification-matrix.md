# Risk Classification Matrix

Use this template to define CRI-driven routing policy.

## 1. Inputs and Weighting

- Probability source:
- Severity source:
- Formula version:
- Domain multipliers (if any):

## 2. CRI Band Policy

| CRI Range | Band | Default Route | Human Review Required | Incident Precheck |
|---|---|---|---|---|
| 0.00-0.24 | Low | Autonomous | No | No |
| 0.25-0.49 | Moderate | Autonomous + logging | No | No |
| 0.50-0.74 | High | Escalate E1/E2 | Yes | No |
| 0.75-1.00 | Critical | Escalate E3 | Yes | Yes |

## 3. Overrides and Exceptions

- Minimum confidence for autonomy:
- Drift severity that blocks autonomy:
- Mandatory review categories:
- Emergency bypass policy reference:

## 4. Validation Cases

| Test Case | Input | Expected Band | Expected Route |
|---|---|---|---|
| Boundary 0.24 |  | Low | Autonomous |
| Boundary 0.25 |  | Moderate | Autonomous + logging |
| Boundary 0.50 |  | High | Escalate |
| Boundary 0.75 |  | Critical | Escalate + incident precheck |

## 5. Approval Metadata

- Matrix owner:
- Approved by:
- Effective date:
- Version:
