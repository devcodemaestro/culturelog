import React from "react";
import { FooterWrap } from "../styles/basic";

const Footer = props => {
  return <FooterWrap maxw="393">{props.children}</FooterWrap>;
};

export default Footer;
