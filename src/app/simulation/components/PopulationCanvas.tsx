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

    // Movement and drawing happen every frame
    people.forEach((person) => {
      person.move(p5); // Move the person
      person.show(p5); // Show the person on the canvas
    });

    const isNewDay = frameCount.current % framesPerDay === 0;

    if (isNewDay) {
      const day = Math.floor(frameCount.current / framesPerDay); // Compute the day

      // Infection and recovery logic
      people.forEach((person) => {
        person.tryToInfect(
          p5,
          people,
          parameters,
          day,
          10 // Infection radius
        );

        person.recover(parameters.recoveryRate);
      });

      // Update chart data
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

    const day = Math.floor(frameCount.current / framesPerDay);
    if (day > parameters.days) {
      p5.noLoop(); // Stop the simulation after the specified number of days
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
