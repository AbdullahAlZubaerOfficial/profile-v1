import React from "react";
import image from "/perfect2.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { Element, Link } from "react-scroll";
const About = () => {
  const code = `
    const developer = {
        firstName: "Tahmid",
        lastName: "Alam",
        hobby: repeat=()=>{
                eat()
                sleep()
                code()
        }
    }`;
  return (
    <>
      <Element name="about" className="element">
        <Title title={"About Me"} />
        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 rounded-xl p-3 lg:p-5 bg-white shadow-md space-y-3">
            <div className="flex gap-3 bg-gray-200 p-3 rounded-xl">
              <img
                className="h-12 w-12 rounded-full object-cover border-2 border-sky-500"
                src={image}
                alt="tahmidImage"
              />
              <div>
                <h4 className="font-bold">Tahmid Alam</h4>
                <p className="text-sm font-semibold">Fullstack Developer</p>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                <span className="text-sky-500">Passionate</span> <br />
                Developer and <br /> Lifelong Learner
              </h2>
              <p className="text-base">
                Experienced MERN stack developer. With a blend of creativity and
                technical skills, I bring websites to life, transforming ideas
                into interactive realities
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 grid space-y-3 lg:space-y-0 lg:gap-5 grid-cols-1  lg:grid-cols-3 p-3 lg:p-5 rounded-xl glass shadow-md">
            <div className="bg-white rounded-md p-3  col-span-1 shadow-md">
              <div className="flex items-center border-b-2 pb-5 border-b-slate-300">
                <div className="h-3 w-3 rounded-full mr-2 bg-red-500"></div>
                <div className="h-3 w-3 rounded-full mr-2 bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div>
                <pre className="text-sm">
                  <code>{code}</code>
                </pre>
              </div>
            </div>
            <div className="col-span-2 bg-white rounded-xl shadow-md p-5 space-y-3">
              <h2 className="text-3xl font-semibold">What Drives Me</h2>
              <p className="text-base">
                A skilled MERN stack web developer. With a passion for creating
                seamless digital experiences, I specialize in crafting efficient
                and user friendly applications. My expertise spans Html5, CSS3,
                Bootstrap5, Javascript, ES6, React Router, React.js, Node.js,
                Express.js, MongoDB, allowing me to deliver end-to-end
                solutions. I thrive on challenges, continuously learn, and am
                committed to turning your ideas into powerful online realities.
                Let's collaborate and build something extraordinary.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-xl glass p-3 lg:p-5 shadow-md space-y-3">
            <h2 className="text-3xl font-semibold">My Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <RiTailwindCssFill size={25} />
                <span className="font-semibold">Tailwind</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <SiJavascript size={25} />
                <span className="font-semibold">JavaScript</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <FaReact size={25} />
                <span className="font-semibold">React.js</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <SiReactrouter size={25} />
                <span className="font-semibold">React. Routeer</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <FaNode size={25} />
                <span className="font-semibold">Node.js</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <SiExpress size={25} />
                <span className="font-semibold">Express.js</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <SiMongodb size={25} />
                <span className="font-semibold">MongoDB</span>
              </div>
              <div className="flex items-center justify-center gap-2 h-12 px-6 py-2 rounded-xl bg-white shadow-md">
                <RiNextjsFill size={25} />
                <span className="font-semibold">Next.js</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 rounded-xl bg-purple-800 p-5 shadow-md space-y-5 text-center flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white">
              I am committed to collaboration and clear communication.
            </h2>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-60}
              className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-purple-800 group-hover:bg-purple-800"></span>
              <span className="relative text-black group-hover:text-white">
                Let's collaborate
              </span>
            </Link>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
