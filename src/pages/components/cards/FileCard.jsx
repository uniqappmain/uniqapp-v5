import React from "react";
import Images from "../../../assets/images/Images";

const FileCard = ({ imageID }) => {
  return (
    <div className="FileCard box-shadow-2">
      <h3>{imageID}</h3>
      <img src={Images.Esmearlds} alt="" />

    </div>
  );
};

export default FileCard;
