import React, { useContext } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { animateScroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import ClickSpark from "../Animation/ClickSpark";
import { ModeContext } from "../contexts/ModeContext";
import AnimatedCursor from "react-animated-cursor";

const RootLayout = () => {
  const options = {
    duration: 800,
    smooth: "easeInOutQuint",
  };

  const { mode } = useContext(ModeContext);

  return (
    <>
      <AnimatedCursor
        key={mode}
        innerSize={8}
        outerSize={35}
        color={mode ? "255,255,255" : "30,41,59"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          mixBlendMode: mode ? "exclusion" : "multiply"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      
      <ClickSpark
        sparkColor={mode ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)"}
        sparkSize={25}
        sparkRadius={50}
        sparkCount={6}
        duration={1200}
      >
        <div className={`bg-3d-medical min-h-screen transition-colors duration-500 ${mode ? 'dark-mode' : ''}`}>
          <div className="content-overlay">
            <div className="flex flex-col min-h-screen">
              <NavBar />
              
              <main className="flex-grow 2xl:w-11/12 mx-auto p-3 md:p-5 overflow-hidden">
                <Outlet />
              </main>
              
              <button
                onClick={() => animateScroll.scrollToTop(options)}
                className={`fixed right-6 bottom-6 h-12 w-12 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 ${
                  mode 
                    ? "bg-slate-800 text-white border border-slate-600 hover:bg-slate-700" 
                    : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50"
                }`}
                aria-label="Scroll to top"
              >
                <FaArrowUp className="animate-bounce" size={18} />
              </button>
              
              <Footer />
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
};

export default RootLayout;