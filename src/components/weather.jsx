import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

// const API_KEY = "5c813092f78068a63580a4867a7a26da";
// const BASE_URL =
//   "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API_KEY}";

// const url = `${BASE_URL}&appid=${API_KEY}`;

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "5c813092f78068a63580a4867a7a26da";
        const cityName = "johannesburg"; // Replace with your desired city name
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const selectedWeatherIndex = 0;
  const selectedWeather = weatherData.list[selectedWeatherIndex];

  const weatherList = (
    <div className="weather">
      {/* <p>Date and Time: {item.dt_txt}</p> */}
      <img
        src={`http://openweathermap.org/img/wn/${selectedWeather.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      <p> {selectedWeather.main.temp}°C</p>
      {/* <p>Weather: {item.weather[0].description}</p> */}
    </div>
  );

  return <div>{weatherList}</div>;
};

export default WeatherDisplay;
