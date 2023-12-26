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

const Main = ({ loginCheck, iuser }) => {
  // 패널 변경시 오늘의 연/월일
  const ym = dayjs().format("YYYY-MM");

  // getMediaAll을 통해 메인페이지 json 정보를 담기 위한 변수

  const [mainInfo, getMainInfo] = useState([]);

  // 서버와의 연동 결과로
  // 아래처럼 월 기준으로 데이터가 있는 날짜(date)와 하나의 이미지(pic), 일정 갯수(mediaCnt)를 반환한다.

  // [
  //   {
  //     "imedia": 35,
  //     "date": "2023-12-22",
  //     "pic": "https://firebasestorage.googleapis.com/v0/b/culture-log-d1536.appspot.com/o/images%2Fculturelog_%E1%84%83%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB%E1%84%87%E1%85%A1%E1%86%B7.jpg?alt=media&token=5504fc9a-6d8a-45c8-acaf-324ef269d323",
  //     "mediaCnt": 2
  //   },
  //   {
  //     "imedia": 37,
  //     "date": "2023-12-26",
  //     "pic": "https://firebasestorage.googleapis.com/v0/b/culture-log-d1536.appspot.com/o/images%2Fculturelog_%E1%84%86%E1%85%A1%E1%84%82%E1%85%A71.jpg?alt=media&token=d9ef8bfc-083f-477a-8fc1-69a3047a2abb",
  //     "mediaCnt": 1
  //   },
  //   {
  //     "imedia": 36,
  //     "date": "2023-12-27",
  //     "pic": "https://firebasestorage.googleapis.com/v0/b/culture-log-d1536.appspot.com/o/images%2Fculturelog_%E1%84%85%E1%85%B5%E1%84%87%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%83%E1%85%B3.jpg?alt=media&token=fea82445-a63b-4c02-b5c5-5c4f19b537f9",
  //     "mediaCnt": 1
  //   }
  // ]
  useEffect(() => {
    loginCheck();
    // 패널의 날짜와 iuser, 데이터를 담을 변수 전달
    // 오늘의 년/월일 과 차이가 있으면 panelDate를 다시 전달.
    getMediaAll(panelDate, 7, getMainInfo);
  }, [ym]);

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
  const [listMedia, getListMedia] = useState([]);

  // 선택한 날짜. ex 2023-12-22
  const [findFullDate, setfindFullDate] = useState(
    dayjs().format("YYYY-MM-DD"),
  );

  // 패널의 날짜와 iuser, 데이터를 담을 변수 전달
  // 오늘의 년/월일 과 차이가 있으면 panelDate를 다시 전달.

  //   getMediaAll(panelDate, 7, getMainInfo);
  // }, [ym]);

  // 오늘의 년/월일 상태 추가
  useEffect(() => {
    loginCheck();
    getDayMedia(7, findFullDate, getListMedia);
  }, [findFullDate]);

  // const isToday = dayjs().isSame(value, "date");

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
              bottom: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "yellow",
              padding: "2px 6px",
              borderRadius: "4px",
              // background: "transparent",
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
            background-image: url(${result ? result.pic : ""});
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
  const handleSelect = value => {
    // setfindFullDate(value.format("YYYY-MM-DD"));
    const dateString = value.format("YYYY-MM-DD");
    // 바로 담지 말고 땡겨쓰기.
    console.log("findFullDate :", dateString);
    getDayMedia(7, dateString, getListMedia);
    const ClickedDate = listMedia;
    console.log("ClickedDate :", listMedia);
    if (ClickedDate === 0) {
      // matchingData가 없으면 Drawer를 열지 않음
      setOpen(false);
      // navigate(`/culturelog/write/${useParams.imedia}?iuser=${iuser}`);
    } else {
      setOpen(true);
    }
    // console.log("listMedia :", listMedia);
  };
  // const handleSelect = value => {
  //   let select = value.format("YYYY-MM-DD");

  //   // 클릭한 날짜에 데이터가 있는지 비교해서 ClickedDate 담음.
  //   const ClickedDate = mainInfo.filter(media =>
  //     dayjs(media.date).isSame(value, "date"),
  //   );
  //   console.log("ClickedDate :", ClickedDate);
  //   if (ClickedDate.length === 0) {
  //     // matchingData가 없으면 Drawer를 열지 않음
  //     setOpen(false);
  //     // navigate(`/culturelog/write/${useParams.imedia}?iuser=${iuser}`);
  //   } else {
  //     setMatchingData(ClickedDate);
  //     setOpen(true);
  //   }
  //   console.log("listMedia :", listMedia);
  // };

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
      {getDayMedia ? (
        <List
          itemLayout="horizontal"
          dataSource={listMedia}
          pagination={{ position: "top", align: "center", pageSize: 3 }}
          renderItem={(item, index) => (
            <Link
              key={item.imedia}
              to={`culturelog/view/${item.imedia}?iuser=1`}
            >
              <List.Item
                extra={
                  <Button type="text" className="list-button">
                    더보기
                  </Button>
                }
                className="list-item"
                key={index}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.pic} />}
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
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0px",
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
    setPanelDate(value.format("YYYY년 MM월"));
  };

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
        <Calendar
          defaultValue={dayjs()}
          onPanelChange={onPanelChange}
          locale={locale}
          onSelect={handleSelect}
          cellRender={dateCellRender}
          headerRender={renderCalendarHeader}
        />
        <Footer></Footer>
        <DrawerContent
          matchingData={listMedia}
          onCloseDrawer={handleCloseDrawer}
        />
      </ConfigProvider>
    </>
  );
};

export default Main;
