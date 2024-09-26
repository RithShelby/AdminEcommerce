import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function PieChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      datasets: [
        {
          data: [100, 325, 245, 200],
          backgroundColor: [
            documentStyle.getPropertyValue("--gray-400"),
            documentStyle.getPropertyValue("--blue-900"),
            documentStyle.getPropertyValue("--gray-300"),
            documentStyle.getPropertyValue("--blue-800"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--gray-400"),
            documentStyle.getPropertyValue("--blue-900"),
            documentStyle.getPropertyValue("--gray-300"),
            documentStyle.getPropertyValue("--blue-800"),
          ],
        },
      ],
      labels: ["Jacket", "Hoodie", "T-Shirt", "Jean"],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
      <div className="flex justify-content-center rounded-4 border border-1">
        <p className="fw-bold fs-5 m-3">Current Sold</p>
        <hr/>
        <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            className="w-100 p-4"
        />
      </div>
  );
}
