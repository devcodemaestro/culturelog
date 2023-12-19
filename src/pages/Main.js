import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, ConfigProvider, Drawer, List } from "antd";
import "dayjs/locale/ko";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Main = () => {
  let newDate = "";
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

  // 하단 Drawer 영역
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

  const decrementMonth = value => value.subtract(1, "month");
  const incrementMonth = value => value.add(1, "month");

  const handleCalendarChange = (direction, value) => {
    if (direction === "prev") {
      return decrementMonth(value);
    } else if (direction === "next") {
      return incrementMonth(value);
    }
  };

  const renderCalendarHeader = ({ value, onChange }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "8px 0",
      }}
    >
      <Button
        onClick={() => onChange(handleCalendarChange("prev", value))}
        icon={<LeftOutlined />}
        shape="circle"
        size="small"
      />
      <div style={{ fontSize: "16px", margin: "0 16px" }}>
        {dayjs(value).format("YYYY년 MM월")}
      </div>
      <Button
        onClick={() => onChange(handleCalendarChange("next", value))}
        icon={<RightOutlined />}
        shape="circle"
        size="small"
      />
    </div>
  );
  // 캘린더 영역

  const onPanelChange = (value, mode) => {
    // 패널 변경 시 date 상태 업데이트
    setDate(value.format("YYYY년 MM월"));
  };

  return (
    <>
      <ConfigProvider
        // 디자인 토큰으로 상세 css 설정 하는 영역
        theme={{
          components: {
            Calendar: {
              itemActiveBg: "none",
              // "fullPanelBg":"none",
              // "fullBg" : "none",
            },
          },
        }}
      >
        <Header sub={false}>Culture Log</Header>
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
        ...
      </ConfigProvider>
    </>
  );
};

export default Main;
