import React from "react";
import Title from "../Title/Title";
import ProjectCard from "./ProjectCard";
import { useLoaderData } from "react-router";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = useLoaderData();
  return (
    <>
      <Element name="projects">
        <Title title={"Projects"} />
        <div className="my-10 grid grid-cols-2 gap-6">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Element>
    </>
  );
};

export default Projects;
