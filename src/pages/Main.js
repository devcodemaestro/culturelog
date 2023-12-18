import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, Drawer, List } from "antd";
import "dayjs/locale/ko";
import { css } from "@emotion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  let newDate = "";
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [matchingData, setMatchingData] = useState(null); // 이미지 주소 상태 추가
  const [date, setDate] = useState(dayjs().format("YYYY년 MM월"));
  // JSON 테스트용 데이터
  const jsonData = [
    {
      id: 1,
      title: "일정 1",
      date: "2023-12-12",
      image:
        "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
    },
    {
      id: 2,
      title: "일정 2",
      date: "2023-12-31",
      image:
        "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
    },
    // ... 기타 데이터
  ];

  // 캘린더 json과 연동해 첫 이미지 표시 기능
  const dateCellRender = value => {
    const dateString = value.format("YYYY-MM-DD");
    const matchingData = jsonData.find(data => data.date === dateString);

    return (
      <style>
        {`
          .ant-picker-cell[title="${dateString}"] {
            background-image: url(${matchingData ? matchingData.image : ""});
            background-size: cover;
            background-repeat:no-repeat;

          .ant-picker-calendar-date-content{
            height:60px;
          }
        `}
      </style>
    );
  };

  // Drawer 영역
  const handleSelect = value => {
    const matchingData = jsonData.find(data =>
      dayjs(data.date).isSame(value, "date"),
    );

    if (matchingData) {
      setSelectedDate(value);
      setMatchingData(matchingData);
      setOpen(true);
    } else {
      // matchingData가 없으면 Drawer를 열지 않음
      setOpen(false);

      // 이 부분에서 버튼을 클릭한 경우에만 navigate("/culturelog/Edit") 실행
      if (value instanceof dayjs && value.isValid()) {
        navigate("/culturelog/Edit");
      }
    }
  };

  // Drawer 닫기 핸들러
  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const DrawerContent = ({ matchingData, onCloseDrawer }) => (
    <Drawer
      title={<>기록을 선택해주세요!</>}
      placement="bottom"
      closable={true}
      onClose={onCloseDrawer}
      open={open}
      getContainer={false}
      height="50%"
    >
      {matchingData ? (
        <List
          itemLayout="horizontal"
          dataSource={[matchingData]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.title}
                description={item.date}
              />
              {/* <Link to={`/details/${item.id}`}> */}
              <Link to={`culturelog/view`}>
                <Button type="text">더보기</Button>
              </Link>
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </Drawer>
  );

  const renderCalendarHeader = ({ value }) => {
    const handlePrevBtnClick = () => {
      newDate = value.clone().subtract(1, "month");
      setDate(newDate.format("YYYY년 MM월"));
      // console.log(date);
    };

    const handleNextBtnClick = () => {
      newDate = value.clone().add(1, "month");
      setDate(newDate.format("YYYY년 MM월"));
      // console.log(date);
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "8px 16px",
        }}
      >
        <Button
          size="small"
          icon={<LeftOutlined />}
          onClick={handlePrevBtnClick}
          shape="circle"
        />
        <div style={{ fontSize: "16px", margin: "0 16px" }}>{date}</div>
        <Button
          size="small"
          icon={<RightOutlined />}
          onClick={handleNextBtnClick}
          shape="circle"
        />
      </div>
    );
  };
  // 캘린더 영역

  const onPanelChange = (value, mode) => {
    // 패널 변경 시 date 상태 업데이트
    setDate(value.format("YYYY년 MM월"));
  };

  return (
    <>
      <Header sub={false}>Culture Log</Header>
      {/* <button onClick={console.log(dayjs().format("YYYY-MM-DD"))}>좌측 버튼</button> */}
      {/* <div>날짜 영역</div>
      <button>우측 버튼</button> */}
      <Calendar
        defaultValue={selectedDate}
        onPanelChange={onPanelChange}
        locale={locale}
        onSelect={handleSelect}
        cellRender={value => dateCellRender(value)}
        headerRender={renderCalendarHeader}
      />
      <Footer></Footer>
      <DrawerContent
        matchingData={matchingData}
        onCloseDrawer={handleCloseDrawer}
      />
    </>
  );
};

export default Main;
