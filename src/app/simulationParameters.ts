// app/simulationParameters.ts

export type SimulationParameters = {
    vaccineEfficacy: number;
    vaccinationRate: number;
    R0: number;
    contagiousFactorForIso: number;
    contagiousFactorForUniso: number;
    isolationRate: number;
    recoveryRate: number;
    days: number;
    populationSize: number;
    initialInfected: number;
  };
  
  export const defaultParameters: SimulationParameters = {
    vaccineEfficacy: 0.8,
    vaccinationRate: 0.7,
    R0: 2.0,
    contagiousFactorForIso: 0.1,
    contagiousFactorForUniso: 0.3,
    isolationRate: 0.5,
    recoveryRate: 0.1,
    days: 10,
    populationSize: 250,
    initialInfected: 0.1,
  };
  