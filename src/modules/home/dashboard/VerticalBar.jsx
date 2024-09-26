import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function VerticalBarDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Last 5 Month",
          backgroundColor: documentStyle.getPropertyValue("--blue-800"),
          borderColor: documentStyle.getPropertyValue("--blue-800"),
          data: [40,30,50,60,70],
        },
        {
          label: "This 5 Month",
          backgroundColor: documentStyle.getPropertyValue("--gray-400"),
          borderColor: documentStyle.getPropertyValue("--gray-400"),
          data: [50,68,60,85, 86],
        },
      ],
    };
    const options = {
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
      <div className="border border-1 rounded-4">
        <p className="fw-bold fs-5 m-3">Website visits</p>
        <hr/>
        <Chart
            className="p-4"
            type="bar"
            data={chartData}
            options={chartOptions}
            op
        />
      </div>
  );
}
