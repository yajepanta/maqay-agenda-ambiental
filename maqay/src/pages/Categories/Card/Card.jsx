import React, { useEffect, useState } from "react";
import "./Card.css";
import Share from "../Share/Share.js";
/* 
import Helmet from "../Helmet/Helmet.js"; */

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

  const regEx = /<\/?p[^>]*>/g;

  const shareContent = {
    url: "https://maqay.netlify.app",
    content: post.content.rendered.replace(regEx, "").substring(0, 80),
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
  return (
    /* container proposals es "container-proposal" ahora container-card */
    <div className='container-proposal'>
      {/* content sera container header */}
      <div className={alertColor(post.tags)}>
        <div className='container-proposal-title'>{post.title.rendered}</div>

        <div className='container-proposal-content'>{`${post.content.rendered.replace(
          regEx,
          ""
        )}`}</div>

        <div className='container-proposal-footer'>
          <span className='text-small'>
            Propuestas de: {post.politicalParties}
          </span>

          <i
            className={like ? "fas fa-heart" : "far fa-heart"}
            onClick={() => {
              const currentLike = !like;
              setLike(currentLike);
              localStorage.setItem(post.id, currentLike);
            }}
          ></i>
          <label className='like-box'></label>
          {Share(shareContent)}
        </div>
      </div>
    </div>
  );
};

export default Card;
