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
  contactRange: [number, number]; // New: Range for daily contacts
  areaSize: number;              // New: Size of the simulation area
};

export const defaultParameters: SimulationParameters = {
  vaccineEfficacy: 0.9,
  vaccinationRate: 0.7,
  R0: 2.0,
  recoveryRate: 0.1,
  isolationRate: 0.5,
  days: 20,
  populationSize: 100,
  initialInfected: 0.05, // Changed from 5 to 0.05 to represent 5%
  contactRange: [5, 15], // Default range for daily contacts
  areaSize: 50,         // Default area size
};
