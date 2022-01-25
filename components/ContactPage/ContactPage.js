import React from "react";
import Image from "next/image";
import { marked } from "marked";
import config from "../../config/config.json";

const ContactPage = ({ post }) => {
  console.log(post);
  const { frontmatter, content } = post;
  const { perameter } = config;
  const action = perameter.contactFormAction;

  return (
    <div className="container mx-auto">
      <div className="w-full lg:w-2/3 grid lg:grid-cols-2 mx-auto gap-12 lg:px-0 px-8 my-8">
        <div className="w-full ">
          <h2 className="text-h2 font-primary text-dark font-bold mt-7">
            {frontmatter.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(content),
            }}
            className="markdown"
          ></div>
          <div>
            <form action={action} method="post" className="mx-auto ">
              <div className="grid lg:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="inputField" />
                <input
                  type="email"
                  placeholder="Email"
                  className="inputField"
                />
              </div>
              <div className="grid">
                <input
                  type="text"
                  placeholder="Subject"
                  className="inputField"
                />
              </div>
              <div className="grid">
                <textarea
                  className="inputField"
                  cols="30"
                  rows="7"
                  placeholder="Type Your meassage"
                ></textarea>
              </div>
              <div className="grid">
                <input
                  type="submit"
                  value="Submit"
                  className="inputField bg-primaryColor text-center text-white"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-10/12 h-h600 relative">
            <Image
              src={frontmatter.image}
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
