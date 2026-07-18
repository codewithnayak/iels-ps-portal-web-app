import React, { useState } from "react";

export default function EvidenceUpload() {
  const [files, setFiles] = useState([]);

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

  function handleSubmit(e) {
    e.preventDefault();

    const payload = files.map((f) => ({
      name: f.file.name,
      size: f.file.size,
      type: f.file.type,
    }));

    console.log("Evidence submitted:", payload);
    alert("Evidence submitted (sample mode). Check console for payload.");
  }

  return (
    <div className="ps-card">
      <h3 className="mb-4">Upload Evidence</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Select Evidence Files</label>
          <input
            type="file"
            multiple
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        {/* Preview Section */}
        {files.length > 0 && (
          <div className="mb-4">
            <h5 className="mb-3">Preview</h5>

            <div className="row g-3">
              {files.map((f, index) => (
                <div className="col-md-3" key={index}>
                  <div
                    className="p-3 rounded border text-center"
                    style={{ background: "#f0f4f8" }}
                  >
                    {/* Image Preview */}
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
                      type="button"
                      className="btn btn-sm btn-outline-danger mt-2"
                      onClick={() => removeFile(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="btn btn-primary px-4" type="submit">
          Submit Evidence
        </button>
      </form>
    </div>
  );
}
