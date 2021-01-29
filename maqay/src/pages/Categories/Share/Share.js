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

/* Argumentos que recibirá: url hashtag y quote, 10 primeras palabras */
const Share = (shareContent) => {
  return (
    <div className="dropdown share">
      <button className="dropbtn">
        Compartir<i className="fas fa-share-alt"></i>
      </button>
      <div className="dropdown-content">
        <EmailShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <EmailIcon size={30} round={true} />
          <span>Email</span>
        </EmailShareButton>
        <FacebookShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <FacebookIcon size={30} round={true} />
          <span>Facebook</span>
        </FacebookShareButton>
        <LinkedinShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <LinkedinIcon size={30} round={true} />
          <span>LinkedIn</span>
        </LinkedinShareButton>
        <TelegramShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <TelegramIcon size={30} round={true} />
          <span>Telegram</span>
        </TelegramShareButton>
        <TwitterShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <TwitterIcon size={30} round={true} />
          <span>Twitter</span>
        </TwitterShareButton>
        <WhatsappShareButton url={shareContent.url} quote={shareContent.content} hashtag="">
          <WhatsappIcon size={30} round={true} />
          <span>Whatsapp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
