-- Placeholder audit log schema
CREATE TABLE IF NOT EXISTS audit_log (
  id BIGSERIAL PRIMARY KEY,
  event_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  actor_id TEXT NOT NULL,
  system_component TEXT NOT NULL,
  action TEXT NOT NULL,
  cri_score NUMERIC,
  confidence_score NUMERIC,
  escalation_triggered BOOLEAN NOT NULL DEFAULT FALSE,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);
