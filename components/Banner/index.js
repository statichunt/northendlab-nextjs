import Image from "next/image";
import React from "react";

const Banner = ({ isBanner, bannerData }) => {
  return (
    <>
      {isBanner == true ? (
        <div className="w-full h-80 relative">
          <Image
            src={bannerData.frontmatter.bgImage}
            alt="alt"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
      ) : undefined}
    </>
  );
};

export default Banner;
