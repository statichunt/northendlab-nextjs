import React from "react";
import Link from "next/dist/client/link";
import { marked } from "marked";
import { kebabCase } from "@/lib/utils/slugger";
import { dateFormate } from "@/lib/utils/dateFormate";

const Category = ({ posts, category }) => {
  return (
    <div className="w-full lg:w-1/2 mx-auto">
      <h2 className="text-h2 font-primary text-dark font-bold p-8">
        Posts related to <span className="text-primaryColor">{category}</span>
      </h2>
      <div className="w-full  shadow-lg p-8">
        {posts.map((d) => (
          <div
            className="font-primary border-b border-borderColor py-8 md:w-11/12 mx-auto "
            key={d.slug}
          >
            <Link
              href={{
                pathname: "/posts/[posts]",
                query: { posts: d.slug },
              }}
            >
              <a>
                <h3 className="text-primaryColor text-h3 ">
                  {d.frontmatter.title}
                </h3>
              </a>
            </Link>
            <p className="text-textLight mb-4">
              <Link
                href={{
                  pathname: "/author/[author]",
                  query: {
                    author: kebabCase(d.frontmatter.author),
                  },
                }}
              >
                {d.frontmatter.author}
              </Link>{" "}
              {dateFormate(d.frontmatter.date)},{" "}
              {d.frontmatter.categories.map((c) => (
                <Link
                  href={{
                    pathname: "/category/[categories]",
                    query: { categories: kebabCase(c) },
                  }}
                  key={c}
                >
                  <a className="mr-2">{`${c}`}</a>
                </Link>
              ))}
            </p>

            <div
              className="text-large mb-4 font-normal text-textColor"
              dangerouslySetInnerHTML={{
                __html: marked.parse(d.content.slice(0, 141)),
              }}
            ></div>
            <Link
              href={{
                pathname: "/posts/[posts]",
                query: { posts: d.slug },
              }}
            >
              <a className="text-primaryColor border-b border-primaryColor">
                Read more
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
