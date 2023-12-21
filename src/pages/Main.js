import React, { useState } from "react";
import {
  Avatar,
  Button,
  Calendar,
  ConfigProvider,
  Drawer,
  List,
  theme,
} from "antd";
import "dayjs/locale/ko";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/ko_KR";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
// import { getMediaAll, getDetailMedia } from "../../api/culutrelog_api";

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
    title: "일정 1",
    date: "2023-12-31",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 3,
    title: "일정 2",
    date: "2023-12-12",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 4,
    title: "일정 2",
    date: "2023-12-31",
    image:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 5,
    title: "일정 3",
    date: "2023-12-12",
    image:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 6,
    title: "일정 3",
    date: "2023-12-31",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 7,
    title: "일정 4",
    date: "2023-12-12",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 8,
    title: "일정 4",
    date: "2023-12-31",
    image:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 9,
    title: "일정 5",
    date: "2023-12-12",
    image:
      "https://img.wowtv.co.kr/wowtv_news/dnrs/20230720/2023072008522607175d3244b4fed182172185139.jpg",
  },
  {
    id: 10,
    title: "일정 5",
    date: "2023-12-31",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 11,
    title: "일정 6",
    date: "2023-12-12",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  {
    id: 12,
    title: "일정 6",
    date: "2023-12-31",
    image:
      "https://img.imbc.com/template/2023/07/program_91d1c748-cc1d-4493-b56d-0b2b06564ea2.jpg",
  },
  // ... 기타 데이터
];
const Main = () => {
  let newDate = "";
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 350,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [matchingData, setMatchingData] = useState(null); // 이미지 주소 상태 추가
  const [date, setDate] = useState(dayjs().format("YYYY년 MM월"));

  // List 영역 Pagenation 위치 설정 위한 변수값

  const navigate = useNavigate();

  const params = useParams();
  // iuser 가져오기
  const [search, setSearch] = useSearchParams();
  const iuser = search.get("iuser");

  // 캘린더 json과 연동해 첫 이미지 표시 기능
  const dateCellRender = value => {
    const isToday = dayjs().isSame(value, "date");
    const dateString = value.format("YYYY-MM-DD");
    const matchingData = jsonData.find(data => data.date === dateString);
    // 오늘 날짜 색상 고정
    return (
      <style>
        {`

        .ant-picker-calendar-date-today{
          background:#e6f4ff;
          color:#1677ff;     
        }


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
    const matchingData = jsonData.filter(data =>
      dayjs(data.date).isSame(value, "date"),
    );

    if (matchingData.length === 0) {
      // matchingData가 없으면 Drawer를 열지 않음
      setOpen(false);
      // navigate(`/culturelog/write/${useParams.imedia}?iuser=${iuser}`);
    } else {
      setOpen(true);
      setSelectedDate(value);
      setMatchingData(matchingData);
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
          dataSource={matchingData}
          pagination={{ position: "top", align: "center", pageSize: 3 }}
          renderItem={(item, index) => (
            <Link to={`culturelog/view`} key={item.id}>
              <List.Item extra>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={item.title}
                  description={item.date}
                />
                <Button type="text">더보기</Button>
              </List.Item>
            </Link>
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

  // useEffect(() => {
  //   getMediaAll(params.imedia, iuser);
  // }, []);

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
            List: {
              headerBg: "pink",
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
      </ConfigProvider>
    </>
  );
};

export default Main;
