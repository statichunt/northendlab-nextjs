import { getAllBlogs } from "@/lib/posts";
import { kebabCase } from "@/lib/utils/slugger";
import Layout from "components/Layout/Layout";
import React from "react";

const AuthorData = () => {
  return (
    <Layout>
      <div className="relative"></div>
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
      posts: "hi hello",
    },
  };
};
