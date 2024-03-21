import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Aboutme from "./components/Aboutme/Aboutme.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Top from "./components/Top/Top.jsx";

function App() {
  return (
    <>
      <Header />
      <Top />
      <Intro />
      <Gallery image={"/soldering.png"} />
      <Aboutme />
      <Gallery image={"/connectin.jpg"} />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
