import { AppContext } from "components/context/AppContext";
import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [post, setPost] = useState([]);

  return (
    <AppContext.Provider value={[post, setPost]}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
