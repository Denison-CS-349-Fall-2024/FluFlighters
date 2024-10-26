import React from "react";

type SimulationControlsProps = {
  vaccineEfficacy: number;
  populationVaccinated: number;
  infectionProbability: number;
  vaccinatedRecoveryRate: number;
  unvaccinatedRecoveryRate: number;
  peakInfectionDay: number;
  totalDays: number;
  populationSize: number;
  speed: number;
  handleSpeedChange: () => void;
};

export default function SimulationControls({
  vaccineEfficacy,
  populationVaccinated,
  infectionProbability,
  vaccinatedRecoveryRate,
  unvaccinatedRecoveryRate,
  peakInfectionDay,
  totalDays,
  populationSize,
  speed,
  handleSpeedChange,
}: SimulationControlsProps) {
  return (
    <div>
      <h2>Flu Simulation</h2>
      <p>Vaccine Efficacy: {Math.round(vaccineEfficacy * 100)}%</p>
      <p>Population Vaccinated: {Math.round(populationVaccinated * 100)}%</p>
      <p>Infection Probability: {Math.round(infectionProbability * 100)}%</p>
      <p>
        Vaccinated Recovery Rate: {Math.round(vaccinatedRecoveryRate * 100)}%
      </p>
      <p>
        Unvaccinated Recovery Rate: {Math.round(unvaccinatedRecoveryRate * 100)}
        %
      </p>
      <p>Peak Infection Day: {peakInfectionDay}</p>
      <p>Total Days: {totalDays}</p>
      <p>Population Size: {populationSize}</p>
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
