import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Social from "../components/Social";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <div>
        <Skills />
        <Certificates />
      </div>
      <Projects />
      <ContactForm />
      <hr className="w-50 mx-auto" />
      <Social />
      <p className="text-footer ps-3">
        <span>Valentin Robert</span> @2024
      </p>
    </div>
  );
};

export default Home;
