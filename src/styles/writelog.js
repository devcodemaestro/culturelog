import styled from "@emotion/styled";
import { colors } from "./basic";

export const ImgWrite = styled.div`
  padding-top: 2rem;
  font-size: 1.2rem;
  width: 100%;
`;
export const FileWrap = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  .icon-file {
    margin-right: 0.5rem;
    height: 10.2rem;
    background-color: transparent;
    border: 2px solid ${colors.secondary};
    width: 9rem;
    color: ${colors.secondary};
    font-size: 1.5rem;
    
  }
`;
export const ImgUrl = styled.div`
  padding-top: 2rem;
  .imgurl {
    margin-top: 20px;
    width: 100%;
    height: 38px;
  }
`;
export const Dropdown = styled.div`
  margin-top: 2rem;
  select {
    width: 100%;
    height: 38px;
    border: solid ${colors.secondary};
  }
`;
export const Bticon = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    width: 150px;
    height: 46px;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;
  }
  .saw {
    background-color: ${colors.point};
    color: ${colors.main};
  }
`;
export const TextArea = styled.div`
  margin-top: 2rem;
`;
export const Loadicon = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 46px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
    text-align: center;
    cursor: pointer;
    background-color: ${colors.point};
    color: ${colors.main};
  }
`;