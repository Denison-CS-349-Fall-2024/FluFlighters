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
  const framesPerDay = 30; // Define frames per day

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
    p5.frameRate(framesPerDay);
  };

  const draw = (p5: any) => {
    p5.background(255);

    const day = Math.floor(frameCount.current / framesPerDay); // Compute the day

    // Iterate over each person and handle movement, display, and infection logic
    people.forEach((person) => {
      person.move(p5); // Move the person
      person.show(p5); // Show the person on the canvas

      // Handle infection spreading logic
      person.tryToInfect(
        p5,
        people,
        parameters,
        day,
        10 // Infection radius
      );

      // Handle recovery logic
      person.recover(parameters.recoveryRate);
    });

    // Update chart data once per day
    if (frameCount.current % framesPerDay === 0) {
      const susceptibleCount = people.filter(p => p.status === 'susceptible').length;
      const infectedCount = people.filter(p => p.status === 'infected').length;
      const recoveredCount = people.filter(p => p.status === 'recovered').length;

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
