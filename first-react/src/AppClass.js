import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  // 생성자: 클래스를 생성할 때 쓰는 것 constructor=>라이프사이클 함수 중 하나
  constructor(props) {
    // constructor안에서 뭐한다? state 만든다~
    // state가 있어야 render해주니까...(UI에 보여주니까)
    super(props);
    this.state = {
      // 한번에 상태관리 가능
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor");
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
    // 비동기적 처리로 업데이트 전 state
    console.log("increase function", this.state);
  };

  componentDidMount() {
    // api 호출
    // render 끝나고 호출되는 함수라서 (화면에 일단 UI가 있어야 데이터를 불러오니까)
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    // render 후 최신업데이트 된 state값
    // 따라서 state가 업데이트 된 후에 해야하는 작업은 componentDidUpdate() 여기서~
    console.log("componentDidUpdate", this.state);
  }

  render() {
    // render는 뭐한다? UI 그린다~
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {/* JS와 HTML을 섞어서 작업하고 싶으면 {} 이 안에서 JS쓰기! */}
        {this.state.counter2 < 3 && <BoxClass number={this.state.value} />}
      </div>
    );
  }
}
