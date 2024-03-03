import React from "react";

function About() {
  return (
    <section
      data-testid="about"
      id="about"
      className="mb-10 d-flex flex-column align-items-center justify-content-center lg:mb-0 lg:h-screen lg:flex-row"
    >
      <div className="mb-10 d-flex flex-column align-items-center justify-content-center w-100 lg:mb-0 lg:w-50">
        <h2 className="font-monospace about-title fs-4">Sobre mí</h2>
        <span className="mb-6 ms-2 h-1 w-10 bg-success"></span>
      </div>

      <div className="w-100 text-justify dark:text-white lg:w-50">
        <p className="mb-2 about-desc">
          &ldquo;Soy un desarrollador full stack autodidacta que fortaleció sus
          habilidades a través de un bootcamp de 18 semanas en 4Geeks Academy.
          Apasionado por la tecnología, estoy constantemente en busca de nuevos
          conocimientos y estoy dispuesto a enfrentar todos los desafíos que se
          me presenten. Mi trayectoria de aprendizaje autodidacta y mi
          compromiso constante con el progreso me convierten en un profesional
          determinado y resiliente en el campo del desarrollo&rdquo;.
        </p>
      </div>
    </section>
  );
}

export default About;
