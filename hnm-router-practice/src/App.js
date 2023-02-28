import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

// 1. 전체 상품 페이지, 로그인, 상품 상세페이지
// todo 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// todo 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// todo 4. 상품 디테일을 눌렀으나, 로그인이 되지 않은 경우에는 로그인페이지가 먼저 나온다.
// todo 5. 로그인이 되어있을 경우에는 상품디테일 페이지를 볼 수 있다.
// todo 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// todo 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// todo 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// todo 9. 상품을 검색할 수 있다.

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
