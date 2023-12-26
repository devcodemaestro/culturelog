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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { WarningBox, WarningWrap } from "../../styles/ui/warning";
import { useEffect, useState } from "react";
import { delMedia, getDetailMedia } from "../../api/culutrelog_api";

const initGetState = {
  imedia: 0,
  title: "",
  comment: "",
  date: "",
  pics: [""],
  issaw: 0,
  star: 0,
};

const ViewLog = ({ loginCheck }) => {
  // imedia 가져오기
  const params = useParams();
  // iuser 가져오기
  const [search, setSearch] = useSearchParams();
  const iuser = search.get("iuser");

  //네비게이션 사용
  const navigate = useNavigate();

  // 상세정보 state
  const [viewData, setViewData] = useState(initGetState);

  // 삭제버튼 클릭 시 경고창 노출
  const handleClickWarning = () => {
    document.getElementById("warning-wrap").style.left = "0";
  };

  // 삭제 취소 시 경고창 제거
  const handleClickCancel = () => {
    document.getElementById("warning-wrap").style.left = "-100%";
  };

  //기록삭제 후 메인 화면으로 이동
  const handleClickDelete = () => {
    const resultAction = result => {
      if (result === 0) {
        alert("기록을 삭제하지 못했습니다. \n다시 시도해주세요.");
        return;
      } else {
        alert("삭제가 완료되었습니다. \n메인페이지로 이동합니다.");
        navigate("/");
        return;
      }
    };
    delMedia(params.imedia, iuser, resultAction);
  };

  useEffect(() => {
    loginCheck();
    const errorPage = error => {
      const name = error.name;
      const message = error.message;
      navigate(`/error?name=${name}&message=${message}`);
      return;
    };
    getDetailMedia(params.imedia, iuser, setViewData, errorPage);
  }, []);

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
            {Array.isArray(viewData.pics) &&
              viewData.pics.map((item, index) => {
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
          <h4>{viewData.title}</h4>
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
                <dd>
                  {viewData.genrePk === 1
                    ? "영화"
                    : viewData.genrePk === 2
                    ? "드라마"
                    : viewData.genrePk === 3
                    ? "공연"
                    : viewData.genrePk === 4
                    ? "기타"
                    : ""}
                </dd>
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
                navigate(`/culturelog/edit/${params.imedia}?iuser=${iuser}`);
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
