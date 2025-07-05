import React, { use, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import Title from "../../components/Title/Title";
import Slider from "./Slider";
import Button from "../../components/Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import { animateScroll } from "react-scroll";
import logo from "/logo.jpg";
import AnimatedCursor from "react-animated-cursor";
import { ModeContext } from "../../contexts/ModeContext";
import ClickSpark from "../../Animation/ClickSpark";

const ProjectsDetails = () => {
  const { mode } = use(ModeContext);
  const projects = useLoaderData();
  const { id } = useParams();
  const project = projects.find((pro) => pro.id == id);
  useEffect(() => {
    animateScroll.scrollToTop({ duration: 500, smooth: true });
  }, []);
  return (
    <>
      <AnimatedCursor
        key={mode}
        innerSize={10}
        outerSize={50}
        // color="255, 68, 0"
        color={mode ? "255,255,255" : "30,41,59"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <ClickSpark
        sparkColor={mode === false ? "black" : "white"}
        sparkSize={30}
        sparkRadius={65}
        sparkCount={8}
        duration={1500}
      >
        <div className="w-full  lg:h-20 flex items-center justify-center sticky top-0 z-30">
          <div className="flex gap-4 items-center p-1 lg:p-3 rounded-xl glass shadow-md mt-2 lg:mt-5 border-2 relative">
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8 lg:h-12 lg:w-12 rounded-full object-cover border-2 border-sky-500"
                src={logo}
                alt="tahmidImage"
              />
              {/* <h3 className="text-base font-bold dark:text-slate-200">Tahmid</h3> */}
              <Link
                to="/"
                className="flex items-center gap-1 text-sm font-bold dark:text-slate-200"
              >
                <FaArrowLeftLong size={25} /> Back
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-11/12 mx-auto p-5 dark:text-slate-200">
          <div className="-mt-15">
            <Title title={"Details"} />
          </div>

          <div className="my-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 dark:text-slate-200 dark:border-none">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold">{project?.title}</h1>
                <p className="text-base">{project?.description}</p>
                <div className="flex items-center gap-2 flex-wrap dark:text-slate-800">
                  {project?.stacks?.map((stack, i) => (
                    <span
                      key={i}
                      className="shadow-md bg-white rounded-xl p-2 text-sm"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="space-x-3 ">
                  <Button
                    text={"Live Link"}
                    link={project?.live}
                    target={"_blank"}
                  />
                  <Button
                    text={"Github"}
                    link={project?.github}
                    target={"_blank"}
                  />
                </div>
              </div>
              <div className="h-[200px] sm:h-[400px] dark:shadow-md shadow-sm overflow-hidden  rounded-xl">
                <Slider images={project?.images} />
              </div>
            </div>
            <div className="my-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Features:</h2>
                <ul className="text-lg grid grid-cols-1 lg:grid-cols-2 gap-2">
                  {project?.features?.map((feature, index) => (
                    <li key={index} className="font-semibold">
                      {feature?.title}
                      <ul className="list-disc ml-10 text-base font-normal">
                        {feature?.points?.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Challenges:</h2>
                <p>{project?.challenges}</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Future Plan:</h2>
                <p>{project?.futurePlan}</p>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
};

export default ProjectsDetails;
