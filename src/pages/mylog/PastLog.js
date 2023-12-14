import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LogListWrap } from "../../styles/ui/logliststyle";
import styled from "@emotion/styled";
import { colors } from "../../styles/basic";
import LogTab from "../../components/loglist/LogTab";
import LogListItem from "../../components/loglist/LogListItem";

const PastLog = () => {
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
      <LogTab on="past"></LogTab>
      <LogTotal>
        총 기록 <em>1</em> 건
      </LogTotal>
      <LogListWrap>
        <LogListItem></LogListItem>
      </LogListWrap>
      <Footer />
    </>
  );
};

export default PastLog;
