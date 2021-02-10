import React from "react";
import "./Footer.css";
import logomaqay from "../../../assets/img/logomaqay.png";

const Footer = () => {
  return (
    <footer>
      <div>
        La Agenda Ambiental es una iniciativa de:
        <img src={logomaqay} alt={logomaqay} className='footer-logo'></img>
      </div>
      <div>
        Si tienes dudas, consultas o quieres participar de la iniciativa
        escríbenos a{" "}
        <a className='footer-email' href='mailto:hola@maqay.org'>
          hola@maqay.org
        </a>
      </div>
      <div className='footer-social-links'>
        Esta iniciativa fue posible gracias al apoyo de: 200
        <div className='list-social-links'>
          <a href='https://www.linkedin.com/in/lesliechavezp/'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a href='https://www.linkedin.com/in/dalejandra-cruzacosta/'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a href='https://github.com/yajepanta'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a href='https://www.linkedin.com/in/ivy-feraco-56477ba/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
        <a href='https://github.com/yajepanta/maqay-agenda-ambiental'>
          PRs acá: <i className='fab fa-github-square'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
