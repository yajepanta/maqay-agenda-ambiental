import React from "react";
import "./Footer.css";
import logomaqay from "../../../assets/img/logomaqay.png";

const Footer = () => {
  return (
    <footer>
      <div className='footer-nosotros'>
        <a href='https://www.maqay.org/' className='footer-logo'>
          <img src={logomaqay} alt={logomaqay}></img>
        </a>
        <span>La Agenda Ambiental es una iniciativa de Maqay</span>
      </div>
      <div className='footer-resources'>
        <span>RECURSOS</span>
        <div className='list-resources'>
          <a href='https://maqay.org/'>
            <p>Maqay</p>
          </a>
          <a href='https://www.onpe.gob.pe/servicios/financiamiento-organizaciones-politicas/partidos-alianzas/'>
            <p>ONPE: Partidos políticos</p>
          </a>
          <a href='https://www.gob.pe/minam'>
            <p>MINAM: Ministerio del Ambiente</p>
          </a>
          <a href='https://github.com/yajepanta/maqay-agenda-ambiental'>
            <p></p>
          </a>
          <a href='https://www.linkedin.com/in/ivy-feraco-56477ba/'>
            <p></p>
          </a>
          <a href='https://www.linkedin.com/in/laurajimenezb/'>
            <p></p>
          </a>
        </div>
      </div>
      <div className='footer-social-links'>
        <span>EQUIPO</span>
        <div className='list-social-links'>
          <a href='https://www.instagram.com/200org/'>
            <i className='fab fa-instagram-square'></i><p>200pe</p>
          </a>
          <a href='https://www.linkedin.com/in/lesliechavezp/'>
            <i className='fab fa-linkedin'></i><p>Leslie Chávez</p>
          </a>

          <a href='https://www.linkedin.com/in/dalejandra-cruzacosta/'>
            <i className='fab fa-linkedin'></i><p>Alejandra Cruz</p>
          </a>

          <a href='https://github.com/yajepanta/maqay-agenda-ambiental'>
            <i className='fab fa-github-square'></i><p>Yajeleth Panta</p>
          </a>

          <a href='https://www.linkedin.com/in/ivy-feraco-56477ba/'>
            <i className='fab fa-linkedin'></i><p>Ivy Feraco</p>
          </a>
          <a href='https://www.linkedin.com/in/laurajimenezb/'>
            <i className='fab fa-linkedin'></i><p>Laura Jimenez</p>
          </a>
        </div>
      </div>
      <div className='footer-contacto'>
        <p>CONTACTO</p>
        <span>Si tienes dudas, consultas o quieres participar de la iniciativa
        escríbenos a</span>
        <a href='mailto:hola@maqay.org'>
            <i className='far fa-envelope'></i><p>hola@maqay.org</p>
        </a>
        <a href='https://www.instagram.com/200org/'>
            <i className='fab fa-instagram-square'></i><p>ong.maqay</p>
        </a>
        <a href='https://www.instagram.com/200org/'>
            <i className='fab fa-facebook-square'></i><p>ong.maqay</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
