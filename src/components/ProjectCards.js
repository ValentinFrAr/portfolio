import React, { useState } from "react";
import { projectData } from "./ProjectData";

const ProjectCards = () => {
  const [projectsData] = useState(projectData);
  return (
    <div className="mt-4 content-cards ">
      {projectsData.length > 0 &&
        projectsData.map((project) => (
          <div className="temporary__storage" key={project.id}>
            <div className="card">
              <div className="image">{project.img}</div>
              <div className="image__overlay"></div>
              <div className="content">
                <div className="content__text">
                  <a
                    className="a-title-project"
                    href={project.link}
                    target="-blank"
                    rel="noreferrer"
                  >
                    <span className="stream__title">{project.title}</span>
                  </a>

                  <div className="content__body border-0">
                    <span className="streamer__name"></span>
                    <span className="event my-2">{project.infos}</span>
                  </div>
                  <p className="mb-2 language">
                    {project.languages.map((language, index) => (
                      <span key={index} className="me-3 ">
                        {language}
                      </span>
                    ))}
                  </p>
                  <div className="d-flex justify-content-evenly code">
                    {project.front} {project.back}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCards;
