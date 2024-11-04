// Function to simulate infection and generate data for the Status Chart
export function simulateInfectionGraph(
  populationSize: number,
  initialInfected: number,
  R0: number,
  recoveryRate: number,
  contagiousFactorForIso: number,
  contagiousFactorForUniso: number,
  isolationRate: number,
  days: number,
  vaccinationRate: number,
  vaccineEfficacy: number
) {
  // Split the population into vaccinated and unvaccinated groups
  const vaccinatedPopulation = populationSize * vaccinationRate;
  const unvaccinatedPopulation = populationSize * (1 - vaccinationRate);

  // Initialize arrays to store SIR data over time
  let susceptibleVaccinated = [vaccinatedPopulation - initialInfected * vaccinationRate];
  let susceptibleUnvaccinated = [unvaccinatedPopulation - initialInfected * (1 - vaccinationRate)];
  let infectedVaccinated = [initialInfected * vaccinationRate];
  let infectedUnvaccinated = [initialInfected * (1 - vaccinationRate)];
  let recoveredVaccinated = [0];
  let recoveredUnvaccinated = [0];

  // Simulate the infection spread over the specified number of days
  for (let day = 1; day <= days; day++) {
    const newInfectedVaccinated = (infectedVaccinated[day - 1] * R0 * vaccineEfficacy) *
      (susceptibleVaccinated[day - 1] / populationSize) * (1 - isolationRate * contagiousFactorForIso);
    const newInfectedUnvaccinated = (infectedUnvaccinated[day - 1] * R0) *
      (susceptibleUnvaccinated[day - 1] / populationSize) * (1 - isolationRate * contagiousFactorForUniso);

    const newRecoveredVaccinated = infectedVaccinated[day - 1] * recoveryRate;
    const newRecoveredUnvaccinated = infectedUnvaccinated[day - 1] * recoveryRate;

    susceptibleVaccinated.push(susceptibleVaccinated[day - 1] - newInfectedVaccinated);
    susceptibleUnvaccinated.push(susceptibleUnvaccinated[day - 1] - newInfectedUnvaccinated);
    infectedVaccinated.push(infectedVaccinated[day - 1] + newInfectedVaccinated - newRecoveredVaccinated);
    infectedUnvaccinated.push(infectedUnvaccinated[day - 1] + newInfectedUnvaccinated - newRecoveredUnvaccinated);
    recoveredVaccinated.push(recoveredVaccinated[day - 1] + newRecoveredVaccinated);
    recoveredUnvaccinated.push(recoveredUnvaccinated[day - 1] + newRecoveredUnvaccinated);
  }

  const totalSusceptible = susceptibleVaccinated.map((val, idx) => val + susceptibleUnvaccinated[idx]);
  const totalInfected = infectedVaccinated.map((val, idx) => val + infectedUnvaccinated[idx]);
  const totalRecovered = recoveredVaccinated.map((val, idx) => val + recoveredUnvaccinated[idx]);

  return { totalSusceptible, totalInfected, totalRecovered };
}
