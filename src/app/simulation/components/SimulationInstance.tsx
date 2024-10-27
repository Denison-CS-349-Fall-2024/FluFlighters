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
  // State management for this simulation
  const [people, setPeople] = useState<Person[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      { label: "Healthy", data: [], borderColor: "blue", fill: false },
      { label: "Infected", data: [], borderColor: "red", fill: false },
      { label: "Recovered", data: [], borderColor: "green", fill: false },
    ],
  });

  // Initialize population
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

  // Chart data update function
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
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Left Section: Canvas */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
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
      <div style={{ flex: 1 }}>
        <StatusChart chartData={chartData} />
      </div>
    </div>
  );
};

export default SimulationInstance;
