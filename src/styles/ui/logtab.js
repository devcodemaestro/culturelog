import styled from "@emotion/styled";
import { colors } from "../basic";

export const LogTab = styled.div`
  padding: 3px;
  border-radius: 100px;
  margin-top: 35px;
  background-color: ${colors.tab};
  display: flex;
  justify-content: space-between;
  button {
    width: 49%;
    height: 40px;
    border-radius: 100px;
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    border: 0;
    background-color: ${colors.tab};
  }
  button.on {
    width: 49%;
    height: 40px;
    color: ${colors.main};
    text-align: center;
    border-radius: 100px;
    background: #425997;
  }
`;
