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
      date: "2023-12-13",
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
      />

      <Footer></Footer>
      <Drawer
        title={
          <>
            Selected Date
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={handleCloseDrawer}
              style={{ float: "right" }}
            />
          </>
        }
        placement="bottom"
        closable={false}
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

export default Main;
