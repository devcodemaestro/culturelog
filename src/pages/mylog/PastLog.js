import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LogTab } from "../../styles/ui/logtab";
import {
  LogList,
  LogItem,
  LogItemImg,
  LogText,
  LogMore,
} from "../../styles/ui/loglist";
import { useNavigate } from "react-router-dom";
import Star from "../../components/Star";
import styled from "@emotion/styled";
import { colors } from "../../styles/basic";

const PastLog = () => {
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate("/culturelog/view");
  };
  const LogTotal = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    font-weight: 400;
    border-bottom: 1px solid ${colors.secondary};
    em {
      font-size: 12px;
      font-weight: 500;
    }
  `;
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab>
        <button
          className=""
          onClick={() => {
            navigate("/mylog/upcoming");
          }}
        >
          볼 거예요
        </button>
        <button className="on">봤어요</button>
      </LogTab>
      <LogTotal>
        총 기록 <em>1</em> 건
      </LogTotal>
      <LogList>
        <LogItem>
          <LogItemImg>
            <img
              src="https://cdn.newsculture.press/news/photo/202311/537130_670817_5031.jpg"
              alt=""
            />
          </LogItemImg>
          <LogText>
            <Star num="5" width={70} />
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

export default PastLog;
