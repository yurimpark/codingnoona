let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("액션은", action);
  if (action.type === "INCREMENT") {
    // reducer는 항상 return을 해줘야 함 (state한테 뭔가를 돌려줘야 함)
    return { ...state, count: state.count + action.payload.num };
    // spread 문법을 통해 기존 객체 내용을 복사해서 새로운 객체에 전달하고,
    // 변경하고 싶은 내용은 뒤에 따로 써주기
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - action.payload.num,
    };
  }
  // store는 return이 무조건 있어야 한다
  // 그래서 reducer에서 무조건 기본 리턴 필요
  return { ...state };
}

export default reducer;
