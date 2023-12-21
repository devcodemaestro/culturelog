import React, { useState } from "react";
import { LoginBt, LoginInput, LoginLogo, LoginWrap } from "../styles/login";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { postSignup } from "../api/user_api";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePw = e => {
    setPw(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const obj = {
      uid: id,
      upw: pw,
      nm: name,
    };
    const resultAction = result => {
      if (result === 0) {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        return;
      } else {
        alert("회원가입에 성공했습니다." + result);
        navigate("/login");
        return;
      }
    };
    postSignup(obj, resultAction);
  };

  return (
    <>
      <Header sub="signup">Culture Log</Header>
      <LoginWrap>
        <LoginLogo>
          <img src={process.env.PUBLIC_URL + "/images/signup_logo.svg"} />
          <p>회원 정보를 입력해주세요.</p>
        </LoginLogo>
        <LoginInput>
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              className="inputname"
              required
              value={name || ""}
              onChange={e => {
                handleChangeName(e);
              }}
            />
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
              className="inputpw"
              required
              value={pw || ""}
              onChange={e => {
                handleChangePw(e);
              }}
            />
            <LoginBt type="submit">가입하기</LoginBt>
          </form>
        </LoginInput>
      </LoginWrap>
    </>
  );
};

export default SignUp;
