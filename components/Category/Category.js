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
    <div className="w-full lg:w-2/3 mx-auto">
      <h2 className="heading  xsm:px-8">
        Posts related to <span className="text-primaryColor">{category}</span>
      </h2>
      <div className="contentContainer">
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
                <a className="mr-2">
                  <i className="fas fa-user pr-1"></i>
                  {d.frontmatter.author},
                </a>
              </Link>
              <span className="mr-2">
                <i className="fas fa-calendar-alt pr-1"></i>{" "}
                {dateFormate(d.frontmatter.date)},
              </span>{" "}
              {d.frontmatter.categories.map((c) => (
                <Link href={`/categories/${kebabCase(c)}`} key={c}>
                  <a className="mr-2">
                    <i className="fas fa-list pr-1"></i>
                    {`${c}`}
                  </a>
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
