import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, ConfigProvider, Drawer, List } from "antd";
import "dayjs/locale/ko";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getDayMedia, getMediaAll } from "../api/culutrelog_api";
import { MainWrap } from "../styles/basic";

const Main = ({ loginCheck, iuser }) => {
  // 패널 변경시 오늘의 연/월일
  const [ym, setYm] = useState(dayjs().format("YYYY-MM"));

  // getMediaAll을 통해 메인페이지 json 정보를 담기 위한 변수

  const [mainInfo, getMainInfo] = useState([]);

  // 패널 변경시 변경된 날짜 데이터를 담을 변수.
  // 서버에서 데이터를 가져온 후
  const [panelDate, setPanelDate] = useState(dayjs().format("YYYY-MM"));

  //Drawer open 처리를 위한 변수
  const [open, setOpen] = useState(false);

  // 이미지 주소 상태 추가
  const [matchingData, setMatchingData] = useState(null);

  // 선택한 날짜. ex 2023-12-22
  // const [todayDate, setTodayDate] = useState("");

  // 초기에는 빈 배열에 갱신될 때마다 하나의 배열값이 담긴다.
  const [imageUrl, setImageUrl] = useState([]);

  // List에 담아줄 데이터 변수 - 현재 listMedia는 빈 배열
  const [listMedia, setListMedia] = useState([]);

  // 선택한 날짜. ex 2023-12-22
  const [findFullDate, setFindFullDate] = useState(
    dayjs().format("YYYY-MM-DD"),
  );

  // 패널의 날짜와 iuser, 데이터를 담을 변수 전달
  // 오늘의 년/월일 과 차이가 있으면 panelDate를 다시 전달.

  //   getMediaAll(panelDate, 7, getMainInfo);
  // }, [ym]);

  // 오늘의 년/월일 상태 추가
  // useEffect(() => {
  //   const ClickedDate = listMedia;
  //   ClickedDate && ClickedDate.length > 0 ? setOpen(true) : setOpen(false);
  // }, [listMedia]);
  // const isToday = dayjs().isSame(value, "date");

  // useEffect(() => {
  //   getDayMedia(7, findFullDate, setListMedia);
  // }, [findFullDate]);

  // 캘린더 json과 연동해 첫 이미지 표시하는 기능.
  const dateCellRender = value => {
    const dateString = value.format("YYYY-MM-DD");
    const result = mainInfo.find(item => item.date === dateString);

    return (
      <div>
        {result ? (
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              right: 0,
              width: "2rem",
              height: "2rem",
              background: "rgba(39, 63, 124, 0.6)",
              color: "#fff",
              fontSize: "1.2rem",
              borderRadius: "50%",
              lineHeight: "2rem",
              textAlign: "center",
            }}
          >
            {result.mediaCnt}
          </div>
        ) : null}

        <style>
          {`
          
          .ant-picker-calendar-date-value {
            // color: ${listMedia.length > 0 ? "white" : "black"};
          }
          
          
          .ant-picker-cell-today{
            border:1px solid #273F7C;
 
          }

          .ant-picker-cell[title="${dateString}"] {
            background-image: url(${result ? `"${result.pic}"` : ""});
            background-size: cover;
            background-repeat: no-repeat;



            .ant-picker-calendar-date-content{
              height:60px;
            }


        `}
        </style>
      </div>
    );
  };

  // 하단 Drawer 영역
  // const handleSelect = value => {
  //   const dateString = value.format("YYYY-MM-DD");
  //   console.log("findFullDate :", dateString);

  //   // 비동기적으로 데이터를 가져오고, 데이터가 업데이트되면 listMedia 상태를 업데이트
  // useEffect(() => {
  //   getDayMedia(7, findFullDate, setListMedia);
  // }, [findFullDate]);

  const handleSelect = value => {
    const dateString = value.format("YYYY-MM-DD");
    setFindFullDate(dateString);
    getDayMedia(7, findFullDate, setListMedia);

    if (listMedia.length === 0) {
      // matchingData가 없으면 Drawer를 열지 않음
      setOpen(false);
      // navigate(`/culturelog/write/${useParams.imedia}?iuser=${iuser}`);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {}, [listMedia]); // findFullDate와 listMedia를 의존성으로 추가

  // Drawer 닫기 핸들러
  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const DrawerContent = ({ listMedia, onCloseDrawer }) => (
    <Drawer
      title={<>기록을 선택해주세요!</>}
      placement="bottom"
      closable={true}
      onClose={onCloseDrawer}
      open={open}
      getContainer={false}
      height="50%"
    >
      {listMedia ? (
        <List
          key={listMedia.imedia}
          itemLayout="horizontal"
          dataSource={listMedia}
          pagination={{ position: "top", align: "center", pageSize: 3 }}
          renderItem={(item, index) => (
            <Link to={`culturelog/view/${item.imedia}?iuser=7`}>
              <List.Item
                extra={<Button type="text">더보기</Button>}
                className="list-item"
                key={index}
              >
                <List.Item.Meta
                  avatar={<Avatar shape="square" size="large" src={item.pic} />}
                  title={item.title}
                  description={item.date}
                />
              </List.Item>
            </Link>
          )}
        />
      ) : (
        <></>
      )}
      <style>
        {`
          .list-item {
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .list-item:hover {
            background-color: #f0f0f0; /* 원하는 hover 시 배경색 */
          }

          .list-item:active {
            background-color: #d9d9d9; /* 원하는 click 시 배경색 */
          }

          .list-item:hover .list-button,
          .list-item:active .list-button {
            background-color: #1890ff; /* 원하는 hover 및 click 시 배경색 */
            color: #fff; /* 원하는 hover 및 click 시 텍스트 색상 */
          }

          :where(.css-dev-only-do-not-override-x4zgyu).ant-drawer .ant-drawer-body{
            padding:0 24px;
          }
          
        `}
      </style>
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
        justifyContent: "space-between",
        alignItems: "center",
        margin: "30px 0px 15px",
      }}
    >
      <Button
        onClick={() => onChange(handleCalendarChange("prev", value))}
        icon={
          <img
            src={process.env.PUBLIC_URL + "/images/slide_btn_prev.svg"}
            alt="이전"
          />
        }
        shape="circle"
        size="small"
        style={{ border: 0 }}
      />
      <div style={{ fontSize: "16px", margin: "0 16px" }}>
        {dayjs(value).format("YYYY년 MM월")}
      </div>
      <Button
        onClick={() => onChange(handleCalendarChange("next", value))}
        icon={
          <img
            src={process.env.PUBLIC_URL + "/images/slide_btn_next.svg"}
            alt="다음"
          />
        }
        shape="circle"
        size="small"
        style={{ border: 0 }}
      />
    </div>
  );
  // 캘린더 영역

  const onPanelChange = (value, mode) => {
    // 패널 변경 시 date 상태 업데이트
    setPanelDate(value.format("YYYY년 MM월"));
    console.log("value :", value.format("YYYY-MM"));
    setYm(value.format("YYYY-MM"));
  };

  useEffect(() => {
    loginCheck();
    // 패널의 날짜와 iuser, 데이터를 담을 변수 전달
    // 오늘의 년/월일 과 차이가 있으면 panelDate를 다시 전달.
    const fetchData = async () => {
      await getMediaAll(ym, 7, getMainInfo);
    };

    fetchData();
  }, [panelDate]);
  // 디자인 토큰으로 상세 css 설정 하는 영역

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorSplit: "none",
          },
          components: {
            Calendar: {
              // 배경색 삭제.
              controlItemBgActive: "none",
              // },
            },
            Button: {
              textHoverBg: "none",
            },
            Drawer: {
              textHoverBg: "rgba(0, 0, 0, 0.06)",
            },
            // List: {
            //   headerBg: "pink",
            // },
          },
        }}
      >
        <Header sub={false}>Culture Log</Header>
        <MainWrap>
          <Calendar
            defaultValue={dayjs()}
            onPanelChange={onPanelChange}
            locale={locale}
            onSelect={handleSelect}
            cellRender={dateCellRender}
            headerRender={renderCalendarHeader}
          />
        </MainWrap>
        <Footer></Footer>
        <DrawerContent
          listMedia={listMedia}
          onCloseDrawer={handleCloseDrawer}
        />
      </ConfigProvider>
    </>
  );
};

export default Main;
