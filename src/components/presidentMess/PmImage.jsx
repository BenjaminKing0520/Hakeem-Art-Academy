import React from "react";
import presidentImg from "../../assets/Images/President.jpg";

const PmImage = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={presidentImg}
        alt="President"
        className="w-80 md:w-80 h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  );
};

export default PmImage;
