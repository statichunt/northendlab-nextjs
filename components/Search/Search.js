import { dateFormate } from "@/lib/utils/dateFormate";
import { kebabCase } from "@/lib/utils/slugger";

import { marked } from "marked";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Search = ({ showSearchPosts }) => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/search");

      const post = await res.json();
      setSearch(post);
    };
    getPosts();
  }, []);
  console.log(search);
  let searchPost = search.filter((p) => {
    if (showSearchPosts === "") {
      return "";
    } else if (p.frontmatter.title.toLowerCase().includes(showSearchPosts)) {
      return p;
    } else if (p.content.toLowerCase().includes(showSearchPosts)) {
      return p;
    } else if (p.categoryto.includes(showSearchPosts)) {
      return p;
    }
  });

  return (
    <div className={"w-full lg:w-1/2 mx-auto z-40  "}>
      <div className="h-auto w-full  shadow-lg bg-white ">
        {" "}
        {searchPost.map((d) => (
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

export default Search;
