import React, { useEffect, useState } from "react";
import { LogListWrap } from "../../styles/ui/logliststyle";
import LogListItem from "./LogListItem";
import { getMedia } from "../../api/culutrelog_api";

const initUpcomingLog = [
  {
    imedia: 0,
    title: "",
    date: "",
    pic: "",
    star: 0,
  },
];
const UpcomingLogList = ({ iuser }) => {
  const [loglist, setLogList] = useState(initUpcomingLog);
  useEffect(() => {
    getMedia(setLogList, iuser, 0);
  }, []);
  return (
    <>
      <LogListWrap>
        {loglist.map(item => (
          <LogListItem
            on="upcoming"
            key={item.imedia}
            pic={item.pic}
            title={item.title}
            date={item.date}
            star={item.star}
            imedia={item.imedia}
            iuser={iuser}
          ></LogListItem>
        ))}
      </LogListWrap>
    </>
  );
};

export default UpcomingLogList;
