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
  sawInfo: {
    star: 5,
    comment: "string",
  },
};
const PastLog = () => {
  const [loglist, setLogList] = useState([initPastLog]);
  useEffect(() => {
    getMedia(setLogList, 1, 1);
  }, []);

  const totalLogList = loglist.length;
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab on="past"></LogTab>
      <LogTotal>
        총 기록 <em>{totalLogList}</em> 건
      </LogTotal>
      <LogListWrap>
        {loglist.map(item => (
          <LogListItem
            on="past"
            key={item.imedia}
            pic={item.pic}
            title={item.title}
            date={item.date}
            star={item.sawInfo.star}
            imedia={item.imedia}
            iuser={1}
          />
        ))}
      </LogListWrap>
      <Footer />
    </>
  );
};

export default PastLog;
