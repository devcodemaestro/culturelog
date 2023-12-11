import React, { useState } from "react";
import styled from "@emotion/styled";
import { Rate } from "antd";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ImgWrite = styled.div`
  padding-top: 2rem;
  font-size: 1.2rem;
  width: 100%;
`;
const FileWrap = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
`;
const ImgUrl = styled.div`
  padding-top: 2rem;
  .imgurl {
    margin-top: 20px;
    width: 100%;
    height: 38px;
  }
`;
const Dropdown = styled.div`
  margin-top: 2rem;
  select {
    width: 100%;
    height: 38px;
  }
`;
const Bticon = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  div {
    border: 1px solid #e5e5e5;
    width: 150px;
    height: 46px;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;
  }
`;
const TextArea = styled.div`
  margin-top: 2rem;
`;
const Loadicon = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 46px;
  div {
    border: 1px solid #e5e5e5;
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;
  }
`;

const WriteLog = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = e => {
    setSelectedOption(e.target.value);
  };

  const [text, setText] = useState("");

  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <Header sub={true}>Write Log</Header>
      <ImgWrite>이미지 등록</ImgWrite>
      <FileWrap>
        <input type="file"></input>
        <input type="file"></input>
        <input type="file"></input>
        <input type="file"></input>
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
      <Bticon>
        <div>볼 거에요</div>
        <div>봤어요</div>
      </Bticon>
      <Dropdown>
        <label htmlFor="dropdown"></label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="option1">평점</option>
          <option value="option2">별점 </option>
          <option value="option3">드라마</option>
          <option value="option3">뮤지컬</option>
        </select>
      </Dropdown>
      <TextArea>
        <label htmlFor="textArea"></label>
        <textarea
          id="textArea"
          value={text}
          onChange={handleTextChange}
          rows="9" // 원하는 높이를 설정할 수 있습니다.
          cols="48" // 원하는 너비를 설정할 수 있습니다.
        />
      </TextArea>
      <Loadicon>
        <div>등록</div>
      </Loadicon>
      <Footer />
    </>
  );
};

export default WriteLog;
