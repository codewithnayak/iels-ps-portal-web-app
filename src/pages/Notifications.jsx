import React from "react";

export default function Notifications() {
  const notifications = [
    "Hearing tomorrow for Case 2024-001",
    "SLA breach: Investigation overdue",
    "Evidence integrity check required",
  ];

  return (
    <div className="ps-card">
      <h3 className="mb-4">Notifications</h3>

      <ul className="list-group">
        {notifications.map((n, i) => (
          <li key={i} className="list-group-item">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
