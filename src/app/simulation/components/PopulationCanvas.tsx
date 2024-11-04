import dynamic from "next/dynamic";
import { useRef } from "react";
import Person from "./Person";

// Import `SketchProps` from `react-p5` if available to use as the type for Sketch
import type { SketchProps } from "react-p5";

// Dynamically import `react-p5` and provide the type explicitly
const Sketch = dynamic<SketchProps>(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

type PopulationCanvasProps = {
  people: Person[];
  R0: number;
  recoveryRate: number;
  contagiousFactorForIso: number;
  contagiousFactorForUniso: number;
  isolationRate: number;
  vaccinationRate: number;
  vaccineEfficacy: number;
  totalDays: number;
  updateChartData: (
    healthy: number,
    infected: number,
    recovered: number,
    frame: number
  ) => void;
};

export default function PopulationCanvas({
  people,
  R0,
  recoveryRate,
  contagiousFactorForIso,
  contagiousFactorForUniso,
  isolationRate,
  vaccinationRate,
  vaccineEfficacy,
  totalDays,
  updateChartData,
}: PopulationCanvasProps) {
  const frameCount = useRef(0);

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
    p5.frameRate(30);
  };

  const draw = (p5: any) => {
    p5.background(255);

    let healthyCount = 0;
    let infectedCount = 0;
    let recoveredCount = 0;

    // Iterate over each person and handle movement, display, and infection logic
    people.forEach((person) => {
      person.move(p5); // Move the person
      person.show(p5); // Show the person on the canvas

      // Handle infection spreading logic
      person.tryToInfect(
        p5,
        people,
        50, // Infection radius
        R0 * (1 - isolationRate), // Adjusted infection probability
        vaccineEfficacy
      );

      // Handle recovery logic
      person.recover(recoveryRate, recoveryRate * (1 - vaccinationRate));

      // Count each status for chart data
      if (person.status === "healthy") healthyCount++;
      if (person.status === "infected") infectedCount++;
      if (person.status === "recovered") recoveredCount++;
    });

    frameCount.current++;
    updateChartData(
      healthyCount,
      infectedCount,
      recoveredCount,
      frameCount.current
    );

    if (frameCount.current > totalDays * 30) {
      p5.noLoop(); // Stop the simulation after totalDays
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
