// app/SimulationContext.tsx
"use client";

import React, { createContext, useState, ReactNode } from "react";

type SimulationParameters = {
  vaccineEfficacy: number;
  vaccinationRate: number; // Rename for consistency
  R0: number;
  contagiousFactorForIso: number;
  contagiousFactorForUniso: number;
  isolationRate: number;
  recoveryRate: number;
  days: number;
  populationSize: number;
};

type SimulationContextType = {
  parameters: SimulationParameters;
  setParameters: (params: SimulationParameters) => void;
};

const defaultParameters: SimulationParameters = {
  vaccineEfficacy: 0.8,
  vaccinationRate: 0.7,
  R0: 2.0,
  contagiousFactorForIso: 0.1,
  contagiousFactorForUniso: 0.3,
  isolationRate: 0.5,
  recoveryRate: 0.1,
  days: 10,
  populationSize: 250,
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
