import React from "react";
import { Link } from "react-router-dom";
import { LoginBt, LoginInput, LoginLogo, LoginWrap } from "../styles/login";

const Login = () => {
  return (
    <LoginWrap>
      <LoginLogo>
        <img src={process.env.PUBLIC_URL + "/images/login_logo.svg"} />
      </LoginLogo>
      <LoginInput>
        <input placeholder="아이디를 입력해주세요." className="inputid"></input>
        <input
          placeholder="비밀번호를 입력해주세요."
          className="inputpw"
        ></input>
      </LoginInput>
      <LoginBt>접속하기</LoginBt>
    </LoginWrap>
  );
};

export default Login;
