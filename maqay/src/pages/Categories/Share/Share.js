import React from "react";
import "./Share.css";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

/* Argumentos que recibirá: url hashtag y quote, 10 primeras palabras */
const Share = (shareContent) => {
  <Helmet>
    <meta property='og:image' content={shareContent.img}></meta>
    <meta property='og:title' content={shareContent.content} />
    <meta property='og:url' content={shareContent.img} />
    <meta property='og:description' content={shareContent.content} />
  </Helmet>;

  return (
    <div className='dropdown share'>
      <button className='dropbtn'>
        <i className='fas fa-share-alt'></i>
      </button>
      <div className='dropdown-content'>
        <FacebookShareButton
          hashtag='#AgendaAmbiental'
          url={shareContent.img}
          quote={shareContent.content}
        >
          <FacebookIcon size={30} round={true} />
          <span>Facebook</span>
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareContent.content}
          summary={shareContent.img}
        >
          <LinkedinIcon size={30} round={true} />
          <span>LinkedIn</span>
        </LinkedinShareButton>
        <TelegramShareButton
          url={shareContent.content}
          title={shareContent.img}
        >
          <TelegramIcon size={30} round={true} />
          <span>Telegram</span>
        </TelegramShareButton>
        <TwitterShareButton
          url={shareContent.content}
          title={shareContent.img}
          hashtag='#AgendaAmbiental'
        >
          <TwitterIcon size={30} round={true} />
          <span>Twitter</span>
        </TwitterShareButton>
        <WhatsappShareButton
          title={shareContent.img}
          url={shareContent.content}
        >
          <WhatsappIcon size={30} round={true} />
          <span>Whatsapp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
