// import React from "react";
// import { SimulationParameters } from "../../simulationParameters";

// type SimulationParametersDisplayProps = {
//   parameters: SimulationParameters;
// };

// export default function SimulationParametersDisplay({
//   parameters,
// }: SimulationParametersDisplayProps) {
//   return (
//     <div
//       style={{
//         padding: "16px",
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//       }}
//     >
//       <h4 style={{ margin: 0, color: "#333" }}>Parameters</h4>
//       <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
//         {Object.entries(parameters).map(([key, value]) => (
//           <li key={key}>
//             <strong>{key}:</strong> {String(value)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

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
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f9fafc",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h4
        style={{
          margin: 0,
          color: "#444",
          fontSize: "18px",
          borderBottom: "2px solid #ddd",
          paddingBottom: "8px",
        }}
      >
        Simulation Parameters
      </h4>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {Object.entries(parameters).map(([key, value]) => (
          <li
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 12px",
              backgroundColor: "#fff",
              border: "1px solid #e1e4e8",
              borderRadius: "8px",
              color: "#555",
            }}
          >
            <span style={{ fontWeight: 500 }}>{key}</span>
            <span style={{ fontWeight: 400 }}>{String(value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
