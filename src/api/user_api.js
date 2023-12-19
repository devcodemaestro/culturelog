import axios from "axios";
import { SERVER_URL } from "./config";
const path = `${SERVER_URL}/api/user`;

// 회원가입
export const postSignup = async obj => {
  try {
    const res = await axios.post(`${path}/signup`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const postSignin = async obj => {
  try {
    const res = await axios.post(`${path}/signin`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
