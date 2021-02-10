import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
/* import climateChange from '../../assets/img/climateChange.png';
import solidResidue from '../../assets/img/solidResidue.png';
import waterManagement from '../../assets/img/waterManagement.png';
import deforestation from '../../assets/img/deforestation.png';
import logginMining from '../../assets/img/loggin-mining.png';
import conflicts from '../../assets/img/conflicts.png';
import partidomorado from '../../assets/img/partidoMorado.png';
import juntosperu from '../../assets/img/juntosPeru.png';
import fuerzapopular from '../../assets/img/fuerzaPopular.png';
import victorianacional from '../../assets/img/victoriaNacional.png';
import acciónpopular from '../../assets/img/accionPopular.png';
import apra from '../../assets/img/apra.png'; */
/* <img src={climateChange} alt="" /> 
src={require('../logo.png')}*/

const Card = ({ post, categorySelected, path }) => {
  const background = `/img/${post.name.replace(/ /g, "")}.png`;

  return (
    <div className='card-home'>
      <Link to={path}>
        <img
          className='card-home-logo'
          src={background}
          alt={`${post.name.replace(/ /g, "")}`}
        ></img>
        <div className='sub-card-home'>
          <div className='card-footer'>
            <p>{post.name}</p>
            {/* {categorySelected === "Tema ambiental" && <p>Propuestas de:</p>} */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
