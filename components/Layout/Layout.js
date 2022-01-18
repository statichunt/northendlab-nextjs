import Banner from "components/Banner";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
// import MobileMenu from "components/MobileMenu/MobileMenu";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import config from "../../config/style.json";

const Layout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    const handleMobileMenu = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleMobileMenu);
    return () => {
      window.removeEventListener("resize", handleMobileMenu);
    };
  });
  const { fontFamily } = config.font;
  return (
    <div className="">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamily.primary}&display=swap`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header navbar={navbar} toggle={toggle} isOpen={isOpen}></Header>
      {/* <MobileMenu toggle={toggle} isOpen={isOpen}></MobileMenu> */}

      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
