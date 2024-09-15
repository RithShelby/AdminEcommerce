import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const doughnutRef = useRef(null);

  useEffect(() => {
    const doughnutCtx = doughnutRef.current;
    const data = {
      labels: ["T-shirt", "Hoddies"],
      datasets: [
        {
          label: "Dataset 1",
          data: [60, 40], // Sample data
          backgroundColor: ["lightGray", "#3a86ff"],
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    };

    const doughnutChart = new Chart(doughnutCtx, {
      type: "doughnut",
      data: data,
      options: options,
    });

    return () => {
      doughnutChart.destroy();
    };
  }, []);

  return (
    <div>
      <h4>Best Selling Products</h4>
      <canvas ref={doughnutRef}></canvas>
    </div>
  );
};

export default DoughnutChart;
