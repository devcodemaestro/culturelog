import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styled from "@emotion/styled";
import Star from "../../components/Star";
import { ViewInfo, ViewLogWrap, ViewSlider } from "../../styles/viewlog";

const ViewLog = () => {
  const ImgBox = styled.div`
    position: relative;
    img {
      width: 100%;
    }
  `;
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
          <div>
            <button></button>
          </div>
        </ViewInfo>
      </ViewLogWrap>
      <Footer />
    </>
  );
};

export default ViewLog;
