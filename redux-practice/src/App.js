import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // state를 매개변수로 줌 (store에 있는 모든 state를 전달)
  const count = useSelector(state => state.count);

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
    </div>
  );
}

export default App;
