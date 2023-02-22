import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      Box{props.number}
      <p>{props.name}</p>
    </div>
  );
};

export default Box;
