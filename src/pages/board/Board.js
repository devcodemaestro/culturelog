import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { Upload } from "antd";
import { storage, ref, uploadBytes, getDownloadURL } from "../../fb/fbconfig";
import moment from "moment";

const Board = () => {
  // 업로드된 URL
  const [fbImgUrl, setFbImgUrl] = useState([]);

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

  // const onRemove = e => {
  //   console.log(e);
  //   console.log("안트디자인 ", fileList);
  // };

  const path = "images/";
  const fbUpload = () => {
    // console.log(fileList);
    const arr = fileList.map(async item => {
      // console.log(item.originFileObj);
      // Create a non-duplicate file name.
      const tempName = moment().format("YYYYMMDDhhmmss");
      const fileName = `${path}${tempName}_${item.originFileObj.name}`;
      // console.log(fileName);
      const fbState = await uploadImage(fileName, item.originFileObj);
      // 최종 목록 URL
      return fbState;
      // console.log(fbState);
      // const arr = [...fbImgUrl, fbState];
      // console.log(arr);
      // setFbImgUrl(arr);
    });
    setFbImgUrl(arr);
  };

  console.log("왜");
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

  return (
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
          <>
            {/* // <img key={item} src={item} alt="" /> */}
            <div key={item}>{item}</div>
            <br />
          </>
        ))}
      </div>

      <button
        onClick={() => {
          fbUpload();
        }}
      >
        업로드
      </button>
      <button
        onClick={() => {
          fbNow();
        }}
      >
        보여줘
      </button>
    </div>
  );
};
export default Board;
