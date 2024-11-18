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
  }, [parameters]);
  
  // Simulate infection dynamics for StatusChart
  useEffect(() => {
    const simulateInfection = () => {
      const days = parameters.days;
      const populationSize = parameters.populationSize; // Hard-coded for consistent chart simulation
      const vaccinatedPopulation = populationSize * parameters.vaccinationRate;
      const unvaccinatedPopulation = populationSize * (1 - parameters.vaccinationRate);
      const initialInfected = parameters.initialInfected * 100;

      // Initialize counts
      let susceptibleVaccinated = vaccinatedPopulation - initialInfected * parameters.vaccinationRate;
      let susceptibleUnvaccinated = unvaccinatedPopulation - initialInfected * (1 - parameters.vaccinationRate);

      let infectedVaccinated = initialInfected * parameters.vaccinationRate;
      let infectedUnvaccinated = initialInfected * (1 - parameters.vaccinationRate);

      let recoveredVaccinated = 0;
      let recoveredUnvaccinated = 0;

      const newLabels = [];
      const newSusceptible = [];
      const newInfected = [];
      const newRecovered = [];

      // Simulate dynamics over days
      for (let day = 0; day <= days; day++) {
        // Infection and recovery calculations
        const newInfectedVaccinated = Math.min(
          (infectedVaccinated * parameters.R0 * parameters.vaccineEfficacy * susceptibleVaccinated) /
            populationSize *
            (1 - parameters.isolationRate),
          susceptibleVaccinated
        );

        const newInfectedUnvaccinated = Math.min(
          (infectedUnvaccinated * parameters.R0 * susceptibleUnvaccinated) /
            populationSize *
            (1 - parameters.isolationRate),
          susceptibleUnvaccinated
        );

        const newRecoveredVaccinated = infectedVaccinated * parameters.recoveryRate;
        const newRecoveredUnvaccinated = infectedUnvaccinated * parameters.recoveryRate;

        // Update counts
        susceptibleVaccinated -= newInfectedVaccinated;
        susceptibleUnvaccinated -= newInfectedUnvaccinated;

        infectedVaccinated += newInfectedVaccinated - newRecoveredVaccinated;
        infectedUnvaccinated += newInfectedUnvaccinated - newRecoveredUnvaccinated;

        recoveredVaccinated += newRecoveredVaccinated;
        recoveredUnvaccinated += newRecoveredUnvaccinated;

        // Combine vaccinated and unvaccinated groups
        const totalSusceptible = susceptibleVaccinated + susceptibleUnvaccinated;
        const totalInfected = infectedVaccinated + infectedUnvaccinated;
        const totalRecovered = recoveredVaccinated + recoveredUnvaccinated;

        // Store results for chart
        newLabels.push(day);
        newSusceptible.push(totalSusceptible);
        newInfected.push(totalInfected);
        newRecovered.push(totalRecovered);
      }

      // Update chart data state
      setChartData({
        labels: newLabels,
        datasets: [
          { label: "Susceptible", data: newSusceptible, borderColor: "orange", fill: false },
          { label: "Infected", data: newInfected, borderColor: "red", fill: false },
          { label: "Recovered", data: newRecovered, borderColor: "green", fill: false },
        ],
      });
    };

    simulateInfection();
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
            updateChartData={() => {}}
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
