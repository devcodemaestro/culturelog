import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DateDiary,
  Dropdown,
  ImgUrl,
  ImgWrite,
  Loadicon,
  StarRate,
  TextArea,
} from "../../styles/writelog";
import Stardrop from "../../components/Stardrop";
import { useNavigate } from "react-router-dom";
import { LogTabBt } from "../../styles/ui/logtabstyle";
import { postMedia } from "../../api/culutrelog_api";
import { storage, ref, uploadBytes, getDownloadURL } from "../../fb/fbconfig";
import moment from "moment";
import Upload from "antd/es/upload/Upload";
import ImgCrop from "antd-img-crop";

const WriteLog = ({ iuser }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [look, setLook] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [star, setStar] = useState({});
  const [fbImgUrl, setFbImgUrl] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    fbUpload();
    fbNow();
  };

  const handleDropdownChange = e => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const handleLookClick = () => {
    setLook(false);
  };
  const handleNoLookClick = () => {
    setLook(true);
  };
  const hadleClickEdit = () => {
    navigate("/mylog");
  };
  const handleChangeTitle = e => {
    // console.log(e.target.value)
    setTitle(e.target.value);
  };
  const handleChangeDate = e => {
    // console.log(e.target.value)
    setDate(e.target.value);
  };
  const handleTextChange = e => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const handleChangeStar = value => {
    // console.log(e.target.value);
    setStar(value);
  };
  const starpoint = Number(star.key);

  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const path = "images/";
  const fbUpload = async () => {
    try {
      const arr = await Promise.all(
        fileList.map(async item => {
          const tempName = moment().format("YYYYMMDDhhmmss");
          const fileName = `${path}${tempName}_${item.originFileObj.name}`;
          const fbState = await uploadImage(fileName, item.originFileObj);
          return fbState;
        }),
      );

      setFbImgUrl(arr);
      console.log("업로드 성공", arr);
    } catch (error) {
      console.error("업로드 실패", error);
      // 실패할 경우에 대한 처리를 추가할 수 있습니다.
    }
  };
  // console.log("왜");
  const [rememberArr, setRememebrArr] = useState([]);
  const uploadImage = async (_fileName, _file) => {
    // console.log(_fileName, _file);

    try {
      const imageRef = ref(storage, _fileName);
      const fbRes = await uploadBytes(imageRef, _file);
      const url = await getDownloadURL(fbRes.ref);
      console.log("gogogo ", url);
      // rememberArr.push(url);
      // console.log(rememberArr);

      setRememebrArr(prev => [...prev, url]);
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const fbNow = () => {
    console.log(rememberArr);
  };

  // console.log(obj);

  return (
    <>
      <Header sub={true}>Write Log</Header>
      <ImgWrite>이미지 등록</ImgWrite>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "10px" }}>
          <ImgCrop rotationSlider aspect={71 / 102}>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 4 && "+ Upload"}
            </Upload>
          </ImgCrop>

          <div>
            {rememberArr.map(item => (
              <>
                {/* // <img key={item} src={item} alt="" /> */}
                <div key={item}>{item}</div>
                <br />
              </>
            ))}
          </div>
          <button
            onClick={() => {
              fbNow();
            }}
          >
            보여줘
          </button>
        </div>
        <ImgUrl>
          <input
            type="text"
            placeholder="이미지 URL을 추가해주세요."
            className="imgurl"
          ></input>
          <input
            type="text"
            placeholder="제목을 입력하세요."
            className="imgurl"
            onChange={e => {
              handleChangeTitle(e);
            }}
          ></input>
        </ImgUrl>
        <DateDiary>
          <div className="date-wrap">
            <input
              type="date"
              className="date"
              onChange={e => {
                handleChangeDate(e);
              }}
            />
          </div>
        </DateDiary>
        <Dropdown>
          <label htmlFor="dropdown">
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="1">장르</option>
              <option value="2">영화</option>
              <option value="3">드라마</option>
              <option value="4">뮤지컬</option>
              <option value="5">기타</option>
            </select>
          </label>
        </Dropdown>
        <LogTabBt>
          <button
            className={!look ? "on" : ""}
            onClick={handleLookClick}
            disabled={!look}
          >
            볼 거에요
          </button>
          <button
            className={look ? "on" : ""}
            onClick={handleNoLookClick}
            disabled={look}
          >
            봤어요
          </button>
        </LogTabBt>
        {look && (
          <>
            <StarRate>
              <Stardrop
                onChange={value => {
                  handleChangeStar(value);
                }}
              />
            </StarRate>
            <TextArea>
              <label htmlFor="textArea"></label>
              <textarea
                id="textArea"
                placeholder="감상평을 남겨주세요. (500자 내외)"
                value={text}
                onChange={e => {
                  handleTextChange(e);
                }}
                rows="9" // 원하는 높이를 설정할 수 있습니다.
                cols="100%" // 원하는 너비를 설정할 수 있습니다.
                style={{ width: "100%", padding: "1rem 1rem" }}
              />
            </TextArea>
          </>
        )}
        <Loadicon>
          <button className="londing">등록</button>
        </Loadicon>
      </form>
      <Footer />
    </>
  );
};

export default WriteLog;
