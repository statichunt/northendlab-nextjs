import { getDefaultPage } from "@/lib/posts";
import ContactPage from "components/ContactPage/ContactPage";
import Layout from "components/Layout/Layout";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Contact = ({ contactData }) => {
  const router = useRouter();

  useEffect(() => {
    if (contactData[0].frontmatter.draft == true) {
      router.push("/404");
    }
  });

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
  console.log("hi", data);
  const contactData = data.filter((d) => d.frontmatter.layout);
  console.log(contactData.length);
  return {
    props: {
      contactData: contactData,
    },
  };
};

export default Contact;
