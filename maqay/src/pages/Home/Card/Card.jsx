import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ post, mainCategory, path }) => {
  /* const nameFile = post.name.replace(/ /g, "");
  console.log(nameFile);
  const nameSinTilde = nameFile
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); */
  const nameFile = post.slug;
  const background = `/img/${nameFile}.png`;

  return (
    <div className='card-home'>
      <Link to={path} className='card-home-link'>
        <img
          className='card-home-logo'
          src={background}
          alt={`${nameFile}`}
        ></img>
        <div className='sub-card-home'>
          <div className='card-footer'>
            <p>{post.name}</p>
            {/* {mainCategory === "Tema ambiental" && <p>Propuestas de:</p>} */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
