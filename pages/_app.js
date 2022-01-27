import { useState } from "react";
import "../styles/globals.css";
import CookieConsent from "react-cookie-consent";
import Head from "next/head";
import config from "../config/config.json";

function MyApp({ Component, pageProps }) {
  const [post, setPost] = useState([]);
  const { perameter } = config;

  return (
    <>
      <Head>
        <link rel="icon" href={perameter.favicon}></link>
      </Head>
      <CookieConsent buttonText="Sure man!!" expires={150}>
        this is coocke
      </CookieConsent>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
