// app/simulation/components/Person.ts
 // """
 //    Parameters:
 //    - population_size: Total population size in the simulation. Affects the overall scale of the outbreak.
 //    - initial_infected: Initial count of infected individuals at the start. Sets the starting point of the infection curve.
 //    - R0: Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.
 //    - recovery_rate: Rate at which infected individuals recover each day (proportion per day).
 //    - isolation_rate: Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.
 //    - days: Duration of the simulation in days.
 //    - vaccination_rate: Proportion of the population that is vaccinated, which affects susceptibility.
 //    - vaccine_efficacy: Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.


import { SimulationParameters } from "@/app/simulationParameters";

export default class Person {
  x: number;
  y: number;
  status: string;
  vaccinated: boolean;

  constructor(
    x: number,
    y: number,
    vaccinated: boolean,
    status = "susceptible"
  ) {
    this.x = x;
    this.y = y;
    this.vaccinated = vaccinated;
    this.status = status;
  }

  // Movement method
  move(p5: any, areaSize: number) {
    this.x += p5.random(-2, 2);
    this.y += p5.random(-2, 2);
    this.x = p5.constrain(this.x, 0, areaSize);
    this.y = p5.constrain(this.y, 0, areaSize);
  }

  // Display the person with different shapes based on status
  show(p5: any) {
    // Set stroke for border
    p5.stroke(0); // Black border
    p5.strokeWeight(1); // Thin border

    if (this.status === "susceptible") {
      p5.fill(100, 200, 255); // Blue
      p5.noStroke(); // Remove border if desired
      p5.ellipse(this.x, this.y, 8, 8); // Circle with border
      p5.stroke(0); // Re-enable stroke for consistency
      p5.strokeWeight(1);
      p5.noFill();
      p5.ellipse(this.x, this.y, 8, 8); // Draw border
    } else if (this.status === "infected") {
      p5.fill(255, 100, 100); // Red
      p5.noStroke(); // Remove border if desired
      // Draw Triangle
      p5.push();
      p5.translate(this.x, this.y);
      p5.rotate(p5.frameCount / 100.0); // Optional: Rotate for visual effect
      p5.triangle(-4, 4, 4, 4, 0, -4);
      p5.pop();
      p5.stroke(0); // Re-enable stroke for border
      p5.strokeWeight(1);
      p5.noFill();
      p5.push();
      p5.translate(this.x, this.y);
      p5.rotate(p5.frameCount / 100.0); // Ensure border matches rotation
      p5.triangle(-4, 4, 4, 4, 0, -4);
      p5.pop();
    } else if (this.status === "recovered") {
      p5.fill(0, 255, 0); // Green
      p5.noStroke(); // Remove border if desired
      p5.rect(this.x - 4, this.y - 4, 8, 8); // Square with border
      p5.stroke(0); // Re-enable stroke for consistency
      p5.strokeWeight(1);
      p5.noFill();
      p5.rect(this.x - 4, this.y - 4, 8, 8); // Draw border
    }
  }
}
