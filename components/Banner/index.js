import Image from "next/image";
import React from "react";

const Banner = ({ isBanner, bannerData }) => {
  return (
    <>
      {isBanner == true ? (
        <div className="  h-h600 ">
          <div className="w-full h-h600  bg-bannerBg bg-no-repeat bg-cover  "></div>
        </div>
      ) : undefined}
    </>
  );
};

export default Banner;
