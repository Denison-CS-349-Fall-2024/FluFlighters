// // app/simulation/page.tsx
// "use client";

// import { useEffect, useState, useRef, useContext } from "react";
// import SimulationInstance from "./components/SimulationInstance";
// import SimulationControlsPop from "./components/SimulationControlsPopover";
// import { v4 as uuidv4 } from "uuid";
// import { SimulationContext } from "../SimulationContext"; // Adjust the path if necessary
// import { SimulationParameters } from "../simulationParameters";

// type SimulationData = {
//   id: string;
//   parameters: SimulationParameters;
// };

// export default function Simulation() {
//   const { parameters } = useContext(SimulationContext);
//   const initialSimulationAdded = useRef(false);

//   // State management
//   const [simulations, setSimulations] = useState<SimulationData[]>([]);

//   // Initialize the first simulation
//   useEffect(() => {
//     if (!initialSimulationAdded.current) {
//       addSimulation(parameters);
//       initialSimulationAdded.current = true;
//     }
//   }, [parameters]);

//   // Function to add a new simulation
//   const addSimulation = (newParameters: SimulationParameters) => {
//     const newSimulation = {
//       id: uuidv4(),
//       parameters: newParameters,
//     };
//     setSimulations((prevSimulations) => [newSimulation, ...prevSimulations]);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "20px",
//         padding: "20px",
//         height: "100vh", // Set the container to 90% of viewport height
//         overflow: "auto", // Enable scrolling if content overflows
//       }}
//     >
//       {/* Popover Button Section */}
//       <div style={{ alignSelf: "center", marginTop: "20px" }}>
//         <SimulationControlsPop onStartSimulation={addSimulation} />
//       </div>

//       {/* Container for Simulation Instances */}
//       <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         {simulations.map((sim, index) => (
//           <SimulationInstance
//             key={sim.id}
//             parameters={sim.parameters}
//             index={simulations.length - index} // Assign unique index starting from 1
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useRef, useContext } from "react";
import SimulationInstance from "./components/SimulationInstance";
import SimulationControlsPop from "./components/SimulationControlsPopover";
import { v4 as uuidv4 } from "uuid";
import { SimulationContext } from "../SimulationContext"; // Adjust the path if necessary
import { SimulationParameters } from "../simulationParameters";

type SimulationData = {
  id: string;
  parameters: SimulationParameters;
};

export default function Simulation() {
  const { parameters } = useContext(SimulationContext);
  const initialSimulationAdded = useRef(false);

  // State management
  const [simulations, setSimulations] = useState<SimulationData[]>([]);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight); // Dynamically track container height

  // Update height dynamically on window resize
  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize the first simulation
  useEffect(() => {
    if (!initialSimulationAdded.current) {
      addSimulation(parameters);
      initialSimulationAdded.current = true;
    }
  }, [parameters]);

  // Function to add a new simulation
  const addSimulation = (newParameters: SimulationParameters) => {
    const newSimulation = {
      id: uuidv4(),
      parameters: newParameters,
    };
    setSimulations((prevSimulations) => [newSimulation, ...prevSimulations]);
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "20px",
    //     padding: "20px",
    //     height: `${containerHeight}px`, // Use dynamic height
    //     overflow: "auto", // Enable scrolling if content overflows
    //   }}
    // >
    //   {/* Popover Button Section */}
    //   <div style={{ alignSelf: "center", marginTop: "20px" }}>
    //     <SimulationControlsPop onStartSimulation={addSimulation} />
    //   </div>

    //   {/* Container for Simulation Instances */}
    //   <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
    //     {simulations.map((sim, index) => (
    //       <SimulationInstance
    //         key={sim.id}
    //         parameters={sim.parameters}
    //         index={simulations.length - index} // Assign unique index starting from 1
    //       />
    //     ))}
    //   </div>
    // </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        height: `${containerHeight}px`, // Dynamic height
        minHeight: "100vh", // Prevent shrinking below viewport height
        maxHeight: "100vh", // Prevent vertical overflow growth
        overflow: "auto", // Enable scrolling if needed
      }}
    >
      <div style={{ alignSelf: "center", marginTop: "20px" }}>
        <SimulationControlsPop onStartSimulation={addSimulation} />
      </div>

      <div
        style={{
          flexGrow: 1,
          flexShrink: 0, // Prevent shrinking
          overflowY: "auto", // Vertical scrolling
          width: "100%", // Stabilize width during resizing
        }}
      >
        {simulations.map((sim, index) => (
          <SimulationInstance
            key={sim.id}
            parameters={sim.parameters}
            index={simulations.length - index}
          />
        ))}
      </div>
    </div>
  );
}
