import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Регистрация компонентов Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const VerticalDoughnutChart = () => {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    datasets: [
      {
        data: [36.68, 8.41, 4.07, 12.22],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF5722", "#FFC107"],
        hoverBackgroundColor: ["#66BB6A", "#42A5F5", "#FF7043", "#FFD54F"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    maintainAspectRatio: false, // Отключаем фиксированные пропорции
    aspectRatio: 0.5, // Устанавливаем вытянутую форму
  };

  return (
    <div
      style={{
        width: "400px", // Задаем ширину
        height: "600px", // Задаем высоту
        margin: "0 auto",
        backgroundColor: "#10C298", // Новый фон
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ color: "white", textAlign: "center" }}>Vertical Doughnut Chart</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default VerticalDoughnutChart;
