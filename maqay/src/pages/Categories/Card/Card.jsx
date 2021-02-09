import React, { useEffect, useState } from "react";

import "./Card.css";
import Share from "../Share/Share.js";

import { writeLike } from "../../../controller/likesController";
import iconsPartidos from "../../../utils/iconsPartidos";

const Card = ({ post }) => {
  const [like, setLike] = useState(false);

  /* Numbers set by Wordpress */
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

  const shareContent = {
    url: "https://maqay.netlify.app",
    content: `${stripPTags(post.content.rendered).substring(0, 80)}`,
  };

  /* const metaTags = {
    title: post.title.rendered,
    quote: shareContent.content,
  }; */
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
    <div className='container-proposal'>
      {/* content sera container header */}
      <div className={alertColor(post.tags)}>
        <div className='container-proposal-title'>{post.title.rendered}</div>

        <div className='container-proposal-content'>{`${stripPTags(
          post.content.rendered
        )}`}</div>

        <div className='container-proposal-footer'>
          <span className='text-small'>
            Propuestas de:
            {post.politicalParties &&
              post.politicalParties.map((idPartido) => {
                return (
                  <img
                    src={`${iconsPartidos[idPartido]}`}
                    alt='icon'
                    width='50px'
                    className='partie-logo'
                  />
                );
              })}
          </span>

          <i
            className={like ? "fas fa-heart" : "far fa-heart"}
            onClick={onLikeClick}
          ></i>
          <label className='like-box'></label>
          {Share(shareContent)}
        </div>
      </div>
    </div>
  );
};

export default Card;
