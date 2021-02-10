import React from "react";
import "./Share.css";
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
import { Helmet } from "react-helmet";

/* Argumentos que recibirá: url hashtag y quote, 10 primeras palabras */
const Share = (shareContent) => {
  <Helmet>
    <title>{shareContent.content}</title>
  </Helmet>;

  return (
    <div className='dropdown share'>
      <button className='dropbtn'>
        Compartir<i className='fas fa-share-alt'></i>
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
          quote={shareContent.content}
          hashtag='#AgendaAmbiental'
        >
          <FacebookIcon size={30} round={true} />
          <span>Facebook</span>
        </FacebookShareButton>
        <LinkedinShareButton
          source={shareContent.url}
          summary={shareContent.content}
        >
          <LinkedinIcon size={30} round={true} />
          <span>LinkedIn</span>
        </LinkedinShareButton>
        <TelegramShareButton
          url={shareContent.url}
          title={shareContent.content}
        >
          <TelegramIcon size={30} round={true} />
          <span>Telegram</span>
        </TelegramShareButton>
        <TwitterShareButton
          url={shareContent.url}
          title={shareContent.content}
          hashtag='#AgendaAmbiental'
        >
          <TwitterIcon size={30} round={true} />
          <span>Twitter</span>
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareContent.url}
          title={shareContent.content}
        >
          <WhatsappIcon size={30} round={true} />
          <span>Whatsapp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
