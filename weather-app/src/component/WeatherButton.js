import React from "react";
import { Button } from "react-bootstrap";

function WeatherButton({ cities, setCity }) {
  console.log(cities);
  return (
    <div>
      <Button variant="warning">Current Location</Button>{" "}
      {/* map함수를 이용하여 버튼을 여러개 만들 필요 없이 한번에 생성 */}
      {cities.map((item) => (
        <Button
          variant="info"
          onClick={() => {
            // 클릭한 도시로 바꿔줌
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
