import React from "react";
import "./clockNumbers.css";

const ClockNumbers = () => {
  const numbers = [0, 25, 50, 100, 200, 300, 400, 500, 600];

  return (
    <div className="clock">
      {numbers.map((number) => (
        <div key={number} className={`number number-${number}`}>
          {number}m
        </div>
      ))}
      <div className="speed-left">
        <h2>250</h2>
        <p>Marquis</p>
      </div>
    </div>
  );
};

export default ClockNumbers;
