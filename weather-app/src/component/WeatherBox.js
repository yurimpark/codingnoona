import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className="weather-box">
      {/* 옵셔널 체이닝: weather && 와 같은 역할! */}
      <div className="city">{weather?.name}</div>
      <h2>
        {Math.round(weather?.main.temp)}°C 🌡{" "}
        {Math.round((weather?.main.temp + 40) * 1.8 - 40)}°F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
