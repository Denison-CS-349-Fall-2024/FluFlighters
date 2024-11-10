// simulationParameters.ts

export type SimulationParameters = {
  vaccineEfficacy: number;
  vaccinationRate: number;
  R0: number;
  recoveryRate: number;
  isolationRate: number;
  days: number;
  populationSize: number;
  initialInfected: number;
  // Add any new parameters here if needed
};

export const defaultParameters: SimulationParameters = {
  vaccineEfficacy: 0.9,
  vaccinationRate: 0.7,
  R0: 2.0,
  recoveryRate: 0.1,
  isolationRate: 0.5,
  days: 20,
  populationSize: 100,
  initialInfected: 5,
  // Initialize any new parameters here
};
