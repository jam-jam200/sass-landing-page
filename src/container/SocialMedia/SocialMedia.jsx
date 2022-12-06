import React from "react";
import { socialmediaImg } from "../../assets";
import "./SocialMedia.scss";

const SocialMedia = () => (
  <div className="arshakir__socialmedia section__padding">
    <div className="arshakir__socialmedia-image">
      <img src={socialmediaImg} />
    </div>
    <div className="arshakir__socialmedia-content">
      <h1 className="heading__text">Daily active <br /> users on social media</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment.
      </p>

      <div className="arshakir__socialmedia-content__input">
        <button type="button">Start Free</button>
      </div>
    </div>
  </div>
);

export default SocialMedia;
