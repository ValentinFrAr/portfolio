import React from "react";

const Skills = () => {
  return (
    <section
      data-testid="about"
      id="about"
      className="mb-10 d-flex flex-column align-items-center justify-content-center lg:mb-0 lg:h-screen lg:flex-row"
    >
      <div className="mb-10 d-flex flex-column align-items-center justify-content-center w-100 lg:mb-0 lg:w-50">
        <h2 className="font-monospace about-title fs-4">Skills</h2>
        <span className="mb-6 ms-2 h-1 w-10 bg-success"></span>
      </div>

      <div className="w-100 text-justify dark:text-white lg:w-50">
        <div className="mb-2 about-desc d-flex justify-content-center ">
          <ul className="d-flex align-items-between flex-column">
            <li className="mb-5">
              Frontend:{" "}
              <img
                src="https://imgs.search.brave.com/i_2aCWs7u_-AqPdD8VOB_7BcoPyy2C_JUsgivIsDwC8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWljb24tMjU2/eDI1Ni04c245OG8y/Mi5wbmc"
                alt="logo js"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/uANSW1gZjI2cz8P4LMWk59Or-OHBoDI0D5yYI9_pz4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9yZWFjdC1p/Y29uLTI1NngyMjgt/aHJwNGp2bjgucG5n"
                alt="logo react"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/gOjxv5MZ01cUxtlO45vJS09ZmFqrq6PWDTRIvPl0pXg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMDUxLzEwNTEy/NzcucG5n"
                alt="logo html"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/o_g1vJumrE0rBYG8y8CxDr-ZV6xk318fE3jLagHHuCs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84ODgvODg4ODQ3/LnBuZw"
                alt="logo css"
                width="40"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/MR-HziZe_r_sJffyWE0OqivAEd8vMfUL_DgoXa535wI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvU2Fzc19s/b2dvLTcwMHg1MjQu/cG5n"
                alt="logo sass"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/jLap1gkvy3LYJ3tzFyGH-gsbcPd3wiGPQVq7Bs9guEo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw.svg"
                alt="logo bootstrap"
                width="37"
              ></img>
            </li>
            <li>
              Backend:{" "}
              <img
                src="https://imgs.search.brave.com/rqA1OcIzhXD4nlS9rcYPxJzyjMRRoCfPFOFLiwgwNi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n"
                alt="logo nodejs"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/K-J9kvPa3ZAI6BpZb006rl5Zbt7TTGzUHcMF6KPXaTI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI5L1Bvc3RncmVz/cWxfZWxlcGhhbnQu/c3Zn.svg"
                alt="logo postgres"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n"
                alt="logo python"
                width="37"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/728x0-1n-AI2jEOjzIun4nYhdruzjT9_YeRu1cp3jv0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mNHQy/aTVoOS5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTEvbXlz/cWwtbG9nby5wbmc"
                alt="logo mysql"
                width="45"
              ></img>{" "}
              |{" "}
              <img
                src="https://imgs.search.brave.com/3y_rgixwXZbjrAPgG2Z4nqYCNdB8BRZo9-m_EhGUw0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9qd3Rpby1qc29u/LXdlYi10b2tlbi5z/dmc.svg"
                alt="logo jwt"
                width="90"
              ></img>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
