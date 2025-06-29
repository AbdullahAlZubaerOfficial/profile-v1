import React, { use, useState } from "react";
import { Link } from "react-scroll";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import logo from "/logo.jpg";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { ModeContext } from "../../contexts/ModeContext";
const NavBar = () => {
  const { mode, setMode } = use(ModeContext);
  const [isActive, setIsActive] = useState(false);
  const onClose = () => {
    setIsActive(false);
  };

  return (
    <div className="w-full  lg:h-20 flex items-center justify-center sticky top-0 z-30">
      <div className="flex gap-4 items-center p-1 lg:p-3 rounded-xl glass shadow-md mt-2 lg:mt-5 border-2 relative dark:text-slate-200">
        <div className="flex items-center gap-4">
          <Link
            to="home"
            smooth={true}
            spy={true}
            offset={-100}
            duration={1000}
          >
            <img
              className="h-8 w-8 lg:h-12 lg:w-12 rounded-full object-cover shadow-md border-2 cursor-pointer border-sky-500"
              src={logo}
              alt="tahmidImage"
            />
          </Link>
          <h3 className="text-base font-bold lg:hidden">Tahmid</h3>
        </div>
        <ul className="hidden lg:flex items-center gap-4 font-medium text-base">
          <li>
            <Link
              to="home"
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-100}
              duration={1000}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              offset={-50}
              // activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
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
              offset={-50}
              duration={1000}
              className="cursor-pointer"
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
              offset={-50}
              duration={1000}
              className="cursor-pointer"
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
              offset={-60}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li onClick={() => setMode(!mode)} className="cursor-pointer">
            {mode === false ? (
              <IoIosMoon size={25} />
            ) : (
              <IoIosSunny size={25} />
            )}
          </li>
        </ul>
        <span
          onClick={() => setIsActive(!isActive)}
          className="cursor-pointer block lg:hidden"
        >
          {isActive ? <FaXmark size={25} /> : <RiMenuFold2Fill size={25} />}
        </span>
        <div
          className={`absolute center w-[350px] p-5 ${
            isActive ? "translate-x-0" : "-translate-y-[calc(100%+200px)]"
          } transition-transform duration-700 bg-[#fffffffe] dark:bg-slate-700 rounded-xl`}
        >
          <ul className="flex flex-col  items-center gap-4 font-medium text-base dark:text-slate-200">
            <li>
              <Link
                onClick={onClose}
                to="home"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-100}
                duration={1000}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                to="about"
                offset={-50}
                // activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                to="services"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                duration={1000}
                className="cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                to="projects"
                smooth={true}
                activeClass="active"
                spy={true}
                offset={-50}
                duration={1000}
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={onClose}
                to="contact"
                smooth={true}
                activeClass="active"
                spy={true}
                duration={1000}
                offset={-60}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li
              onClick={() => {
                setMode(!mode);
                onclose();
              }}
              className="cursor-pointer"
            >
              {mode === false ? (
                <IoIosMoon size={25} />
              ) : (
                <IoIosSunny size={25} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
