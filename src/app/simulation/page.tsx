// app/simulation/page.tsx

/*
Page.tsx (app/simulation)

simulation/Page.tsx is a file that stages the frontend simulation page that is displayed to
users. It takes several functions and operations made by other components of the simulation and
formats them to the frontend page. This file also brings additional functionality to adding new
simluation instances and popover button on the page.

*/

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Popover Button Section */}
      <div style={{ alignSelf: "center", marginTop: "20px" }}>
        <SimulationControlsPop onStartSimulation={addSimulation} />
      </div>
      {simulations.map((sim, index) => (
        <SimulationInstance
          key={sim.id}
          parameters={sim.parameters}
          index={simulations.length - index} // Assign unique index starting from 1
        />
      ))}
    </div>
  );
}
