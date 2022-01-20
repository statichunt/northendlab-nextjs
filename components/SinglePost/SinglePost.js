import React from "react";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import { kebabCase } from "@/lib/utils/slugger";
import { dateFormate } from "@/lib/utils/dateFormate";

const SinglePost = ({ posts }) => {
  return (
    <div className="w-full lg:w-1/2 mx-auto shadow-lg p-8">
      <div className="font-primary">
        <h3 className="font-semibold text-h3">{posts[0].frontmatter.title}</h3>
        <p className="text-textLight">
          <Link href={`/author/${kebabCase(posts[0].frontmatter.author)}`}>
            <a>{posts[0].frontmatter.author}</a>
          </Link>
          , <span>{dateFormate(posts[0].frontmatter.date)}</span>,
          {posts[0].category.map((c) => (
            <Link key={c} href={`/categories/${kebabCase(c)}`}>
              <a className="mr-4">{c}</a>
            </Link>
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
          className=" markdown"
        ></div>
      </div>
    </div>
  );
};

export default SinglePost;
