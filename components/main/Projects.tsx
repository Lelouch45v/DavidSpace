import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Space Center Apps"
          description="All in One space app that can use by all users that every tools are needed."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Student Teacher Monitoring"
          description="A system that tracts activity of a student where they can show as a productive."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Trading Prediction Tool"
          description="this tool will be used by the stock traders or cryto traders that needed an accurate information that uses machine learning."
        />
      </div>
    </div>
  );
};

export default Projects;
