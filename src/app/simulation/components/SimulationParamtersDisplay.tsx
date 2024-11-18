import React from "react";
import { SimulationParameters } from "../../simulationParameters";

type SimulationParametersDisplayProps = {
  parameters: SimulationParameters;
};

export default function SimulationParametersDisplay({
  parameters,
}: SimulationParametersDisplayProps) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h4 style={{ margin: 0, color: "#333" }}>Parameters</h4>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {Object.entries(parameters).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}
