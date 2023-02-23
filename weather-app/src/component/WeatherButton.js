import React from "react";
import { Button } from "react-bootstrap";

function WeatherButton({ cities, handleCityChange }) {
  console.log(cities);
  return (
    <div>
      <Button
        className="btn"
        variant="info"
        // 현재 위치 눌렀을 때
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {/* map함수를 이용하여 버튼을 여러개 만들 필요 없이 한번에 생성 */}
      {cities.map((city) => (
        <Button
          className="btn"
          variant="warning"
          // 해당 도시 눌렀을 때
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
