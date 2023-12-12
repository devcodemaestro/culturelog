import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  LogItem,
  LogItemImg,
  LogList,
  LogMore,
  LogTab,
  LogText,
} from "../../styles/mylog";
import { useNavigate } from "react-router-dom";

const UpcomingLog = () => {
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate("/culturelog/view");
  };
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab>
        <button className="on">볼 거예요</button>
        <button
          className=""
          onClick={() => {
            navigate("/mylog/past");
          }}
        >
          봤어요
        </button>
      </LogTab>
      <LogList>
        <LogItem>
          <LogItemImg>
            <img
              className="on"
              src="https://cdn.newsculture.press/news/photo/202311/537130_670817_5031.jpg"
              alt=""
            />
            <span>d-day</span>
          </LogItemImg>
          <LogText>
            <p>서울의 봄</p>
            <span>2023-12-01</span>
          </LogText>
          <LogMore>
            <button
              onClick={() => {
                handleClickView();
              }}
            >
              More
            </button>
          </LogMore>
        </LogItem>
      </LogList>
      <Footer />
    </>
  );
};

export default UpcomingLog;
