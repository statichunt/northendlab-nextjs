import { getAllBlogs } from "@/lib/posts";
import { kebabCase } from "@/lib/utils/slugger";
import Author from "components/Author/Author";
import AuthorPost from "components/Author/AuthorPost";
import Layout from "components/Layout/Layout";
import React from "react";

const AuthorData = ({ post, authorPost }) => {
  return (
    <Layout>
      <div className="relative">
        <Author post={post}></Author>
        <AuthorPost posts={authorPost}></AuthorPost>
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
    },
  };
};
