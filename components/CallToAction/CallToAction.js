import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = ({ callToaction }) => {
  const { frontmatter } = callToaction;
  return (
    <div className="lg:w-2/3 w-full bg-black mx-auto px-4 py-8 my-8">
      <div className="grid lg:grid-cols-3">
        <div className="mx-auto">
          <div className="w-48 h-80 relative mx-auto">
            <Image
              alt="callToAction"
              layout="fill"
              src={frontmatter.image}
            ></Image>
          </div>
        </div>
        <div className="lg:col-span-2 py-8 lg:text-left text-center">
          <h2 className="text-h2 text-white font-primary my-6">
            {frontmatter.title}
          </h2>
          <p className="text-light">{frontmatter.excerpt}</p>
          <Link href="#">
            <a className="bg-primaryColor py-2 px-4 text-white text-base my-6 inline-block rounded-lg">
              {frontmatter.button}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
