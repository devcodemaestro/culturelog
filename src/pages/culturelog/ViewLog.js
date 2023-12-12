import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styled from "@emotion/styled";
import Star from "../../components/Star";
import {
  ImgBox,
  ViewInfo,
  ViewLogWrap,
  ViewSlider,
} from "../../styles/viewlog";
import { BlueBtn, BtnWrap, GrayBtn, RedBtn } from "../../styles/ui/buttons";
import { useNavigate } from "react-router-dom";

const ViewLog = () => {
  const navigate = useNavigate();
  const handleClickCancel = () => {
    console.log("aaa");
  };
  const handleClickDelete = () => {
    console.log("bbb");
  };
  return (
    <>
      <Header sub={true}>Culture Log</Header>
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
            <SwiperSlide>
              <ImgBox>
                <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201602/19/htm_20160219171437117902.jpg"></img>
              </ImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <ImgBox>
                <img src="https://marketplace.canva.com/EADxVDYfU6E/2/0/1131w/canva-%ED%9D%91%EB%B0%B1-%EC%97%B0%EC%A3%BC%ED%99%A9%EC%83%89-%EC%96%B4%EB%91%90%EC%9A%B4-%EC%98%81%ED%99%94-%ED%8F%AC%EC%8A%A4%ED%84%B0-rfPXp4tWD8M.jpg"></img>
              </ImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <ImgBox>
                <img src="https://entertainimg.kbsmedia.co.kr/cms/uploads/CONTENTS_20210423093411_18a0c4c6fe376b3670c67b94520e4448.jpg"></img>
              </ImgBox>
            </SwiperSlide>
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
          <h4>싱글 인 서울</h4>
          <ul>
            <li>
              <dl>
                <dt>날짜</dt>
                <dd>2023-12-11</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>장르</dt>
                <dd>드라마</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>평점</dt>
                <dd>
                  <Star num="9" />
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>감상평</dt>
                <dd>재밌었당!</dd>
              </dl>
            </li>
          </ul>
          <BtnWrap className="half">
            <GrayBtn>삭제</GrayBtn>
            <BlueBtn>수정</BlueBtn>
          </BtnWrap>
        </ViewInfo>
        <div className="WarningWrap" id="warning">
          <div className="WarningBox">
            <div className="txt-wrap">
              <i>
                <img src={process.env.PUBLIC_URL + "/images/icon_info.svg"} />
              </i>
              <h5>정말 삭제할까요?</h5>
              <p>삭제된 기록은 다시 복구할 수 없습니다.</p>
            </div>
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
          </div>
        </div>
      </ViewLogWrap>
      <Footer />
    </>
  );
};

export default ViewLog;
