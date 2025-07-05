import React, { use } from "react";
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
    // your options here, for example:
    duration: 1500,
    smooth: true,
  };
  const { mode } = use(ModeContext);
  return (
    <>
      <AnimatedCursor
        key={mode}
        innerSize={10}
        outerSize={50}
        // color="255, 68, 0"
        color={mode ? "255,255,255" : "30,41,59"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
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
      <div>
        <ClickSpark
          sparkColor={mode === false ? "black" : "white"}
          sparkSize={30}
          sparkRadius={65}
          sparkCount={8}
          duration={1500}
        >
          <NavBar />
          <div className="2xl:w-11/12 mx-auto p-3 md:p-5 overflow-hidden">
            <Outlet />
          </div>
          <button
            onClick={() => animateScroll.scrollToTop(options)}
            className="fixed animate-bounce right-5 bottom-5 bg-white border border-slate-300 h-10 w-10 flex items-center justify-center shadow-md rounded-full cursor-pointer"
          >
            <FaArrowUp size={20} />
          </button>
          <Footer />{" "}
        </ClickSpark>{" "}
      </div>
    </>
  );
};

export default RootLayout;
