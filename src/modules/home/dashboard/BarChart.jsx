import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
const BarChart = () => {
  const [data] = useState({
    labels: [
      "Users",
      "T-shirts",
      "Hoddies",
      "Skirts",
      "Cowbow",
      "Underwear",
      "Sports T-shirts",
    ],
    datasets: [
      {
        label: "Last month data",
        backgroundColor: "lightGray",
        data: [20, 50, 80, 70, 56, 55, 40],
      },
      {
        label: "This month data",
        backgroundColor: "#3a86ff",
        data: [40, 60, 70, 90, 96, 27, 100],
      },
    ],
  });

  return (
    <CDBContainer>
      <h4 className="mt-5">Weekly Sale</h4>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default BarChart;
