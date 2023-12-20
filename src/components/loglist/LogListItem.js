import React, { useEffect, useState } from "react";
import {
  LogItem,
  LogItemImg,
  LogMore,
  LogText,
} from "../../styles/ui/logliststyle";
import Star from "../Star";
import { useNavigate } from "react-router-dom";

const LogListItem = ({ on, pic, title, date, star, imedia, iuser }) => {
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate(`/culturelog/view/${imedia}?iuser=${iuser}`);
  };

  const [dDay, setDDay] = useState(null);
  const targetDateStr = `${date}`;

  const calcDDay = targetDate => {
    const today = new Date();
    const target = new Date(targetDate);
    const timeDiff = today - target;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  };

  useEffect(() => {
    const dDayValue = calcDDay(targetDateStr);
    setDDay(dDayValue);
  }, [targetDateStr]);

  return (
    <LogItem
      onClick={() => {
        handleClickView();
      }}
    >
      <LogItemImg>
        <img
          className={on === "upcoming" ? "on" : ""}
          src={`${pic}`}
          alt={`${title}`}
        />
        {on === "upcoming" && <span>{`D${dDay > 0 ? "+" : ""}${dDay}`}</span>}
      </LogItemImg>
      <LogText>
        {on === "past" && <Star num={star} width={70} />}
        <p>{`${title}`}</p>
        <span>{`${date}`}</span>
      </LogText>
      <LogMore>
        <button>More</button>
      </LogMore>
    </LogItem>
  );
};

export default LogListItem;
