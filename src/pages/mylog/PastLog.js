import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LogListWrap, LogTotal } from "../../styles/ui/logliststyle";
import LogTab from "../../components/loglist/LogTab";
import LogListItem from "../../components/loglist/LogListItem";
import { getMedia } from "../../api/culutrelog_api";

const initPastLog = {
  imedia: 0,
  title: "string",
  date: "string",
  pic: "string",
  star: 0,
};
const PastLog = () => {
  const [loglist, setLogList] = useState([initPastLog]);
  useEffect(() => {
    getMedia(setLogList);
  }, []);
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab on="past"></LogTab>
      <LogTotal>
        총 기록 <em>1</em> 건
      </LogTotal>
      <LogListWrap>
        {loglist.map(item => (
          <LogListItem
            on="past"
            key={item.imedia}
            pic={item.pic}
            title={item.title}
            date={item.date}
            star={item.star}
          />
        ))}
      </LogListWrap>
      <Footer />
    </>
  );
};

export default PastLog;
