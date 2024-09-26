import React, { useState, useEffect } from "react";
import { CiTimer } from "react-icons/ci";
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div className=" text-center lh-1">
      <p className="fw-bold fs-5 ms-3">Current Date and Time</p>
      <div className="d-flex  justify-content-center ">
        {" "}
        <CiTimer className="fs-5 me-3 " />
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CurrentDate;
