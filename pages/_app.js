import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
