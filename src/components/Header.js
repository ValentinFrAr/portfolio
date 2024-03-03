import React from "react";

const Header = () => {
  return (
    <section
      data-testid="hero"
      className="header-content h-screen items-center text-center "
    >
      <div className=" header flex flex-col items-center">
        <div className="text-header">
          <h1 className="mt-5 title-header font-monospace text-3xl dark:text-white lg:text-5xl">
            ¡Hola, bienvenido a mi portfolio! Mi nombre es{" "}
            <span className="span-name fw-bold">Valentin Robert</span> y soy
            Desarrolador Full Stack en Argentina.
          </h1>
        </div>
      </div>
      <div
        data-testid="hero-img"
        className="my-5 d-flex hero-img w-1/2 items-center justify-content-center"
      >
        <div class="card-header">
          <div class="first-content"></div>
          <div class="second-content"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
