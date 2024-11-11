// app/simulation/components/SimulationControls.tsx
import React from "react";

type SimulationControlsProps = {
  vaccineEfficacy: number;
  vaccinationRate: number;
  R0: number;
  contagiousFactorForIso: number;
  contagiousFactorForUniso: number;
  isolationRate: number;
  recoveryRate: number;
  days: number;
  populationSize: number;
  speed: number;
  handleSpeedChange: () => void;
  initialInfected: number;
  contactRange: [number, number]; // New parameter
  areaSize: number; // New parameter
};

export default function SimulationControls({
  vaccineEfficacy,
  vaccinationRate,
  R0,
  contagiousFactorForIso,
  contagiousFactorForUniso,
  isolationRate,
  recoveryRate,
  days,
  populationSize,
  speed,
  handleSpeedChange,
  initialInfected,
  contactRange,
  areaSize,
}: SimulationControlsProps) {
  return (
    <div>
      <h2>Flu Simulation</h2>
      <p>Vaccine Efficacy: {Math.round(vaccineEfficacy * 100)}%</p>
      <p>Vaccination Rate: {Math.round(vaccinationRate * 100)}%</p>
      <p>Initial Infected: {Math.round(initialInfected * 100)}%</p>
      <p>R0 (Infection Rate): {R0}</p>
      <p>Contagious Factor (Isolated): {contagiousFactorForIso}</p>
      <p>Contagious Factor (Unisolated): {contagiousFactorForUniso}</p>
      <p>Isolation Rate: {Math.round(isolationRate * 100)}%</p>
      <p>Recovery Rate: {Math.round(recoveryRate * 100)}%</p>
      <p>Days: {days}</p>
      <p>Population Size: {populationSize}</p>
      <p>
        Contact Range: {contactRange[0]} - {contactRange[1]}
      </p>
      <p>Area Size: {areaSize} units</p>
      <button onClick={handleSpeedChange}>
        {speed === 1
          ? "Speed Up (2x)"
          : speed === 2
          ? "Speed Up (4x)"
          : "Reset Speed (1x)"}
      </button>
    </div>
  );
}
