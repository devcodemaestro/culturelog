import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LogListWrap } from "../../styles/ui/logliststyle";
import LogTab from "../../components/loglist/LogTab";
import LogListItem from "../../components/loglist/LogListItem";

const UpcomingLog = () => {
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab on="upcoming"></LogTab>
      <LogListWrap>
        <LogListItem on="upcoming"></LogListItem>
      </LogListWrap>
      <Footer />
    </>
  );
};
export default UpcomingLog;
