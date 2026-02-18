-- GAI-S audit schema (reference)
-- Scope: immutable governance event capture, evidence linkage, incident traceability.

CREATE TABLE IF NOT EXISTS audit_event (
  event_id BIGSERIAL PRIMARY KEY,
  event_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  event_type TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  system_component TEXT NOT NULL,
  action TEXT NOT NULL,
  outcome TEXT NOT NULL,
  cri_score NUMERIC(6,5),
  confidence_score NUMERIC(6,5),
  escalation_tier TEXT,
  decision_id TEXT,
  incident_id TEXT,
  request_id TEXT,
  trace_id TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  previous_event_hash TEXT,
  event_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_cri_score_range CHECK (cri_score IS NULL OR (cri_score >= 0 AND cri_score <= 1)),
  CONSTRAINT chk_conf_score_range CHECK (confidence_score IS NULL OR (confidence_score >= 0 AND confidence_score <= 1))
);

CREATE INDEX IF NOT EXISTS idx_audit_event_time ON audit_event (event_time DESC);
CREATE INDEX IF NOT EXISTS idx_audit_event_type ON audit_event (event_type);
CREATE INDEX IF NOT EXISTS idx_audit_actor ON audit_event (actor_id, actor_role);
CREATE INDEX IF NOT EXISTS idx_audit_trace ON audit_event (trace_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_audit_event_hash ON audit_event (event_hash);

CREATE TABLE IF NOT EXISTS evidence_bundle (
  bundle_id BIGSERIAL PRIMARY KEY,
  evidence_ref TEXT NOT NULL UNIQUE,
  evidence_type TEXT NOT NULL,
  storage_uri TEXT NOT NULL,
  checksum_sha256 TEXT NOT NULL,
  source_event_id BIGINT REFERENCES audit_event(event_id) ON DELETE SET NULL,
  retained_until TIMESTAMPTZ NOT NULL,
  legal_hold BOOLEAN NOT NULL DEFAULT FALSE,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_evidence_retention ON evidence_bundle (retained_until);
CREATE INDEX IF NOT EXISTS idx_evidence_type ON evidence_bundle (evidence_type);

CREATE TABLE IF NOT EXISTS governance_incident (
  incident_id TEXT PRIMARY KEY,
  opened_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  closed_at TIMESTAMPTZ,
  severity TEXT NOT NULL,
  status TEXT NOT NULL,
  owner_actor_id TEXT NOT NULL,
  summary TEXT NOT NULL,
  root_cause TEXT,
  capa_plan JSONB NOT NULL DEFAULT '[]'::jsonb,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_incident_status ON governance_incident (status);
CREATE INDEX IF NOT EXISTS idx_incident_severity ON governance_incident (severity);

-- Optional monthly partitioning helper.
-- Example:
-- CREATE TABLE audit_event_2026_02 PARTITION OF audit_event
-- FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');
