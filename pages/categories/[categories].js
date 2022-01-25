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
  const [cate, setCate] = useState();

  useEffect(() => {
    const c = post.map((p) =>
      p.category.filter((c) => kebabCase(c) === category)
    );
    setCate(c[0]);
  }, []);
  console.log();
  return (
    <Layout>
      <div className="relative">
        <Category posts={post} category={cate}></Category>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const category = getAllCategory();
  console.log(Object.keys(category));

  const paths = Object.keys(category).map((d) => ({
    params: {
      categories: d,
    },
  }));
  console.log(paths);
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
    console.log(get);
    const data = get.filter((e) => {
      return e.category.some((a) => {
        return filter.indexOf(a) != -1;
      });
    });

    return data;
  });
  const p = posts.filter((p) => p.length > 0);
  console.log(p[0]);
  return { props: { post: p[0], category: params.categories } };
}

export default Categories;
