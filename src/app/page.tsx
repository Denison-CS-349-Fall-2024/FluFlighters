// app/page.tsx
"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SimulationContext } from "./SimulationContext"; // Adjust the path if necessary

export default function Home() {
  const router = useRouter();
  const { parameters, setParameters } = useContext(SimulationContext);

  // Local state variables for user inputs
  const [vaccineEfficacy, setVaccineEfficacy] = useState(parameters.vaccineEfficacy);
  const [populationVaccinated, setPopulationVaccinated] = useState(parameters.populationVaccinated);
  const [infectionProbability, setInfectionProbability] = useState(parameters.infectionProbability);
  const [vaccinatedRecoveryRate, setVaccinatedRecoveryRate] = useState(parameters.vaccinatedRecoveryRate);
  const [unvaccinatedRecoveryRate, setUnvaccinatedRecoveryRate] = useState(parameters.unvaccinatedRecoveryRate);
  const [peakInfectionDay, setPeakInfectionDay] = useState(parameters.peakInfectionDay);
  const [totalDays, setTotalDays] = useState(parameters.totalDays);
  const [populationSize, setPopulationSize] = useState(parameters.populationSize);

  // Update context and navigate to the simulation page
  const startSimulation = () => {
    setParameters({
      vaccineEfficacy,
      populationVaccinated,
      infectionProbability,
      vaccinatedRecoveryRate,
      unvaccinatedRecoveryRate,
      peakInfectionDay,
      totalDays,
      populationSize,
    });
    router.push("/simulation");
  };

  //----

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Flu Fighters: Customize Your Simulation
      </h1>

      <div style={{ display: "grid", gap: "16px" }}>
        <div>
          <label>Vaccine Efficacy ({Math.round(vaccineEfficacy * 100)}%)</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={vaccineEfficacy}
            onChange={(e) => setVaccineEfficacy(parseFloat(e.target.value))}
            style={{ width: "100%" }}
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
            onChange={(e) =>
              setPopulationVaccinated(parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>
            Infection Probability ({Math.round(infectionProbability * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={infectionProbability}
            onChange={(e) =>
              setInfectionProbability(parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>
            Vaccinated Recovery Rate ({Math.round(vaccinatedRecoveryRate * 100)}
            %)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={vaccinatedRecoveryRate}
            onChange={(e) =>
              setVaccinatedRecoveryRate(parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>
            Unvaccinated Recovery Rate (
            {Math.round(unvaccinatedRecoveryRate * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={unvaccinatedRecoveryRate}
            onChange={(e) =>
              setUnvaccinatedRecoveryRate(parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Peak Infection Day ({peakInfectionDay})</label>
          <input
            type="number"
            min="1"
            max="20"
            value={peakInfectionDay}
            onChange={(e) => setPeakInfectionDay(parseInt(e.target.value))}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label>Total Days ({totalDays})</label>
          <input
            type="number"
            min="10"
            max="60"
            value={totalDays}
            onChange={(e) => setTotalDays(parseInt(e.target.value))}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label>Population Size ({populationSize})</label>
          <input
            type="number"
            min="100"
            max="1000000"
            step="1000"
            value={populationSize}
            onChange={(e) => setPopulationSize(parseInt(e.target.value))}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>

      <button
        onClick={startSimulation}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLElement).style.backgroundColor = "#45A049")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLElement).style.backgroundColor = "#4CAF50")
        }
      >
        Start Simulation
      </button>
    </div>
  );
}
