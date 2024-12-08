// app/simulation/components/StatusChart.tsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import { useMemo } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

// Define the line styles for each dataset
const lineStyles: Record<string, number[]> = {
  Susceptible: [], // Solid line
  Infected: [10, 5], // Dashed line
  Recovered: [2, 2], // Dotted line
};

type StatusChartProps = {
  chartData: {
    labels: number[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  };
};

export default function StatusChart({ chartData }: StatusChartProps) {
  // Enhance the chart data with borderDash based on the label
  const enhancedChartData = useMemo(() => {
    const datasets = chartData.datasets.map((dataset) => ({
      ...dataset,
      borderDash: lineStyles[dataset.label] || [],
      borderWidth: 2,
      pointRadius: 3,
      // Optionally, you can keep the borderColor for better visibility
      // or set it to a default color if you prefer pure line styles.
    }));
    return { ...chartData, datasets };
  }, [chartData]);

  // Custom Legend Component
  const CustomLegend = () => {
    return (
      <div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
        {chartData.datasets.map((dataset) => (
          <div key={dataset.label} style={{ display: "flex", alignItems: "center" }}>
            <svg width="24" height="24">
              <line
                x1="0"
                y1="12"
                x2="24"
                y2="12"
                stroke={dataset.borderColor}
                strokeWidth="2"
                strokeDasharray={lineStyles[dataset.label].join(",") || "0"}
              />
            </svg>
            <span style={{ marginLeft: "8px", color: "#555" }}>{dataset.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Status Over Time</h3>
      <CustomLegend />
      <div style={{ flexGrow: 1 }}>
        <Line
          data={enhancedChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // Hide the default legend
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Days",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Number of People",
                },
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
