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
  const [populationVaccinated, setPopulationVaccinated] = useState(0.7);
  const [infectionProbability, setInfectionProbability] = useState(0.5);
  const [vaccinatedRecoveryRate, setVaccinatedRecoveryRate] = useState(0.5);
  const [unvaccinatedRecoveryRate, setUnvaccinatedRecoveryRate] = useState(0.1);
  const [peakInfectionDay, setPeakInfectionDay] = useState(5);
  const [totalDays, setTotalDays] = useState(30);
  const [populationSize, setPopulationSize] = useState(250);

  // Start simulation with user inputs
  const startSimulation = () => {
    const parameters = {
      vaccineEfficacy,
      populationVaccinated,
      infectionProbability,
      vaccinatedRecoveryRate,
      unvaccinatedRecoveryRate,
      peakInfectionDay,
      totalDays,
      populationSize,
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
                Vaccinated Recovery Rate (
                {Math.round(vaccinatedRecoveryRate * 100)}%)
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
