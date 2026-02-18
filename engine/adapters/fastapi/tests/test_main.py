from main import apply_gais_guardrail


def test_apply_gais_guardrail_returns_payload() -> None:
    payload = {"status": "ok", "score": 0.4}
    assert apply_gais_guardrail(payload) == payload
