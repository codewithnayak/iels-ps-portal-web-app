import React from "react";
import CaseRowActions from "../components/CaseRowActions.jsx";

export default function Cases() {
  const sampleCases = [
    {
      id: "2024-001",
      fir: "FIR-123",
      complainant: "R Sharma",
      officer: "IO Verma",
      status: "Investigation",
      risk: "High",
    },
    {
      id: "2024-002",
      fir: "FIR-124",
      complainant: "A Khan",
      officer: "IO Rao",
      status: "Trial",
      risk: "Medium",
    },
  ];

  return (
    <div className="ps-card">
      <h3 className="mb-4">Case List</h3>

      {/* Filters */}
      <div className="row g-3 mb-3">
        <div className="col-md-2">
          <select className="form-select">
            <option>Crime Type</option>
            <option>Theft</option>
            <option>Assault</option>
            <option>Cyber Crime</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Status</option>
            <option>Investigation</option>
            <option>Trial</option>
            <option>Closed</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Officer</option>
            <option>IO Verma</option>
            <option>IO Rao</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Risk</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="table table-borderless align-middle">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>FIR No</th>
            <th>Complainant</th>
            <th>Officer</th>
            <th>Status</th>
            <th>Risk</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {sampleCases.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.fir}</td>
              <td>{c.complainant}</td>
              <td>{c.officer}</td>
              <td>{c.status}</td>

              <td>
                <span
                  className={`badge ${
                    c.risk === "High"
                      ? "bg-danger"
                      : c.risk === "Medium"
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                >
                  {c.risk}
                </span>
              </td>

              <td>
                <CaseRowActions caseId={c.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
