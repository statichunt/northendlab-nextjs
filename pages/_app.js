import { AppContext } from "components/context/AppContext";
import { useState } from "react";
import "../styles/globals.css";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  const [post, setPost] = useState([]);

  return (
    <AppContext.Provider value={[post, setPost]}>
      <CookieConsent debug={true} buttonText="Sure man!!" expires={150}>
        this is coocke
      </CookieConsent>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
