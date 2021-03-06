import Image from "next/image";
import React from "react";
import { marked } from "marked";

const Author = ({ post }) => {
  return (
    <div className="w-full  shadow-lg  p-8 my-4">
      <div>
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            <Image
              src={post[0].frontmatter.image}
              alt="abc"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            ></Image>
          </div>
        </div>
        <h2 className="text-h2 my-4 font-primary text-center text-dark">
          {post[0].frontmatter.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(post[0].content) }}
          className="markdown text-center font-secondary"
        ></div>
      </div>
    </div>
  );
};

export default Author;
