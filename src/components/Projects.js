import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <section
      data-testid="projects"
      id="projects"
      className="mb-10 flex flex-col items-center justify-center md:mb-0 md:h-screen"
    >
      <div className="mb-10 d-flex flex-column align-items-center justify-content-center w-100 lg:mb-0 lg:w-50">
        <h2 className="font-monospace about-title fs-4">Proyectos</h2>
        <span className="mb-6 ms-2 h-1 w-10 bg-success"></span>
      </div>
      <div className="project-cards w-full items-center">
        <ProjectCards />
      </div>
    </section>
  );
};

export default Projects;
