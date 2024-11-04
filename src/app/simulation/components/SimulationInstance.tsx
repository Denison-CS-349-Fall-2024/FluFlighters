import { useEffect, useState } from "react";
import PopulationCanvas from "./PopulationCanvas";
import StatusChart from "./StatusChart";
import Person from "./Person";
import { simulateInfectionGraph } from "../../../lib/GraphModel";

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
      { label: "Susceptible", data: [], borderColor: "orange", fill: false },
      { label: "Infected", data: [], borderColor: "red", fill: false },
      { label: "Recovered", data: [], borderColor: "green", fill: false },
    ],
  });

  useEffect(() => {
    // Initialize people
    const newPeople: Person[] = [];
    for (let i = 0; i < parameters.populationSize; i++) {
      const x = Math.random() * 800;
      const y = Math.random() * 600;
      const vaccinated = Math.random() < parameters.populationVaccinated;
      const status = "healthy";
      newPeople.push(new Person(x, y, vaccinated, status));
    }
    // Infect one person randomly
    const randomIndex = Math.floor(Math.random() * newPeople.length);
    newPeople[randomIndex].status = "infected";
    setPeople(newPeople);

    // Update the chart data initialization if needed
    setChartData({
      labels: [],
      datasets: [
        { label: "Susceptible", data: [], borderColor: "orange", fill: false },
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
        Simulation #{index + 1}
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
            R0={parameters.infectionProbability}
            recoveryRate={parameters.vaccinatedRecoveryRate}
            contagiousFactorForIso={0.5}
            contagiousFactorForUniso={0.3}
            isolationRate={0.2}
            vaccinationRate={parameters.populationVaccinated}
            vaccineEfficacy={parameters.vaccineEfficacy}
            totalDays={parameters.totalDays}
            updateChartData={(healthy, infected, recovered, frame) => {
              setChartData((prevData) => ({
                ...prevData,
                labels: [...prevData.labels, frame],
                datasets: [
                  { ...prevData.datasets[0], data: [...prevData.datasets[0].data, healthy] },
                  { ...prevData.datasets[1], data: [...prevData.datasets[1].data, infected] },
                  { ...prevData.datasets[2], data: [...prevData.datasets[2].data, recovered] },
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
