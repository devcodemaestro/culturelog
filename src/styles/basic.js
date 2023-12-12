import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const colors = {
  main: "#ffffff",
  secondary: "#ebebeb",
  point: "#273F7C",
  error: "#ff6345",
  placeholder: "#cccccc",
  gray: "#555555",
  black: "#000",
};

export const shadow = {
  light: { boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" },
  bold: {
    boxShadow:
      "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  },
};

export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  height: 100vh;
  overflow-x: auto;
  margin: 0 auto;
  padding: 6rem 1.5%;

  input,
  textarea {
    border: 1px solid ${colors.secondary};
    border-radius: 0;
    font-size: 1.2rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

export const Inner = styled.div`
  padding: 0 3%;
`;

export const HeaderWrap = styled.header`
  position: fixed;
  max-width: ${props => props.maxw + "px"};
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 6rem;
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"}) center/cover;
  h3 {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 300;
    line-height: 6rem;
    color: ${colors.point};
  }
  h3 a {
    color: ${colors.point};
  }

  button {
    display: none;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    &.on {
      display: block;
    }
  }
`;

export const FooterWrap = styled.footer`
  position: fixed;
  max-width: ${props => props.maxw + "px"};
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 6rem;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  line-height: 6rem;
  color: ${colors.point};
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"}) center/cover;
`;

export const FooterBtnWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterAddBtn = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  background: ${colors.main};
  border: 1px solid ${colors.secondary};
  border-radius: 50%;
  ${shadow.light}
  margin-top: -2.5rem;
`;
