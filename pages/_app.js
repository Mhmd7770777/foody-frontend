import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
