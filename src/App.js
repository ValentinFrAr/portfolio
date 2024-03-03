import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ArrowToTop from "./components/ArrowToTop";
import NotFound from "./views/NotFound";
import moi from "./assets/moi.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp
          phoneNumber="+54 11 23278365"
          accountName="Valentin"
          chatMessage="Hola, estoy disponible para cualquier cosa. "
          placeholder="Hola Valentin.... "
          messageDelay={0}
          statusMessage="Responde en menos de 10 minutos"
          darkMode={true}
          buttonStyle={{ position: "fixed", bottom: "4rem", right: "20px" }}
          avatar={moi}
          style={{ height: "auto", width: "auto" }}
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
        <ArrowToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
