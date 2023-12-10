import styled from "@emotion/styled";

const colors = {
  point: "#273F7C",
};

export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  height: 100vh;
  overflow-x: auto;
  margin: 0 auto;
  padding: 6rem 3%;
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
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  line-height: 6rem;
  color: ${colors.point};
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"});
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
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"});
`;
