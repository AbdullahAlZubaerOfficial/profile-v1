import React, { use, useEffect } from "react";
import { useParams } from "react-router";
import Title from "../../components/Title/Title";
import Slider from "./Slider";
import Button from "../../components/Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import { animateScroll } from "react-scroll";
const projectsPromise = fetch("../../../public/projects.json").then((res) =>
  res.json()
);
const ProjectsDetails = () => {
  const projects = use(projectsPromise);
  const { id } = useParams();
  const project = projects.find((pro) => pro.id == id);
  useEffect(() => {
    animateScroll.scrollToTop({ duration: 500, smooth: true });
  }, []);
  return (
    <>
      <Link to={-1}>
        <FaArrowLeftLong size={25} />
      </Link>
      <div className="-mt-5">
        <Title title={"Details"} />
      </div>

      <div className="my-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{project?.title}</h1>
            <p className="text-base">{project?.description}</p>
            <div className="flex items-center gap-2 flex-wrap">
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
          <div className="h-[400px] shadow-md">
            <Slider images={project?.images} />
          </div>
        </div>
        <div className="my-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Features:</h2>
            <ul className="text-lg grid grid-cols-2 gap-2">
              {project?.features?.map((feature, index) => (
                <li key={index} className="font-semibold">
                  {feature?.title}
                  <ul className="list-disc ml-10 text-base font-normal">
                    {feature?.points?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}

                    <li>Google authentication</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-10 grid grid-cols-2 gap-2">
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
    </>
  );
};

export default ProjectsDetails;
