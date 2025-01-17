// app/simulation/components/SimulationControlsPopover.tsx

/*
SimulationControlsPopover.tsx


*/
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import {
  SimulationParameters,
  defaultParameters,
} from "../../simulationParameters";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const tooltips = {
  vaccineEfficacy:
    "Effectiveness of the vaccine in preventing infection, reducing the infection rate in vaccinated individuals.",
  vaccinationRate:
    "Proportion of the population that is vaccinated, which affects susceptibility.",
  initialInfected:
    "Initial count of infected individuals at the start. Sets the starting point of the infection curve.",
  R0: "Basic reproduction number, representing the average number of people one infected individual will infect if no one is immune.",
  isolationRate:
    "Proportion of the population that isolates to reduce infection spread. Lower isolation leads to higher infection spread.",
  recoveryRate:
    "Rate at which infected individuals recover each day (proportion per day).",
  days: "Duration of the simulation in days",
  contactRange:
    "The range within which an infected person can spread the disease.",
};

interface SimulationControlsPopoverProps {
  onStartSimulation: (parameters: SimulationParameters) => void;
}

const SimulationControlsPop: React.FC<SimulationControlsPopoverProps> = ({
  onStartSimulation,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [parameters, setParameters] =
    useState<SimulationParameters>(defaultParameters);

  const handleParameterChange = (
    key: keyof SimulationParameters,
    value: number
  ) => {
    if (key === "populationSize") return; // Ignore changes to these fields
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
          <h4 className="font-medium leading-none">
            Edit Simulation Parameters
          </h4>
          <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
            {/* Vaccine Efficacy */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                  Vaccine Efficacy (
                  {Math.round(parameters.vaccineEfficacy * 100)}%)
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.vaccineEfficacy}</TooltipContent>
                </Tooltip>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={parameters.vaccineEfficacy}
                onChange={(e) =>
                  handleParameterChange(
                    "vaccineEfficacy",
                    parseFloat(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Vaccination Rate */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                  Vaccination Rate (
                  {Math.round(parameters.vaccinationRate * 100)}%)
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.vaccinationRate}</TooltipContent>
                </Tooltip>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={parameters.vaccinationRate}
                onChange={(e) =>
                  handleParameterChange(
                    "vaccinationRate",
                    parseFloat(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Initial Infected */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                  Initial Infected (
                  {Math.round(parameters.initialInfected * 100)}%)
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.initialInfected}</TooltipContent>
                </Tooltip>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={parameters.initialInfected}
                onChange={(e) =>
                  handleParameterChange(
                    "initialInfected",
                    parseFloat(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* R0 */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>R0 (Infection Rate): {parameters.R0}</label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.R0}</TooltipContent>
                </Tooltip>
              </div>
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                  Isolation Rate ({Math.round(parameters.isolationRate * 100)}%)
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.isolationRate}</TooltipContent>
                </Tooltip>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={parameters.isolationRate}
                onChange={(e) =>
                  handleParameterChange(
                    "isolationRate",
                    parseFloat(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Recovery Rate */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                  Recovery Rate ({Math.round(parameters.recoveryRate * 100)}%)
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.recoveryRate}</TooltipContent>
                </Tooltip>
              </div>
              <input
                type="range"
                min="0.01"
                max="1.0"
                step="0.01"
                value={parameters.recoveryRate}
                onChange={(e) =>
                  handleParameterChange(
                    "recoveryRate",
                    parseFloat(e.target.value)
                  )
                }
                style={{ width: "100%" }}
              />
            </div>

            {/* Days */}
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label>Days ({parameters.days})</label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info
                      style={{ marginLeft: "8px", cursor: "pointer" }}
                      size={16}
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tooltips.days}</TooltipContent>
                </Tooltip>
              </div>
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
