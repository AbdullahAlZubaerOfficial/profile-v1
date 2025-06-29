import React from "react";
import image from "/perfect2.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { Element, Link } from "react-scroll";
import Tilt from "react-parallax-tilt";

import tailwind from "../../assets/icons/technology/tailwind.png";
import express from "../../assets/icons/technology/express.png";
import javascript from "../../assets/icons/technology/javascript.png";
import mongodb from "../../assets/icons/technology/mongodb.png";
import node from "../../assets/icons/technology/node.png";
import react from "../../assets/icons/technology/react.png";
import firebase from "../../assets/icons/technology/firebase.png";
import git from "../../assets/icons/technology/git.png";
import tanstack from "../../assets/icons/technology/tanstack.png";
import figma from "../../assets/icons/technology/figma.png";
import jwt from "../../assets/icons/technology/jwt.png";
import github from "../../assets/icons/github.png";
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

        <div className="my-15 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:col-span-1 rounded-xl p-3 lg:p-5 bg-white shadow-md border border-slate-300 glass space-y-3"
          >
            <div className="flex gap-3 bg-gray-200 dark:text-slate-200 dark:bg-slate-800 p-3 rounded-xl">
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
            <div className="space-y-3 dark:text-slate-200">
              <h2 className="text-[28px] lg:text-3xl font-semibold leading-8 md:leading-10 lg:lea">
                <span className="text-sky-500">Passionate</span> <br />
                Developer and <br /> Lifelong Learner
              </h2>
              <p className="text-base">
                Driven MERN stack developer with a focus on building efficient,
                scalable websites. I thrive on solving real-world challenges
                through clean code and intuitive design.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:col-span-2 grid space-y-3 lg:space-y-0 lg:gap-5 grid-cols-1  lg:grid-cols-3 p-3 lg:p-5 rounded-xl glass shadow-md"
          >
            <div className="bg-white dark:text-slate-200 dark:bg-slate-800 rounded-md p-3  col-span-1 shadow-md">
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
            <div className="col-span-2 bg-white dark:bg-slate-800 gass rounded-xl shadow-md p-5 space-y-3 dark:text-slate-200">
              <h2 className="text-3xl font-semibold">What Drives Me</h2>
              <p className="text-base">
                Hello! I’m Md Tahmid Alam, a MERN stack web developer from
                Rangpur, Bangladesh. My journey began with a deep curiosity
                about how things work on the web, which soon turned into a drive
                to build meaningful, user-friendly digital experiences. I enjoy
                solving problems through clean code and intuitive UI design.
                What drives me is the joy of turning ideas into real, impactful
                products. Outside of coding, I enjoy playing badminton,
                exploring tech content, and trying out design tools for fun. I’m
                curious, motivated, and always eager to grow through learning
                and new challenges.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:col-span-2 rounded-xl glass p-3 lg:p-5 shadow-md space-y-3"
          >
            <h2 className="text-3xl font-semibold dark:text-slate-200">
              My Tech Stack
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 gap-3 lg:gap-3">
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={tailwind} alt="" />
                  <span className="text-sm">Tailwind</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={javascript} alt="" />
                  <span className="text-sm">Javascript</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={react} alt="" />
                  <span className="text-sm">React</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={firebase} alt="" />
                  <span className="text-sm">Firebase</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={node} alt="" />
                  <span className="text-sm">Node.js</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={express} alt="" />
                  <span className="text-sm">Express.js</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={mongodb} alt="" />
                  <span className="text-sm">Mongodb</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={git} alt="" />
                  <span className="text-sm">Git</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img
                    className="h-12 w-12 mb-2 bg-white rounded-full"
                    src={github}
                    alt=""
                  />
                  <span className="text-sm">Github</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img
                    className="h-12 w-12 mb-2 bg-white rounded-full"
                    src={tanstack}
                    alt=""
                  />
                  <span className="text-sm">T.Query</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={jwt} alt="" />
                  <span className="text-sm">JWT</span>
                </div>
              </Tilt>
              <Tilt>
                <div className="rounded-xl   p-3 flex flex-col items-center bg-white dark:text-slate-200 dark:bg-slate-800 shadow-md">
                  <img className="h-12 w-12 mb-2" src={figma} alt="" />
                  <span className="text-sm">Figma</span>
                </div>
              </Tilt>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:col-span-1 rounded-xl bg-sky-700 p-5 shadow-md space-y-5 text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-bold text-white">
              I am committed to collaboration and clear communication.
            </h2>
            <div className="flex items-center gap-3 lg:gap-5">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                duration={1000}
                offset={-60}
                className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-sky-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-500 group-hover:bg-sky-500"></span>
                <span className="relative text-black group-hover:text-white">
                  Let's collaborate
                </span>
              </Link>
              <Button
                text={"Resume"}
                link={
                  "https://drive.google.com/file/d/11kl6mpE5n_gmRw5gJ3XboFbQLAYjG_un/view?usp=sharing"
                }
                target={"_blank"}
              />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
