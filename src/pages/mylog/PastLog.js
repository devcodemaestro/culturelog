import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  LogItemImg,
  LogMore,
  LogTab,
  LogText,
  LogTotal,
  PastLogItem,
  PastLogList,
} from "../../styles/pastlog";
import { useNavigate } from "react-router";

const PastLog = () => {
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate("/culturelog/view");
  };
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab>
        <button className="">볼 거예요</button>
        <button className="on">봤어요</button>
      </LogTab>
      <LogTotal>
        총 기록 <em>1</em> 건
      </LogTotal>
      <PastLogList>
        <PastLogItem>
          <LogItemImg>
            <img
              src="https://cdn.newsculture.press/news/photo/202311/537130_670817_5031.jpg"
              alt=""
            />
            <span>d-day</span>
          </LogItemImg>
          <LogText>
            <img
              src={process.env.PUBLIC_URL + "/images/icon_star_yellow.svg"}
              alt=""
            />
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
        </PastLogItem>
      </PastLogList>
      <Footer />
    </>
  );
};

export default PastLog;
