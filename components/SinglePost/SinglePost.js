import React from "react";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";

const SinglePost = ({ posts }) => {
  return (
    <div className="w-full md:w-2/3 mx-auto shadow-lg p-8">
      <div className="font-primary">
        <h3 className="font-semibold text-h3">{posts[0].frontmatter.title}</h3>
        <p className="text-textLight">
          <a>{posts[0].frontmatter.author}</a>,{" "}
          <a>{posts[0].frontmatter.date}</a>,
          {posts[0].category.map((c) => (
            <a className="mr-4" key={c}>
              {c}
            </a>
          ))}
        </p>

        <div className="w-full h-80 relative my-8">
          <Image
            src={posts[0].frontmatter.image}
            layout="fill"
            objectFit="cover"
            alt="abc"
          ></Image>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(posts[0].content) }}
          className="markdown"
        ></div>
      </div>
    </div>
  );
};

export default SinglePost;
