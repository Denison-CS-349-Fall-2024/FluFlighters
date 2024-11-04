// app/simulation/components/PopulationCanvas.tsx
import dynamic from "next/dynamic";
import { useRef } from "react";
import Person from "./Person";
import { SimulationParameters } from "../../simulationParameters";

import type { SketchProps } from "react-p5";

const Sketch = dynamic<SketchProps>(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

type PopulationCanvasProps = {
  people: Person[];
  parameters: SimulationParameters;
  updateChartData: (
    susceptible: number,
    infected: number,
    recovered: number,
    day: number
  ) => void;
};

export default function PopulationCanvas({
  people,
  parameters,
  updateChartData,
}: PopulationCanvasProps) {
  const frameCount = useRef(0);

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
    p5.frameRate(30);
  };

  const draw = (p5: any) => {
    p5.background(255);

    let susceptibleCount = 0;
    let infectedCount = 0;
    let recoveredCount = 0;

    const day = Math.floor(frameCount.current / 30); // Assuming 30 frames per day

    // Iterate over each person and handle movement, display, and infection logic
    people.forEach((person) => {
      person.move(p5); // Move the person
      person.show(p5); // Show the person on the canvas

      // Handle infection spreading logic
      person.tryToInfect(
        p5,
        people,
        10, // Infection radius
        parameters.R0,
        parameters.vaccineEfficacy,
        day,
        parameters.contagiousFactorForIso,
        parameters.contagiousFactorForUniso,
        Math.floor(parameters.days / 2) // Peak day (assuming middle of the simulation)
      );

      // Handle recovery logic
      person.recover(parameters.recoveryRate);

      // Count each status for chart data
      if (person.status === "susceptible") susceptibleCount++;
      if (person.status === "infected") infectedCount++;
      if (person.status === "recovered") recoveredCount++;
    });

    // Update chart data once per day
    if (frameCount.current % 30 === 0) {
      updateChartData(
        susceptibleCount,
        infectedCount,
        recoveredCount,
        day
      );
    }

    frameCount.current++;

    if (day > parameters.days) {
      p5.noLoop(); // Stop the simulation after the specified number of days
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
