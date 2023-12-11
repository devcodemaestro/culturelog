import styled from "@emotion/styled";
import { animationRound } from "./animation";

export const IntroWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url(${process.env.PUBLIC_URL + "/images/intro_bg.jpg"})
    center/cover;
`;

export const IntroLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .round {
    animation: ${animationRound} 3s ease-in-out;
  }
  .play {
    position: absolute;
    left: 52%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
