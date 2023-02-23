import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      {/* 옵셔널 체이닝: weather && 와 같은 역할! */}
      <div>{weather?.name}</div>
      <h2>30도 / 230화씨</h2>
      <h3>맑은 하늘</h3>
    </div>
  );
};

export default WeatherBox;
