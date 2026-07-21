import React from "react";

export default function CaseDetailsActions({
  onAddNote,
  onUploadEvidence,
  onAI,
}) {
  return (
    <div className="d-flex gap-2 mb-4">
      <button className="btn btn-outline-dark" onClick={onAddNote}>
        Add Note
      </button>

      <button className="btn btn-outline-secondary" onClick={onUploadEvidence}>
        Upload Evidence
      </button>

      <button className="btn btn-outline-info" onClick={onAI}>
        AI Assistant
      </button>
    </div>
  );
}
