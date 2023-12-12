import { css } from "@emotion/react";
import { colors } from "../basic";

export const SubmitBtn = css`
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
`;
    