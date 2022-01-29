import Image from "next/image";
import React from "react";
import { marked } from "marked";

const Banner = ({ bannerData }) => {
  return (
    <>
      <div className="w-full pb-10 sm:pb-0 h-h800 sm:h-h600  bg-bannerBg bg-no-repeat bg-cover relative  flex justify-center items-center">
        <div className="flex flex-wrap absolute bottom-0 w-full lg:w-2/3 mx-auto mb-10 sm:mb-0 ">
          <div className="w-full md:w-1/3 sm:mt-6 my-0 flex justify-center">
            <Image
              src={bannerData.frontmatter.contentImage}
              alt="abc"
              height={500}
              width={300}
            ></Image>
          </div>
          <div className="flex items-center justify-center w-full md:w-2/3  order-1 text-center lg:text-left">
            <h2
              dangerouslySetInnerHTML={{
                __html: marked.parse(bannerData.frontmatter.title),
              }}
              className="prose   greeting"
            ></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
