import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_content">
          <div className="link">
            <div className="link_item">
              <a href="#">À propos</a>
            </div>
            <div className="link_item">
              <a href="#">Portfolio</a>
            </div>
            <div className="link_item">
              <a href="#">Services</a>
            </div>
            <div className="link_item">
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="reseau">
            <div className="email">
              <p>traoreadamo@gmail.com</p>
              <p>+225 05 85 58 98 12</p>
            </div>
            <div className="media">
              <div className="icon">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="logo">Événements TA</div>
          </div>
        </div>
      </div>
      <div className="footer_down">
        <span>IVOIT AGENCE</span> © Tous Droits Reservés
      </div>
    </footer>
  );
};

export default Footer;
