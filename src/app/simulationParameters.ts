// simulationParameters.ts

export type SimulationParameters = {
  vaccineEfficacy: number;
  vaccinationRate: number;
  R0: number;
  recoveryRate: number;
  isolationRate: number;
  days: number;
  populationSize: number;
  initialInfected: number; // Should be a proportion (e.g., 0.05 for 5%)
};

export const defaultParameters: SimulationParameters = {
  vaccineEfficacy: 0.9,
  vaccinationRate: 0.7,
  R0: 2.0,
  recoveryRate: 0.1,
  isolationRate: 0.5,
  days: 20,
  populationSize: 1000000, // Hard-coded Value
  initialInfected: 0.05, // Changed from 5 to 0.05 to represent 5%
};
