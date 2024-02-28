import React from "react";
import { projects } from "../../constants/index";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <section
      id="works"
      className={`flex flex-col transition-all duration-500 transform py-20 px-24 min-h-screen w-full`}
    >
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div>
        <h1 className="text-7xl lg:text-left text-center w-full">Works</h1>
      </div>
      <div>
        <span>
          Discover here my recent work ! Here is a showcase of my favourite
          projects.
        </span>
      </div>
      <div className="flex flex-wrap justify-around gap-16 mt-14 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
