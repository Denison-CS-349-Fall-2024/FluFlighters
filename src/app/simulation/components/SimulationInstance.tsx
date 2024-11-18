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
  const [statusesByDay, setStatusesByDay] = useState<string[][]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      { label: "Susceptible", data: [], borderColor: "blue", fill: false },
      { label: "Infected", data: [], borderColor: "red", fill: false },
      { label: "Recovered", data: [], borderColor: "green", fill: false },
    ],
  });

  // Utility function to shuffle an array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Simulate infection dynamics for StatusChart and generate statusesByDay
  useEffect(() => {
    const simulateInfection = () => {
      const days = parameters.days;
      const populationSize = parameters.populationSize; // Hard-coded for consistent chart simulation
      const vaccinatedPopulation = populationSize * parameters.vaccinationRate;
      const unvaccinatedPopulation =
        populationSize * (1 - parameters.vaccinationRate);
      const initialInfected = parameters.initialInfected * 100;

      // Initialize counts
      let susceptibleVaccinated =
        vaccinatedPopulation - initialInfected * parameters.vaccinationRate;
      let susceptibleUnvaccinated =
        unvaccinatedPopulation -
        initialInfected * (1 - parameters.vaccinationRate);

      let infectedVaccinated = initialInfected * parameters.vaccinationRate;
      let infectedUnvaccinated =
        initialInfected * (1 - parameters.vaccinationRate);

      let recoveredVaccinated = 0;
      let recoveredUnvaccinated = 0;

      const newLabels = [];
      const newSusceptible = [];
      const newInfected = [];
      const newRecovered = [];

      const statusesByDay: string[][] = [];

      // Generate people
      const N = 500; // Number of dots in PopulationCanvas
      const peopleArray: Person[] = [];
      for (let i = 0; i < N; i++) {
        const x = Math.random() * parameters.areaSize;
        const y = Math.random() * parameters.areaSize;
        const vaccinated = Math.random() < parameters.vaccinationRate;
        const person = new Person(x, y, vaccinated, "susceptible");
        peopleArray.push(person);
      }

      // Simulate dynamics over days
      for (let day = 0; day <= days; day++) {
        // Infection and recovery calculations
        const newInfectedVaccinated = Math.min(
          ((infectedVaccinated *
            parameters.R0 *
            parameters.vaccineEfficacy *
            susceptibleVaccinated) /
            populationSize) *
            (1 - parameters.isolationRate),
          susceptibleVaccinated
        );

        const newInfectedUnvaccinated = Math.min(
          ((infectedUnvaccinated * parameters.R0 * susceptibleUnvaccinated) /
            populationSize) *
            (1 - parameters.isolationRate),
          susceptibleUnvaccinated
        );

        const newRecoveredVaccinated =
          infectedVaccinated * parameters.recoveryRate;
        const newRecoveredUnvaccinated =
          infectedUnvaccinated * parameters.recoveryRate;

        // Update counts
        susceptibleVaccinated -= newInfectedVaccinated;
        susceptibleUnvaccinated -= newInfectedUnvaccinated;

        infectedVaccinated += newInfectedVaccinated - newRecoveredVaccinated;
        infectedUnvaccinated +=
          newInfectedUnvaccinated - newRecoveredUnvaccinated;

        recoveredVaccinated += newRecoveredVaccinated;
        recoveredUnvaccinated += newRecoveredUnvaccinated;

        // Combine vaccinated and unvaccinated groups
        const totalSusceptible =
          susceptibleVaccinated + susceptibleUnvaccinated;
        const totalInfected = infectedVaccinated + infectedUnvaccinated;
        const totalRecovered = recoveredVaccinated + recoveredUnvaccinated;

        // Store results for chart
        newLabels.push(day);
        newSusceptible.push(totalSusceptible);
        newInfected.push(totalInfected);
        newRecovered.push(totalRecovered);

        // For this day, generate statuses for people
        const fracSusceptible = totalSusceptible / populationSize;
        const fracInfected = totalInfected / populationSize;
        const fracRecovered = totalRecovered / populationSize;

        const numSusceptible = Math.round(N * fracSusceptible);
        const numInfected = Math.round(N * fracInfected);
        const numRecovered = N - numSusceptible - numInfected;

        let statuses = [];
        for (let i = 0; i < numSusceptible; i++) statuses.push("susceptible");
        for (let i = 0; i < numInfected; i++) statuses.push("infected");
        for (let i = 0; i < numRecovered; i++) statuses.push("recovered");

        // Shuffle statuses to randomize distribution
        statuses = shuffleArray(statuses);

        statusesByDay.push(statuses);
      }

      // Update chart data state
      setChartData({
        labels: newLabels,
        datasets: [
          {
            label: "Susceptible",
            data: newSusceptible,
            borderColor: "orange",
            fill: false,
          },
          {
            label: "Infected",
            data: newInfected,
            borderColor: "red",
            fill: false,
          },
          {
            label: "Recovered",
            data: newRecovered,
            borderColor: "green",
            fill: false,
          },
        ],
      });

      // Update people and statusesByDay state
      setPeople(peopleArray);
      setStatusesByDay(statusesByDay);
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
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
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

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexGrow: 1,
        }}
      >
        {/* StatusChart (Graph) */}
        <div
          style={{
            flex: "1",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StatusChart chartData={chartData} />
        </div>

        {/* Right half container */}
        <div
          style={{
            flex: "1",
            position: "relative",
            display: "flex",
          }}
        >
          {/* PopulationCanvas (Simulation) */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "50%",  // Reduced width to 50%
              height: "50%", // Reduced height to 50%
              padding: "16px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <PopulationCanvas
              people={people}
              statusesByDay={statusesByDay}
              parameters={parameters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationInstance;