import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Button, Calendar, Drawer, List, theme } from "antd";
import "dayjs/locale/ko";
import { css } from "@emotion/react";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// 캘린더 영역
const onPanelChange = (value, mode) => {
  console.log(value);
  // console.log(value.format("YYYY-MM-DD"), mode);
};
dayjs.locale("ko");

const Main = () => {
  // Drawer 영역
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const showDrawer = value => {
    setSelectedDate(value);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // JSON 테스트용 데이터
  const jsonData = [
    {
      id: 1,
      title: "일정 1",
      date: "2023-12-12",
      image: "photo1.svg",
    },
    {
      id: 2,
      title: "일정 2",
      date: "2023-12-12",
      image: "photo2.svg",
    },
    // ... 기타 데이터
  ];

  return (
    <>
      <Header sub={false}>Culture Log</Header>
      <Calendar
        defaultValue={dayjs("ko").date()}
        onPanelChange={onPanelChange}
        locale={locale}
        onSelect={showDrawer}
      />
      <Footer></Footer>
      <Drawer
        title={
          <>
            Selected Date
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={onClose}
              style={{ float: "right" }}
            />
          </>
        }
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        width="70%"
      >
        {selectedDate ? (
          <List
            itemLayout="horizontal"
            dataSource={jsonData} // JSON 데이터를 리스트에 전달
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<Link to={`/details/${item.id}`}>{item.title}</Link>}
                  description={item.date}
                />
                <Button type="text" icon={"더보기"} />
              </List.Item>
            )}
          />
        ) : (
          <p>No date selected</p>
        )}
      </Drawer>
    </>
  );
};

export default Main;
