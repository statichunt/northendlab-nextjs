import Banner from "components/Banner";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Head from "next/head";
import React from "react";
import config from "../../config/style.json";

const Layout = ({ children, isBanner, bannerData }) => {
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
      <Header isBanner={isBanner}></Header>
      <Banner isBanner={isBanner} bannerData={bannerData}></Banner>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
