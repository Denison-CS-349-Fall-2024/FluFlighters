"use client";

import { useEffect, useState } from "react";
import PopulationCanvas from "./PopulationCanvas";
import StatusChart from "./StatusChart";
import Person from "./Person";

type ChartData = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
  }[];
};

interface SimulationInstanceProps {
  parameters: {
    vaccineEfficacy: number;
    populationVaccinated: number;
    infectionProbability: number;
    vaccinatedRecoveryRate: number;
    unvaccinatedRecoveryRate: number;
    peakInfectionDay: number;
    totalDays: number;
    populationSize: number;
  };
  index: number;
}

const SimulationInstance: React.FC<SimulationInstanceProps> = ({
  parameters,
  index,
}) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      { label: "Healthy", data: [], borderColor: "#4caf50", fill: false }, // Green for healthy
      { label: "Infected", data: [], borderColor: "#f44336", fill: false }, // Red for infected
      { label: "Recovered", data: [], borderColor: "#2196f3", fill: false }, // Blue for recovered
    ],
  });

  useEffect(() => {
    const newPeople: Person[] = [];
    for (let i = 0; i < parameters.populationSize; i++) {
      const x = Math.random() * 800;
      const y = Math.random() * 600;
      const vaccinated = Math.random() < parameters.populationVaccinated;
      newPeople.push(new Person(x, y, vaccinated));
    }
    setPeople(newPeople);
  }, [parameters]);

  const updateChartData = (
    healthy: number,
    infected: number,
    recovered: number,
    frame: number
  ) => {
    setChartData((prevData) => ({
      labels: [...prevData.labels, frame],
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, healthy],
        },
        {
          ...prevData.datasets[1],
          data: [...prevData.datasets[1].data, infected],
        },
        {
          ...prevData.datasets[2],
          data: [...prevData.datasets[2].data, recovered],
        },
      ],
    }));
  };

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "24px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        margin: "20px 0",
      }}
    >
      {/* Display the simulation number in the top-left corner */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          fontWeight: "500",
          fontSize: "16px",
          color: "#555",
        }}
      >
        Simulation #{index + 1}
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Section: Canvas */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <PopulationCanvas
            people={people}
            vaccineEfficacy={parameters.vaccineEfficacy}
            infectionProbability={parameters.infectionProbability}
            vaccinatedRecoveryRate={parameters.vaccinatedRecoveryRate}
            unvaccinatedRecoveryRate={parameters.unvaccinatedRecoveryRate}
            totalDays={parameters.totalDays}
            updateChartData={updateChartData}
          />
        </div>

        {/* Right Section: Status Chart */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <StatusChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default SimulationInstance;
