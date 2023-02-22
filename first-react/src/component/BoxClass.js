import React, { Component } from "react";

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log("BoxClass byebye");
  }
  render() {
    return <div>Box{this.props.number}</div>;
  }
}
