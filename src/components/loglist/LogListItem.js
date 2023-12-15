import React, { useState } from "react";
import {
  LogItem,
  LogItemImg,
  LogMore,
  LogText,
} from "../../styles/ui/logliststyle";
import Star from "../Star";
import { useNavigate } from "react-router-dom";

const LogListItem = ({ on, pic, title, date, star }) => {
  const navigate = useNavigate();
  const handleClickView = () => {
    navigate("/culturelog/view");
  };
  return (
    <>
      <LogItem>
        <LogItemImg>
          <img
            className={on === "upcoming" ? "on" : ""}
            src={`${pic}`}
            alt={`${title}`}
          />
          {on === "upcoming" && <span>D-day</span>}
        </LogItemImg>
        <LogText>
          {on === "past" && <Star num={star} width={70} />}
          <p>{`${title}`}</p>
          <span>{`${date}`}</span>
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
    </>
  );
};

export default LogListItem;
