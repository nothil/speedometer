// create a react component for user to enter their name before using the speedometer
import React from "react";
// import "./user.css";
const User = () => {
  // the entered name should be stored in a variable and added to welcome message

  // answer: use useState hook to store the name in a variable

  return (
    <div className="user">
      <div className="user-container">
        <div className="user-title">
          <h1>Enter your name</h1>
        </div>
        <div className="user-input">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="user-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default User;
