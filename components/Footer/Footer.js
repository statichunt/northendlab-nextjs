import Image from "next/image";
import Link from "next/dist/client/link";
import React from "react";
import config from "../../config/config.json";
import footerMenus from "../../config/menu.json";

import { marked } from "marked";

const Footer = () => {
  const { socialMedia, footer } = config;
  const { logo } = config.perameter;
  const { footerMenu } = footerMenus;

  return (
    <div className="container mx-auto text-center border-t border-borderColor mt-8">
      <footer className=" lg:w-3/4 w-full px-2 sm:px-8 mx-auto">
        <div className="flex lg:justify-between mt-4 flex-col lg:flex-row justify-center items-center'">
          <div className="mx-auto lg:mx-px flex lg:justify-start justify-center items-center my-6 lg:w-1/3 w-full">
            {" "}
            <Link href="/" passHref>
              <div className="w-52 h-8 relative">
                <Image
                  src={logo}
                  alt="logo"
                  layout="fill"
                  // objectFit="cover"
                ></Image>
              </div>
            </Link>{" "}
          </div>
          <div className="justify-center flex items-center lg:w-1/3 w-full ">
            <ul>
              {footerMenu.map((f) => (
                <Link key={f.menu} href={f.link}>
                  <a className="inline-block target:_blank">
                    <li className="px-4 xsm:px-8 py-4 text-textColor">
                      {f.menu}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
          <div className=" text-center lg:w-1/3 w-full">
            <ul className=" my-6">
              {socialMedia.map((i) => (
                <a
                  key={i.icon}
                  className="cursor-pointer"
                  rel="noflow"
                  target="_blank"
                >
                  <li className="ml-2 xsm:ml-4 inline-block hover:bg-primaryColor hover:text-white text-primaryColor w-10 h-10 relative rounded-full border border-primaryColor">
                    <i
                      className={`${i.icon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                    ></i>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center py-4">
          <p className="text-sm">
            <div
              className="markdown inline-block "
              dangerouslySetInnerHTML={{ __html: marked(footer.copyright) }}
            ></div>
            {footer.theme_copyright && (
              <>
                &nbsp;| Theme by&nbsp;
                <Link href="https://statichunt.com/">
                  <a
                    className="text-primaryColor hover:opacity-80"
                    target="_blank"
                    rel="noflow"
                  >
                    Statichunt
                  </a>
                </Link>
              </>
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
