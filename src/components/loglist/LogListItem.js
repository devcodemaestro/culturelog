import React, { useState } from "react";
import {
  LogItem,
  LogItemImg,
  LogMore,
  LogText,
} from "../../styles/ui/logliststyle";
import Star from "../Star";
import { useNavigate } from "react-router-dom";

const LogListItem = ({ on }) => {
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
    </>
  );
};

export default LogListItem;
