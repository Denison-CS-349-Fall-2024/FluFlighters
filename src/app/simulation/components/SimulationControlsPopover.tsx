// app/simulation/components/SimulationControlsPopover.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";

interface SimulationControlsPopoverProps {
  onStartSimulation: (parameters: any) => void;
}

const SimulationControlsPop: React.FC<SimulationControlsPopoverProps> = ({
  onStartSimulation,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // State variables for user inputs
  const [vaccineEfficacy, setVaccineEfficacy] = useState(0.8);
  const [vaccinationRate, setVaccinationRate] = useState(0.7);
  const [R0, setR0] = useState(2.0);
  const [contagiousFactorForIso, setContagiousFactorForIso] = useState(0.1);
  const [contagiousFactorForUniso, setContagiousFactorForUniso] = useState(0.3);
  const [isolationRate, setIsolationRate] = useState(0.5);
  const [recoveryRate, setRecoveryRate] = useState(0.1);
  const [days, setDays] = useState(10);
  const [populationSize, setPopulationSize] = useState(250);
  const [initialInfected, setInitialInfected] = useState(0.1);

  // Start simulation with user inputs
  const startSimulation = () => {
    const parameters = {
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
    };
    onStartSimulation(parameters);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={{
            backgroundColor: "#e0e0e0",
            color: "#000",
          }}
        >
          <Plus />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:max-w-[425px]">
        <div style={{ maxHeight: "500px", overflowY: "auto", padding: "20px" }}>
          <h4 className="font-medium leading-none">Edit Simulation Parameters</h4>
          <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
            {/* Vaccine Efficacy */}
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

            {/* Vaccination Rate */}
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

            {/* Vaccination Rate */}
            <div>
              <label>Inital Infected ({Math.round(initialInfected * 100)}%)</label>
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

            {/* R0 */}
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

            {/* Contagious Factor (Isolated) */}
            <div>
              <label>Contagious Factor (Isolated): {contagiousFactorForIso}</label>
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

            {/* Contagious Factor (Unisolated) */}
            <div>
              <label>Contagious Factor (Unisolated): {contagiousFactorForUniso}</label>
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

            {/* Isolation Rate */}
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

            {/* Recovery Rate */}
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

            {/* Days */}
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

            {/* Population Size */}
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
        </div>
        <div className="flex justify-end mt-4">
          <Button
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
            }}
          >
            Start Simulation
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SimulationControlsPop;
