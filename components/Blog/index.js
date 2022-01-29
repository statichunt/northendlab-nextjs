import { dateFormate } from "@/lib/utils/dateFormate";
import { kebabCase } from "@/lib/utils/slugger";
import Pagination from "components/Pagination/Pagination";
import { marked } from "marked";
import Link from "next/dist/client/link";
import React from "react";

const Blog = ({ posts, page, pagination }) => {
  const indexOfLastPost = page * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const numOfPage = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto">
      <div className="contentContainer">
        {currentPosts.map((d) => (
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

        <Pagination page={page} numOfPage={numOfPage}></Pagination>
      </div>
    </div>
  );
};

export default Blog;
