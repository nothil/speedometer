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

  const daysLeft = daysInMonth(month, year) - day;
  console.log(daysLeft);

  // Create an array of speedometer speed readings
  const speedReadings = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

  return (
    <div className="App">
      <div className="grid-container">
        <div className="row">
          <div className="speedometer">
            <div className="speedometer">
              <div className="speed-readings">
                {speedReadings.map((reading, index) => (
                  <div key={reading} className="speed-reading">
                    {reading}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img style={{ width: 884 }} src={image} alt="" />
          <div className="first">
            <Icons />

            <div className="loader-spin">
              <Loader />
            </div>
            {/* <div className="gauge">
              <div className="percentage"></div>
              <div className="mask"></div>
              <div className="value"></div>
            </div> */}

            <div className="speed-left">
              <h2>250</h2>
              <p>Marquis</p>
            </div>
            <div className="ind-left">
              <img src={LeftIndicator} alt="" />
            </div>
          </div>
          <div className="second">
            <div className="date-time">
              <p style={{ padding: 7 }}>28c</p>
              <p style={{ padding: 7 }}>{fullDate}</p>
              {/* <p style={{ padding: 7 }}>August</p>
              <p style={{ padding: 7 }}>2023</p>
            <p style={{ padding: 7 }}>12:30 PM</p> */}
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
              <p>
                24 <span>Days Left</span>
              </p>
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
