import React from "react";
import image from "/perfect2.png";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../Button/Button";
import { Element } from "react-scroll";
const Banner = () => {
  return (
    <Element name="home" className="element">
      <div>
        <div className="w-full grid grid-cols-3 ml-10 gap-20">
          <div className="col-span-1 place-items-end">
            <img
              className="w-[350px] drop-shadow-2xl drop-shadow-blue-300"
              src={image}
              alt=""
            />
          </div>
          <div className="col-span-2 space-y-5 pr-10 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold">Hi 👋, I'm Tahmid</h3>
            <h1 className="text-6xl font-medium">Fullstack Developer</h1>
            <p className="text-lg w-5/6">
              Experienced MERN stack developer skilled in Html, CSS, tailwind,
              Javascript, ES6, React Router, React.js, Node.js, Express.js,
              MongoDB With a blend of creativity and technical skills, I bring
              websites to life, transforming ideas into interactive realities
            </p>
            <div className="flex items-center gap-4">
              <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                <FaFacebook size={23} />
              </Link>
              <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                <FaLinkedin size={23} />
              </Link>
              <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                <FaGithub size={23} />
              </Link>
              <Button text={"Resume"} />
            </div>
          </div>
        </div>
        <div className="h-[120px] glass rounded-xl flex items-center justify-around">
          <div className="text-center p-2">
            <span className="text-2xl font-bold mb-5">6+</span>
            <p className="">Years of experience</p>
          </div>
          <div className="text-center p-2">
            <span className="text-2xl font-bold mb-5">150+</span>
            <p className="">Completed projects</p>
          </div>
          <div className="text-center p-2">
            <span className="text-2xl font-bold mb-5">10+</span>
            <p className=" ">Happy clients</p>
          </div>
          <div className="text-center p-2">
            <span className="text-2xl font-bold mb-5">0</span>
            <p className="">Awards</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
