import "./App.css";
import Box from "./component/Box";

function App(props) {
  return (
    <>
      <Box name="차은우" number={1} />
      <Box name="송강" number={2} />
      <Box name="강동원" number={3} />
    </>
  );
}

export default App;
