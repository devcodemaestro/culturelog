import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, Drawer, List } from "antd";
import "dayjs/locale/ko";
import { css } from "@emotion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
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

  useEffect(() => {
    handleSelect(selectedDate);
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 설정

  // 캘린더 영역
  const onPanelChange = (value, mode) => {
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

  // 월 변경 버튼 클릭 시 실행되는 함수
  const onMonthChange = direction => {
    // 현재 선택된 날짜를 기준으로 월을 변경
    const newDate =
      direction === "prev"
        ? selectedDate.subtract(1, "month")
        : selectedDate.add(1, "month");
    handleSelect(newDate);
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

  const decrementMonth = value => value.subtract(1, "month");
  const incrementMonth = value => value.add(1, "month");

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
  );

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
      />
      <div style={{ fontSize: "18px", margin: "0 16px" }}>
        {dayjs(value).format("YYYY년 MM월")}
      </div>
      <Button
        onClick={() => onChange(handleCalendarChange("next", value))}
        icon={<RightOutlined />}
        shape="circle"
      />
    </div>
  );

  return (
    <>
      <Header sub={false}>Culture Log</Header>
      <Calendar
        defaultValue={selectedDate}
        onPanelChange={onPanelChange}
        locale={locale}
        onSelect={handleSelect}
        cellRender={dateCellRender}
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
