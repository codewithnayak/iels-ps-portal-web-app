import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function CrimeTrendChart() {
  const data = [
    { month: "Jan", theft: 22, assault: 8 },
    { month: "Feb", theft: 18, assault: 6 },
    { month: "Mar", theft: 25, assault: 10 },
    { month: "Apr", theft: 30, assault: 12 },
    { month: "May", theft: 28, assault: 9 },
    { month: "Jun", theft: 35, assault: 14 },
  ];

  return (
    <div className="ps-card mb-4">
      <h5 className="mb-3">Crime Trend (Last 6 Months)</h5>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="theft"
            stroke="#4a90e2"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="assault"
            stroke="#e74c3c"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
