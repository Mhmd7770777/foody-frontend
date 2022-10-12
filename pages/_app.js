import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import "../styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../components/DetailsPage/DetailsPage";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
