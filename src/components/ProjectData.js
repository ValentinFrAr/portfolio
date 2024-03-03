import logo_clinic from "../assets/demo_clinic.mp4";
import logo_tripNexus from "../assets/demo-tripnexus.mp4";
import logo_crypto from "../assets/demo-crypto.mp4";

export const projectData = [
  {
    id: 1,
    title: "Clinic'App (clic para probar)",
    date: "Febrero 2024",
    languages: [
      <img
        src="https://imgs.search.brave.com/i_2aCWs7u_-AqPdD8VOB_7BcoPyy2C_JUsgivIsDwC8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWljb24tMjU2/eDI1Ni04c245OG8y/Mi5wbmc"
        alt="logo js"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/uANSW1gZjI2cz8P4LMWk59Or-OHBoDI0D5yYI9_pz4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9yZWFjdC1p/Y29uLTI1NngyMjgt/aHJwNGp2bjgucG5n"
        alt="logo react"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/_WwEvOJNpeZ-lj6k6H0y-xs6DAIXgMDVzY7depwrySQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qd3Qu/aW8vaW1nL3BpY19s/b2dvLnN2Zw.svg "
        alt="logo jwt"
        width="33"
      ></img>,
      <img
        src="https://imgs.search.brave.com/o_g1vJumrE0rBYG8y8CxDr-ZV6xk318fE3jLagHHuCs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84ODgvODg4ODQ3/LnBuZw"
        alt="logo css"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/K-J9kvPa3ZAI6BpZb006rl5Zbt7TTGzUHcMF6KPXaTI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI5L1Bvc3RncmVz/cWxfZWxlcGhhbnQu/c3Zn.svg"
        alt="logo postgres"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/rqA1OcIzhXD4nlS9rcYPxJzyjMRRoCfPFOFLiwgwNi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n"
        alt="logo nodejs"
        width="37"
      ></img>,
    ],
    infos:
      "Clinic'app es una app de gestion de informacion entre pacientes y el personal de la clinica.",
    img: (
      <video className="video-element" controls muted autoPlay>
        <source src={logo_clinic} type="video/mp4" />
      </video>
    ),
    link: "https://medical-clinic-app.vercel.app/",
    front: (
      <a
        href="https://github.com/ValentinFrAr/clinic-app-frontend"
        target="_blank"
        rel="noreferrer"
      >
        Code frontend
      </a>
    ),
    back: (
      <a
        href="https://github.com/ValentinFrAr/clinic-app-backend"
        target="_blank"
        rel="noreferrer"
      >
        Code backend
      </a>
    ),
  },
  {
    id: 2,
    title: "Trip Nexus",
    date: "Mars 2020",
    languages: [
      <img
        src="https://imgs.search.brave.com/uANSW1gZjI2cz8P4LMWk59Or-OHBoDI0D5yYI9_pz4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9yZWFjdC1p/Y29uLTI1NngyMjgt/aHJwNGp2bjgucG5n"
        alt="logo react"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n"
        alt="logo python"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/o_g1vJumrE0rBYG8y8CxDr-ZV6xk318fE3jLagHHuCs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni84ODgvODg4ODQ3/LnBuZw"
        alt="logo css"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/728x0-1n-AI2jEOjzIun4nYhdruzjT9_YeRu1cp3jv0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mNHQy/aTVoOS5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMTEvbXlz/cWwtbG9nby5wbmc"
        alt="logo mysql"
        width="45"
      ></img>,
    ],
    infos:
      "Aplicación de viajes que reúne ofertas de determinadas agencias de viajes, reseñas de viajeros y cuentas premium. ⚠️¡En desarrollo!⚠️",
    img: (
      <video className="video-element" controls muted autoPlay>
        <source src={logo_tripNexus} type="video/mp4" />
      </video>
    ),
    link: "http://www.google.com",
  },
  {
    id: 3,
    title: "Crypto Watch",
    date: "Junio 2023",
    languages: [
      <img
        src="https://imgs.search.brave.com/uANSW1gZjI2cz8P4LMWk59Or-OHBoDI0D5yYI9_pz4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9yZWFjdC1p/Y29uLTI1NngyMjgt/aHJwNGp2bjgucG5n"
        alt="logo react"
        width="37"
      ></img>,
      <img
        src="https://imgs.search.brave.com/MR-HziZe_r_sJffyWE0OqivAEd8vMfUL_DgoXa535wI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvU2Fzc19s/b2dvLTcwMHg1MjQu/cG5n"
        alt="logo sass"
        width="37"
      ></img>,
    ],
    infos:
      "Api para analizar el mercado de las crypto monedas, con gráficos utilizando SimpleTreeMap.",
    img: (
      <video className="video-element" controls autoPlay>
        <source src={logo_crypto} type="video/mp4" />
      </video>
    ),
    link: "https://crypto-table-react.netlify.app/",
  },
];
