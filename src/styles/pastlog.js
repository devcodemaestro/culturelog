import styled from "@emotion/styled";

export const colors = {
  main: "#ffffff",
  secondary: "#ebebeb",
  tab: "#f7f7f7",
  point: "#273F7C",
  error: "#ff6345",
  placeholder: "#cccccc",
  gray: "#555555",
};

export const LogTab = styled.div`
  padding: 3px;
  border-radius: 100px;
  margin-top: 35px;
  background-color: ${colors.tab};
  display: flex;
  justify-content: space-between;
  button {
    width: 150px;
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
    width: 150px;
    height: 40px;
    color: ${colors.main};
    text-align: center;
    border-radius: 100px;
    background: #425997;
  }
`;
export const LogTotal = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid ${colors.secondary};
  em {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const PastLogList = styled.ul`
  margin-top: 10px;
  width: 100%;
`;
export const PastLogItem = styled.li`
  height: 90px;
  border-radius: 5px;
  border: 1px solid ${colors.secondary};
  background: ${colors.main};
  display: flex;
  align-items: center;
`;
export const LogItemImg = styled.div`
  position: relative;
  width: 63px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  background: #000;
  img {
    width: 100%;
    border-radius: 5px 0px 0px 5px;
    opacity: 0.5;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 400;
    color: ${colors.main};
  }
`;
export const LogText = styled.div`
  width: 186px;
  margin-right: auto;
  padding: 10px;
  img {
    height: 11px;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span {
    color: ${colors.gray};
    font-size: 12px;
    font-weight: 300;
  }
`;
export const LogMore = styled.div`
  button {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    font-size: 10px;
    font-weight: 300;
    border-radius: 50%;

    color: ${colors.gray};
    background-color: ${colors.tab};
  }
`;
