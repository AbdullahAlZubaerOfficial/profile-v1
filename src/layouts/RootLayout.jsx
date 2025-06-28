import React, { use } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { animateScroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import ClickSpark from "../Animation/ClickSpark";
import { ModeContext } from "../contexts/ModeContext";
const RootLayout = () => {
  const options = {
    // your options here, for example:
    duration: 1500,
    smooth: true,
  };
  const { mode } = use(ModeContext);
  return (
    <>
      <div>
        <ClickSpark
          sparkColor={mode === false ? "black" : "white"}
          sparkSize={20}
          sparkRadius={65}
          sparkCount={8}
          duration={1000}
        >
          <NavBar />
          <div className="lg:w-11/12 mx-auto p-3 md:p-5 overflow-hidden">
            <Outlet />
          </div>
          <button
            onClick={() => animateScroll.scrollToTop(options)}
            className=" fixed right-5 bottom-5 bg-white border border-slate-300 h-10 w-10 flex items-center justify-center shadow-md rounded-full cursor-pointer"
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
