import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div className="my-10">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
