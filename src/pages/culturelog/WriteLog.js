import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DateDiary,
  Dropdown,
  ImgUrl,
  ImgWrite,
  Loadicon,
  StarRate,
  TextArea,
} from "../../styles/writelog";
import Stardrop from "../../components/Stardrop";
import { useNavigate } from "react-router-dom";
import { LogTabBt } from "../../styles/ui/logtabstyle";
import { postMedia } from "../../api/culutrelog_api";
import Board from "../board/Board";

const WriteLog = ({ iuser }) => {
  useEffect(() => {
    postMedia();
  }, []);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [look, setLook] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [star, setStar] = useState({});

  const handleDropdownChange = e => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleLookClick = () => {
    setLook(false);
  };
  const handleNoLookClick = () => {
    setLook(true);
  };
  const hadleClickEdit = () => {
    navigate("/mylog");
  };
  const handleChangeTitle = e => {
    // console.log(e.target.value)
    setTitle(e.target.value);
  };
  const handleChangeDate = e => {
    // console.log(e.target.value)
    setDate(e.target.value);
  };
  const handleTextChange = e => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const handleChangeStar = value => {
    // console.log(e.target.value);
    setStar(value);
  };
  const starpoint = Number(star.key);
  const obj = {
    iuser: iuser,
    genrepk: selectedOption,
    title: title,
    date: date,
    comment: text,
    star: starpoint,
    isSaw: look ? 1 : 0,
    pics: ["string"],
  };
  console.log(obj);

  return (
    <>
      <Header sub={true}>Write Log</Header>
      <ImgWrite>이미지 등록</ImgWrite>
      <Board />
      <ImgUrl>
        <input
          type="text"
          placeholder="이미지 URL을 추가해주세요."
          className="imgurl"
        ></input>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="imgurl"
          onChange={e => {
            handleChangeTitle(e);
          }}
        ></input>
      </ImgUrl>
      <DateDiary>
        <div className="date-wrap">
          <input
            type="date"
            className="date"
            onChange={e => {
              handleChangeDate(e);
            }}
          />
        </div>
      </DateDiary>
      <Dropdown>
        <label htmlFor="dropdown">
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="1">장르</option>
            <option value="2">영화</option>
            <option value="3">드라마</option>
            <option value="4">뮤지컬</option>
          </select>
        </label>
      </Dropdown>
      <LogTabBt>
        <button
          className={!look ? "on" : ""}
          onClick={handleLookClick}
          disabled={!look}
        >
          볼 거에요
        </button>
        <button
          className={look ? "on" : ""}
          onClick={handleNoLookClick}
          disabled={look}
        >
          봤어요
        </button>
      </LogTabBt>
      {look && (
        <>
          <StarRate>
            <Stardrop
              onChange={value => {
                handleChangeStar(value);
              }}
            />
          </StarRate>
          <TextArea>
            <label htmlFor="textArea"></label>
            <textarea
              id="textArea"
              placeholder="감상평을 남겨주세요. (500자 내외)"
              value={text}
              onChange={e => {
                handleTextChange(e);
              }}
              rows="9" // 원하는 높이를 설정할 수 있습니다.
              cols="100%" // 원하는 너비를 설정할 수 있습니다.
              style={{ width: "100%", padding: "1rem 1rem" }}
            />
          </TextArea>
        </>
      )}
      <Loadicon>
        <button
          className="londing"
          onClick={() => {
            hadleClickEdit();
          }}
        >
          등록
        </button>
      </Loadicon>
      <Footer />
    </>
  );
};

export default WriteLog;
