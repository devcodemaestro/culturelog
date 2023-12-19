import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DateDiary,
  Dropdown,
  FileWrap,
  ImgUrl,
  ImgWrite,
  StarRate,
  TextArea,
} from "../../styles/writelog";
import Stardrop from "../../components/Stardrop";
import { BlueBtn, BtnWrap, GrayBtn, RedBtn } from "../../styles/ui/buttons";
import { useNavigate } from "react-router-dom";
import { WarningBox, WarningWrap } from "../../styles/ui/warning";
import { LogTabBt } from "../../styles/ui/logtabstyle";

const EditLog = ({ iuser }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [look, setLook] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const fileInput = React.useRef(null);

  const handleDropdownChange = e => {
    setSelectedOption(e.target.value);808
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
  const handleClickCancel = () => {
    document.getElementById("warning-wrap").style.left = "-100%";
  };
  const handleWarningCancel = () => {
    document.getElementById("warning-wrap").style.left = "0%";
  };
  const navigate = useNavigate();
  const handleClickChange = () => {
    navigate("/mylog/past");
  };
  const handleClickDelete = () => {
    navigate("/culturelog/write");
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
  const obj = {
    imedia: 0,
    iuser: { iuser },
    genrePk: 0,
    title: { title },
    date: {date},
    comment: {text},
    star: 0,
    isSaw: 0,
    pics: ["string"],
  };
  console.log(obj);
  return (
    <>
      <Header sub={true}>Edit Log</Header>
      
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
          onChange={e => {
            handleChangeTitle(e);
          }}
        ></input>
      </ImgUrl>
      <DateDiary>
        <div className="date-wrap">
          <input type="date" className="date"    onChange={e => {
              handleChangeDate(e);
            }}/>
        </div>
      </DateDiary>
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
              onChange={e => {
                handleTextChange(e);
              }}
              rows="9" // 원하는 높이를 설정할 수 있습니다.
              cols="100%" // 원하는 너비를 설정할 수 있습니다.
              style={{ width: "100%" }}
            />
          </TextArea>
        </>
      )}

      <BtnWrap className="half">
        <GrayBtn
          onClick={() => {
            handleWarningCancel();
          }}
        >
          취소
        </GrayBtn>
        <BlueBtn
          onClick={() => {
            handleClickChange();
          }}
        >
          수정완료
        </BlueBtn>
      </BtnWrap>
      {
        <WarningWrap id="warning-wrap">
          <WarningBox>
            <i>
              <img src={process.env.PUBLIC_URL + "/images/icon_info.svg"} />
            </i>
            <h5>정말 취소할까요?</h5>
            <p>작성된 내용은 저장되지 않습니다.</p>

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
          </WarningBox>
        </WarningWrap>
      }
      <Footer />
    </>
  );
};

export default EditLog;
