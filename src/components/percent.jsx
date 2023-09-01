import React from "react";
import "./percent.css";

const Percent = () => {
  const numbers = [0, 10, 25, 35, 50, 65, 75, 85, 100];

  return (
    <div className="clock">
      {numbers.map((number) => (
        <div key={number} className={`number nums-${number}`}>
          {number}%
        </div>
      ))}
      <div className="speed-left">
        <h2>55%</h2>
        <p>Estimated</p>
        <p>KPI</p>
      </div>
      <div className="sales">
        <p>DIVISION</p>
        <p>SALES</p>
      </div>
    </div>
  );
};

export default Percent;
