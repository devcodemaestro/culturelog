import React, { useEffect, useState } from "react";
import { Avatar, Button, Calendar, ConfigProvider, Drawer, List } from "antd";
import "dayjs/locale/ko";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getMediaAll } from "../api/culutrelog_api";

// JSON 테스트용 데이터
// const jsonData = [
//   {
//     imedia: 1,
//     title: "이게 바로 제목입니다.",
//     comment: "이게 바로 코멘트 입니다.",
//     date: "2023-12-28",
//     isSaw: 0,
//     genrePk: 1,
//     star: 8,
//     pics: [
//       "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
//     ],
//   },
//   {
//     imedia: 2,
//     title: "양갱",
//     comment: "string",
//     date: "2023-12-15",
//     isSaw: 1,
//     genrePk: 1,
//     star: 0,
//     pics: [
//       "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
//     ],
//   },
//   {
//     imedia: 3,
//     title: "양갱2",
//     comment: "string",
//     date: "2023-12-15",
//     isSaw: 1,
//     genrePk: 1,
//     star: 0,
//     pics: [
//       "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
//     ],
//   },
//   {
//     imedia: 5,
//     title: "string",
//     comment: "string",
//     date: "2023-12-22",
//     isSaw: 0,
//     genrePk: 1,
//     star: 0,
//     pics: [
//       "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
//     ],
//   },
//   {
//     imedia: 6,
//     title: "string",
//     comment: "string",
//     date: "2023-12-11",
//     isSaw: 0,
//     genrePk: 1,
//     star: 0,
//     pics: [
//       "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
//     ],
//   },
//   {
//     id: 7,
//     title: "일정 4",
//     date: "2023-12-12",
//     pics: [
//       "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
//     ],
//   },
//   {
//     id: 8,
//     title: "일정 4",
//     date: "2023-12-31",
//     pics: [
//       "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
//     ],
//   },
//   {
//     id: 9,
//     title: "일정 5",
//     date: "2023-12-12",
//     pics: [
//       "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
//     ],
//   },
//   {
//     id: 10,
//     title: "일정 5",
//     date: "2023-12-31",
//     pics: [
//       "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
//     ],
//   },
//   // ... 기타 데이터
// ];

const Main = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [matchingData, setMatchingData] = useState(null); // 이미지 주소 상태 추가
  const [date, setDate] = useState(dayjs().format("YYYY-MM"));

  const [media, getMedia] = useState([]);

  const [dayMedia, getDayMedia] = useState([]);

  // const isToday = dayjs().isSame(value, "date");

  // 캘린더 json과 연동해 첫 이미지 표시 기능
  const dateCellRender = value => {
    const dateString = value.format("YYYY-MM-DD");
    const findMedia = media.find(item => item.date === dateString);
    console.log("find matchingData : ", matchingData);

    const countDate = 1;
    // 오늘 날짜 색상 고정
    return (
      <div>
        {countDate.length > 0 && (
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
            {countDate.length}
          </div>
        )}
        <style>
          {`.ant-picker-cell-today{
            border:1px solid #273F7C;
 
          }
          .ant-picker-cell[title="${dateString}"] {
            background-image: url(${findMedia ? findMedia.pic : ""});
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
    const matchingDateData = media.filter(media =>
      dayjs(media.date).isSame(value, "date"),
    );
    console.log("filter matchingDateData : ", matchingDateData);
    if (matchingDateData.length === 0) {
      // matchingData가 없으면 Drawer를 열지 않음
      setOpen(false);
      // navigate(`/culturelog/write/${useParams.imedia}?iuser=${iuser}`);
    } else {
      setSelectedDate(value);
      setMatchingData(matchingDateData);
      setOpen(true);
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
          dataSource={dayMedia}
          pagination={{ position: "top", align: "center", pageSize: 3 }}
          renderItem={(item, index) => (
            <Link
              to={`culturelog/view/${item.imedia}?iuser=1`}
              key={item.imedia}
            >
              <List.Item
                extra={
                  <Button type="text" className="list-button">
                    더보기
                  </Button>
                }
                className="list-item"
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
    setDate(value.format("YYYY년 MM월"));
  };

  useEffect(() => {
    getMediaAll(date, 1, getMedia);
  }, [date]);

  useEffect(() => {
    getDayMedia(1, matchingData, getDayMedia);
  }, []);

  console.log("matchingData media :", matchingData);
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
              // controlItemColorActive: "white",
              // 여기 위치 맞음
              // itemActiveBg: "green",
              // itemHoverBg: "white",
              // itemActiveTextColor: "green",
              // itemTextColor: "green",
              // dateCellRender: {
              //   itemActiveBg: "green",
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
      </ConfigProvider>
    </>
  );
};

export default Main;
