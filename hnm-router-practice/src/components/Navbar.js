import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const search = event => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log(keyword);
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <button className="login-btn" onClick={goToLogin}>
            로그인
          </button>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt=""
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map(menu => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={event => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
