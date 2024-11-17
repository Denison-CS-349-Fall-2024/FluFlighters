// app/simulation/components/Person.ts

/*
Person.ts

Person.ts is the main simulator file that justifies the operations of the simulation's parameters.
It utilizes an object-oriented approach of the class 'Person' and variables/states that determine
if that person is infected, isolating, susceptible, or vaccinated. Implementations for the changes
of states made to the Person object are under functions like 'tryToInfect', moving people visuals
are updated based on the state changes accordingly.

Here is a list of the user-modifiable parameters:
  - population_size: Total population size in the simulation. Affects the overall scale of the outbreak.
  - initial_infected: Initial count of infected individuals at the start. Sets the starting point of the infection curve.
  - R0: Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.
  - recovery_rate: Rate at which infected individuals recover each day (proportion per day).
  - isolation_rate: Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.
  - days: Duration of the simulation in days.
  - vaccination_rate: Proportion of the population that is vaccinated, which affects susceptibility.
  - vaccine_efficacy: Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.

*/    

import { SimulationParameters } from "@/app/simulationParameters";

export default class Person {
  x: number;
  y: number;
  status: string;
  vaccinated: boolean;
  isIsolated: boolean;
  infectionDay: number | null;

  constructor(
    x: number,
    y: number,
    vaccinated: boolean,
    status = "susceptible",
    isIsolated = false
  ) {
    this.x = x;
    this.y = y;
    this.vaccinated = vaccinated;
    this.status = status;
    this.isIsolated = isIsolated;
    this.infectionDay = null; // Keep track of when the person got infected
  }

  // Method to check if the person can get infected

tryToInfect(
  p5: any,
  people: Person[],
  parameters: SimulationParameters,
  day: number,
  infectionRadius: number
) {
  if (this.status === "susceptible") {
    for (let other of people) {
      if (other.status === "infected") {
        const d = p5.dist(this.x, this.y, other.x, other.y);
        if (d < infectionRadius) {
          // Calculate infection probability per contact
          const averageContactsPerDay = 10; // Adjust as needed
          let infectionProbability = (parameters.R0 / averageContactsPerDay) * (1 - parameters.isolationRate);

          if (this.vaccinated) {
            infectionProbability *= 1 - parameters.vaccineEfficacy;
          }

          // Ensure the infection probability does not exceed 1
          infectionProbability = Math.min(infectionProbability, 1);

          // Random chance based on infection probability
          if (Math.random() < infectionProbability) {
            this.status = "infected";
            this.infectionDay = day;
            break;
          }
        }
      }
    }
  }
}


  // Method to move the person within the canvas
  // app/simulation/components/Person.ts

move(p5: any) {
  if (!this.isIsolated) {
    // Increase movement range if needed
    this.x += p5.random(-5, 5);
    this.y += p5.random(-5, 5);
    this.x = p5.constrain(this.x, 0, p5.width);
    this.y = p5.constrain(this.y, 0, p5.height);
  }
}

  // Method to show the person on the canvas with the appropriate color
  show(p5: any) {
    if (this.status === "susceptible") p5.fill(100, 200, 255); // Blue for susceptible
    else if (this.status === "infected") p5.fill(255, 100, 100); // Red for infected
    else if (this.status === "recovered") p5.fill(0, 255, 0); // Green for recovered
    p5.ellipse(this.x, this.y, 8, 8); // Draw the person
  }

  // Method to determine if the person recovers from the infection
  recover(recoveryRate: number) {
    if (this.status === "infected") {
      // Recovery is checked once per day
      if (Math.random() < recoveryRate) {
        this.status = "recovered";
      }
    }
  }
}
