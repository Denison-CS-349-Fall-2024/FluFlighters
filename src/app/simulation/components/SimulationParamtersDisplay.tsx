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

//------

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
//         padding: "20px",
//         borderRadius: "12px",
//         backgroundColor: "#f9fafc",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         width: "100%",
//         maxWidth: "400px",
//         margin: "auto",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <h4
//         style={{
//           margin: 0,
//           color: "#444",
//           fontSize: "18px",
//           borderBottom: "2px solid #ddd",
//           paddingBottom: "8px",
//         }}
//       >
//         Simulation Parameters
//       </h4>
//       <ul
//         style={{
//           listStyleType: "none",
//           margin: 0,
//           padding: 0,
//           display: "flex",
//           flexDirection: "column",
//           gap: "8px",
//         }}
//       >
//         {Object.entries(parameters).map(([key, value]) => (
//           <li
//             key={key}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "8px 12px",
//               backgroundColor: "#fff",
//               border: "1px solid #e1e4e8",
//               borderRadius: "8px",
//               color: "#555",
//             }}
//           >
//             <span style={{ fontWeight: 500 }}>{key}</span>
//             <span style={{ fontWeight: 400 }}>{String(value)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//---------------

// import React from "react";
// import { SimulationParameters } from "../../simulationParameters";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
// import { Info } from "lucide-react";

// const tooltips = {
//   vaccineEfficacy:
//     "Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.",
//   vaccinationRate:
//     "Proportion of the population that is vaccinated, which affects susceptibility.",
//   initialInfected:
//     "Initial count of infected individuals at the start. Sets the starting point of the infection curve.",
//   R0: "Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.",
//   isolationRate:
//     "Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.",
//   recoveryRate:
//     "Rate at which infected individuals recover each day (proportion per day).",
//   days: "Duration of the simulation in days",
//   contactRange:
//     "The range within which an infected person can spread the disease.",
// };

// type SimulationParametersDisplayProps = {
//   parameters: SimulationParameters;
// };

// export default function SimulationParametersDisplay({
//   parameters,
// }: SimulationParametersDisplayProps) {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         borderRadius: "12px",
//         backgroundColor: "#f9fafc",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         width: "100%",
//         maxWidth: "400px",
//         margin: "auto",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <h4
//         style={{
//           margin: 0,
//           color: "#444",
//           fontSize: "18px",
//           borderBottom: "2px solid #ddd",
//           paddingBottom: "8px",
//         }}
//       >
//         Simulation Parameters
//       </h4>
//       <ul
//         style={{
//           listStyleType: "none",
//           margin: 0,
//           padding: 0,
//           display: "flex",
//           flexDirection: "column",
//           gap: "8px",
//         }}
//       >
//         {Object.entries(parameters).map(([key, value]) => (
//           <li
//             key={key}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "8px 12px",
//               backgroundColor: "#fff",
//               border: "1px solid #e1e4e8",
//               borderRadius: "8px",
//               color: "#555",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//               <span style={{ fontWeight: 500 }}>{key}</span>
//               {tooltips[key as keyof typeof tooltips] && (
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Info
//                       style={{ marginLeft: "8px", cursor: "pointer" }}
//                       size={16}
//                     />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     {tooltips[key as keyof typeof tooltips]}
//                   </TooltipContent>
//                 </Tooltip>
//               )}
//             </div>
//             <span style={{ fontWeight: 400 }}>{String(value)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//--------

// import React from "react";
// import { SimulationParameters } from "../../simulationParameters";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
// import { Info } from "lucide-react";

// const tooltips = {
//   vaccineEfficacy:
//     "Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.",
//   vaccinationRate:
//     "Proportion of the population that is vaccinated, which affects susceptibility.",
//   initialInfected:
//     "Initial count of infected individuals at the start. Sets the starting point of the infection curve.",
//   R0: "Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.",
//   isolationRate:
//     "Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.",
//   recoveryRate:
//     "Rate at which infected individuals recover each day (proportion per day).",
//   days: "Duration of the simulation in days",
//   contactRange:
//     "The range within which an infected person can spread the disease.",
// };

// type SimulationParametersDisplayProps = {
//   parameters: SimulationParameters;
// };

// export default function SimulationParametersDisplay({
//   parameters,
// }: SimulationParametersDisplayProps) {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         borderRadius: "12px",
//         backgroundColor: "#f9fafc",
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: "column",
//         gap: "12px",
//         width: "100%",
//         maxWidth: "400px",
//         margin: "auto",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <h4
//         style={{
//           margin: 0,
//           color: "#444",
//           fontSize: "18px",
//           borderBottom: "2px solid #ddd",
//           paddingBottom: "8px",
//         }}
//       >
//         Simulation Parameters
//       </h4>
//       <ul
//         style={{
//           listStyleType: "none",
//           margin: 0,
//           padding: 0,
//           display: "flex",
//           flexDirection: "column",
//           gap: "8px",
//         }}
//       >
//         {Object.entries(parameters).map(([key, value]) => (
//           <li
//             key={key}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               padding: "8px 12px",
//               backgroundColor: "#fff",
//               border: "1px solid #e1e4e8",
//               borderRadius: "8px",
//               color: "#555",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <span style={{ flex: 1, fontWeight: 500 }}>{key}</span>
//               {tooltips[key as keyof typeof tooltips] && (
//                 <div
//                   style={{
//                     flex: "0 0 auto",
//                     marginLeft: "auto",
//                     marginRight: "auto",
//                   }}
//                 >
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Info
//                         style={{
//                           cursor: "pointer",
//                         }}
//                         size={16}
//                       />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       {tooltips[key as keyof typeof tooltips]}
//                     </TooltipContent>
//                   </Tooltip>
//                 </div>
//               )}
//               <span
//                 style={{
//                   flex: 1,
//                   textAlign: "right",
//                   fontWeight: 400,
//                 }}
//               >
//                 {String(value)}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//---------------------------------------------------

import React from "react";
import { SimulationParameters } from "../../simulationParameters";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const tooltips = {
  vaccineEfficacy:
    "Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.",
  vaccinationRate:
    "Proportion of the population that is vaccinated, which affects susceptibility.",
  initialInfected:
    "Initial count of infected individuals at the start. Sets the starting point of the infection curve.",
  R0: "Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.",
  isolationRate:
    "Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.",
  recoveryRate:
    "Rate at which infected individuals recover each day (proportion per day).",
  days: "Duration of the simulation in days",
  contactRange:
    "The range within which an infected person can spread the disease.",
};

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
              alignItems: "center",
              padding: "8px 12px",
              backgroundColor: "#fff",
              border: "1px solid #e1e4e8",
              borderRadius: "8px",
              color: "#555",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span
                style={{
                  flex: "0 0 auto",
                  fontWeight: 500,
                  marginRight: "3px", // Add 3px space between parameter name and icon
                }}
              >
                {key}
              </span>
              {tooltips[key as keyof typeof tooltips] && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{
                        cursor: "pointer",
                      }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    {tooltips[key as keyof typeof tooltips]}
                  </TooltipContent>
                </Tooltip>
              )}
              <span
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontWeight: 400,
                }}
              >
                {String(value)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
