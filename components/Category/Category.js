import React, { useEffect, useState } from "react";
import Link from "next/dist/client/link";
import { marked } from "marked";
import { kebabCase } from "@/lib/utils/slugger";
import { dateFormate } from "@/lib/utils/dateFormate";

const Category = ({ posts, category }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    setPost(posts[0]);
  }, []);

  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <h2 className="text-h2 font-primary text-dark font-bold p-8">
        Posts related to <span className="text-primaryColor">{category}</span>
      </h2>
      <div className="w-full  shadow-lg p-8">
        {post.map((d) => (
          <div
            className="font-primary border-b border-borderColor py-8 md:w-11/12 mx-auto "
            key={d.slug}
          >
            <Link href={`/posts/${d.slug}`}>
              <a>
                <h3 className="title">{d.frontmatter.title}</h3>
              </a>
            </Link>
            <p className="subTitle">
              <Link href={`/author/${kebabCase(d.frontmatter.author)}`}>
                <a>{d.frontmatter.author}</a>
              </Link>
              , {dateFormate(d.frontmatter.date)},{" "}
              {d.frontmatter.categories.map((c) => (
                <Link href={`/categories/${kebabCase(c)}`} key={c}>
                  <a className="mr-2">{`${c}`}</a>
                </Link>
              ))}
            </p>

            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: marked.parse(d.content.slice(0, 141)),
              }}
            ></div>
            <Link
              href={{
                pathname: `/posts/${d.slug}`,
                query: d.slug,
              }}
            >
              <a className="postButton">Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
