import { getDefaultPage } from "@/lib/posts";
import ContactPage from "components/ContactPage/ContactPage";
import Layout from "components/Layout/Layout";
import React from "react";

const Contact = ({ contactData }) => {
  const { frontmatter, slug, content } = contactData[0];

  return (
    <Layout title={frontmatter.title}>
      <ContactPage
        frontmatter={frontmatter}
        slug={slug}
        content={content}
      ></ContactPage>
    </Layout>
  );
};

export const getStaticProps = () => {
  const data = getDefaultPage("content");
  const contactData = data.filter((d) => d.frontmatter.layout);

  return {
    props: {
      contactData: contactData,
    },
  };
};

export default Contact;
