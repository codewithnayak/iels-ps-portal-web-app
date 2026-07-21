import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function CaseStatusChart() {
  const data = [
    { status: "Investigation", count: 18 },
    { status: "Chargesheet", count: 12 },
    { status: "Trial", count: 8 },
    { status: "Closed", count: 4 },
  ];

  return (
    <div className="ps-card mb-4">
      <h5 className="mb-3">Case Status Overview</h5>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4a90e2" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
