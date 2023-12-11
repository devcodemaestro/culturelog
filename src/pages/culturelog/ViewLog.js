import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styled from "@emotion/styled";

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
      <div className="ViewLogWrap">
        <div className="ViewSlider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
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
        </div>
        <div className="ViewInfo">
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
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                    ></img>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon_star_half.svg"
                      }
                    ></img>
                  </i>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>감상평</dt>
                <dd></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewLog;
