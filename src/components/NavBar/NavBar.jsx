import React from "react";
import { Link } from "react-router";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import logo from "/perfect2.png";
const NavBar = () => {
  return (
    <div className="w-full  h-20 flex items-center justify-center">
      <div className="flex gap-4 items-center p-5 rounded-xl glass shadow-md mt-5 border-2">
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover border-2 border-sky-500"
            src={logo}
            alt="tahmidImage"
          />
        </div>
        <ul className="flex items-center gap-4 font-medium text-base">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>Testimonial</Link>
          </li>
          <li>
            <Link>Contact</Link>
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
