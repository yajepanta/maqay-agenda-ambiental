import React from "react";
import "./Share.css";
import { Helmet } from "react-helmet";
import {
  EmailShareButton,
  EmailIcon,
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
    <meta property="og:title" content={shareContent.content} />
    <meta property="og:image" content={shareContent.img} />
    <meta property="og:image:secure_url" content={shareContent.img} />
  </Helmet>

  return (
    <div className='dropdown share'>
      <button className='dropbtn'>
        <i className='fas fa-share-alt'></i>
      </button>
      <div className='dropdown-content'>
        <EmailShareButton
          url={shareContent.url}
          quote={shareContent.content}
          hashtag=''
        >
          <EmailIcon size={30} round={true} />
          <span>Email</span>
        </EmailShareButton>

        <FacebookShareButton
          url={shareContent.url}
          quote={shareContent.img}
          hashtag='#AgendaAmbiental'
        >
          <FacebookIcon size={30} round={true} />
          <span>Facebook</span>
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareContent.url}
          summary={shareContent.img}
        >
          <LinkedinIcon size={30} round={true} />
          <span>LinkedIn</span>
        </LinkedinShareButton>
        <TelegramShareButton
          url={shareContent.url}
          title={shareContent.img}
        >
          <TelegramIcon size={30} round={true} />
          <span>Telegram</span>
        </TelegramShareButton>
        <TwitterShareButton
          url={shareContent.url}
          title={shareContent.img}
          hashtag='#AgendaAmbiental'
        >
          <TwitterIcon size={30} round={true} />
          <span>Twitter</span>
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareContent.url}
          title={shareContent.img}
        >
          <WhatsappIcon size={30} round={true} />
          <span>Whatsapp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
