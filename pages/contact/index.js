import { getSingleData } from "@/lib/posts";
import ContactPage from "components/ContactPage/ContactPage";
import Layout from "components/Layout/Layout";
import React from "react";

const Contact = ({ contactData }) => {
  return (
    <Layout title={contactData.frontmatter.title}>
      <ContactPage contactData={contactData}></ContactPage>
    </Layout>
  );
};

export const getStaticProps = () => {
  const contactData = getSingleData("Archive");
  console.log(contactData);
  return {
    props: {
      contactData: contactData,
    },
  };
};

export default Contact;
