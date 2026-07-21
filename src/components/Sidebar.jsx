import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-12 col-md-3 col-lg-2 ps-sidebar">
      <nav className="nav flex-column px-3">
        <NavLink className="nav-link" to="/">
          Dashboard
        </NavLink>
        <NavLink className="nav-link" to="/fir">
          FIR
        </NavLink>
        <NavLink className="nav-link" to="/cases">
          Cases
        </NavLink>
        <NavLink className="nav-link" to="/evidence">
          Evidence
        </NavLink>
        <NavLink className="nav-link" to="/court-calendar">
          Court Calendar
        </NavLink>
        <NavLink className="nav-link" to="/notifications">
          Notifications
        </NavLink>
        <NavLink className="nav-link" to="/ai">
          AI
        </NavLink>
        <NavLink className="nav-link" to="/evidence-locker">
          Evidence Locker
        </NavLink>
        <NavLink className="nav-link" to="/mi-dashboard">
          MI Dashboard
        </NavLink>
      </nav>
    </div>
  );
}
