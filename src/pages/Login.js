import React, { useState } from "react";
import { LoginBt, LoginInput, LoginLogo, LoginWrap } from "../styles/login";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = ({ iuser, password }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePw = e => {
    setPw(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const idResult = Number(id);
    console.log(idResult, pw);
    if (iuser === idResult && password === pw) {
      navigate("/intro");
    } else {
      alert("아이디 또는 패스워드를 다시 입력해주세요.");
    }
  };

  return (
    <LoginWrap>
      <LoginLogo>
        <img src={process.env.PUBLIC_URL + "/images/login_logo.svg"} />
      </LoginLogo>
      <LoginInput>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            className="inputid"
            required
            value={id || ""}
            onChange={e => {
              handleChangeId(e);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            autoComplete="off"
            required
            className="inputpw"
            value={pw || ""}
            onChange={e => {
              handleChangePw(e);
            }}
          />
          <Link to="/signup">회원가입하기</Link>
          <LoginBt type="submit">접속하기</LoginBt>
        </form>
      </LoginInput>
    </LoginWrap>
  );
};

export default Login;
