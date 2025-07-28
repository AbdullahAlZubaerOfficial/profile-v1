import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { FaDownload } from "react-icons/fa";
import { Element } from "react-scroll";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import calander from "../../assets/icons/calander.png";
import award from "../../assets/icons/award.png";
import client from "../../assets/icons/client.png";
import project from "../../assets/icons/project.png";
import AOS from "aos";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import image from "/perfect2.png";

const RotatingCircle = () => {
  return (
    <div className="relative inline-block">
      <motion.div
        style={{ borderTopColor: "transparent", borderBottomColor: "transparent" }}
        className="absolute inset-0 rounded-full border-4 border-green-500"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      />
      <img
        src={image}
        alt="Profile"
        className="relative rounded-full w-[350px] h-[400px] lg:h-auto lg:w-[350px] object-cover"
      />
    </div>
  );
};

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const stats = [
    { num: 0.5, text: "Years of experience", icon: calander },
    { num: 60, text: "Completed projects", icon: project },
    { num: 10, text: "Happy clients", icon: client },
    { num: 0, text: "Awards", icon: award },
  ];

  const circleVariants = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate: (index) => ({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 0.1,
          delay: 0.5 + index * 0.1,
          ease: "easeIn",
        },
      },
    }),
  };

  return (
    <Element name="home" className="element">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="absolute top-0 left-0"
            initial="initial"
            animate="animate"
            variants={circleVariants}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="0.5"
              fill="none"
            />
          </motion.svg>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:ml-10 space-y-10 lg:space-y-0 lg:gap-20">
          <Tilt scale={1.1} transitionSpeed={2500}>
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-span-1 place-items-center lg:place-items-end relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <RotatingCircle />
            </motion.div>
          </Tilt>

          <motion.div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-span-2 space-y-5 md:pr-10 flex flex-col justify-center text-gray-800 dark:text-slate-100 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              I'm Abdullah Al Zubaer <br />
              <span className="text-[#1877F2] text-xl lg:text-2xl">
                <Typewriter
                  words={[
                    
                     "A Frontend-Developer",
                      "Mern Stack Developer",
                       "Competetive Programmer",
                    "Web Developer",
                  
                   "Full Stack Developer",
                   
                  
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="text-base lg:text-lg lg:w-5/6 text-gray-700 dark:text-gray-300">
              Experienced MERN stack developer skilled in Tailwind, JavaScript,
              ES6, React.js, React Router, Next.js, Node.js, Express.js, and
              MongoDB. With a blend of creativity and technical expertise, I
              bring websites to life by transforming ideas into responsive and
              dynamic web applications.
            </p>
            <p className="font-bold"> <a href="https://codeforces.com/profile/zubaerislam703" className="text-blue-500 underline"  >Codeforces</a> : Rating (982)</p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.facebook.com/abdullahal.zubaer.507/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                data-aos="fade-right"
                data-aos-duration="1000"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="w-full h-full rounded-full hover:scale-110 transition-transform duration-500"
                  src={facebook}
                  alt="facebook"
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdullah-al-zubaer-309065292/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                data-aos="fade-down"
                data-aos-duration="1000"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="w-full h-full hover:scale-110 transition-transform duration-500"
                  src={linkedin}
                  alt="linkedin"
                />
              </motion.a>
              <motion.a
                href="https://github.com/AbdullahAlZubaerOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="border-slate-300 dark:border-slate-500 border-none w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-gray-200 transition-colors"
                data-aos="fade-left"
                data-aos-duration="1000"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="w-full h-full hover:scale-110 transition-transform duration-500"
                  src={github}
                  alt="github"
                />
              </motion.a>
              <motion.button
                className="btn btn-primary hover:scale-105 transition-transform text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://drive.google.com/file/d/1X3XvQzSnZC53CANg2Klso3e-Fmha56hm/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400"
                >
                  Download CV <FaDownload />
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="lg:h-[150px] p-3 lg:p-0 mt-4 lg:mt-4 glass rounded-xl flex items-center justify-center lg:justify-around lg:flex-nowrap flex-wrap text-gray-800 dark:text-slate-200 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 lg:pt-10 lg:pb-10 text-green-900"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="w-[50px] sm:w-[55px] mx-auto mb-2"
                src={item.icon}
                alt={item.text}
              />
              <span className="text-3xl lg:text-4xl font-bold mb-3 block text-gray-900 dark:text">
                <CountUp
                  end={item.num}
                  duration={16}
                  decimals={item.num % 1 !== 0 ? 1 : 0}
                  suffix="+"
                />
              </span>
              <p className="text-lg lg:text-xl font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  );
};

export default Banner;