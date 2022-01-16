import { getAllBlogs, getSingleData } from "@/lib/posts";
import Blog from "components/Blog";
import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import config from "../../../config/config.json";

const Pages = ({ posts, page, bannerData, pagination }) => {
  const [isBanner] = useState(true);

  return (
    <Layout isBanner={isBanner} bannerData={bannerData}>
      <Blog posts={posts} page={page} pagination={pagination}></Blog>
    </Layout>
  );
};

export default Pages;

export const getStaticPaths = () => {
  const getPost = getAllBlogs();
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
  const getPost = getAllBlogs();
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
