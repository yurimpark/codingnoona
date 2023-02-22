import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
