export default function KpiCard({ title, value, color }) {
  return (
    <div className="col-md-2">
      <div className="ps-card text-center">
        <h6 className="mb-2">{title}</h6>
        <h3 style={{ color }}>{value}</h3>
      </div>
    </div>
  );
}
