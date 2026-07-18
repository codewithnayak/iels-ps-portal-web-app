import React from "react";

export default function Evidence() {
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

  return (
    <div className="ps-card">
      <h3 className="mb-4">Evidence Locker</h3>

      <div className="mb-3">
        <button className="btn btn-primary">Upload New Evidence</button>
      </div>

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
    </div>
  );
}
