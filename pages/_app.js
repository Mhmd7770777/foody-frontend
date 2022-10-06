import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
