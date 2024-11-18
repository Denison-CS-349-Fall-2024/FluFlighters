// app/simulation/components/PopulationCanvas.tsx
import dynamic from "next/dynamic";
import { useRef } from "react";
import Person from "./Person";
import { SimulationParameters } from "../../simulationParameters";
import type { SketchProps } from "react-p5";

const Sketch = dynamic<SketchProps>(
  () => import("react-p5").then((mod) => mod.default),
  {
    ssr: false,
  }
);

type PopulationCanvasProps = {
  people: Person[];
  statusesByDay: string[][];
  parameters: SimulationParameters;
};

export default function PopulationCanvas({
  people,
  statusesByDay,
  parameters,
}: PopulationCanvasProps) {
  const dayRef = useRef(0);
  const frameCount = useRef(0);
  const framesPerDay = 30; // Define frames per day

  const setup = (p5: any, canvasParentRef: Element) => {
    const width = canvasParentRef.clientWidth;
    const height = canvasParentRef.clientHeight;
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(framesPerDay);
  };

  const windowResized = (p5: any) => {
    const width = p5.canvas.parentNode.clientWidth;
    const height = p5.canvas.parentNode.clientHeight;
    p5.resizeCanvas(width, height);
  };

  const draw = (p5: any) => {
    p5.background(255);

    if (!people || people.length === 0 || statusesByDay.length === 0) return;

    const currentDay = dayRef.current;

    // Assign statuses to people
    const statuses = statusesByDay[currentDay];
    if (statuses && statuses.length === people.length) {
      for (let i = 0; i < people.length; i++) {
        people[i].status = statuses[i];
      }
    }

    // Move and draw each person
    people.forEach((person) => {
      person.move(p5, parameters.areaSize);
      person.show(p5);
    });

    frameCount.current++;

    if (frameCount.current % framesPerDay === 0) {
      dayRef.current++;
      if (dayRef.current >= statusesByDay.length) {
        p5.noLoop(); // Stop the simulation after the specified number of days
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Sketch
        setup={setup}
        draw={draw}
        windowResized={windowResized}
        style={{ flexGrow: 1 }}
      />
    </div>
  );
}
