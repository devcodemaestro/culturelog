import React from "react";
import { LogTabBt } from "../../styles/ui/logtabstyle";
import { useNavigate } from "react-router-dom";

const LogTab = ({ on }) => {
  const navigate = useNavigate();
  return (
    <>
      <LogTabBt>
        <button
          className={on === "upcoming" ? "on" : ""}
          onClick={() => {
            navigate("/mylog/upcoming");
          }}
        >
          볼 거예요
        </button>
        <button
          className={on === "past" ? "on" : ""}
          onClick={() => {
            navigate("/mylog/past");
          }}
        >
          봤어요
        </button>
      </LogTabBt>
    </>
  );
};

export default LogTab;
