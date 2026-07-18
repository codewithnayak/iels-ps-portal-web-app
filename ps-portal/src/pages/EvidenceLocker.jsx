import React, { useState } from "react";

export default function EvidenceLocker() {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);

  const evidence = [
    {
      id: "EV123",
      type: "Photo",
      uploadedBy: "IO Verma",
      integrity: "Good",
      coc: "IO Verma → Locker",
    },
    {
      id: "EV124",
      type: "Statement",
      uploadedBy: "IO Rao",
      integrity: "Verified",
      coc: "IO Rao → Locker",
    },
  ];

  function handleFileChange(e) {
    const selected = Array.from(e.target.files).map((file) => ({
      file,
      preview: file.type.startsWith("image") ? URL.createObjectURL(file) : null,
    }));
    setFiles(selected);
  }

  function removeFile(index) {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  }

  function submitEvidence() {
    const payload = files.map((f) => ({
      name: f.file.name,
      size: f.file.size,
      type: f.file.type,
    }));

    console.log("Evidence submitted:", payload);
    alert("Evidence submitted (sample mode). Check console for payload.");

    setFiles([]);
    setShowModal(false);
  }

  return (
    <div className="ps-card">
      <h3 className="mb-4">Evidence Locker</h3>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Upload New Evidence
      </button>

      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Evidence ID</th>
            <th>Type</th>
            <th>Uploaded By</th>
            <th>Chain of Custody</th>
            <th>Integrity</th>
          </tr>
        </thead>
        <tbody>
          {evidence.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.type}</td>
              <td>{e.uploadedBy}</td>
              <td>{e.coc}</td>
              <td>
                <span className="badge bg-success">{e.integrity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Upload Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Upload Evidence</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <label className="form-label">Select Files</label>
                <input
                  type="file"
                  multiple
                  className="form-control mb-3"
                  onChange={handleFileChange}
                />

                {files.length > 0 && (
                  <div className="row g-3">
                    {files.map((f, index) => (
                      <div className="col-md-3" key={index}>
                        <div
                          className="p-3 rounded border text-center"
                          style={{ background: "#f0f4f8" }}
                        >
                          {f.preview ? (
                            <img
                              src={f.preview}
                              alt="preview"
                              className="img-fluid rounded mb-2"
                              style={{ maxHeight: "120px", objectFit: "cover" }}
                            />
                          ) : (
                            <div className="mb-2">
                              <span className="badge bg-secondary">
                                {f.file.type}
                              </span>
                            </div>
                          )}

                          <div className="small fw-bold">{f.file.name}</div>
                          <div className="small text-muted">
                            {(f.file.size / 1024).toFixed(1)} KB
                          </div>

                          <button
                            className="btn btn-sm btn-outline-danger mt-2"
                            onClick={() => removeFile(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={submitEvidence}
                  disabled={files.length === 0}
                >
                  Submit Evidence
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
