import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-5 pl-5 rounded-xl shadow-md gap-5  group relative right-0 grid grid-cols-3 h-[350px]">
      <div className="col-span-2 space-y-3 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-base">
            {project.description.slice(0, 100)}...
            <Link className="text-blue-600">read more</Link>
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {project?.stacks.map((stack, i) => (
              <span
                key={i}
                className="shadow-md bg-white rounded-xl p-2 text-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div className="space-x-3 ">
          <Button text={"Live Link"} link={project.live} target={"_blank"} />
          <Button text={"Github"} link={project.github} target={"_blank"} />
        </div>
      </div>
      <img
        className="absolute -top-10 right-0 h-[80vh] w-[350px] shadow-md rounded-xl scale-0 group-hover:scale-100 transition-all duration-500 z-20"
        src={project.image}
        alt=""
      />
      <div className="w-full h-full overflow-hidden">
        <img
          className="h-full w-full col-span-1 object-cover rounded-xl shadow-md"
          src={project.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectCard;
