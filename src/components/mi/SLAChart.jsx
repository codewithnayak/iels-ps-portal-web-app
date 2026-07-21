import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function SLAChart() {
  const data = [
    { name: "Within SLA", value: 78 },
    { name: "Breached", value: 22 },
  ];

  const COLORS = ["#27ae60", "#e74c3c"];

  return (
    <div className="ps-card mb-4">
      <h5 className="mb-3">SLA Compliance</h5>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="text-center mt-3">
        <span className="badge bg-success me-2">78% Within SLA</span>
        <span className="badge bg-danger">22% Breached</span>
      </div>
    </div>
  );
}
