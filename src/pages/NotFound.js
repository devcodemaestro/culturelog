import React from "react";
import { NotFoundBot, NotFoundTop, NotFoundWrap } from "../styles/notfound";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundTop>
        <img src={process.env.PUBLIC_URL + "/images/404_logo.svg"}></img>
        <h4>Page Not Found</h4>
      </NotFoundTop>
      <NotFoundBot>
        <p>
          요청하신 페이지를 찾을 수 없습니다. <br />
          존재하지 않는 주소를 입력하셨거나 <br />
          페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Link to="/" className="submit-btn">
          홈으로 돌아가기
        </Link>
      </NotFoundBot>
    </NotFoundWrap>
  );
};

export default NotFound;
