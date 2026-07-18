import React, { useState } from "react";

export default function FIR() {
  const [form, setForm] = useState({
    complainantName: "Rahul Sharma",
    complainantPhone: "9876543210",
    address: "A-12, Sector 7, Rohini, Delhi",
    crimeType: "Theft",
    incidentDate: "2026-07-18",
    incidentTime: "14:30",
    location: "Rohini Market, Delhi",
    description:
      "Complainant reports that his mobile phone was stolen near the market area.",
    accusedName: "Unknown",
    accusedAge: "",
    evidenceFiles: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleFileUpload(e) {
    setForm({ ...form, evidenceFiles: [...e.target.files] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting FIR:", form);

    alert(
      "FIR submitted successfully (sample mode). Check console for payload."
    );
  }

  return (
    <div className="ps-card">
      <h3 className="mb-4">Register FIR</h3>

      <form onSubmit={handleSubmit}>
        {/* Complainant Details */}
        <div className="mb-4">
          <h5 className="mb-3">Complainant Details</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="complainantName"
                className="form-control"
                value={form.complainantName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="complainantPhone"
                className="form-control"
                value={form.complainantPhone}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={form.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Incident Details */}
        <div className="mb-4">
          <h5 className="mb-3">Incident Details</h5>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Crime Type</label>
              <select
                name="crimeType"
                className="form-select"
                value={form.crimeType}
                onChange={handleChange}
              >
                <option>Theft</option>
                <option>Assault</option>
                <option>Fraud</option>
                <option>Cyber Crime</option>
                <option>Missing Person</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Date</label>
              <input
                type="date"
                name="incidentDate"
                className="form-control"
                value={form.incidentDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Time</label>
              <input
                type="time"
                name="incidentTime"
                className="form-control"
                value={form.incidentTime}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="4"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Accused Details */}
        <div className="mb-4">
          <h5 className="mb-3">Accused Details (Optional)</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="accusedName"
                className="form-control"
                value={form.accusedName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="accusedAge"
                className="form-control"
                value={form.accusedAge}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Evidence Upload */}
        <div className="mb-4">
          <h5 className="mb-3">Evidence Collected (Optional)</h5>

          <input
            type="file"
            multiple
            className="form-control"
            onChange={handleFileUpload}
          />

          {form.evidenceFiles.length > 0 && (
            <small className="text-muted mt-2 d-block">
              {form.evidenceFiles.length} file(s) selected
            </small>
          )}
        </div>

        {/* Submit */}
        <button className="btn btn-primary px-4" type="submit">
          Submit FIR
        </button>
      </form>
    </div>
  );
}
