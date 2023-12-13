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
  StarRate,
  TextArea,
} from "../../styles/writelog";
import { LogTab } from "../../styles/pastlog";
import Stardrop from "../../components/Stardrop";
import { BlueBtn, BtnWrap, GrayBtn, RedBtn } from "../../styles/ui/buttons";


const EditLog = props => {
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
    setLook(false);
  };
  const handleNoLookClick = () => {
    setLook(true);
  };


  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };
  const handleClickCancel = () => {
    console.log("aaa");
  };
  const handleClickDelete = () => {
    console.log("bbb");
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
          type="date"
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
          <option value="option4">뮤지컬</option>
        </select>
      </Dropdown>
      <LogTab>
        <button className={!look ? "on" : ""} onClick={handleLookClick} disabled={!look}>
          볼 거에요
        </button>
        <button className={look ? "on" : ""} onClick={handleNoLookClick} disabled={look}>
          봤어요
        </button>
      </LogTab>
      {look && (
        <>
          <StarRate>
          <Stardrop/>
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
              style={{ width: '100%' }}
            />
          </TextArea>

     
        </>
        
      )}
        
        <BtnWrap className="half">
            <GrayBtn>삭제</GrayBtn>
            <BlueBtn>수정</BlueBtn>
          </BtnWrap>
          <div className="WarningWrap" id="warning">
          <div className="WarningBox">
            <div className="txt-wrap">
              <i>
                <img src={process.env.PUBLIC_URL + "/images/icon_info.svg"} />
              </i>
              <h5>정말 취소할까요?</h5>
              <p>작성된 내용은 저장되지 않습니다.</p>
            </div>
            <BtnWrap className="square">
              <BlueBtn
                onClick={() => {
                  handleClickCancel();
                }}
                className="writebt"
              
              >
              다시작성
              </BlueBtn>
              <RedBtn
                onClick={() => {
                  handleClickDelete();
                }}
              >
                취소
              </RedBtn>
            </BtnWrap>
          </div>
        </div>
         
      <Footer />
    </>
  );
};

export default EditLog;
