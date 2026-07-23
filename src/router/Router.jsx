import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.jsx";

import Dashboard from "../pages/Dashboard.jsx";
import FIR from "../pages/FIR.jsx";
import Cases from "../pages/Cases.jsx";
import CaseDetail from "../pages/CaseDetail.jsx";
import Evidence from "../pages/Evidence.jsx";
import CourtCalendar from "../pages/CourtCalendar.jsx";
import Notifications from "../pages/Notifications.jsx";
import AI from "../pages/AI.jsx";
import EvidenceLocker from "../pages/EvidenceLocker.jsx";
import AIChat from "../pages/AIChat.jsx";
import MIDashboard from "../pages/MIDashboard.jsx";

export default function Router() {
  return (
    <BrowserRouter basename="/station">
      <App>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fir" element={<FIR />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/court-calendar" element={<CourtCalendar />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/evidence-locker" element={<EvidenceLocker />} />
          <Route path="/ai-chat/:caseId" element={<AIChat />} />
          <Route path="/mi-dashboard" element={<MIDashboard />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
