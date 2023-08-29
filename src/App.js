// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

// import a component from another file
// import { User } from "./user.js";

import React from "react";
import Icons from "./assets/another.js";
import Right from "./assets/rightbagroung.js";
import path from "./assets/groupimage.png";
import RightIndicator from "./assets/RightIndicator.svg";
import LeftIndicator from "./assets/leftIndicator.svg";
import Wifi from "./assets/Wifi.svg";
import Music from "./assets/Music.svg";
import Phone from "./assets/Phone.svg";
import Location from "./assets/Location.svg";
import Mic from "./assets/Mic.svg";
import Bluetooth from "./assets/Bluetooth.svg";
import user from "./assets/user.svg";
import Arrow from "./assets/arrow.svg";
import image from "./assets/GoldOutline.png";
import Loader from "./assets/loder.jsx";

function App() {
  const date = new Date();
  const day = date.getDate();

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  const year = date.getFullYear();

  const time = date.toLocaleTimeString();
  const fullDate = day + " " + month + " " + year + " " + time;

  console.log(fullDate);
  console.log(time);

  const daysInMonth = (months, year) => {
    return new Date(year, months, 0).getDate();
  };

  // const ascendingCountAnimation = () => {
  //   let count = 0;
  //   const counter = setInterval(() => {
  //     count++;
  //     console.log(count);
  //     if (count === 100) {
  //       clearInterval(counter);
  //     }
  //   }, 30);
  // };

  // svg loader animation
  // const loaderAnimation = () => {
  //   let count = 0;
  //   const counter = setInterval(() => {
  //     count++;
  //     console.log(count);
  //     if (count === 100) {
  //       clearInterval(counter);
  //     }
  //   }, 30);

  //   const loader = document.querySelector(".loader");
  //   loader.style.display = "none";
  // };

  // loaderAnimation();

  // ascendingCountAnimation();

  const daysLeft = daysInMonth(month, year) - day;
  console.log(daysLeft);

  return (
    <div className="App">
      <div className="grid-container">
        <div className="row">
          <img style={{ width: 884 }} src={image} alt="" />
          <div className="first">
            <Icons />

            <div className="loader-spin">
              <Loader />
            </div>

            <div className="speed-left">
              <h2>250</h2>
              <p>Marquis</p>
            </div>
            <div className="percent">
              <p>24%</p>
              {/* <p>0</p>
              <p>25m</p>

              <p>50m</p>

              <p>400m</p>

              <p>600m</p>

              <p>100m</p> */}
            </div>

            <div className="progress-bar">
              <div className="progress"></div>

              <div className="progress-bar-text">
                <p>0</p>
                <p>100</p>

                <p>50</p>

                <p>75</p>
              </div>
            </div>

            <div className="ind-left">
              <img src={LeftIndicator} alt="" />
            </div>
          </div>
          <div className="second">
            <div className="date-time">
              <p style={{ padding: 7 }}>28c</p>
              <p style={{ padding: 7 }}>{fullDate}</p>
            </div>
            <div className="user">
              <img style={{ margin: 3 }} src={user} alt="" />
              <p style={{ margin: 3 }}>Hi Nothile</p>
            </div>
            <div className="image-nav">
              <img src={path} alt="" />
            </div>

            <div className="arrow">
              <img src={Arrow} alt="ar" />
            </div>
            <div className="days-left">
              <p>24 Days Left</p>
            </div>
            <div className="icons-list">
              <img src={Wifi} alt="" />
              <img src={Bluetooth} alt="" />
              <img src={Location} alt="" />
              <img src={Phone} alt="" />
              <img src={Music} alt="" />
              <img src={Mic} alt="" />
            </div>
          </div>
          <div className="last">
            <Right />
            <div className="speed-left">
              <h2>55%</h2>
              <p>Estimated</p>
            </div>
            <div className="ind-right">
              <img src={RightIndicator} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
