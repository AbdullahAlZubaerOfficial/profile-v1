import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <main className=" bg-gradient-to-br from-sky-50 to-sky-100 dark:from-slate-900 dark:to-slate-900">
      <div className=" ">
       <Banner className="text-gray-700 dark:text-gray-100" />
<About className="text-gray-900 dark:text-gray-100" />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;