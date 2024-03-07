import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Top from "./components/Top/Top.jsx";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Gallery />
      <Gallery />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
