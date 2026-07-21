import KpiCard from "../components/KpiCard.jsx";
import CaseStatusChart from "../components/CaseStatusChart.jsx";
import OfficerWorkload from "../components/OfficerWorkload.jsx";

export default function Dashboard() {
  return (
    <>
      {/* KPI Row */}
      <div className="row g-3 mb-4">
        <KpiCard title="Active Cases" value="42" color="var(--els-primary)" />
        <KpiCard title="New FIRs Today" value="5" color="var(--els-primary)" />
        <KpiCard title="Hearings" value="3" color="var(--els-primary)" />
        <KpiCard title="High-Risk Cases" value="7" color="var(--els-danger)" />
        <KpiCard title="SLA Breaches" value="2" color="var(--els-accent)" />
      </div>

      {/* Charts */}
      <CaseStatusChart />
      <OfficerWorkload />

      {/* High-Risk Cases Table */}
      <div className="ps-card">
        <h5 className="mb-3">High-Risk Cases</h5>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Officer</th>
              <th>Status</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-001</td>
              <td>IO Verma</td>
              <td>Investigation</td>
              <td>
                <span className="badge bg-danger">High</span>
              </td>
            </tr>
            <tr>
              <td>2024-002</td>
              <td>IO Rao</td>
              <td>Trial</td>
              <td>
                <span className="badge bg-warning text-dark">Medium</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
