import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function HorizontalBarDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["Cambodia", "Japan", "China", "Singapore", "Thailand"],
      datasets: [
        {
          label: "This year",
          backgroundColor: documentStyle.getPropertyValue("--blue-700"),
          borderColor: documentStyle.getPropertyValue("--blue-700"),
          data: [65, 59, 60, 50, 56, 55, 40],
        },
        {
          label: "Last year",
          backgroundColor: documentStyle.getPropertyValue("--gray-500"),
          borderColor: documentStyle.getPropertyValue("--gray-500"),
          data: [30, 45, 25, 19, 40, 35, 60],
        },
      ],
    };
    const options = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
      <div className="d-flex justify-content-center flex-column border border-1 rounded-4 p-3">
        <div className="ms-3">
          <p className="fs-6 fw-bold">People Who Visited,</p>
          <p className="fs-6 text-secondary">(45%) than last year</p>
        </div>
        <hr/>
        <Chart type="bar" data={chartData} options={chartOptions}/>
      </div>
  );
}
