import styled from "@emotion/styled";
import React from "react";

const PastLog = () => {
  const LogTab = styled.div`
    padding: 3px;
    border-radius: 100px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-between;
    button {
      width: 150px;
      height: 40px;
      border-radius: 100px;
      color: #000;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      border: 0;
      background-color: #f7f7f7;
    }
    button.on {
      width: 150px;
      height: 40px;
      color: var(--main-color, #fff);
      text-align: center;
      border-radius: 100px;
      background: #425997;
    }
  `;
  const LogTotal = styled.div`
    width: 313px;
    height: 17px;
    margin-top: 13px;
    border-bottom: 1px solid #ebebeb;
  `;

  const PastLogList = styled.ul`
    margin-top: 10px;
  `;
  const PastLogItem = styled.li`
    width: 314px;
    height: 90px;
    border-radius: 5px;
    border: 1px solid var(--Secondary-Color, #ebebeb);
    background: var(--main-color, #fff);
  `;
  const LogItemImg = styled.div`
    position: relative;
    width: 63px;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
    background: #000;
    img {
      width: 100%;
      border-radius: 5px 0px 0px 5px;
      opacity: 0.5;
    }
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  `;
  return (
    <>
      <LogTab>
        <button className="">볼 거예요</button>
        <button className="on">봤어요</button>
      </LogTab>
      <LogTotal>총 기록 건</LogTotal>
      <PastLogList>
        <PastLogItem>
          <LogItemImg>
            <img
              src="https://cdn.newsculture.press/news/photo/202311/537130_670817_5031.jpg"
              alt=""
            />
            <span>d-day</span>
          </LogItemImg>
          <div className="logtext">
            <img src="" alt="" />
            <p>내용</p>
            <span>날짜</span>
          </div>
          <div className="logmore">
            <button>More</button>
          </div>
        </PastLogItem>
      </PastLogList>
    </>
  );
};

export default PastLog;
