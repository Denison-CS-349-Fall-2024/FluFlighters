// app/SimulationContext.tsx

/*
SimulationContext.tsx

SimulationContext designs the menu that adds new simulation instances onto the page, along with
the baseline parameters needed to control the new simulation.

*/

"use client";

import React, { createContext, useState, ReactNode } from "react";
import { SimulationParameters, defaultParameters } from "./simulationParameters";

type SimulationContextType = {
  parameters: SimulationParameters;
  setParameters: React.Dispatch<React.SetStateAction<SimulationParameters>>;
};

export const SimulationContext = createContext<SimulationContextType>({
  parameters: defaultParameters,
  setParameters: () => {},
});

export const SimulationProvider = ({ children }: { children: ReactNode }) => {
  const [parameters, setParameters] = useState<SimulationParameters>(defaultParameters);

  return (
    <SimulationContext.Provider value={{ parameters, setParameters }}>
      {children}
    </SimulationContext.Provider>
  );
};
