import React from "react";
import { marked } from "marked";
import { getDefaultPage } from "@/lib/posts";
import Layout from "components/Layout/Layout";
import ContactPage from "components/ContactPage/ContactPage";

const Default = ({ posts, contactSlug, defaultSlug }) => {
  const { slug, frontmatter, content } = posts[0];
  console.log(defaultSlug, contactSlug);
  return (
    <Layout title={slug}>
      {defaultSlug == contactSlug ? (
        <ContactPage post={posts[0]}></ContactPage>
      ) : (
        <div className="container px-4 sm:px-10  my-10 font-secondary mx-auto">
          <h1 className="my-8  text-h1 text-center font-primary">
            {frontmatter.title}
          </h1>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          ></div>
        </div>
      )}
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
  const contactPage = post.filter((p) => p.frontmatter.layout);

  const filterPost = defaultPost.filter((data) => data.slug === defaultSlug);

  const contactSlug = contactPage[0].slug;

  const posts = contactPage[0].slug == defaultSlug ? contactPage : filterPost;

  return {
    props: {
      posts,
      contactSlug,
      defaultSlug,
    },
  };
}

export default Default;
