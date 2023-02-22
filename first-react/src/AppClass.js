import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  // 생성자: 클래스를 생성할 때 쓰는 것 constructor=>라이프사이클 함수 중 하나
  constructor(props) {
    super(props);
    this.state = {
      // 한번에 상태관리 가능
      counter2: 0,
      num: 1,
      value: 0,
    };
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        <BoxClass number={this.state.value} />
      </div>
    );
  }
}
