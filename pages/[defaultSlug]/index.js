import React from "react";
import { marked } from "marked";
import { getDefaultPage } from "@/lib/posts";
import Layout from "components/Layout/Layout";

const Default = ({ filterPost }) => {
  console.log(filterPost);
  const { slug, frontmatter, content } = filterPost[0];
  return (
    <Layout title={slug}>
      <div className="container px-4 sm:px-10  my-10 font-secondary mx-auto">
        <h1 className="my-8  text-h1 text-center font-primary">
          {frontmatter.title}
        </h1>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        ></div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = getDefaultPage("content");
  const posdtWdraft = posts.filter((d) => d.frontmatter.draft != true);
  const paths = posdtWdraft.map((d) => ({
    params: {
      defaultSlug: d.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { defaultSlug } = params;

  const post = getDefaultPage("content");
  const defaultPost = post.filter((p) => !p.frontmatter.layout);

  const filterPost = defaultPost.filter((data) => data.slug === defaultSlug);

  return {
    props: {
      filterPost,
    },
  };
}

export default Default;
