import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { animateScroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import ClickSpark from "../Animation/ClickSpark";
const RootLayout = () => {
  const options = {
    // your options here, for example:
    duration: 1500,
    smooth: true,
  };
  return (
    <>
      <div>
        <ClickSpark
          sparkColor="black"
          sparkSize={20}
          sparkRadius={65}
          sparkCount={8}
          duration={1000}
        >
          <NavBar />
          <div className="lg:w-11/12 mx-auto p-3 md:p-5">
            <Outlet />
          </div>
          <button
            onClick={() => animateScroll.scrollToTop(options)}
            className=" fixed right-5 bottom-5 bg-white h-10 w-10 flex items-center justify-center shadow-md rounded-full cursor-pointer"
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
