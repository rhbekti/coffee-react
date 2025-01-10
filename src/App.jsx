/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Testimoni />
      <Contact />
    </>
  );
};

export default App;
