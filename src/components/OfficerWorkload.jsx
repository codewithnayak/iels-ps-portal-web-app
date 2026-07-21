import React from "react";

export default function OfficerWorkload() {
  const officers = [
    { name: "IO Verma", cases: 12 },
    { name: "IO Rao", cases: 9 },
    { name: "SI Mehta", cases: 7 },
    { name: "ASI Khan", cases: 5 },
  ];

  return (
    <div className="ps-card mb-4">
      <h5 className="mb-3">Officer Workload</h5>

      <div className="row g-3">
        {officers.map((o) => (
          <div className="col-md-3" key={o.name}>
            <div
              className="p-3 text-center rounded"
              style={{
                background: "#f0f4f8",
                border: "1px solid #e0e6eb",
              }}
            >
              <h6 className="mb-1">{o.name}</h6>
              <div
                className="fw-bold"
                style={{
                  fontSize: "1.5rem",
                  color:
                    o.cases >= 10
                      ? "var(--els-danger)"
                      : o.cases >= 7
                      ? "var(--els-accent)"
                      : "var(--els-primary)",
                }}
              >
                {o.cases}
              </div>
              <small className="text-muted">Active Cases</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
