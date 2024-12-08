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
      person.move(p5, 300);
      person.show(p5);
    });

    frameCount.current++;

    if (frameCount.current % framesPerDay === 0) {
      dayRef.current++;
      if (dayRef.current >= statusesByDay.length) {
        p5.noLoop(); // Stop the simulation after the specified number of days
      }
    }

    // Draw Legend
    drawLegend(p5);
  };

  // Function to draw the legend
  const drawLegend = (p5: any) => {
    const legendX = 10;
    const legendY = 10;
    const shapeSize = 10;
    const spacing = 20;

    // Define statuses and their corresponding colors and shapes
    const legendItems = [
      { label: "Susceptible", shape: "circle", color: [100, 200, 255] },
      { label: "Infected", shape: "triangle", color: [255, 100, 100] },
      { label: "Recovered", shape: "square", color: [0, 255, 0] },
    ];

    p5.fill(0);
    p5.textSize(12);
    p5.textAlign(p5.LEFT, p5.CENTER);

    legendItems.forEach((item, index) => {
      const yPosition = legendY + index * spacing;

      // Draw shape
      p5.fill(...item.color);
      p5.noStroke();
      if (item.shape === "circle") {
        p5.ellipse(legendX, yPosition, shapeSize, shapeSize);
      } else if (item.shape === "triangle") {
        p5.push();
        p5.translate(legendX, yPosition);
        p5.rotate(p5.frameCount / 100.0); // Optional: Rotate for dynamic effect
        p5.triangle(-shapeSize / 2, shapeSize / 2, shapeSize / 2, shapeSize / 2, 0, -shapeSize / 2);
        p5.pop();
      } else if (item.shape === "square") {
        p5.rect(legendX - shapeSize / 2, yPosition - shapeSize / 2, shapeSize, shapeSize);
      }

      // Draw label
      p5.fill(0);
      p5.text(item.label, legendX + shapeSize + 5, yPosition);
    });
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
