import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement, // Регистрируем элемент "arc"
  Tooltip,
  Legend,
} from "chart.js";

// Регистрация компонентов Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartExample = () => {
  const data1 = {
    labels: ["Division 1", "Division 2", "Division 3"],
    datasets: [
      {
        data: [77, 54, 39], // Процентное значение для каждого сектора
        backgroundColor: ["#4CAF50", "#2196F3", "#FF5722"],
        hoverBackgroundColor: ["#66BB6A", "#42A5F5", "#FF7043"],
      },
    ],
  };

  const data2 = {
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
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {/* Первый чарт */}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#10C298", // Новый фон для первого графика
          borderRadius: "10px",
        }}
      >
        <h3>Progress Pie Chart Example</h3>
        <Doughnut data={data1} options={options} />
      </div>

      {/* Второй чарт */}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#10C298", // Новый фон для второго графика
          borderRadius: "10px",
        }}
      >
        <h3>Pie Chart Example</h3>
        <Doughnut data={data2} options={options} />
        <p style={{ marginTop: "10px" }}>
          Total Value: <strong>73,276,931.28</strong>
        </p>
      </div>
    </div>
  );
};

export default PieChartExample;
