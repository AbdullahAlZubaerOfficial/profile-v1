import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div className="my-10">
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
