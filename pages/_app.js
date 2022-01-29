import "../styles/globals.css";
import CookieConsent from "react-cookie-consent";
import Head from "next/head";
import config from "../config/config.json";

function MyApp({ Component, pageProps }) {
  const { perameter } = config;

  return (
    <>
      <Head>
        <link rel="icon" href={perameter.favicon}></link>
      </Head>
      <CookieConsent buttonText="Accept" expires={2}>
        <p>
          This site uses cookies. By continuing to use this website, you agree
          to their use.
        </p>
      </CookieConsent>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
