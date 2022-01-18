import Image from "next/image";
import React from "react";
import { marked } from "marked";
import { content } from "tailwind.config";

const Author = ({ post }) => {
  return (
    <div className="w-1/2 shadow-lg mx-auto p-8 my-4">
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
          className="markdown text-center"
        ></div>
      </div>
    </div>
  );
};

export default Author;
