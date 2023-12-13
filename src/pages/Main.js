import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, Drawer, List } from "antd";
import "dayjs/locale/ko";
import { css } from "@emotion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [matchingData, setMatchingData] = useState(null); // 이미지 주소 상태 추가
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

  // 캘린더 영역
  const onPanelChange = (value, mode) => {
    console.log(value);
    // console.log(value.format("YYYY-MM-DD"), mode);
  };

  // 캘린더 이미지 표시 기능 영역
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
    }
  };

  // Drawer 닫기 핸들러
  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Header sub={false}>Culture Log</Header>
      <Calendar
        defaultValue={dayjs("ko").date()}
        onPanelChange={onPanelChange}
        locale={locale}
        onSelect={handleSelect}
        cellRender={dateCellRender}
      />

      <Footer></Footer>
      <Drawer
        title={<>기록을 선택해주세요!</>}
        placement="bottom"
        closable={true}
        onClose={handleCloseDrawer}
        open={open}
        getContainer={false}
        height="30%"
      >
        {matchingData ? (
          <List
            itemLayout="horizontal"
            dataSource={[matchingData]} // JSON 데이터를 리스트에 전달
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={item.title}
                  description={item.date}
                />
                <Link to={`/details/${item.id}`}>
                  <Button type="text">더보기</Button>
                </Link>
              </List.Item>
            )}
          />
        ) : (
          <></>
        )}
      </Drawer>
    </>
  );
};
// 다음 작업에 ConfigProvider를 통한 레이아웃 css를 handleSelect와 연결해서 제어하기
export default Main;
