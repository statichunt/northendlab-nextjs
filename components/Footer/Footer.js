import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../../config/config.json";
import menu from "../../config/menu.json";

const Footer = () => {
  const { socialMedia, footer } = config;
  const { logo } = menu;

  return (
    <div className="container mx-auto text-center border-t border-borderColor mt-8">
      <footer className="w-2/3 mx-auto">
        <div className="grid lg:grid-cols-3 py-8">
          <div className="mx-auto lg:mx-px flex items-center my-6 ">
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
          <div className="justify-center flex items-center ">
            <p>
              <span>contact</span>
            </p>
          </div>
          <div className="flex lg:justify-start justify-center  items-center my-6">
            {socialMedia.map((i) => (
              <a
                key={i.icon}
                className="mx-4 hover:bg-primaryColor hover:text-white text-primaryColor w-12 h-12 flex justify-center items-center rounded-full border border-primaryColor"
              >
                <i className={i.icon}></i>
              </a>
            ))}
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
