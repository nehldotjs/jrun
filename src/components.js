import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Difference from "./components/Difference";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function Components(prop) {
  const { loading } = prop;
  return (
    <>
      <Nav loading={loading} />
      <Hero />
      <About />
      <Difference />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Components;
