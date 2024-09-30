"use client";

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import type p5Types from "p5";
import { useState } from "react";

// Dynamically load react-p5 since p5.js relies on browser-specific features
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Simulation() {
  const searchParams = useSearchParams();
  const vaccineEfficacy = parseFloat(
    searchParams.get("vaccineEfficacy") || "0.8"
  );
  const populationVaccinated = parseFloat(
    searchParams.get("populationVaccinated") || "0.7"
  );
  const [vaccine, setVaccine] = useState();

  // Set up a population
  const populationSize = 100;
  let people: Person[] = []; // Specify that 'people' is an array of Person objects

  // Person object representing each individual in the population
  class Person {
    x: number;
    y: number;
    status: string; // 'healthy', 'infected', 'recovered'
    vaccinated: boolean;

    constructor(x: number, y: number, vaccinated: boolean, status = "healthy") {
      this.x = x;
      this.y = y;
      this.vaccinated = vaccinated;
      this.status = status;
    }

    // Determine if a person can get infected
    tryToInfect(p5: p5Types, infectionRadius: number) {
      if (this.status === "healthy") {
        for (let other of people) {
          if (other.status === "infected") {
            let d = p5.dist(this.x, this.y, other.x, other.y);
            if (d < infectionRadius) {
              if (!this.vaccinated || Math.random() > vaccineEfficacy) {
                this.status = "infected";
              }
            }
          }
        }
      }
    }

    move(p5: p5Types) {
      this.x += p5.random(-2, 2);
      this.y += p5.random(-2, 2);
    }

    show(p5: p5Types) {
      if (this.status === "healthy") {
        p5.fill(100, 200, 255); // blue for healthy
      } else if (this.status === "infected") {
        p5.fill(255, 100, 100); // red for infected
      } else if (this.status === "recovered") {
        p5.fill(100, 255, 100); // green for recovered
      }
      p5.ellipse(this.x, this.y, 20, 20);
    }

    recover() {
      if (this.status === "infected" && Math.random() < 0.01) {
        this.status = "recovered";
      }
    }
  }

  // p5.js setup and draw functions
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);

    // Initialize population
    for (let i = 0; i < populationSize; i++) {
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);
      let vaccinated = Math.random() < populationVaccinated;
      people.push(new Person(x, y, vaccinated));
    }

    // Infect a few people to start with
    for (let i = 0; i < 5; i++) {
      people[i].status = "infected";
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(255);

    // Update and display each person
    for (let person of people) {
      person.move(p5);
      person.show(p5);
      person.tryToInfect(p5, 50); // Infection radius is 50 pixels
      person.recover();
    }
  };

  return (
    <div>
      <h2>Flu Simulation</h2>
      <p>Vaccine Efficacy: {Math.round(vaccineEfficacy * 100)}%</p>
      <p>Population Vaccinated: {Math.round(populationVaccinated * 100)}%</p>

      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
