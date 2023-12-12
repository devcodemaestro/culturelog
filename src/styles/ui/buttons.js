import { colors, shadow } from "../basic";
import styled from "@emotion/styled";

export const BtnWrap = styled.div`
  position: relative;
  &.half {
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      width: 48%;
    }
  }
  &.square {
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      width: 48%;
      border-radius: 5px;
    }
  }
`;

export const BlueBtn = styled.button`
  margin-top: 2rem;
  display: inline-block;
  background: ${colors.point};
  color: ${colors.main};
  padding: 1rem 2.4rem;
  border-radius: 10rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  transition: 0.2s;

  ${shadow.light}
  &:hover {
    ${shadow.bold}
  }
`;
export const GrayBtn = styled.button`
  margin-top: 2rem;
  display: inline-block;
  background: ${colors.secondary};
  color: ${colors.black};
  padding: 1rem 2.4rem;
  border-radius: 10rem;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  ${shadow.light}
  transition: 0.2s;

  &:hover {
    ${shadow.bold}
  }
`;
export const RedBtn = styled.button`
  margin-top: 2rem;
  display: inline-block;
  background: ${colors.error};
  color: ${colors.main};
  padding: 1rem 2.4rem;
  border-radius: 10rem;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  ${shadow.light}
  transition: 0.2s;

  &:hover {
    ${shadow.bold}
  }
`;
