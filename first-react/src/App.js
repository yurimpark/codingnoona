import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);

  const increase = () => {
    // 변수는 값을 바꾸면 바로 적용되지만(동기적)
    // state를 바꾸는 함수는 바로 실행되지 않고, 함수가 끝날 때 까지 기다렸다가
    // state를 바꾸는 함수들을 모아서 한번에 실행(비동기적)
    // 그래서 맨 처음에 클릭을 한 번 누르면 화면에는 0 / state:1
    // 콘솔에는 counter는 1 counter2 state는 0 이런 결과가 뜸
    // counter가 계속 1인 이유는 리렌더링 되면서 변수값이 계속 초기화돼서 0->1이 반복
    //! 변수는 리렌더링 될 때 마다 초기화된다.
    //! state값은 비동기적으로 처리된다.
    //! 대부분 state를 사용하지만, 잠깐 기억할 것만 변수 사용할 예정~

    counter += 1;
    setCounter2(counter2 + 1);
    setValue(value + 2);
    console.log("counter는", counter, "counter2 state는", counter2);
    // 유저가 버튼을 클릭한다.
    // counter+1 해서 1이 됨
    // setState함수 호출
    // console.log 실행됨
    // 변수값은 1로 보이고 state값은 아직 변하지 않아서 그 전의 값이 보인다.
    // 함수 끝
    // app다시 re render
    // let counter = 0을 거치면서 counter값은 다시 0으로 초기화
    // state값은 업데이트 되면서, 업데이트 된 state값이 보인다.
  };

  useEffect(() => {
    // 배열에 아무것도 없으면 componentDidMount() 와 같은 기능
    // api 호출!
    console.log("useEffect1 퐈이야~");
  }, []);

  useEffect(() => {
    // 배열안에 state가 있으면 componentDidMount() + componentDidUpdate() 와 같은 기능
    // [] 어레이 안의 값을 주시한다!
    // 어레이 안의 하나라도 변하면 실행
    console.log("useEffect2 퐈이야~", counter2, value);
  }, [counter2]);

  useEffect(() => {
    // 다른내용 써주고 싶으면 독립시키면 됨
    console.log("다른내용 하고싶어요", value);
  }, [value]);

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
