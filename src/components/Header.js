import React from "react";
import { HeaderWrap, Inner } from "../styles/basic";

const Header = props => {
  return <HeaderWrap maxw="393">{props.children}</HeaderWrap>;
};

export default Header;
