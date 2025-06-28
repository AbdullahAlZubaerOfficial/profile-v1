import React from "react";
import image from "/perfect2.png";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../Button/Button";
import { Element } from "react-scroll";
import Particles from "../../Animation/Particles";
const Banner = () => {
  return (
    <Element name="home" className="element">
      <div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:ml-10 space-y-10 lg:space-y-0 lg:gap-20">
          <div className="col-span-1 place-items-center lg:place-items-end">
            <img
              className="w-[350px] h-[400px] lg:h-auto mx-auto lg:w-[350px] drop-shadow-2xl drop-shadow-blue-300"
              src={image}
              alt=""
            />
          </div>
          <div className="col-span-2 space-y-5 pr-10 flex flex-col justify-center dark:text-slate-200">
            <h3 className="text-3xl font-semibold">Hi 👋, I'm Tahmid</h3>
            <h1 className="text-4xl lg:text-6xl font-medium">
              Fullstack Developer
            </h1>
            <p className="text-base lg:text-lg lg:w-5/6">
              Experienced MERN stack developer skilled in Html, CSS, tailwind,
              Javascript, ES6, React Router, React.js, Node.js, Express.js,
              MongoDB With a blend of creativity and technical skills, I bring
              websites to life, transforming ideas into interactive realities
            </p>
            <div className="flex items-center gap-4">
              <Link
                to={"https://www.facebook.com/TahmidAlamJG"}
                target="_blank"
                className="border border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaFacebook size={23} />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/tahmidalam122/"}
                target="_blank"
                className="border border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaLinkedin size={23} />
              </Link>
              <Link
                to={"https://github.com/tahmid122"}
                target="_blank"
                className="border border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaGithub size={23} />
              </Link>
              <Button text={"Resume"} />
            </div>
          </div>
        </div>
        <div className="lg:h-[120px] p-3 lg:p-0 mt-3 lg:mt-0 glass rounded-xl flex items-center justify-center lg:justify-around lg:flex-nowrap flex-wrap dark:text-slate-200">
          <div className="text-center p-2">
            <span className="text-xl lg:text-2xl font-bold mb-5">6+</span>
            <p className="text-sm lg:text-base">Years of experience</p>
          </div>
          <div className="text-center p-2">
            <span className="text-xl lg:text-2xl font-bold mb-5">150+</span>
            <p className="text-sm lg:text-base">Completed projects</p>
          </div>
          <div className="text-center p-2">
            <span className="text-xl lg:text-2xl font-bold mb-5">10+</span>
            <p className=" text-sm lg:text-base">Happy clients</p>
          </div>
          <div className="text-center p-2">
            <span className="text-xl lg:text-2xl font-bold mb-5">0</span>
            <p className="text-sm lg:text-base">Awards</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
