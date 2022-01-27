import Image from "next/image";
import React from "react";
import { marked } from "marked";

const Banner = ({ bannerData }) => {
  return (
    <>
      <div className="w-full h-h800 pb-10 sm:pb-0  lg:h-h600  bg-bannerBg bg-no-repeat bg-cover relative  flex justify-center items-center">
        <div className="flex flex-wrap absolute bottom-0 w-full lg:w-2/3 mx-auto mb-10 sm:mb-0 ">
          <div className="w-full lg:w-1/3 my-6 sm:my-0 flex justify-center">
            <Image
              src={bannerData.frontmatter.contentImage}
              alt="abc"
              height={500}
              width={300}
            ></Image>
          </div>
          <div className="flex items-center justify-center w-full lg:w-2/3  order-1 text-center lg:text-left">
            <h1
              dangerouslySetInnerHTML={{
                __html: marked.parse(bannerData.frontmatter.title),
              }}
              className="prose greeting"
            ></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
