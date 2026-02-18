# GAI-S Traceability Matrix

Control to architecture, code, evidence, and template mapping.

| Control ID | Architecture Reference | Code Reference | Evidence Reference | Template Reference |
|---|---|---|---|---|
| GAIS-CTRL-RC-01 | `reference-architecture/cri-model/README.md` | `engine/core/cri-scoring/index.ts` | `engine/audit/schema/audit-schema.sql` | `templates/risk-classification-matrix.md` |
| GAIS-CTRL-RC-02 | `reference-architecture/cri-model/cri-risk-engine.md` | `engine/core/escalation-router/index.ts` | `engine/audit/records/README.md` | `templates/risk-classification-matrix.md` |
| GAIS-CTRL-AS-01 | `reference-architecture/authority-separation/README.md` | `engine/core/confidence-override/index.ts` | `engine/audit/records/README.md` | `templates/authority-boundary-template.md` |
| GAIS-CTRL-AS-02 | `reference-architecture/authority-separation/human-in-loop-pattern.md` | `engine/adapters/nextjs/index.ts` | `engine/audit/schema/audit-schema.sql` | `templates/authority-boundary-template.md` |
| GAIS-CTRL-DG-01 | `reference-architecture/trust-boundaries/README.md` | `engine/adapters/fastapi/main.py` | `engine/audit/schema/audit-schema.sql` | `templates/compliance-binder-index.md` |
| GAIS-CTRL-DG-02 | `reference-architecture/trust-boundaries/README.md` | `engine/adapters/langchain/index.ts` | `engine/audit/schema/audit-schema.sql` | `templates/compliance-binder-index.md` |
| GAIS-CTRL-DC-01 | `reference-architecture/trust-boundaries/README.md` | `engine/adapters/fastapi/main.py` | `engine/audit/records/README.md` | `templates/documentation-readiness-checklist.md` |
| GAIS-CTRL-DC-02 | `reference-architecture/escalation-pathways/README.md` | `engine/core/escalation-router/index.ts` | `engine/audit/schema/audit-schema.sql` | `templates/documentation-readiness-checklist.md` |
| GAIS-CTRL-AL-01 | `reference-architecture/escalation-pathways/README.md` | `engine/audit/schema/audit-schema.sql` | `engine/audit/schema/audit-schema.sql` | `templates/compliance-binder-index.md` |
| GAIS-CTRL-AL-02 | `reference-architecture/drift-detection/README.md` | `engine/audit/schema/audit-schema.sql` | `engine/audit/records/README.md` | `templates/compliance-binder-index.md` |
| GAIS-CTRL-IR-01 | `reference-architecture/drift-detection/drift-monitoring-pattern.md` | `engine/core/drift-monitor/index.ts` | `engine/audit/schema/audit-schema.sql` | `templates/incident-response-template.md` |
| GAIS-CTRL-IR-02 | `reference-architecture/escalation-pathways/README.md` | `engine/core/escalation-router/index.ts` | `engine/audit/records/README.md` | `templates/incident-response-template.md` |
