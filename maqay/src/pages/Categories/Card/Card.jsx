import React, { useEffect, useState } from "react";
import "./Card.css";
import Share from "../Share/Share.js";
import { writeLike } from "../../../controller/likesController";

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

  const shareContent = {
    url: "maqay.org",
    content: post.content.rendered.substring(0, 80),
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
    <div className='container-proposal'>
      {/* content sera container header */}
      <div className={alertColor(post.tags)}>
        <div className='container-proposal-title'>{post.title.rendered}</div>

        <div className='container-proposal-content'>{`${post.content.rendered.replace(
          /<\/?p[^>]*>/g,
          ""
        )}`}</div>

        <div className='container-proposal-footer'>
          <span className='text-small'>
            Propuestas de: {post.politicalParties}
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
