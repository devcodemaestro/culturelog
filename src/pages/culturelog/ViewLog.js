import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Star from "../../components/Star";
import {
  ImgBox,
  ViewInfo,
  ViewLogWrap,
  ViewSlider,
} from "../../styles/viewlog";
import { BlueBtn, BtnWrap, GrayBtn, RedBtn } from "../../styles/ui/buttons";
import { useNavigate } from "react-router-dom";
import { WarningBox, WarningWrap } from "../../styles/ui/warning";

const ViewLog = () => {
  //네비게이션 사용
  const navigate = useNavigate();

  // view 데이터 가져오기
  const viewData = {
    imedia: 1,
    title: "제목",
    comment: "재밌다",
    date: "2023-12-12",
    genre: "드라마",
    pic: [
      "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201602/19/htm_20160219171437117902.jpg",
      "https://marketplace.canva.com/EADxVDYfU6E/2/0/1131w/canva-%ED%9D%91%EB%B0%B1-%EC%97%B0%EC%A3%BC%ED%99%A9%EC%83%89-%EC%96%B4%EB%91%90%EC%9A%B4-%EC%98%81%ED%99%94-%ED%8F%AC%EC%8A%A4%ED%84%B0-rfPXp4tWD8M.jpg",
      "https://entertainimg.kbsmedia.co.kr/cms/uploads/CONTENTS_20210423093411_18a0c4c6fe376b3670c67b94520e4448.jpg",
      "https://i.namu.wiki/i/knBPT7KKEBsRPQnebCJ9TGAPwnkEQ4D6vtu_gtHMwWBFKjUb1cyslAMui3FzSTPwl2mC2acrAzxEcjJ1pOFPfg.webp",
    ],
    isSaw: 1,
    star: 5,
  };

  // 삭제버튼 클릭 시 경고창 노출
  const handleClickWarning = () => {
    document.getElementById("warning-wrap").style.left = "0";
  };

  // 삭제 취소 시 경고창 안보임
  const handleClickCancel = () => {
    document.getElementById("warning-wrap").style.left = "-100%";
  };
  //기록삭제 후 메인 화면으로 이동
  const handleClickDelete = () => {
    navigate("/");
  };

  return (
    <>
      <Header sub={true}>View Log</Header>
      <ViewLogWrap>
        <ViewSlider>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop="true"
            pagination={{
              type: "fraction",
            }}
            navigation={{
              nextEl: ".slide-btn.next",
              prevEl: ".slide-btn.prev",
            }}
            modules={[Pagination, Navigation]}
          >
            {viewData.pic.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ImgBox>
                    <img src={item} alt={`image${index + 1}`}></img>
                  </ImgBox>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className="slide-btn prev">
            <img
              src={process.env.PUBLIC_URL + "/images/slide_btn_prev.svg"}
              alt="이전"
            />
          </button>
          <button className="slide-btn next">
            <img
              src={process.env.PUBLIC_URL + "/images/slide_btn_next.svg"}
              alt="다음"
            />
          </button>
        </ViewSlider>
        <ViewInfo>
          <h4>
            {viewData.isSaw === 0 ? "볼거예요" : "봤어요"} {viewData.title}
          </h4>
          <ul>
            <li>
              <dl>
                <dt>날짜</dt>
                <dd>{viewData.date}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>장르</dt>
                <dd>{viewData.genre}</dd>
              </dl>
            </li>
            {viewData.isSaw === 0 ? (
              ""
            ) : (
              <>
                <li>
                  <dl>
                    <dt>평점</dt>
                    <dd>
                      <Star num={viewData.star} />
                    </dd>
                  </dl>
                </li>
                <li className="wd100">
                  <dl>
                    <dt>감상평</dt>
                    <dd>{viewData.comment}</dd>
                  </dl>
                </li>
              </>
            )}
          </ul>
          <BtnWrap className="half">
            <GrayBtn
              onClick={() => {
                handleClickWarning();
              }}
            >
              삭제
            </GrayBtn>
            <BlueBtn
              onClick={() => {
                navigate("/culturelog/edit");
              }}
            >
              수정
            </BlueBtn>
          </BtnWrap>
        </ViewInfo>
      </ViewLogWrap>
      <WarningWrap id="warning-wrap">
        <WarningBox>
          <i>
            <img src={process.env.PUBLIC_URL + "/images/icon_info.svg"} />
          </i>
          <h5>정말 삭제할까요?</h5>
          <p>삭제된 기록은 다시 복구할 수 없습니다.</p>
          <BtnWrap className="square">
            <BlueBtn
              onClick={() => {
                handleClickCancel();
              }}
            >
              취소
            </BlueBtn>
            <RedBtn
              onClick={() => {
                handleClickDelete();
              }}
            >
              삭제
            </RedBtn>
          </BtnWrap>
        </WarningBox>
      </WarningWrap>
      <Footer />
    </>
  );
};

export default ViewLog;
