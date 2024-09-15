import React from "react";
import { useSelector } from "react-redux";
import uploadImage from "../../../assets/image/upload icon.png";
import "../../../assets/css/App.css";

const UploadImage = () => {
  const image = useSelector((state) => state.products.uploadImg);
  // console.log(image, " image link");

  // console.log(image + " link image");
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card " style={{ width: "18rem" }}>
        <img
          className="card-img-top w-50 m-auto m-5 "
          src={image ? image : uploadImage}
        />
      </div>
    </div>
  );
};

export default UploadImage;
