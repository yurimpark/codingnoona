import React from "react";

const Box = (props) => {
  console.log("props", props);
  console.log("props.item", props.item);
  //console.log("props.item.img", props.item.img);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {/* const [userSelect, setUserSelect] = useState(null);
        props가 null이기 때문에 item이 없음!
        props.item에 값이 있을 때(null 이 아닐 때)만, props.item.img값을 보여주기 위해서
        && 연산자로 앞에서 props.item이 true인지 한번 체크하고
        true니까 다음 값 확인하는데, 전체가 다 true면 맨 마지막 값을 리턴하기 때문에
        props.item.img 를 찾아서 src로 넣어주는 것! */}
      <img className="item-img" src={props.item && props.item.img} />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
