"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // State variables to hold user input
  const [vaccineEfficacy, setVaccineEfficacy] = useState(0.8);
  const [populationVaccinated, setPopulationVaccinated] = useState(0.7);

  // Navigate to the simulation page with user input
  const startSimulation = () => {
    router.push(
      `/simulation?vaccineEfficacy=${vaccineEfficacy}&populationVaccinated=${populationVaccinated}`
    );
  };

  return (
    <div>
      <h1>Flu Fighters: Customize Your Simulation</h1>

      <div>
        <label>Vaccine Efficacy ({Math.round(vaccineEfficacy * 100)}%)</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={vaccineEfficacy}
          onChange={(e) => setVaccineEfficacy(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>
          Population Vaccinated ({Math.round(populationVaccinated * 100)}%)
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={populationVaccinated}
          onChange={(e) => setPopulationVaccinated(parseFloat(e.target.value))}
        />
      </div>

      <button onClick={startSimulation}>Start Simulation</button>
    </div>
  );
}
