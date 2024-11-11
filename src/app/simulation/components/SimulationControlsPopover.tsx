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
import { SimulationParameters, defaultParameters } from "../../simulationParameters";

interface SimulationControlsPopoverProps {
  onStartSimulation: (parameters: SimulationParameters) => void;
}

const SimulationControlsPop: React.FC<SimulationControlsPopoverProps> = ({
  onStartSimulation,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [parameters, setParameters] = useState<SimulationParameters>(defaultParameters);

  const handleParameterChange = (
    key: keyof SimulationParameters,
    value: number | [number, number]
  ) => {
    setParameters({
      ...parameters,
      [key]: value,
    });
  };

  const startSimulation = () => {
    onStartSimulation(parameters);
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={{ backgroundColor: "#e0e0e0", color: "#000" }}
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

            {/* Contact Range */}
            <div>
              <label>
                Contact Range: {parameters.contactRange[0]} - {parameters.contactRange[1]}
              </label>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={parameters.contactRange[0]}
                  onChange={(e) =>
                    handleParameterChange("contactRange", [
                      parseInt(e.target.value),
                      parameters.contactRange[1],
                    ])
                  }
                  style={{
                    width: "50%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={parameters.contactRange[1]}
                  onChange={(e) =>
                    handleParameterChange("contactRange", [
                      parameters.contactRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  style={{
                    width: "50%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </div>

            {/* Area Size */}
            <div>
              <label>Area Size ({parameters.areaSize} units)</label>
              <input
                type="number"
                min="10"
                max="200"
                value={parameters.areaSize}
                onChange={(e) =>
                  handleParameterChange("areaSize", parseInt(e.target.value))
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
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SimulationControlsPop;
