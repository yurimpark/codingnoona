import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6. 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

function App() {
  const choice = {
    rock: {
      name: "Rock",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png",
    },
    scissors: {
      name: "Scissors",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png",
    },
    paper: {
      name: "Paper",
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png",
    },
  };
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    // 객체의 키값만 뽑아서 어레이로 만들어줌
    let itemArray = Object.keys(choice);
    console.log(itemArray);
    // Math.random() : 0~1 사이 랜덤한 값을 반환
    // itemArray.length 을 곱하고 Math.floor()을 해서 0,1,2 셋 중 하나가 나오도록 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
    console.log(final);
    console.log("random value", randomItem);
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    // user == computer //! tie
    // user scissors computer rock //! user 패 computer 승
    // user rock computer paper //! user 패 computer 승
    // user paper computer scissors //! user 패 computer 승
    // user scissors computer paper //! user 승 computer 패
    // user rock computer scissors //! user 승 computer 패
    // user paper computer rock //! user 승 computer 패
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        {/* 함수를 콜백형태로 전달해주는 것이 중요 */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
