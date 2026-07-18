import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CaseDetailsActions from "../components/CaseDetailsActions.jsx";
import AddNoteModal from "../components/AddNoteModal.jsx";

export default function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tab, setTab] = useState("overview");
  const [showAddNote, setShowAddNote] = useState(false);

  function handleSaveNote(note) {
    console.log("Note saved:", note);
    alert("Note saved (sample mode). Check console for payload.");
    setShowAddNote(false);
  }

  return (
    <div className="ps-card">
      <h3 className="mb-4">Case Detail: {id}</h3>

      {/* Action Buttons */}
      <CaseDetailsActions
        onAddNote={() => setShowAddNote(true)}
        onUploadEvidence={() => navigate(`/evidence-locker?case=${id}`)}
        onAI={() => navigate(`/ai-chat/${id}`)}
      />

      {/* Add Note Modal */}
      <AddNoteModal
        show={showAddNote}
        onClose={() => setShowAddNote(false)}
        onSave={handleSaveNote}
      />

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "overview" ? "active" : ""}`}
            onClick={() => setTab("overview")}
          >
            Overview
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tab === "investigation" ? "active" : ""}`}
            onClick={() => setTab("investigation")}
          >
            Investigation
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tab === "evidence" ? "active" : ""}`}
            onClick={() => setTab("evidence")}
          >
            Evidence
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tab === "court" ? "active" : ""}`}
            onClick={() => setTab("court")}
          >
            Court
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${tab === "ai" ? "active" : ""}`}
            onClick={() => setTab("ai")}
          >
            AI
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      {tab === "overview" && (
        <div>
          <h5>FIR Summary</h5>
          <p>Mobile theft reported at Rohini Market.</p>

          <h5>Parties Involved</h5>
          <p>Complainant: Rahul Sharma</p>

          <h5>Timeline</h5>
          <ul>
            <li>FIR Registered</li>
            <li>Investigation Started</li>
            <li>Chargesheet Pending</li>
          </ul>
        </div>
      )}

      {tab === "investigation" && (
        <div>
          <h5>Steps Completed</h5>
          <ul>
            <li>Scene visited</li>
            <li>Witness interviewed</li>
          </ul>

          <h5>Pending Tasks</h5>
          <ul>
            <li>Collect CCTV footage</li>
            <li>Track IMEI</li>
          </ul>
        </div>
      )}

      {tab === "evidence" && (
        <div>
          <h5>Evidence List</h5>
          <ul>
            <li>Photo: Market area</li>
            <li>Witness statement</li>
          </ul>
        </div>
      )}

      {tab === "court" && (
        <div>
          <h5>Hearings</h5>
          <ul>
            <li>Next hearing: 22 July 2026</li>
          </ul>
        </div>
      )}

      {tab === "ai" && (
        <div>
          <h5>AI Insights</h5>
          <p>
            Similar cases, suggested steps, evidence prediction, risk score.
          </p>

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate(`/ai-chat/${id}`)}
          >
            Open AI Chat Assistant
          </button>
        </div>
      )}
    </div>
  );
}
