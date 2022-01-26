import { getAllBlogs, getSingleIndexData, singleFile } from "@/lib/posts";
import Blog from "components/Blog";
import Layout from "components/Layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import config from "../../../config/config.json";
import { AppContext } from "components/context/AppContext";
import Banner from "components/Banner";
import { sortByDate } from "@/lib/utils/dateFormate";
import CallToAction from "components/CallToAction/CallToAction";

const Pages = ({ posts, page, bannerData, pagination, callToaction }) => {
  const [isFixed] = useState(true);
  const [post, setPost] = useContext(AppContext);
  useEffect(() => {
    setPost(posts);
  });

  const sortByDates = sortByDate(posts);

  return (
    <Layout isFixed={isFixed} title="Northendlab | Blog Template">
      <div className="relative">
        <Banner></Banner>
        <Blog posts={sortByDates} page={page} pagination={pagination}></Blog>
        <CallToAction callToaction={callToaction}></CallToAction>
      </div>
    </Layout>
  );
};

export default Pages;

export const getStaticPaths = () => {
  const getPost = getAllBlogs("content/posts", false);

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
  const getPost = getAllBlogs("content/posts", false);
  const getBannerData = getSingleIndexData("content");
  const callToaction = singleFile("content/call-to-action");

  return {
    props: {
      posts: getPost,
      page: +page,
      bannerData: getBannerData,
      pagination: pagination,
      callToaction: callToaction,
    },
  };
};
