import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ErrorBot, ErrorTop, ErrorWrap } from "../styles/error";

const Error = () => {
  const [search, setSearch] = useSearchParams();
  const name = search.get("name");
  const message = search.get("message");
  console.log(name);
  console.log(message);
  return (
    <ErrorWrap>
      <ErrorTop>
        <img src={process.env.PUBLIC_URL + "/images/error_logo.svg"}></img>
        <h4>{name}</h4>
      </ErrorTop>
      <ErrorBot>
        <p>
          현재 요청을 처리할 수 없습니다.
          <br />( {message} )
        </p>
        <Link to="/" className="submit-btn">
          홈으로 돌아가기
        </Link>
      </ErrorBot>
    </ErrorWrap>
  );
};

export default Error;
