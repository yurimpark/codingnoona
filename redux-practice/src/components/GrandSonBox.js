import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
  // useSelector를 사용하면 props로 넘겨주고 받을 필요가 없다.
  let count = useSelector(state => state.count);
  return <div>GrandSonBox {count}</div>;
};

export default GrandSonBox;
