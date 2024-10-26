import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

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
  return (
    <div style={{ width: "400px" }}>
      <h3>Status Over Time</h3>
      <Line data={chartData} />
    </div>
  );
}
