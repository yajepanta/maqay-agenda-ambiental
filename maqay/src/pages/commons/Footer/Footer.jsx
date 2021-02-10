import React from "react";
import "./Footer.css";
import logomaqay from "../../../assets/img/logomaqay.png";

const Footer = () => {
  return (
    <footer>
      <div>
        La Agenda Ambiental es una iniciativa de:
        <a href='https://www.maqay.org/' className='footer-logo'>
          <img src={logomaqay} alt={logomaqay}></img>
        </a>
      </div>
      <div>
        Si tienes dudas, consultas o quieres participar de la iniciativa
        escríbenos a{" "}
        <a
          className='footer-email'
          href='mailto:hola@maqay.org'
          style={{ textDecoration: "none !important", color: "#ffffff" }}
        >
          hola@maqay.org
        </a>
      </div>
      <div className='footer-social-links'>
        Esta iniciativa fue posible gracias al apoyo de:
        <div className='list-social-links'>
          <a href='https://www.instagram.com/200org/'>
            <i className='fab fa-instagram-square'></i>
          </a>
          <a href='https://www.linkedin.com/in/lesliechavezp/'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a href='https://www.linkedin.com/in/dalejandra-cruzacosta/'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a href='https://github.com/yajepanta/maqay-agenda-ambiental'>
            <i className='fab fa-github-square'></i>
          </a>

          <a href='https://www.linkedin.com/in/ivy-feraco-56477ba/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
