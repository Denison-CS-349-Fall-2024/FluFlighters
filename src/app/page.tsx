// app/page.tsx
"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SimulationContext } from "./SimulationContext";

export default function Home() {
  const router = useRouter();
  const { parameters, setParameters } = useContext(SimulationContext);

  // Local state variables for user inputs
  const [vaccineEfficacy, setVaccineEfficacy] = useState(parameters.vaccineEfficacy);
  const [vaccinationRate, setVaccinationRate] = useState(parameters.vaccinationRate);
  const [R0, setR0] = useState(parameters.R0);
  const [contagiousFactorForIso, setContagiousFactorForIso] = useState(parameters.contagiousFactorForIso);
  const [contagiousFactorForUniso, setContagiousFactorForUniso] = useState(parameters.contagiousFactorForUniso);
  const [isolationRate, setIsolationRate] = useState(parameters.isolationRate);
  const [recoveryRate, setRecoveryRate] = useState(parameters.recoveryRate);
  const [days, setDays] = useState(parameters.days);
  const [populationSize, setPopulationSize] = useState(parameters.populationSize);
  const [initialInfected, setInitialInfected] = useState(parameters.initialInfected);

  // Update context and navigate to the simulation page
  const startSimulation = () => {
    setParameters({
      vaccineEfficacy,
      vaccinationRate,
      R0,
      contagiousFactorForIso,
      contagiousFactorForUniso,
      isolationRate,
      recoveryRate,
      days,
      populationSize,
      initialInfected,
    });
    router.push("/simulation");
  };

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
          <label>Vaccination Rate ({Math.round(vaccinationRate * 100)}%)</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={vaccinationRate}
            onChange={(e) => setVaccinationRate(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Inital Infected: {initialInfected}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={initialInfected}
            onChange={(e) => setInitialInfected(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>R0 (Infection Rate): {R0}</label>
          <input
            type="number"
            min="0.5"
            max="5.0"
            step="0.1"
            value={R0}
            onChange={(e) => setR0(parseFloat(e.target.value))}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label>
            Contagious Factor (Isolated): {contagiousFactorForIso}
          </label>
          <input
            type="number"
            min="0.01"
            max="1.0"
            step="0.01"
            value={contagiousFactorForIso}
            onChange={(e) =>
              setContagiousFactorForIso(parseFloat(e.target.value))
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label>
            Contagious Factor (Unisolated): {contagiousFactorForUniso}
          </label>
          <input
            type="number"
            min="0.01"
            max="1.0"
            step="0.01"
            value={contagiousFactorForUniso}
            onChange={(e) =>
              setContagiousFactorForUniso(parseFloat(e.target.value))
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label>Isolation Rate ({Math.round(isolationRate * 100)}%)</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isolationRate}
            onChange={(e) => setIsolationRate(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Recovery Rate ({Math.round(recoveryRate * 100)}%)</label>
          <input
            type="range"
            min="0.01"
            max="1.0"
            step="0.01"
            value={recoveryRate}
            onChange={(e) => setRecoveryRate(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>Days ({days})</label>
          <input
            type="number"
            min="1"
            max="60"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
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
            min="50"
            max="10000"
            step="50"
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
