import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Element name="home">
        <div className="my-10">
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </Element>
    </>
  );
};

export default Home;
