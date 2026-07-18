import React from "react";
import { useNavigate } from "react-router-dom";

export default function CaseRowActions({ caseId }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => navigate(`/cases/${caseId}`)}
      >
        Open
      </button>

      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => navigate(`/cases/${caseId}/add-note`)}
      >
        Add Note
      </button>

      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => navigate(`/evidence-locker?case=${caseId}`)}
      >
        Upload Evidence
      </button>

      <button
        className="btn btn-sm btn-outline-info"
        onClick={() => navigate(`/ai-chat/${caseId}`)}
      >
        AI
      </button>
    </div>
  );
}
