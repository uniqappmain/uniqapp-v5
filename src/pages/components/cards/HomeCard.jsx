import React from "react";

const HomeCard = ({ name }) => {
  return (
    <div className="HomeCard box-shadow-2">
      <img
        className="width-100 background-color-grey-7 background-color-gradient-3"
        src=""
        alt=""
      />
      <div className="flex-center-center width-100">
        <h3 className="text-weight-bold text-color-grey-10">{name}</h3>
      </div>
    </div>
  );
};

export default HomeCard;
