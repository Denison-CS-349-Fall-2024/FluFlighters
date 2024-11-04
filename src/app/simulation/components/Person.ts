export default class Person {
  x: number;
  y: number;
  status: string;
  vaccinated: boolean;
  isIsolated: boolean; // Include the isIsolated property

  constructor(
    x: number,
    y: number,
    vaccinated: boolean,
    status = "healthy",
    isIsolated = false
  ) {
    this.x = x;
    this.y = y;
    this.vaccinated = vaccinated;
    this.status = status;
    this.isIsolated = isIsolated; // Initialize the new property
  }

  // Method to check if the person can get infected
  tryToInfect(
    p5: any,
    people: Person[],
    infectionRadius: number,
    infectionProbability: number,
    vaccineEfficacy: number
  ) {
    if (this.status === "healthy") {
      for (let other of people) {
        if (other.status === "infected") {
          const d = p5.dist(this.x, this.y, other.x, other.y);
          if (d < infectionRadius && (!this.vaccinated || Math.random() > vaccineEfficacy)) {
            if (Math.random() < infectionProbability) {
              this.status = "infected";
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
      this.x += p5.random(-5, 5);
      this.y += p5.random(-5, 5);
      this.x = p5.constrain(this.x, 0, p5.width);
      this.y = p5.constrain(this.y, 0, p5.height);
    }
  }

  // Method to show the person on the canvas with the appropriate color
  show(p5: any) {
    if (this.status === "healthy") p5.fill(100, 200, 255); // Blue for healthy
    else if (this.status === "infected") p5.fill(255, 100, 100); // Red for infected
    else if (this.status === "recovered") p5.fill(0, 255, 0); // Green for recovered
    p5.ellipse(this.x, this.y, 20, 20); // Draw the ball
  }

  // Method to determine if the person recovers from the infection
  recover(vaccinatedRecoveryRate: number, unvaccinatedRecoveryRate: number) {
    if (this.status === "infected") {
      const recoveryChance = this.vaccinated ? vaccinatedRecoveryRate : unvaccinatedRecoveryRate;
      if (Math.random() < recoveryChance) {
        this.status = "recovered";
      }
    }
  }
}
