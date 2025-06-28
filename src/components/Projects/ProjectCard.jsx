import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";
const ProjectCard = ({ project }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="bg-white dark:text-slate-200 dark:bg-slate-800 dark:border-none p-3 lg:p-5 rounded-xl shadow-md gap-3 lg:gap-5  group relative right-0 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:h-[350px]"
    >
      <div className="col-span-2 space-y-3 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-base">
            {project.description.slice(0, 100)}...
            <Link to={`/project/${project.id}`} className="text-purple-800">
              read more
            </Link>
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {project?.stacks.map((stack, i) => (
              <span
                key={i}
                className="shadow-md bg-white rounded-xl p-2 text-sm  text-slate-800"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div className="space-x-3 space-y-3 lg:space-y-0">
          <Button text={"Live Link"} link={project.live} target={"_blank"} />
          <Button text={"Github"} link={project.github} target={"_blank"} />
          <Button text={"Details"} link={`/project/${project.id}`} />
        </div>
      </div>
      <img
        className="absolute bottom-30 lg:bottom-20 xl:-bottom-10 right-0 h-[80vh] w-[350px] shadow-md rounded-xl object-cover scale-0 group-hover:scale-100 transition-all duration-1000 z-20"
        src={project.images[0]}
        alt=""
      />
      <div className="w-full h-[250px] shadow-md lg:w-full lg:h-full overflow-hidden">
        <img
          className="h-full w-full col-span-1 object-cover rounded-xl shadow-md"
          src={project.images[0]}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectCard;
