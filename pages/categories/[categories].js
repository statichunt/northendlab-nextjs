import { getAllCategory } from "@/lib/category";
import { getAllBlogs } from "@/lib/posts";
import { kebabCase } from "@/lib/utils/slugger";
import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout/Layout";
import Category from "components/Category/Category";

const Categories = ({ post, category }) => {
  const posts = post.filter((p) => p.length > 0);

  return (
    <Layout title={category}>
      <div className="relative">
        <Category posts={posts} category={category}></Category>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const category = getAllCategory();

  const paths = Object.keys(category).map((d) => ({
    params: {
      categories: d,
    },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const file = fs.readdirSync(path.join("content/posts"));
  const posts = file.map((file) => {
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("content/posts", file),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    const filter = frontmatter.categories.filter(
      (c) => kebabCase(c) == params.categories
    );

    const get = getAllBlogs("content/posts");

    const data = get.filter((e) => {
      return e.category.some((a) => {
        return filter.indexOf(a) != -1;
      });
    });

    return data;
  });
  const post = posts.filter((p) => p.length > 0);

  const category = post[0].map((p) =>
    p.frontmatter.categories.filter((c) => kebabCase(c) == params.categories)
  );

  return { props: { post: posts, category: category[0] } };
}

export default Categories;
