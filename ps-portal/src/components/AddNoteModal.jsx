import React, { useState } from "react";

export default function AddNoteModal({ show, onClose, onSave }) {
  const [note, setNote] = useState("");

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Note</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <label className="form-label">Note</label>
            <textarea
              className="form-control"
              rows="4"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your investigation note here..."
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onSave(note);
                setNote("");
              }}
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
