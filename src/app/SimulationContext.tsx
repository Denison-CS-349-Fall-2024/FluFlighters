// app/SimulationContext.tsx
"use client";

import React, { createContext, useState, ReactNode } from "react";

type SimulationParameters = {
  vaccineEfficacy: number;
  populationVaccinated: number;
  infectionProbability: number;
  vaccinatedRecoveryRate: number;
  unvaccinatedRecoveryRate: number;
  peakInfectionDay: number;
  totalDays: number;
  populationSize: number;
};

type SimulationContextType = {
  parameters: SimulationParameters;
  setParameters: (params: SimulationParameters) => void;
};

const defaultParameters: SimulationParameters = {
  vaccineEfficacy: 0.8,
  populationVaccinated: 0.7,
  infectionProbability: 0.5,
  vaccinatedRecoveryRate: 0.5,
  unvaccinatedRecoveryRate: 0.1,
  peakInfectionDay: 30,
  totalDays: 180,
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
