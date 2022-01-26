import { dateFormate } from "@/lib/utils/dateFormate";
import { kebabCase } from "@/lib/utils/slugger";
import { AppContext } from "components/context/AppContext";
import { marked } from "marked";
import Link from "next/link";
import React, { useContext } from "react";

const Search = ({ showSearchPosts, handleSearch }) => {
  const [post] = useContext(AppContext);

  let searchPost = post.filter((p) => {
    if (showSearchPosts === "") {
      return "";
    } else if (p.frontmatter.title.toLowerCase().includes(showSearchPosts)) {
      return p;
    } else if (p.content.toLowerCase().includes(showSearchPosts)) {
      return p;
    } else if (p.category.includes(showSearchPosts)) {
      return p;
    }
  });

  return (
    <div className={"w-full   bg-white"}>
      <div className="h-auto">
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
