// app/page.tsx

/*
page.tsx

Page.tsx serves as the main structure / foundation for the simulation page.
This file's contents involve implemented links to the React framework, parameter UI design,
and implementation of the simulation page's buttons and interactables.

*/

"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SimulationContext } from "./SimulationContext";
import { SimulationParameters } from "./simulationParameters";

export default function Home() {
  const router = useRouter();
  const { parameters, setParameters } = useContext(SimulationContext);

  // Handler to update parameters in context
  const handleParameterChange = (key: keyof SimulationParameters, value: number) => {
    setParameters({
      ...parameters,
      [key]: value,
    });
  };

  const startSimulation = () => {
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
        {/* Vaccine Efficacy */}
        <div>
          <label>
            Vaccine Efficacy ({Math.round(parameters.vaccineEfficacy * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.vaccineEfficacy}
            onChange={(e) =>
              handleParameterChange("vaccineEfficacy", parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        {/* Vaccination Rate */}
        <div>
          <label>
            Vaccination Rate ({Math.round(parameters.vaccinationRate * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.vaccinationRate}
            onChange={(e) =>
              handleParameterChange("vaccinationRate", parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        {/* Initial Infected */}
        <div>
          <label>
            Initial Infected ({Math.round(parameters.initialInfected * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.initialInfected}
            onChange={(e) =>
              handleParameterChange("initialInfected", parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        {/* R0 */}
        <div>
          <label>R0 (Infection Rate): {parameters.R0}</label>
          <input
            type="number"
            min="0.5"
            max="5.0"
            step="0.1"
            value={parameters.R0}
            onChange={(e) =>
              handleParameterChange("R0", parseFloat(e.target.value))
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Isolation Rate */}
        <div>
          <label>
            Isolation Rate ({Math.round(parameters.isolationRate * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={parameters.isolationRate}
            onChange={(e) =>
              handleParameterChange("isolationRate", parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        {/* Recovery Rate */}
        <div>
          <label>
            Recovery Rate ({Math.round(parameters.recoveryRate * 100)}%)
          </label>
          <input
            type="range"
            min="0.01"
            max="1.0"
            step="0.01"
            value={parameters.recoveryRate}
            onChange={(e) =>
              handleParameterChange("recoveryRate", parseFloat(e.target.value))
            }
            style={{ width: "100%" }}
          />
        </div>

        {/* Days */}
        <div>
          <label>Days ({parameters.days})</label>
          <input
            type="number"
            min="1"
            max="60"
            value={parameters.days}
            onChange={(e) =>
              handleParameterChange("days", parseInt(e.target.value))
            }
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Population Size */}
        <div>
          <label>Population Size ({parameters.populationSize})</label>
          <input
            type="number"
            min="50"
            max="10000"
            step="50"
            value={parameters.populationSize}
            onChange={(e) =>
              handleParameterChange("populationSize", parseInt(e.target.value))
            }
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
