import CrimeTrendChart from "../components/mi/CrimeTrendChart.jsx";
import StationPerformanceChart from "../components/mi/StationPerformanceChart.jsx";
import SLAChart from "../components/mi/SLAChart.jsx";

export default function MIDashboard() {
  return (
    <div>
      <h3 className="mb-4">MI Dashboard</h3>

      <CrimeTrendChart />
      <StationPerformanceChart />
      <SLAChart />
    </div>
  );
}
