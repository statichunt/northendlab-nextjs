import { kebabCase } from "@/lib/utils/slugger";
import { AppContext } from "components/context/AppContext";
import { marked } from "marked";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Search = ({ setShowSearchBar }) => {
  const [post] = useContext(AppContext);
  const [showSearchPosts, setShowSearchPosts] = useState();
  const searchPost = post.filter((p) => {
    if (showSearchPosts == "") {
      return "";
    } else if (p.slug.toLowerCase().includes(showSearchPosts)) {
      return p;
    } else if (p.content.toLowerCase().includes(showSearchPosts)) {
      return p;
    }
  });

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => {
          setShowSearchPosts(e.target.value);
        }}
      />{" "}
      <a
        onClick={() => {
          setShowSearchBar(false);
        }}
      >
        X
      </a>
      <div className="h-auto">
        {" "}
        {searchPost.map((d) => (
          <div
            className="font-primary border-b border-borderColor py-8 md:w-11/12 mx-auto "
            key={d.slug}
          >
            <Link href={`posts/${d.slug}`} passHref>
              <h3 className="text-primaryColor text-h3 ">
                {d.frontmatter.title}
              </h3>
            </Link>
            <p className="text-textLight mb-4">
              <Link href={`/author/${kebabCase(d.frontmatter.author)}`}>
                {d.frontmatter.author}
              </Link>{" "}
              {d.frontmatter.date}{" "}
              {d.frontmatter.categories.map((c) => (
                <Link href={`categories/${kebabCase(c)}`} key={c}>
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
            <Link href={`posts/${d.slug}`}>
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

export default Search;
