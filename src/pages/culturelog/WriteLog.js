import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DateDiary,
  Dropdown,
  FileWrap,
  ImgUrl,
  ImgWrite,
  Loadicon,
  StarRate,
  TextArea,
} from "../../styles/writelog";
import Stardrop from "../../components/Stardrop";
import { useNavigate } from "react-router-dom";
import { LogTabBt } from "../../styles/ui/logtabstyle";

const WriteLog = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [look, setLook] = useState(false);
  const fileInput = React.useRef(null);

  const handleDropdownChange = e => {
    setSelectedOption(e.target.value);
  };
  const handleTextChange = e => {
    setText(e.target.value);
  };
  const handleChange = e => {
    console.log(e.target.files[0]);
  };
  const handleButtonClick = () => {
    fileInput.current.click();
  };
  const handleLookClick = () => {
    setLook(false);
  };
  const handleNoLookClick = () => {
    setLook(true);
  };
  const hadleClickEdit = () => {
    navigate("/culturelog/Edit");
  };





  return (
    <>
      <Header sub={true}>Write Log</Header>
      <ImgWrite>이미지 등록</ImgWrite>
      <FileWrap>
        <button className="icon-file" onClick={handleButtonClick}>
          미리 보기
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          className="icon-file"
        ></input>
        <button className="icon-file" onClick={handleButtonClick}>
          미리 보기
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          className="icon-file"
        ></input>
        <button className="icon-file" onClick={handleButtonClick}>
          미리 보기
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          className="icon-file"
        ></input>
        <button className="icon-file" onClick={handleButtonClick}>
          미리 보기
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          className="icon-file"
        ></input>
      </FileWrap>
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
        ></input>
      </ImgUrl>
      <DateDiary>
        <div className="date-wrap">
          <input type="date" className="date" />
        </div>
      </DateDiary>
      <Dropdown>
        <label htmlFor="dropdown">
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="option1">장르</option>
            <option value="option2">영화</option>
            <option value="option3">드라마</option>
            <option value="option4">뮤지컬</option>
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
            <Stardrop />
          </StarRate>
          <TextArea>
            <label htmlFor="textArea"></label>
            <textarea
              id="textArea"
              placeholder="감상평을 남겨주세요. (500자 내외)"
              value={text}
              onChange={handleTextChange}
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
