import React from "react";
import "../styles/Footer.css";

function Footer () {
    return(
        <footer className="py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <h5>Contacto</h5>
              <p>Email: contacto@wikiterraria.com</p>
            </div>
            <div className="col-md-6 mb-3">
              <h5>Sobre Nosotros</h5>
              <p>Wiki Terraria es una enciclopedia dedicada a proporcionar información detallada sobre el juego Terraria.</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <p>&copy; 2025 Wiki Terraria. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;