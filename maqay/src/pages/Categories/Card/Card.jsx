import React, { useEffect, useState } from "react";
import "./Card.css";
import { writeLike } from "../../../controller/likesController";
import media from "../../../utils/data/media";
import iconsPartidos from "../../../utils/iconsPartidos";
import Share from "../Share/Share.js";

const Card = ({ post }) => {
  const [like, setLike] = useState(false);
  const [image, setImage] = useState("");

  /* Numbers set by Wordpress that define the background color */
  const alertRed = 39;
  const alertGreen = 40;

  const alertColor = (alertTagsArray) => {
    if (alertTagsArray.includes(alertRed)) {
      return "content alert-red";
    } else if (alertTagsArray.includes(alertGreen)) {
      return "content alert-green";
    } else {
      return "content no-alert";
    }
  };

  const stripPTags = (content) => content.replace(/<\/?p[^>]*>/g, "");

  /* Get Parties Name to show them (logo) at the card footer */

  /*  const getPartieName = () => {
    const partieObject = allTagsNameAndNumber.find(
      (tag) => tag.id === post.tags[1]
    );
    if (partieObject) {
      return partieObject.name.toUpperCase();
    }
  }; */

  //obtener string del link de la imagen o "No hay imagen" en el state "image"

  useEffect(() => {
    if (post.featured_media === 0) {
      setImage("No hay imagen");
    } else {
      const linkImage = media.filter(
        (object) => object.id === post.featured_media
      );
      setImage(linkImage[0].source_url);
    }
  }, [post]);

  //Aquí se llama al state "image"

  /* const location = useLocation();
  const currentUrl =
    "https://agendaambiental.info" + location.pathname + `#${post.id}`; */
  const currentUrl = "https://agendaambiental.info";

  const shareContent = {
    url: currentUrl,
    content: `Conoce las propuestas ambientales de los partidos políticos en la Agenda Ambiental 2021: ${currentUrl}`,
    img: `${image}`,
  };

  useEffect(() => {
    if (localStorage.getItem(post.id)) {
      setLike(localStorage.getItem(post.id) === "true" ? true : false);
    }
  }, [post.id]);

  const onLikeClick = () => {
    const currentLike = !like;
    setLike(currentLike);
    localStorage.setItem(post.id, currentLike);
    writeLike(currentLike, post.id, post.title.rendered);
  };

  return (
    /* container proposals es "container-proposal" ahora container-card */
    <div className='container-proposal' id={post.id}>
      {/* content sera container header */}
      <div className={alertColor(post.tags)}>
        <div className='container-proposal-title'>{post.title.rendered}</div>

        <div className='container-proposal-content'>{`${stripPTags(
          post.excerpt.rendered.replace(
            /^(\s*<br( \/)?>)*|(<br( \/)?>\s*)*$/gm,
            " "
          )
        )}`}</div>

        <div className='container-proposal-footer'>
          <div className='proposal-footer-logo'>
            Propuesta de:
            {post.politicalParties &&
              post.politicalParties.slice(0, 1).map((idPartido) => {
                return (
                  <img
                    src={`${iconsPartidos[idPartido]}`}
                    alt='icon'
                    width='50px'
                    className='partie-logo'
                    key={Math.random()}
                  />
                );
              })}
          </div>

          <div className='social-media-buttons'>
            <label className='like-box'>
              <i
                className={like ? "fas fa-heart" : "far fa-heart"}
                onClick={onLikeClick}
              ></i>
            </label>
            {Share(shareContent)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
