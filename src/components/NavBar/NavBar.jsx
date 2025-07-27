import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import logo from "/logo.jpg";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { ModeContext } from "../../contexts/ModeContext";

const NavBar = () => {
  const { mode, setMode } = useContext(ModeContext);
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && !event.target.closest(".mobile-menu-container")) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  const onClose = () => {
    setIsActive(false);
  };

  return (
    <div className={`w-full transition-all duration-300 ${isScrolled ? "lg:h-16" : "lg:h-20"} flex items-center justify-center sticky top-0 z-30 ${mode ? "dark:bg-slate-900/90" : "bg-white/90"} backdrop-blur-md`}>
      <div className={`flex gap-4 items-center p-1 lg:p-3 rounded-xl ${isScrolled ? "lg:mt-1" : "lg:mt-3"} ${mode ? "dark:bg-slate-800/90 border-slate-700" : "bg-white/90 border-gray-200"} shadow-md border-2 relative dark:text-slate-200 max-w-7xl w-full mx-4`}>
        <div className="flex items-center gap-4 flex-1">
          <Link
            to="home"
            smooth={true}
            spy={true}
            offset={-100}
            duration={1000}
            className="flex items-center gap-2"
          >
            <img
              className="h-8 w-8 lg:h-10 lg:w-10 rounded-full object-cover shadow-md border-2 cursor-pointer border-sky-500"
              src={logo}
              alt="tahmidImage"
            />
            <h3 className="text-base font-bold lg:hidden">Abdullah Al Zubaer</h3>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 font-medium text-base">
          <li>
            <Link
              to="home"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              offset={-100}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-sky-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer hover:text-sky-500 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer hover:text-sky-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              activeClass="active"
              spy={true}
              duration={1000}
              offset={-100}
              className="cursor-pointer hover:text-sky-500 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li 
            onClick={() => setMode(!mode)} 
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={mode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mode === false ? (
              <IoIosMoon size={22} />
            ) : (
              <IoIosSunny size={22} />
            )}
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-4">
          <div 
            onClick={() => setMode(!mode)} 
            className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
          >
            {mode === false ? (
              <IoIosMoon size={22} />
            ) : (
              <IoIosSunny size={22} />
            )}
          </div>
          <button
            onClick={() => setIsActive(!isActive)}
            className="cursor-pointer p-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isActive ? "Close menu" : "Open menu"}
          >
            {isActive ? <FaXmark size={25} /> : <RiMenuFold2Fill size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu-container fixed lg:hidden inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
            isActive ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: isScrolled ? "64px" : "80px" }}
        >
          <div
            className={`absolute top-0 right-0 w-full max-w-xs h-[calc(100vh-80px)] ${
              mode ? "dark:bg-slate-800" : "bg-white"
            } shadow-xl transition-transform duration-300 ${
              isActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-start gap-2 font-medium text-base dark:text-slate-200 p-4">
              <li className="w-full">
                <Link
                  onClick={onClose}
                  to="home"
                  smooth={true}
                  activeClass="active"
                  spy={true}
                  offset={-100}
                  duration={1000}
                  className="cursor-pointer block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 w-full transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={onClose}
                  to="about"
                  offset={-50}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 w-full transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={onClose}
                  to="services"
                  smooth={true}
                  activeClass="active"
                  spy={true}
                  offset={-50}
                  duration={1000}
                  className="cursor-pointer block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 w-full transition-colors"
                >
                  Services
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={onClose}
                  to="projects"
                  smooth={true}
                  activeClass="active"
                  spy={true}
                  offset={-50}
                  duration={1000}
                  className="cursor-pointer block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 w-full transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={onClose}
                  to="contact"
                  smooth={true}
                  activeClass="active"
                  spy={true}
                  duration={1000}
                  offset={-60}
                  className="cursor-pointer block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 w-full transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;