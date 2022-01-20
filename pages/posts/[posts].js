import { getAllBlogs } from "@/lib/posts";
import Layout from "components/Layout/Layout";
import SinglePost from "components/SinglePost/SinglePost";
import React from "react";

const Single = ({ posts, slug }) => {
  return (
    <Layout title={slug}>
      <div className="relative">
        <SinglePost posts={posts}></SinglePost>
      </div>
    </Layout>
  );
};
export const getStaticPaths = () => {
  const getAllBlog = getAllBlogs("content/posts");
  const paths = getAllBlog.map((d) => ({
    params: {
      posts: d.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const { posts } = params;
  const post = getAllBlogs("content/posts");
  const filterPost = post.filter((p) => p.slug == posts);

  return {
    props: {
      posts: filterPost,
      slug: posts,
    },
  };
};
export default Single;
