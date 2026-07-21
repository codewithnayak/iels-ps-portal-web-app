import React, { useState } from "react";

export default function CourtCalendar() {
  const [month, setMonth] = useState(6); // July (0-indexed)
  const [year, setYear] = useState(2026);

  const events = [
    {
      date: "2026-07-22",
      case: "2024-001",
      court: "Rohini Court",
      time: "10:00 AM",
    },
    {
      date: "2026-07-23",
      case: "2024-002",
      court: "Patiala House",
      time: "2:00 PM",
    },
    {
      date: "2026-07-28",
      case: "2024-003",
      court: "Dwarka Court",
      time: "11:30 AM",
    },
  ];

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  function getEventsForDay(day) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return events.filter((e) => e.date === dateStr);
  }

  return (
    <div className="ps-card">
      <h3 className="mb-4">Court Calendar – July 2026</h3>

      {/* Calendar Grid */}
      <div className="row text-center fw-bold mb-2">
        <div className="col">Sun</div>
        <div className="col">Mon</div>
        <div className="col">Tue</div>
        <div className="col">Wed</div>
        <div className="col">Thu</div>
        <div className="col">Fri</div>
        <div className="col">Sat</div>
      </div>

      <div className="row g-2">
        {calendarCells.map((day, index) => {
          const dayEvents = day ? getEventsForDay(day) : [];

          return (
            <div className="col-12 col-sm-6 col-md-3 col-lg-1" key={index}>
              <div
                className="p-2 rounded border"
                style={{ background: "#f0f4f8", minHeight: "100px" }}
              >
                <div className="fw-bold mb-1">{day || ""}</div>

                {dayEvents.map((ev, i) => (
                  <div
                    key={i}
                    className="small p-1 rounded mb-1"
                    style={{ background: "#4a90e2", color: "#fff" }}
                  >
                    <div>{ev.case}</div>
                    <div>{ev.time}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
