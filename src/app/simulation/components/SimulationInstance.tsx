// app/simulation/components/SimulationInstance.tsx
import { useEffect, useState, useRef } from "react";
import PopulationCanvas from "./PopulationCanvas";
import StatusChart from "./StatusChart";
import Person from "./Person";
import { SimulationParameters } from "../../simulationParameters";

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
  parameters: SimulationParameters;
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
      { label: "Susceptible", data: [], borderColor: "blue", fill: false },
      { label: "Infected", data: [], borderColor: "red", fill: false },
      { label: "Recovered", data: [], borderColor: "green", fill: false },
    ],
  });

  useEffect(() => {
    const newPeople: Person[] = [];
    for (let i = 0; i < parameters.populationSize; i++) {
      const x = Math.random() * parameters.areaSize;
      const y = Math.random() * parameters.areaSize;
      const vaccinated = Math.random() < parameters.vaccinationRate;
      const isIsolated = Math.random() < parameters.isolationRate;
      const dailyContacts = Math.floor(
        Math.random() * (parameters.contactRange[1] - parameters.contactRange[0] + 1) + parameters.contactRange[0]
      );
      newPeople.push(new Person(x, y, vaccinated, 'susceptible', isIsolated, dailyContacts));
    }
  
    // Infect initial individuals
    const initialInfectedCount = Math.max(1, Math.floor(parameters.populationSize * parameters.initialInfected));
    for (let i = 0; i < initialInfectedCount; i++) {
      const randomIndex = Math.floor(Math.random() * newPeople.length);
      newPeople[randomIndex].status = 'infected';
      newPeople[randomIndex].infectionDay = 0;
    }
  
    setPeople(newPeople);
  
    setChartData({
      labels: [],
      datasets: [
        { label: "Susceptible", data: [], borderColor: "blue", fill: false },
        { label: "Infected", data: [], borderColor: "red", fill: false },
        { label: "Recovered", data: [], borderColor: "green", fill: false },
      ],
    });
  }, [parameters]);
  

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
        Simulation #{index}
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
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
            parameters={parameters}
            updateChartData={(susceptible, infected, recovered, day) => {
              setChartData((prevData) => ({
                ...prevData,
                labels: [...prevData.labels, day],
                datasets: [
                  {
                    ...prevData.datasets[0],
                    data: [...prevData.datasets[0].data, susceptible],
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
            }}
          />
        </div>

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
