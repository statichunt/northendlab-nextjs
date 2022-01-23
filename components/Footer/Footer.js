import Image from "next/image";
import Link from "next/dist/client/link";
import React from "react";
import config from "../../config/config.json";
import menu from "../../config/menu.json";

const Footer = () => {
  const { socialMedia, footer } = config;
  const { logo } = menu;

  return (
    <div className="container mx-auto text-center border-t border-borderColor mt-8">
      <footer className="w-2/3 mx-auto">
        <div className="flex lg:justify-between py-8 flex-col lg:flex-row justify-center items-center'">
          <div className="mx-auto lg:mx-px flex lg:justify-start justify-center items-center my-6 lg:w-1/3 w-full">
            <div className="w-52 h-8 relative">
              <Link href="/" passHref>
                <Image
                  src={logo}
                  alt="logo"
                  layout="fill"
                  // objectFit="cover"
                ></Image>
              </Link>
            </div>
          </div>
          <div className="justify-center flex items-center lg:w-1/3 w-full ">
            <p>
              <span>contact</span>
            </p>
          </div>
          <div className=" text-center lg:w-1/3 w-full">
            <ul className=" my-6">
              {socialMedia.map((i) => (
                <a key={i.icon} className="cursor-pointer">
                  <li className="ml-4 inline-block hover:bg-primaryColor hover:text-white text-primaryColor w-10 h-10 relative rounded-full border border-primaryColor">
                    <i
                      className={`${i.icon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                    ></i>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
