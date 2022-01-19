import { getAllCategory } from "@/lib/category";
import { getAllBlogs } from "@/lib/posts";
import { kebabCase } from "@/lib/utils/slugger";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout/Layout";
import Category from "components/Category/Category";

const Categories = ({ post, category }) => {
  const p = post.filter((p) => p.length > 0);
  const c = p[0].map((p) => p.category.filter((c) => kebabCase(c) == category));
  console.log(c[0]);
  return (
    <Layout>
      <div className="relative">
        <Category posts={p[0]} category={c[0]}></Category>
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
  const file = fs.readdirSync(path.join("Archive/posts"));
  const posts = file.map((file) => {
    const metaDataWithFrontMatter = fs.readFileSync(
      path.join("Archive/posts", file),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(metaDataWithFrontMatter);
    const filter = frontmatter.categories.filter(
      (c) => kebabCase(c) == params.categories
    );

    const get = getAllBlogs("Archive/posts");
    const data = get.filter(function (e) {
      return e.category.some(function (a) {
        return filter.indexOf(a) != -1;
      });
    });

    return data;
  });

  return { props: { post: posts, category: params.categories } };
}

export default Categories;
