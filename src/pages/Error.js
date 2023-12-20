import React from "react";
import { Link } from "react-router-dom";
import { ErrorBot, ErrorTop, ErrorWrap } from "../styles/error";

const Error = () => {
  return (
    <ErrorWrap>
      <ErrorTop>
        <img src={process.env.PUBLIC_URL + "/images/error_logo.svg"}></img>
      </ErrorTop>
      <ErrorBot>
        <p>현재 요청을 처리할 수 없습니다.</p>
        <Link to="/" className="submit-btn">
          홈으로 돌아가기
        </Link>
      </ErrorBot>
    </ErrorWrap>
  );
};

export default Error;
