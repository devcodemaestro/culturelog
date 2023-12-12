import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Bticon,
  Dropdown,
  FileWrap,
  ImgUrl,
  ImgWrite,
  Loadicon,
  TextArea,
} from "../../styles/writelog";
import { LogTab } from "../../styles/pastlog";
import Starfrom from "../../components/starfrom";


const WriteLog = props => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = e => {
    setSelectedOption(e.target.value);
  };

  const [text, setText] = useState("");

  const handleTextChange = e => {
    setText(e.target.value);
  };
  const fileInput = React.useRef(null);

  const handleButtonClick = e => {
    fileInput.current.click();
  };
  const handleChange = e => {
    console.log(e.target.files[0]);
  };
  const [look, setLook] = useState(false);

  const handleLookClick = () => {
    setLook(true);
  };
  const handleNoLookClick = () => {
    setLook(false);
  };


  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
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
        <input
          type="text"
          placeholder="날짜 입력하세요."
          className="imgurl"
        ></input>
      </ImgUrl>
      <Dropdown>
        <label htmlFor="dropdown"></label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="option1">장르</option>
          <option value="option2">영화</option>
          <option value="option3">드라마</option>
          <option value="option3">뮤지컬</option>
        </select>
      </Dropdown>
      <LogTab>
        <button className="" onClick={handleLookClick} disabled={look}>
          볼 거에요
        </button>
        <button className="on" onClick={handleNoLookClick} disabled={!look}>
          봤어요
        </button>
      </LogTab>
      {look && (
        <>
          <Dropdown>
            <label className="starlabel" htmlFor="ratingSelect"></label>
            <select
              className="evaluate"
              id="starSelect"
              value={rating}
              onChange={handleRatingChange}
            >
          
            <option value="5">★★★★★ </option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
            </select>
          </Dropdown>
          <TextArea>
            <label htmlFor="textArea"></label>
            <textarea
              id="textArea"
              placeholder="감상평을 남겨주세요. (500자 내외)"
              value={text}
              onChange={handleTextChange}
              rows="9" // 원하는 높이를 설정할 수 있습니다.
              cols="46" // 원하는 너비를 설정할 수 있습니다.
            />
          </TextArea>

     
        </>
        
      )}
           <Loadicon>
            <div>등록</div>
          </Loadicon>
          <Starfrom/>
      <Footer />
    </>
  );
};

export default WriteLog;
