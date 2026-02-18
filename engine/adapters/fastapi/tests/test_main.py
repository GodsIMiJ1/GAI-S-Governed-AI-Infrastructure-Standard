import pytest

from main import apply_gais_guardrail


def test_apply_gais_guardrail_returns_payload() -> None:
    payload = {"status": "ok", "score": 0.4}
    result = apply_gais_guardrail(payload, cri_score=0.1, confidence=0.95)
    assert result["status"] == "ok"
    assert result["_gais_guardrail"]["allowed"] is True
    assert result["_gais_guardrail"]["escalation_required"] is False


def test_apply_gais_guardrail_flags_escalation() -> None:
    payload = {"status": "review"}
    result = apply_gais_guardrail(payload, cri_score=0.8, confidence=0.7)
    assert result["_gais_guardrail"]["allowed"] is False
    assert result["_gais_guardrail"]["escalation_required"] is True
    assert "high_cri" in result["_gais_guardrail"]["reasons"]
    assert "low_confidence" in result["_gais_guardrail"]["reasons"]


def test_apply_gais_guardrail_rejects_invalid_inputs() -> None:
    with pytest.raises(ValueError):
        apply_gais_guardrail({}, cri_score=1.5, confidence=0.9)
