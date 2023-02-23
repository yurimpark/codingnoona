import React from "react";
import { Button } from "react-bootstrap";

function WeatherButton() {
  return (
    <div>
      <Button variant="warning">Current Location</Button>{" "}
      <Button variant="info">Sydney</Button>{" "}
      <Button variant="info">London</Button>{" "}
      <Button variant="info">Wellington</Button>{" "}
      <Button variant="info">Toronto</Button>{" "}
    </div>
  );
}

export default WeatherButton;
