import React, { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello Inspector. I’m your investigation assistant. Ask me anything about this case.",
    },
  ]);

  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const aiMessage = generateAIResponse(input);

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  }

  function generateAIResponse(query) {
    query = query.toLowerCase();

    // --- ML-style responses ---
    if (query.includes("suspect") || query.includes("who")) {
      return {
        sender: "ai",
        text: "Based on similar cases, the suspect is likely a repeat offender operating within a 2–3 km radius. Probability of identification via CCTV is 91%.",
      };
    }

    if (query.includes("next step") || query.includes("what should i do")) {
      return {
        sender: "ai",
        text: "Recommended next steps:\n1. Collect CCTV footage from Rohini Market (high probability of suspect capture).\n2. Initiate IMEI tracking (successful in 81% of similar cases).\n3. Interview shopkeepers near the incident location.",
      };
    }

    if (query.includes("risk") || query.includes("danger")) {
      return {
        sender: "ai",
        text: "Risk Score: HIGH (82%). Explanation: crowded location, repeat offender pattern, and lack of immediate suspect identification.",
      };
    }

    if (query.includes("evidence")) {
      return {
        sender: "ai",
        text: "Predicted evidence sources:\n• CCTV Footage (91%)\n• Witness Statement (78%)\n• Digital Trail via IMEI (66%)",
      };
    }

    if (query.includes("similar")) {
      return {
        sender: "ai",
        text: "Closest matches:\n• Case 2023-112: Market theft, suspect identified via CCTV.\n• Case 2022-089: Pickpocketing, IMEI tracking successful.\n• Case 2021-044: Chain snatching, witness testimony critical.",
      };
    }

    // Default ML-style fallback
    return {
      sender: "ai",
      text: "I’ve analysed your query. This case aligns with market-area theft patterns. CCTV and IMEI tracking remain the strongest investigative leads.",
    };
  }

  return (
    <div
      className="ps-card"
      style={{ height: "80vh", display: "flex", flexDirection: "column" }}
    >
      <h3 className="mb-3">AI Chat Assistant</h3>

      {/* Chat Window */}
      <div
        className="flex-grow-1 mb-3 p-3 rounded"
        style={{ background: "#f0f4f8", overflowY: "auto" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 p-2 rounded ${
              msg.sender === "ai" ? "bg-primary text-white" : "bg-white border"
            }`}
            style={{ maxWidth: "75%" }}
          >
            <strong>{msg.sender === "ai" ? "AI Assistant" : "You"}</strong>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="d-flex">
        <input
          className="form-control me-2"
          placeholder="Ask about suspect, evidence, risk, next steps..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
