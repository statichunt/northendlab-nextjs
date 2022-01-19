import React from "react";
import Image from "next/image";
import { marked } from "marked";

const ContactPage = ({ contactData }) => {
  console.log(contactData);
  return (
    <div className="container">
      <div className="w-2/3 grid grid-cols-2 mx-auto">
        <div className="w-full h-h600 pr-6">
          <h2 className="text-h2 font-primary text-dark font-bold">
            {contactData.frontmatter.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(contactData.content),
            }}
            className="markdown"
          ></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-10/12 h-h600 relative">
            <Image
              src={contactData.frontmatter.image}
              alt="abc"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
