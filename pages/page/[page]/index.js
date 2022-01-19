import { getAllBlogs, getSingleData } from "@/lib/posts";
import Blog from "components/Blog";
import Layout from "components/Layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import config from "../../../config/config.json";
import { AppContext } from "components/context/AppContext";
import Banner from "components/Banner";

const Pages = ({ posts, page, bannerData, pagination }) => {
  const [isFixed] = useState(true);
  const [post, setPost] = useContext(AppContext);
  useEffect(() => {
    setPost(posts);
  });

  return (
    <Layout isFixed={isFixed}>
      <div className="relative">
        <Banner></Banner>
        <Blog posts={posts} page={page} pagination={pagination}></Blog>
      </div>
    </Layout>
  );
};

export default Pages;

export const getStaticPaths = () => {
  const getPost = getAllBlogs("Archive/posts");
  const { pagination } = config.perameter;
  let paths = [];
  const numOfPage = Math.ceil(getPost.length / pagination);
  for (let i = 0; i <= numOfPage; i++) {
    paths.push({
      params: {
        page: i.toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const page = parseInt((params && params.page) || 1);
  const { pagination } = config.perameter;
  const getPost = getAllBlogs("Archive/posts");
  const getBannerData = getSingleData("Archive");

  return {
    props: {
      posts: getPost,
      page: +page,
      bannerData: getBannerData,
      pagination: pagination,
    },
  };
};
