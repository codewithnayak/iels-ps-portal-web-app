import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function StationPerformanceChart() {
  const data = [
    { station: "PS Rohini", solved: 42 },
    { station: "PS Dwarka", solved: 38 },
    { station: "PS Janakpuri", solved: 33 },
    { station: "PS Patel Nagar", solved: 29 },
  ];

  return (
    <div className="ps-card mb-4">
      <h5 className="mb-3">Station Performance (Cases Solved)</h5>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="station" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="solved" fill="#4a90e2" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
