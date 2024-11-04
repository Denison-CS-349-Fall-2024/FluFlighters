// app/simulation/components/Person.ts
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
    infectionRadius: number,
    R0: number,
    vaccineEfficacy: number,
    day: number,
    contagiousFactorForIso: number,
    contagiousFactorForUniso: number,
    peakDay: number
  ) {
    if (this.status === "susceptible") {
      for (let other of people) {
        if (other.status === "infected") {
          const d = p5.dist(this.x, this.y, other.x, other.y);
          if (d < infectionRadius) {
            // Determine contagiousness based on isolation status
            const contagiousFactor = other.isIsolated
              ? contagiousFactorForIso
              : contagiousFactorForUniso;
            const contagiousness = Math.exp(-contagiousFactor * Math.pow(day - other.infectionDay! - peakDay, 2));

            // Calculate infection probability
            let infectionProbability = (R0 * contagiousness) / 10;
            if (this.vaccinated) {
              infectionProbability *= 1 - vaccineEfficacy;
            }

            if (Math.random() < infectionProbability) {
              this.status = "infected";
              this.infectionDay = day;
              break; // Exit loop once infected
            }
          }
        }
      }
    }
  }

  // Method to move the person within the canvas
  move(p5: any) {
    if (!this.isIsolated) {
      // Only move if the person is not isolated
      this.x += p5.random(-2, 2);
      this.y += p5.random(-2, 2);
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
      if (Math.random() < recoveryRate) {
        this.status = "recovered";
      }
    }
  }
}
