import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Регистрация компонентов Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const MultiLineChart = () => {
  // Генерация волнообразных данных
  const generateWaveData = (base, fluctuation) => {
    return Array.from({ length: 12 }, (_, i) =>
      base + i * 10 + Math.sin(i / 2) * fluctuation
    );
  };

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ], // Подписи оси X
    datasets: [
      {
        label: "Dataset 1",
        data: generateWaveData(10, 5),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: generateWaveData(20, 7),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "Dataset 3",
        data: generateWaveData(15, 10),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Dataset 4",
        data: generateWaveData(25, 8),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
      },
      {
        label: "Dataset 5",
        data: generateWaveData(30, 6),
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4,
      },
      {
        label: "Dataset 6",
        data: generateWaveData(5, 12),
        borderColor: "rgba(201, 203, 207, 1)",
        backgroundColor: "rgba(201, 203, 207, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Wave-like Multi-Line Chart with 12 Points",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200,200,200,0.3)",
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div style={{ width: "1200px", height: "600px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
