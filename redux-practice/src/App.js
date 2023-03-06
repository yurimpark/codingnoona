import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const dispatch = useDispatch();
  // state를 매개변수로 줌 (store에 있는 모든 state를 전달)
  const count = useSelector(state => state.count);

  const increase = () => {
    // payload는 함수의 매개변수 같은 느낌
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 2 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "yurim", pwd: "0112" } });
  };

  let id = useSelector(state => state.id);
  let pwd = useSelector(state => state.pwd);

  return (
    <div>
      <h1>{count}</h1>
      <h2>
        {id} {pwd}
      </h2>
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
