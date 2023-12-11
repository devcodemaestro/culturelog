import React from "react";
import {
  FooterAddBtn,
  FooterBtnWrap,
  FooterWrap,
  Inner,
} from "../styles/basic";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrap maxw="393">
      <Inner>
        <FooterBtnWrap>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/images/icon_home.svg"}></img>
          </Link>
          <FooterAddBtn>
            <Link to="/culturelog/write">
              <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}></img>
            </Link>
          </FooterAddBtn>
          <Link to="/mylog">
            <img src={process.env.PUBLIC_URL + "/images/icon_user.svg"}></img>
          </Link>
        </FooterBtnWrap>
      </Inner>
    </FooterWrap>
  );
};

export default Footer;
