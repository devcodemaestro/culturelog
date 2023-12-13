import styled from "@emotion/styled";
import { colors, shadow } from "./basic";

export const LoginWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url(${process.env.PUBLIC_URL + "/images/intro_bg.jpg"})
    center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
export const LoginLogo = styled.div`
  margin-bottom: 30px;
`;
export const LoginInput = styled.div`
  input {
    width: 313px;
    height: 38px;
    padding-left: 10px;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;
export const LoginBt = styled.button`
  min-width: 15.5rem;
  height: 4rem;
  margin-top: 2rem;
  display: inline-block;
  background: ${colors.point};
  color: ${colors.main};
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1rem 2.4rem;
  border-radius: 10rem;

  ${shadow.light}
  &:hover {
    ${shadow.bold}
  }
`;
