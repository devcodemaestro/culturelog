import axios from "axios";
import { SERVER_URL } from "./config";
const path = `${SERVER_URL}/api/media`;

// 메인페이지 가져오기
export const getMediaAll = async (ym, iuser, getMedia) => {
  try {
    const res = await axios.get(`${path}/ym?ym=${ym}&iuser=${iuser}`);
    getMedia(res.data);
    console.log("res.data : ", res.data);
  } catch (error) {
    console.log(error);
  }
};

// 날짜별 미디어 리스트 가져오기
export const getDayMedia = async (iuser, matchingData, getDayMedia) => {
  try {
    const res = await axios.get(
      `${path}/day?iuser=${iuser}&date=${matchingData}`,
    );
    getDayMedia(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 마이로그(볼 거예요 / 봤어요) 가져오기
export const getMedia = async (setLogList, iuser, is_saw) => {
  try {
    const res = await axios.get(`${path}?is_saw=${is_saw}&iuser=${iuser}`);
    setLogList(res.data);
    // console.log(res.data);
  } catch (error) {
    const demo = await axios.get(`/getloglist.json`);
    setLogList(demo.data);
    console.log("로그 리스트 에러", error);
  }
};

// 로그 뷰(상세) 가져오기
export const getDetailMedia = async (imedia, iuser, setViewData) => {
  try {
    // http://192.168.0.144:5211/api/media/0?iuser=0
    const res = await axios.get(`${path}/${imedia}?iuser=${iuser}`);
    setViewData(res.data);
    console.log(res.data);
  } catch (error) {
    const demo = await axios.get(`/getview.json`);
    setViewData(demo.data);
    alert("정보를 가져오지 못했습니다. \n임시데이터로 출력됩니다.");
  }
};

// 로그 등록
export const postMedia = async obj => {
  try {
    const res = await axios.post(`${path}`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};


// 수정
export const putMedia = async obj => {
  try {
    const res = await axios.put(`${path}`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 삭제
export const delMedia = async (imedia, iuser, resultAction) => {
  try {
    // http://192.168.0.144:5211/api/media?iuser=0&imedia=0
    const res = await axios.delete(`${path}?iuser=${iuser}&imedia=${imedia}`);
    resultAction(res.data.result);
  } catch (error) {
    resultAction(-5555);
  }
};
