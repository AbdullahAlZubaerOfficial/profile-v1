import React from "react";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 md:space-y-28 text-gray-900 dark:text-gray-100">
       <Banner className="text-gray-900 dark:text-gray-100" />
<About className="text-gray-900 dark:text-gray-100" />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;