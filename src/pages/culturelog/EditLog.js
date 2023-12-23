/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DateDiary,
  Dropdown,
  ImgUrl,
  ImgWrite,
  StarRate,
  TextArea,
} from "../../styles/writelog";
import Stardrop from "../../components/Stardrop";
import { BlueBtn, BtnWrap, GrayBtn, RedBtn } from "../../styles/ui/buttons";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { WarningBox, WarningWrap } from "../../styles/ui/warning";
import { LogTabBt } from "../../styles/ui/logtabstyle";
import { storage, ref, uploadBytes, getDownloadURL } from "../../fb/fbconfig";
import moment from "moment";
import Upload from "antd/es/upload/Upload";
import ImgCrop from "antd-img-crop";
import { getDetailMedia } from "../../api/culutrelog_api";

const EditLog = ({ iuser }) => {
  // imedia 가져오기
  const params = useParams();

  // 상세정보 state
  const [viewData, setViewData] = useState({});

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    getDetailMedia(params.imedia, iuser, setViewData);
  }, [params.imedia, iuser]);

  useEffect(() => {
    if (viewData && viewData.pics && viewData.pics.length > 0) {
      const fileListData = viewData.pics.slice(0, 4).map((img, index) => ({
        uid: `-${index + 1}`,
        name: "image.png",
        status: "done",
        url: img,
      }));
  
      setFileList(fileListData);
    } else {
      // Handle the case when viewData is not available or does not contain pics
      setFileList([]);
    }
  }, [viewData]);

  const [fileList, setFileList] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [look, setLook] = useState(viewData.isSaw === 0 ? false : true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [star, setStar] = useState({});
  const [fbImgUrl, setFbImgUrl] = useState([]);

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
    const arr = await Promise.all(
      fileList.map(async item => {
        const tempName = moment().format("YYYYMMDDhhmmss");
        const fileName = `${path}${tempName}_${item.originFileObj.name}`;
        const fbState = await uploadImage(fileName, item.originFileObj);
        return fbState;
      })
    );
    setFbImgUrl(arr);
  };

  const [rememberArr, setRememberArr] = useState([]);

  const uploadImage = async (_fileName, _file) => {
    try {
      const imageRef = ref(storage, _fileName);
      const fbRes = await uploadBytes(imageRef, _file);
      const url = await getDownloadURL(fbRes.ref);
      setRememberArr(prev => [...prev, url]);
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const fbNow = () => {
    console.log(rememberArr);
  };

  const handleDropdownChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleLookClick = () => {
    setLook(false);
  };

  const handleNoLookClick = () => {
    setLook(true);
  };

  const handleClickCancel = () => {
    document.getElementById("warning-wrap").style.left = "-100%";
  };

  const handleWarningCancel = () => {
    document.getElementById("warning-wrap").style.left = "0%";
  };

  const navigate = useNavigate();

  const handleClickChange = () => {
    navigate("/mylog");
  };

  const handleClickDelete = () => {
    navigate(`/culturelog/view/${params.imedia}`);
  };

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleChangeStar = value => {
    console.log("rating", value);
  
    // value.key를 viewData.star에 설정
    setViewData(prevViewData => ({
      ...prevViewData,
      star: value.key,
    }));
  
    // 이제 viewData.star를 사용하여 별점을 표시하거나 다른 작업을 수행할 수 있습니다.
    console.log("별점:", viewData.star);
  };

 


  
  

  // const obj = {
  //   imedia: params.imedia,
  //   iuser: iuser,
  //   genrePk: selectedOption,
  //   title: title,
  //   date: date,
  //   comment: text,
  //   star: isNaN(starpoint) ? 0 : starpoint,
  //   isSaw: look ? 1 : 0,
  //   pics: rememberArr,
  // };

  // console.log(starpoint);

  return (
    <>
      <Header sub={true}>Edit Log</Header>

      <LogTabBt>
        <button
          className={!look ? "on" : ""}
          onClick={handleLookClick}
          disabled={!look}
          value={viewData.isSaw ? 0 : 1}
          selected
        >
          볼 거에요
        </button>
        <button
          className={look ? "on" : ""}
          onClick={handleNoLookClick}
          disabled={look}
          value={viewData.isSaw ? 1 : 0}
        >
          봤어요
        </button>
      </LogTabBt>

      <ImgWrite>이미지 등록</ImgWrite>
      <div style={{ marginTop: "30px", paddingLeft: "3px" }}>
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
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>

      <ImgUrl>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="imgurl"
          value={viewData.title}
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
            value={viewData.date}
            onChange={e => {
              handleChangeDate(e);
            }}
          />
        </div>
      </DateDiary>

      <Dropdown>
        <label htmlFor="dropdown"></label>
        <select
          id="dropdown"
          value={viewData.genrePk}
          onChange={handleDropdownChange}
        >
          <option value="0" disabled>
            장르
          </option>
          <option value="1" selected={viewData.genrePk === 1}>
            영화
          </option>
          <option value="2" selected={viewData.genrePk === 2}>
            드라마
          </option>
          <option value="3" selected={viewData.genrePk === 3}>
            공연
          </option>
          <option value="4" selected={viewData.genrePk === 4}>
            기타
          </option>
        </select>
      </Dropdown>

      {look && (
        <>
          <StarRate>
          <Stardrop onChange={value => handleChangeStar(value)} starpoint={viewData.star} />
          </StarRate>

          <TextArea>
            <label htmlFor="textArea"></label>
            <textarea
              id="textArea"
              placeholder="감상평을 남겨주세요. (500자 내외)"
              value={viewData.comment}
              onChange={e => {
                handleTextChange(e);
              }}
              rows="9"
              style={{ width: "100%" }}
            />
          </TextArea>
        </>
      )}

      <BtnWrap className="half">
        <GrayBtn
          onClick={() => {
            handleWarningCancel();
          }}
        >
          취소
        </GrayBtn>
        <BlueBtn
          onClick={() => {
            handleClickChange();
          }}
        >
          수정완료
        </BlueBtn>
      </BtnWrap>

      <WarningWrap id="warning-wrap">
        <WarningBox>
          <i>
            <img src={process.env.PUBLIC_URL + "/images/icon_info.svg"} alt="info icon" />
          </i>
          <h5>정말 취소할까요?</h5>
          <p>작성된 내용은 저장되지 않습니다.</p>

          <BtnWrap className="square">
            <BlueBtn
              onClick={() => {
                handleClickCancel();
              }}
              className="writebt"
            >
              다시작성
            </BlueBtn>
            <RedBtn
              onClick={() => {
                handleClickDelete();
              }}
            >
              취소
            </RedBtn>
          </BtnWrap>
        </WarningBox>
      </WarningWrap>

      <Footer />
    </>
  );
};

export default EditLog;