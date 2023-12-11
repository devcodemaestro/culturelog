import React from "react";
import { HeaderWrap, Inner } from "../styles/basic";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ children, sub }) => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
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
    </HeaderWrap>
  );
};

export default Header;
