import React from "react";
import { Link } from "react-scroll";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import logo from "/perfect2.png";
const NavBar = () => {
  return (
    <div className="w-full  h-20 flex items-center justify-center sticky top-0 z-30">
      <div className="flex gap-4 items-center p-3 rounded-xl glass shadow-md mt-5 border-2 ">
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover border-2 border-sky-500"
            src={logo}
            alt="tahmidImage"
          />
        </div>
        <ul className="flex items-center gap-4 font-medium text-base">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-50}
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
              activeClass="active"
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
              duration={1000}
              offset={-50}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <IoIosSunny size={25} />
            {/* <IoIosMoon /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
