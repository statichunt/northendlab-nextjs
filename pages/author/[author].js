import { getAllBlogs } from "@/lib/posts";
import { kebabCase } from "@/lib/utils/slugger";
import Author from "components/Author/Author";
import AuthorPost from "components/Author/AuthorPost";
import Layout from "components/Layout/Layout";
import React from "react";

const AuthorData = ({ post, authorPost }) => {
  const author = [...new Set(post[0].frontmatter.title)];
  return (
    <Layout>
      <div className="relative">
        <div className="lg:w-1/2 w-full mx-auto">
          <Author post={post}></Author>
          <h2 className="text-h2 font-bold text-dark my-4">
            Posts by <span className="text-primaryColor">{author}</span>
          </h2>
          <AuthorPost posts={authorPost}></AuthorPost>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorData;

export const getStaticPaths = () => {
  const getAllBlog = getAllBlogs("Archive/posts");
  const paths = getAllBlog.map((d) => ({
    params: {
      author: kebabCase(d.frontmatter.author),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const { author } = params;
  const authorData = getAllBlogs("Archive/author");

  const filterAuthor = authorData.filter(
    (a) => kebabCase(a.frontmatter.title) == author
  );

  const getAllBlog = getAllBlogs("Archive/posts");
  const filterAuthorBlog = getAllBlog.filter(
    (data) => kebabCase(data.frontmatter.author) == author
  );

  return {
    props: {
      post: filterAuthor,
      authorPost: filterAuthorBlog,
      author: author,
    },
  };
};
