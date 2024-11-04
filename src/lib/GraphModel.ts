import Person from "../app/simulation/components/Person";

// Function to simulate infection spread using a graph-based approach
export function simulateInfectionGraph(
  people: Person[],
  R0: number,
  recoveryRate: number,
  contagiousFactorForIso: number,
  contagiousFactorForUniso: number,
  isolationRate: number,
  vaccinationRate: number,
  vaccineEfficacy: number,
  days: number
) {
  // Initialize arrays to store counts of each status over time
  const totalSusceptible: number[] = [];
  const totalInfected: number[] = [];
  const totalRecovered: number[] = [];

  for (let day = 0; day <= days; day++) {
    let newInfected: Person[] = [];

    // Count the current number of people in each state
    const susceptibleCount = people.filter((p) => p.status === "healthy").length;
    const infectedCount = people.filter((p) => p.status === "infected").length;
    const recoveredCount = people.filter((p) => p.status === "recovered").length;

    // Record the counts for the current day
    totalSusceptible.push(susceptibleCount);
    totalInfected.push(infectedCount);
    totalRecovered.push(recoveredCount);

    // Spread infection
    people.forEach((person) => {
      if (person.status === "infected") {
        people.forEach((neighbor) => {
          if (neighbor.status === "healthy") {
            // Determine contagiousness based on some isolation logic
            const contagiousness = Math.exp(
              -((person.vaccinated ? contagiousFactorForIso : contagiousFactorForUniso) * (day - 5) ** 2)
            );

            // Adjust infection probability based on vaccination status
            let infectionProbability = (R0 * contagiousness) / 10;
            if (neighbor.vaccinated) {
              infectionProbability *= 1 - vaccineEfficacy;
            }

            // Infect the neighbor with the given probability
            if (Math.random() < infectionProbability) {
              newInfected.push(neighbor);
            }
          }
        });
      }
    });

    // Update the status of newly infected people
    newInfected.forEach((person) => {
      person.status = "infected";
    });

    // Recover some infected people based on the recovery rate
    const infectedPeople = people.filter((p) => p.status === "infected");
    const recoveredPeople = infectedPeople.filter(() => Math.random() < recoveryRate);
    recoveredPeople.forEach((person) => {
      person.status = "recovered";
    });
  }

  // Return the arrays to be used in the chart
  return {
    totalSusceptible,
    totalInfected,
    totalRecovered,
  };
}
