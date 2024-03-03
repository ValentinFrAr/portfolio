import React from "react";

const Certificates = () => {
  return (
    <section
      data-testid="about"
      id="about"
      className="mb-10 d-flex flex-column align-items-center justify-content-center lg:mb-0 lg:h-screen lg:flex-row"
    >
      <div className="mb-10 d-flex flex-column align-items-center justify-content-center w-100 lg:mb-0 lg:w-50">
        <h2 className="font-monospace about-title fs-4">Certificados</h2>
        <span className="mb-6 ms-2 h-1 w-10 bg-success"></span>
      </div>

      <div className="w-100 text-justify dark:text-white lg:w-50">
        <div className="mb-2 about-desc d-flex justify-content-center ">
          <ul>
            <li>
              <a
                href="https://certificate.4geeks.com/9473f9085308b15d78c246c1cbf1abf5632dceae"
                target="_blank"
                rel="noreferrer"
              >
                Software Developer
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/certification/ValentinFrAr/responsive-web-design"
                target="_blank"
                rel="noreferrer"
              >
                Responsive Web Design
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/certification/ValentinFrAr/front-end-development-libraries"
                target="_blank"
                rel="noreferrer"
              >
                Front End Development Libraries
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/profile/valentin_robert1"
                target="_blank"
                rel="noreferrer"
              >
                Certificados HackerRank
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
