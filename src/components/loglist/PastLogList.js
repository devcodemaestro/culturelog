import React, { useEffect, useState } from "react";
import { LogListWrap, LogTotal } from "../../styles/ui/logliststyle";
import LogListItem from "./LogListItem";
import { getMedia } from "../../api/culutrelog_api";

const initPastLog = [
  {
    imedia: 0,
    title: "",
    date: "",
    pic: "",
    sawInfo: {
      star: 0,
      comment: "",
    },
  },
];

const PastLogList = props => {
  return (
    <>
      <LogTotal>
        총 기록 <em>{props.totalLogList}</em> 건
      </LogTotal>
      <LogListWrap>
        {props.loglist.map(item => (
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
    </>
  );
};

export default PastLogList;
