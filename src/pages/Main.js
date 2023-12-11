import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Calendar, Drawer, theme } from "antd";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { CloseOutlined } from "@ant-design/icons";

// 캘린더 영역
const onPanelChange = (value, mode) => {
  console.log(value);
  console.log(value.format("YYYY-MM-DD"), mode);
};
dayjs.locale("ko");

const Main = () => {
  // Drawer 영역
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const showDrawer = value => {
    setSelectedDate(value);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
          <p>Selected Date: {selectedDate.format("YYYY-MM-DD")}</p>
        ) : (
          <p>No date selected</p>
        )}
      </Drawer>
    </>
  );
};

export default Main;
