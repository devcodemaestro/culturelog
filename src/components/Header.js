import React from "react";
import { HeaderWrap, Inner } from "../styles/basic";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ children, sub }) => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
    return;
  };
  const handleClickSignout = () => {
    alert("로그아웃 완료");
    navigate("/login");
    return;
  };

  return (
    <HeaderWrap maxw="393">
      <button
        onClick={() => {
          handleClickBack();
        }}
        className={sub ? "on" : ""}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icon_back.svg"}
          alt="돌아가기"
        ></img>
      </button>
      <h3>{sub ? children : <Link to="/intro">{children}</Link>}</h3>
      <button
        onClick={() => {
          handleClickSignout();
        }}
        className={sub === "signup" ? "" : "signout"}
      >
        로그아웃
      </button>
    </HeaderWrap>
  );
};

export default Header;
