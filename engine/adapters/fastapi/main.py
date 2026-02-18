"""FastAPI adapter helpers for GAI-S governance guardrails."""

from typing import Any


def _assert_range(name: str, value: float) -> None:
    if not isinstance(value, (float, int)) or value < 0 or value > 1:
        raise ValueError(f"{name} must be a number between 0 and 1")


def apply_gais_guardrail(
    payload: dict[str, Any],
    *,
    cri_score: float,
    confidence: float,
    threshold: float = 0.5,
    min_confidence: float = 0.8,
) -> dict[str, Any]:
    """Return payload with guardrail metadata and routing decision."""
    _assert_range("cri_score", cri_score)
    _assert_range("confidence", confidence)
    _assert_range("threshold", threshold)
    _assert_range("min_confidence", min_confidence)

    reasons: list[str] = []
    if cri_score >= threshold:
        reasons.append("high_cri")
    if confidence < min_confidence:
        reasons.append("low_confidence")

    guardrail = {
        "allowed": len(reasons) == 0,
        "escalation_required": len(reasons) > 0,
        "reasons": reasons,
    }
    return {**payload, "_gais_guardrail": guardrail}
