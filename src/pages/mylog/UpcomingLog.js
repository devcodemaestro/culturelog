import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LogListWrap } from "../../styles/ui/logliststyle";
import LogTab from "../../components/loglist/LogTab";
import LogListItem from "../../components/loglist/LogListItem";
import { getMedia } from "../../api/culutrelog_api";

const initUpcomingLog = {
  imedia: 0,
  title: "string",
  date: "string",
  pic: "string",
  star: 0,
};

const UpcomingLog = () => {
  const [loglist, setLogList] = useState([initUpcomingLog]);
  useEffect(() => {
    getMedia(setLogList);
  }, []);
  return (
    <>
      <Header sub={true}>My Log</Header>
      <LogTab on="upcoming"></LogTab>
      <LogListWrap>
        {loglist.map(item => (
          <LogListItem
            on="upcoming"
            key={item.imedia}
            pic={item.pic}
            title={item.title}
            date={item.date}
            star={item.star}
          ></LogListItem>
        ))}
      </LogListWrap>
      <Footer />
    </>
  );
};
export default UpcomingLog;
