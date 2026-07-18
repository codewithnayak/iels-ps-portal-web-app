import React from "react";

export default function AI() {
  // --- REALISTIC ML OUTPUTS (sample) ---
  const similarCases = [
    {
      id: "2023-112",
      similarity: 0.87,
      summary:
        "Mobile theft in market area. CCTV footage used to identify suspect.",
    },
    {
      id: "2022-089",
      similarity: 0.81,
      summary:
        "Pickpocketing incident near bus stand. Suspect caught via IMEI tracking.",
    },
    {
      id: "2021-044",
      similarity: 0.76,
      summary: "Chain snatching case. Witness testimony critical.",
    },
  ];

  const suggestedSteps = [
    {
      step: "Check nearby CCTV cameras",
      confidence: 0.92,
      reason:
        "Model detected high probability of suspect movement in CCTV‑covered zones.",
    },
    {
      step: "Track IMEI of stolen device",
      confidence: 0.88,
      reason:
        "IMEI tracking successful in 81% of similar cases in last 3 years.",
    },
    {
      step: "Interview shopkeepers near incident location",
      confidence: 0.74,
      reason:
        "Witness likelihood high due to crowd density at time of incident.",
    },
  ];

  const evidencePrediction = [
    {
      type: "CCTV Footage",
      probability: 0.91,
      reason: "High camera density in Rohini Market area.",
    },
    {
      type: "Witness Statement",
      probability: 0.78,
      reason: "Incident occurred during peak hours.",
    },
    {
      type: "Digital Trail (IMEI)",
      probability: 0.66,
      reason: "Device likely switched on within 48 hours.",
    },
  ];

  const riskScore = {
    score: "High",
    value: 0.82,
    explanation:
      "High risk due to repeat offender pattern, crowded location, and lack of immediate suspect identification.",
  };

  return (
    <div className="ps-card">
      <h3 className="mb-4">AI Assistance</h3>

      {/* Similar Cases */}
      <div className="mb-4">
        <h5>Similar Cases</h5>
        <div className="list-group">
          {similarCases.map((c) => (
            <div key={c.id} className="list-group-item">
              <div className="fw-bold">{c.id}</div>
              <div className="small text-muted">
                Similarity Score: {(c.similarity * 100).toFixed(1)}%
              </div>
              <div>{c.summary}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Next Steps */}
      <div className="mb-4">
        <h5>Suggested Next Steps</h5>
        <div className="list-group">
          {suggestedSteps.map((s, i) => (
            <div key={i} className="list-group-item">
              <div className="fw-bold">{s.step}</div>
              <div className="small text-muted">
                Confidence: {(s.confidence * 100).toFixed(1)}%
              </div>
              <div>{s.reason}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Prediction */}
      <div className="mb-4">
        <h5>Evidence Prediction</h5>
        <div className="list-group">
          {evidencePrediction.map((e, i) => (
            <div key={i} className="list-group-item">
              <div className="fw-bold">{e.type}</div>
              <div className="small text-muted">
                Probability: {(e.probability * 100).toFixed(1)}%
              </div>
              <div>{e.reason}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Score */}
      <div className="mb-4">
        <h5>Risk Score</h5>
        <span
          className={`badge ${
            riskScore.score === "High"
              ? "bg-danger"
              : riskScore.score === "Medium"
              ? "bg-warning text-dark"
              : "bg-success"
          }`}
          style={{ fontSize: "1rem" }}
        >
          {riskScore.score}
        </span>

        <div className="mt-2">
          <strong>Score Value:</strong> {(riskScore.value * 100).toFixed(1)}%
        </div>
        <div className="mt-1">{riskScore.explanation}</div>
      </div>
    </div>
  );
}
