import { getAllBlogs, getSingleData } from "@/lib/posts";
import { getAllFrontmatter } from "@/lib/utils/frontmatter";
import Blog from "components/Blog";
import Layout from "components/Layout/Layout";
import React, { useState } from "react";
import config from "../../../config/config.json";

const Pages = ({ posts, page, bannerData }) => {
  const [isBanner] = useState(true);

  return (
    <Layout isBanner={isBanner} bannerData={bannerData}>
      <Blog posts={posts} page={page}></Blog>
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

  const getPost = getAllBlogs();
  const getBannerData = getSingleData("Archive");
  const frontmatter = getAllFrontmatter();
  console.log(frontmatter);

  return {
    props: {
      posts: getPost,
      page: +page,
      bannerData: getBannerData,
    },
  };
};
