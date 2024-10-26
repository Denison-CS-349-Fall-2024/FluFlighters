import dynamic from "next/dynamic";
import { useRef } from "react";
import Person from "./Person";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

type PopulationCanvasProps = {
  people: Person[];
  vaccineEfficacy: number;
  infectionProbability: number;
  vaccinatedRecoveryRate: number;
  unvaccinatedRecoveryRate: number;
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
  vaccineEfficacy,
  infectionProbability,
  vaccinatedRecoveryRate,
  unvaccinatedRecoveryRate,
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

    people.forEach((person) => {
      person.move(p5);
      person.show(p5);
      person.tryToInfect(p5, people, 50, infectionProbability, vaccineEfficacy); // Pass people here
      person.recover(vaccinatedRecoveryRate, unvaccinatedRecoveryRate);

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
      p5.noLoop();
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
