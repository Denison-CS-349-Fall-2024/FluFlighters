// "use client";

// import { useSearchParams } from "next/navigation";
// import dynamic from "next/dynamic";
// import { useEffect, useRef, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
// } from "chart.js";

// // Dynamically load react-p5 since p5.js relies on browser-specific features
// const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
//   ssr: false,
// });
// // Register Chart.js components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// // Define chart data type
// type ChartData = {
//   labels: number[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     fill: boolean;
//   }[];
// };

// export default function Simulation() {
//   const searchParams = useSearchParams();

//   const vaccineEfficacy = parseFloat(
//     searchParams.get("vaccineEfficacy") || "0.8"
//   );
//   const populationVaccinated = parseFloat(
//     searchParams.get("populationVaccinated") || "0.7"
//   );
//   const infectionProbability = parseFloat(
//     searchParams.get("infectionProbability") || "0.5"
//   );

//   const vaccinatedRecoveryRate = parseFloat(
//     searchParams.get("vaccinatedRecoveryRate") || "0.5"
//   );

//   const unvaccinatedRecoveryRate = parseFloat(
//     searchParams.get("unvaccinatedRecoveryRate") || "0.1"
//   );

//   const peakInfectionDay = parseInt(
//     searchParams.get("peakInfectionDay") || "5"
//   );

//   const totalDays = parseInt(searchParams.get("totalDays") || "30");

//   const populationSize = parseInt(searchParams.get("populationSize") || "250");

//   // Population array managed outside of React state for performance
//   const [people, setPeople] = useState<Person[]>([]);
//   //const populationSize = 100;
//   const p5Instance = useRef<any>(null); // Reference to p5.js instance

//   // Simulation speed control
//   const [speed, setSpeed] = useState(1); // 1x speed by default

//   // Chart data
//   const [chartData, setChartData] = useState<ChartData>({
//     labels: [], // Frame count (or time steps)
//     datasets: [
//       {
//         label: "Healthy",
//         data: [],
//         borderColor: "blue",
//         fill: false,
//       },
//       {
//         label: "Infected",
//         data: [],
//         borderColor: "red",
//         fill: false,
//       },
//       {
//         label: "Recovered",
//         data: [],
//         borderColor: "green",
//         fill: false,
//       },
//     ],
//   });
//   const frameCount = useRef(0); // Keep track of the simulation frames

//   // Person object representing each individual in the population
//   class Person {
//     x: number;
//     y: number;
//     status: string; // 'healthy', 'infected', 'recovered'
//     vaccinated: boolean;

//     constructor(x: number, y: number, vaccinated: boolean, status = "healthy") {
//       this.x = x;
//       this.y = y;
//       this.vaccinated = vaccinated;
//       this.status = status;
//     }

//     // Determine if a person can get infected
//     tryToInfect(p5: any, infectionRadius: number) {
//       if (this.status === "healthy") {
//         for (let other of people) {
//           if (other.status === "infected") {
//             // Check if this person is within infection radius
//             let d = p5.dist(this.x, this.y, other.x, other.y);
//             if (d < infectionRadius) {
//               // Check vaccination status and infection probability
//               if (!this.vaccinated || Math.random() > vaccineEfficacy) {
//                 // Random chance of infection
//                 if (Math.random() < infectionProbability) {
//                   this.status = "infected"; // This person gets infected
//                 }
//               }
//             }
//           }
//         }
//       }
//     }

//     move(p5: any) {
//       this.x += p5.random(-5, 5); // Increased movement
//       this.y += p5.random(-5, 5);
//       this.x = p5.constrain(this.x, 0, p5.width);
//       this.y = p5.constrain(this.y, 0, p5.height);
//     }

//     show(p5: any) {
//       if (this.status === "healthy") {
//         p5.fill(100, 200, 255); // blue for healthy
//       } else if (this.status === "infected") {
//         p5.fill(255, 100, 100); // red for infected
//       } else if (this.status === "recovered") {
//         p5.fill(0, 255, 0); // green for recovered
//       }
//       p5.ellipse(this.x, this.y, 20, 20);
//     }

//     // recover() {
//     //   if (this.status === "infected" && Math.random() < 0.01) {
//     //     this.status = "recovered";
//     //   }
//     // }
//     // new recover function needed

//     recover() {
//       if (this.status === "infected") {
//         const recoveryChance = this.vaccinated
//           ? vaccinatedRecoveryRate
//           : unvaccinatedRecoveryRate;
//         if (Math.random() < recoveryChance) {
//           this.status = "recovered";
//         }
//       }
//     }
//   }

//   // Initialize population once in useEffect
//   useEffect(() => {
//     if (people.length === 0) {
//       const newPeople: Person[] = [];
//       for (let i = 0; i < populationSize; i++) {
//         let x = Math.random() * 800;
//         let y = Math.random() * 600;
//         let vaccinated = Math.random() < populationVaccinated;
//         newPeople.push(new Person(x, y, vaccinated));
//       }
//       for (let i = 0; i < 50; i++) {
//         newPeople[i].status = "infected"; // setting to infected from start
//       }
//       setPeople(newPeople);
//     }
//   }, []); // Empty dependency array ensures people are initialized only once

//   // Function to update chart data
//   const updateChartData = (
//     healthy: number,
//     infected: number,
//     recovered: number,
//     frame: number
//   ) => {
//     setChartData((prevData) => ({
//       labels: [...prevData.labels, frame], // Append the new frame count
//       datasets: [
//         {
//           ...prevData.datasets[0],
//           data: [...prevData.datasets[0].data, healthy], // Append the new healthy count
//         },
//         {
//           ...prevData.datasets[1],
//           data: [...prevData.datasets[1].data, infected], // Append the new infected count
//         },
//         {
//           ...prevData.datasets[2],
//           data: [...prevData.datasets[2].data, recovered], // Append the new recovered count
//         },
//       ],
//     }));
//   };

//   // p5.js setup and draw functions
//   const setup = (p5: any, canvasParentRef: Element) => {
//     p5.createCanvas(800, 600).parent(canvasParentRef);
//     p5Instance.current = p5; // Save p5.js instance for future reference
//     p5.frameRate(30); // Set default frame rate
//   };

//   const draw = (p5: any) => {
//     p5.background(255);

//     let healthyCount = 0;
//     let infectedCount = 0;
//     let recoveredCount = 0;

//     // Render and update each person
//     people.forEach((person) => {
//       person.move(p5);
//       person.show(p5);
//       person.tryToInfect(p5, 50); // Infection radius is 50 pixels
//       person.recover();

//       // Count people by their status
//       if (person.status === "healthy") healthyCount++;
//       if (person.status === "infected") infectedCount++;
//       if (person.status === "recovered") recoveredCount++;
//     });

//     if (frameCount.current > totalDays * 30) {
//       p5.noLoop();
//     }
//     // Update the chart every frame
//     frameCount.current++;
//     updateChartData(
//       healthyCount,
//       infectedCount,
//       recoveredCount,
//       frameCount.current
//     );
//   };

//   // Handle speed changes using p5's frameRate()
//   const handleSpeedChange = () => {
//     if (speed === 1) {
//       setSpeed(2); // Speed up to 2x
//       p5Instance.current.frameRate(60); // Double the frame rate for 2x speed
//     } else if (speed === 2) {
//       setSpeed(4); // Speed up to 4x
//       p5Instance.current.frameRate(120); // Quadruple the frame rate for 4x speed
//     } else {
//       setSpeed(1); // Reset to 1x speed
//       p5Instance.current.frameRate(30); // Default frame rate
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       {/* Left: Simulation */}
//       <div>
//         <h2>Flu Simulation</h2>
//         <p>Vaccine Efficacy: {Math.round(vaccineEfficacy * 100)}%</p>
//         <p>Population Vaccinated: {Math.round(populationVaccinated * 100)}%</p>
//         <p>Infection Probability: {Math.round(infectionProbability * 100)}%</p>
//         <p>
//           {" "}
//           Vaccinated Recovery Rate: {Math.round(vaccinatedRecoveryRate * 100)}%
//         </p>
//         <p>
//           Unvaccinated Recovery Rate:{" "}
//           {Math.round(unvaccinatedRecoveryRate * 100)}%
//         </p>
//         <p>Peak Infection Day: {peakInfectionDay}</p>
//         <p>Total Days: {totalDays}</p>
//         <p>Population Size: {populationSize}</p>

//         <button onClick={handleSpeedChange}>
//           {speed === 1
//             ? "Speed Up (2x)"
//             : speed === 2
//             ? "Speed Up (4x)"
//             : "Reset Speed (1x)"}
//         </button>

//         <Sketch setup={setup} draw={draw} />
//       </div>

//       {/* Right: Line Graph */}
//       <div style={{ width: "400px" }}>
//         <h3>Status Over Time</h3>
//         <Line data={chartData} />
//       </div>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

// "use client";

// import { useSearchParams } from "next/navigation";
// import dynamic from "next/dynamic";
// import { useEffect, useRef, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
// } from "chart.js";
// import Modal from 'react-modal';

// // Dynamically load react-p5 since p5.js relies on browser-specific features
// const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
//   ssr: false,
// });

// // Register Chart.js components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// // Define chart data type
// type ChartData = {
//   labels: number[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     fill: boolean;
//     borderDash?: number[];
//   }[];
// };

// export default function Simulation() {

//   const [showModal, setShowModal] = useState(false);
//   const [graphs, setGraphs] = useState([]);
//   const searchParams = useSearchParams();

//   const addNewGraph = (newParams)=> {
//     const newGraphData = runSimulation(newParams);
//     setGraphs([...graphs, newGraphData]);
//     setShowModal(false);
//   }

//   // Extract parameters from URL
//   const vaccineEfficacy = parseFloat(
//     searchParams.get("vaccineEfficacy") || "0.8"
//   );
//   const populationVaccinated = parseFloat(
//     searchParams.get("populationVaccinated") || "0.7"
//   );
//   const infectionProbability = parseFloat(
//     searchParams.get("infectionProbability") || "0.5"
//   );
//   const vaccinatedRecoveryRate = parseFloat(
//     searchParams.get("vaccinatedRecoveryRate") || "0.5"
//   );
//   const unvaccinatedRecoveryRate = parseFloat(
//     searchParams.get("unvaccinatedRecoveryRate") || "0.1"
//   );
//   const peakInfectionDay = parseInt(
//     searchParams.get("peakInfectionDay") || "5"
//   );
//   const totalDays = parseInt(searchParams.get("totalDays") || "30");
//   const populationSize = parseInt(searchParams.get("populationSize") || "100");

//   // State for simulation data
//   const [days, setDays] = useState<number[]>([]);
//   const [susceptiblePopulation, setSusceptiblePopulation] = useState<number[]>(
//     []
//   );
//   const [infectedPopulation, setInfectedPopulation] = useState<number[]>([]);
//   const [recoveredVaccinated, setRecoveredVaccinated] = useState<number[]>([]);
//   const [recoveredUnvaccinated, setRecoveredUnvaccinated] = useState<number[]>(
//     []
//   );
//   const [totalRecoveredPopulation, setTotalRecoveredPopulation] = useState<
//     number[]
//   >([]);
//   const [speed, setSpeed] = useState(1); // 1x speed by default

//   const p5Instance = useRef<any>(null); // Reference to p5.js instance

//   // Chart data
//   const [chartData, setChartData] = useState<ChartData>({
//     labels: [], // Frame count (or time steps)
//     datasets: [
//       {
//         label: "Susceptible",
//         data: [],
//         borderColor: "orange",
//         fill: false,
//       },
//       {
//         label: "Infected",
//         data: [],
//         borderColor: "red",
//         fill: false,
//       },
//       {
//         label: "Total Recovered",
//         data: [],
//         borderColor: "green",
//         fill: false,
//       },
//       {
//         label: "Recovered Vaccinated",
//         data: [],
//         borderColor: "blue",
//         borderDash: [5, 5],
//         fill: false,
//       },
//       {
//         label: "Recovered Unvaccinated",
//         data: [],
//         borderColor: "purple",
//         borderDash: [5, 5],
//         fill: false,
//       },
//     ],
//   });

//   // Initialize and calculate flu model data
//   useEffect(() => {
//     const daysArray = Array.from(
//       { length: 100 },
//       (_, i) => (i / 100) * totalDays
//     );
//     setDays(daysArray);

//     const vaccinatedPopulation = populationSize * populationVaccinated;
//     const unvaccinatedPopulation = populationSize * (1 - populationVaccinated);

//     // Calculate recovered population
//     const recoveredVaccinatedArray = daysArray.map(
//       (day) =>
//         (1 / (1 + Math.exp(-vaccinatedRecoveryRate * (day - totalDays / 2)))) *
//         vaccinatedPopulation
//     );

//     const recoveredUnvaccinatedArray = daysArray.map(
//       (day) =>
//         (1 /
//           (1 + Math.exp(-unvaccinatedRecoveryRate * (day - totalDays / 2)))) *
//         unvaccinatedPopulation
//     );

//     const infectedArray = daysArray.map(
//       (day) =>
//         Math.exp(-infectionProbability * (day - peakInfectionDay) ** 2) *
//         populationSize
//     );

//     const recoveredArray = recoveredVaccinatedArray.map(
//       (rv, i) => rv + recoveredUnvaccinatedArray[i]
//     );

//     const susceptibleArray = daysArray.map((_, i) => {
//       const susceptibleValue =
//         populationSize - (infectedArray[i] + recoveredArray[i]);
//       return Math.max(susceptibleValue, 0); // Ensure no negative values
//     });

//     // Set calculated state variables
//     setSusceptiblePopulation(susceptibleArray);
//     setInfectedPopulation(infectedArray);
//     setRecoveredVaccinated(recoveredVaccinatedArray);
//     setRecoveredUnvaccinated(recoveredUnvaccinatedArray);
//     setTotalRecoveredPopulation(recoveredArray);
//   }, [
//     infectionProbability,
//     vaccinatedRecoveryRate,
//     unvaccinatedRecoveryRate,
//     populationVaccinated,
//     peakInfectionDay,
//     totalDays,
//     populationSize,
//   ]);

//   // Update chart data when state changes
//   useEffect(() => {
//     setChartData({
//       labels: days,
//       datasets: [
//         {
//           label: "Susceptible",
//           data: susceptiblePopulation,
//           borderColor: "orange",
//           fill: false,
//         },
//         {
//           label: "Infected",
//           data: infectedPopulation,
//           borderColor: "red",
//           fill: false,
//         },
//         {
//           label: "Total Recovered",
//           data: totalRecoveredPopulation,
//           borderColor: "green",
//           fill: false,
//         },
//         {
//           label: "Recovered Vaccinated",
//           data: recoveredVaccinated,
//           borderColor: "blue",
//           borderDash: [5, 5],
//           fill: false,
//         },
//         {
//           label: "Recovered Unvaccinated",
//           data: recoveredUnvaccinated,
//           borderColor: "purple",
//           borderDash: [5, 5],
//           fill: false,
//         },
//       ],
//     });
//   }, [
//     days,
//     susceptiblePopulation,
//     infectedPopulation,
//     totalRecoveredPopulation,
//     recoveredVaccinated,
//     recoveredUnvaccinated,
//   ]);

//   // p5.js setup and draw functions
//   const setup = (p5: any, canvasParentRef: Element) => {
//     p5.createCanvas(800, 600).parent(canvasParentRef);
//     p5Instance.current = p5;
//     p5.frameRate(30);
//   };

//   const draw = (p5: any) => {
//     p5.background(255);
//   };

//   // Handle speed changes using p5's frameRate()
//   const handleSpeedChange = () => {
//     if (speed === 1) {
//       setSpeed(2);
//       p5Instance.current.frameRate(60);
//     } else if (speed === 2) {
//       setSpeed(4);
//       p5Instance.current.frameRate(120);
//     } else {
//       setSpeed(1);
//       p5Instance.current.frameRate(30);
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       {/* Left: Simulation */}
//       <div>
//         <h2>Flu Simulation</h2>
//         <p>Vaccine Efficacy: {Math.round(vaccineEfficacy * 100)}%</p>
//         <p>Population Vaccinated: {Math.round(populationVaccinated * 100)}%</p>
//         <p>Infection Probability: {Math.round(infectionProbability * 100)}%</p>
//         <p>
//           Vaccinated Recovery Rate: {Math.round(vaccinatedRecoveryRate * 100)}%
//         </p>
//         <p>
//           Unvaccinated Recovery Rate:{" "}
//           {Math.round(unvaccinatedRecoveryRate * 100)}%
//         </p>
//         <p>Peak Infection Day: {peakInfectionDay}</p>
//         <p>Total Days: {totalDays}</p>
//         <p>Population Size: {populationSize}</p>

//         <button onClick={handleSpeedChange}>
//           {speed === 1
//             ? "Speed Up (2x)"
//             : speed === 2
//             ? "Speed Up (4x)"
//             : "Reset Speed (1x)"}
//         </button>

//         <Sketch setup={setup} draw={draw} />
//       </div>

//       {/* Right: Line Graph */}
//       <div style={{ width: "400px" }}>
//         <h3>Status Over Time</h3>
//         <Line data={chartData} />
//       </div>

//   <button onClick={() => setShowModal(true)}>Add New</button>

//       {/* Modal for adding new graph */}
//       <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
//         <h2>Enter New Parameters</h2>
//         <ParameterForm onSubmit={addNewGraph} closeModal={() => setShowModal(false)} />
//       </Modal>

//       {/* Display all graphs */}
//       {graphs.map((graph, index) => (
//         <div key={index}>
//           <h3>Graph {index + 1}</h3>
//           <Line data={graph} />
//         </div>
//       ))}
//     </div>
//   );

// }

//------------------------------------------------
//------------------------------------------------

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, useRef } from "react";
// import SimulationControls from "./components/SimulationControls";
// import PopulationCanvas from "./components/PopulationCanvas";
// import StatusChart from "./components/StatusChart";
// import Person from "./components/Person";

// type ChartData = {
//   labels: number[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     fill: boolean;
//   }[];
// };

// export default function Simulation() {
//   const searchParams = useSearchParams();

//   const vaccineEfficacy = parseFloat(
//     searchParams.get("vaccineEfficacy") || "0.8"
//   );
//   const populationVaccinated = parseFloat(
//     searchParams.get("populationVaccinated") || "0.7"
//   );
//   const infectionProbability = parseFloat(
//     searchParams.get("infectionProbability") || "0.5"
//   );
//   const vaccinatedRecoveryRate = parseFloat(
//     searchParams.get("vaccinatedRecoveryRate") || "0.5"
//   );
//   const unvaccinatedRecoveryRate = parseFloat(
//     searchParams.get("unvaccinatedRecoveryRate") || "0.1"
//   );
//   const peakInfectionDay = parseInt(
//     searchParams.get("peakInfectionDay") || "5"
//   );
//   const totalDays = parseInt(searchParams.get("totalDays") || "30");
//   const populationSize = parseInt(searchParams.get("populationSize") || "250");

//   const [people, setPeople] = useState<Person[]>([]);
//   const [speed, setSpeed] = useState(1);
//   const [chartData, setChartData] = useState<ChartData>({
//     labels: [],
//     datasets: [
//       { label: "Healthy", data: [], borderColor: "blue", fill: false },
//       { label: "Infected", data: [], borderColor: "red", fill: false },
//       { label: "Recovered", data: [], borderColor: "green", fill: false },
//     ],
//   });

//   const updateChartData = (
//     healthy: number,
//     infected: number,
//     recovered: number,
//     frame: number
//   ) => {
//     setChartData((prevData) => ({
//       labels: [...prevData.labels, frame],
//       datasets: [
//         {
//           ...prevData.datasets[0],
//           data: [...prevData.datasets[0].data, healthy],
//         },
//         {
//           ...prevData.datasets[1],
//           data: [...prevData.datasets[1].data, infected],
//         },
//         {
//           ...prevData.datasets[2],
//           data: [...prevData.datasets[2].data, recovered],
//         },
//       ],
//     }));
//   };

//   const handleSpeedChange = () =>
//     setSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1));

//   useEffect(() => {
//     const newPeople: Person[] = [];
//     for (let i = 0; i < populationSize; i++) {
//       const x = Math.random() * 800;
//       const y = Math.random() * 600;
//       const vaccinated = Math.random() < populationVaccinated;
//       newPeople.push(new Person(x, y, vaccinated));
//     }
//     setPeople(newPeople);
//   }, [populationSize, populationVaccinated]);

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <SimulationControls
//         vaccineEfficacy={vaccineEfficacy}
//         populationVaccinated={populationVaccinated}
//         infectionProbability={infectionProbability}
//         vaccinatedRecoveryRate={vaccinatedRecoveryRate}
//         unvaccinatedRecoveryRate={unvaccinatedRecoveryRate}
//         peakInfectionDay={peakInfectionDay}
//         totalDays={totalDays}
//         populationSize={populationSize}
//         speed={speed}
//         handleSpeedChange={handleSpeedChange}
//       />
//       <PopulationCanvas
//         people={people}
//         vaccineEfficacy={vaccineEfficacy}
//         infectionProbability={infectionProbability}
//         vaccinatedRecoveryRate={vaccinatedRecoveryRate}
//         unvaccinatedRecoveryRate={unvaccinatedRecoveryRate}
//         totalDays={totalDays}
//         updateChartData={updateChartData}
//       />
//       <StatusChart chartData={chartData} />
//     </div>
//   );
// }

//---------

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SimulationControls from "./components/SimulationControls";
import PopulationCanvas from "./components/PopulationCanvas";
import StatusChart from "./components/StatusChart";
import Person from "./components/Person";

type ChartData = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
  }[];
};

export default function Simulation() {
  const searchParams = useSearchParams();

  // Parameter retrieval
  const vaccineEfficacy = parseFloat(
    searchParams.get("vaccineEfficacy") || "0.8"
  );
  const populationVaccinated = parseFloat(
    searchParams.get("populationVaccinated") || "0.7"
  );
  const infectionProbability = parseFloat(
    searchParams.get("infectionProbability") || "0.5"
  );
  const vaccinatedRecoveryRate = parseFloat(
    searchParams.get("vaccinatedRecoveryRate") || "0.5"
  );
  const unvaccinatedRecoveryRate = parseFloat(
    searchParams.get("unvaccinatedRecoveryRate") || "0.1"
  );
  const peakInfectionDay = parseInt(
    searchParams.get("peakInfectionDay") || "5"
  );
  const totalDays = parseInt(searchParams.get("totalDays") || "30");
  const populationSize = parseInt(searchParams.get("populationSize") || "250");

  // State management
  const [people, setPeople] = useState<Person[]>([]);
  const [speed, setSpeed] = useState(1);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      { label: "Healthy", data: [], borderColor: "blue", fill: false },
      { label: "Infected", data: [], borderColor: "red", fill: false },
      { label: "Recovered", data: [], borderColor: "green", fill: false },
    ],
  });

  // Chart data update function
  const updateChartData = (
    healthy: number,
    infected: number,
    recovered: number,
    frame: number
  ) => {
    setChartData((prevData) => ({
      labels: [...prevData.labels, frame],
      datasets: [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, healthy],
        },
        {
          ...prevData.datasets[1],
          data: [...prevData.datasets[1].data, infected],
        },
        {
          ...prevData.datasets[2],
          data: [...prevData.datasets[2].data, recovered],
        },
      ],
    }));
  };

  // Speed control function
  const handleSpeedChange = () =>
    setSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1));

  // Initialize population
  useEffect(() => {
    const newPeople: Person[] = [];
    for (let i = 0; i < populationSize; i++) {
      const x = Math.random() * 800;
      const y = Math.random() * 600;
      const vaccinated = Math.random() < populationVaccinated;
      newPeople.push(new Person(x, y, vaccinated));
    }
    setPeople(newPeople);
  }, [populationSize, populationVaccinated]);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left Section: Controls and Canvas */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <SimulationControls
          vaccineEfficacy={vaccineEfficacy}
          populationVaccinated={populationVaccinated}
          infectionProbability={infectionProbability}
          vaccinatedRecoveryRate={vaccinatedRecoveryRate}
          unvaccinatedRecoveryRate={unvaccinatedRecoveryRate}
          peakInfectionDay={peakInfectionDay}
          totalDays={totalDays}
          populationSize={populationSize}
          speed={speed}
          handleSpeedChange={handleSpeedChange}
        />
        <PopulationCanvas
          people={people}
          vaccineEfficacy={vaccineEfficacy}
          infectionProbability={infectionProbability}
          vaccinatedRecoveryRate={vaccinatedRecoveryRate}
          unvaccinatedRecoveryRate={unvaccinatedRecoveryRate}
          totalDays={totalDays}
          updateChartData={updateChartData}
        />
      </div>

      {/* Right Section: Status Chart */}
      <div style={{ flex: 1 }}>
        <StatusChart chartData={chartData} />
      </div>
    </div>
  );
}
