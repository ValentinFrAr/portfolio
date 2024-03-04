/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cv from "../assets/Valentin-M.-Robert-CV.pdf";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <div className="container-fluid">
        <button className="animated-button">
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">
            {" "}
            <a className="cv" href={cv} target="_blank" rel="noreferrer">
              DESCARGAR CV
            </a>{" "}
          </span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#about">
              Sobre mí
            </a>
            <a className="nav-link" href="#projects">
              Proyectos
            </a>
            <a className="nav-link" href="#contact">
              Contacto
            </a>
            {/* <ToggleTheme /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
