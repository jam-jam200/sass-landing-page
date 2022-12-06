import React from "react";
import "./SocialMedia.scss";
import { socialmediaImg } from "../../assets";

const SocialMedia = () => {
  return (
    <div className="arshakir__socialmedia section__padding" id="possibility">
      <div className="arshakir__socialmedia-image">
        <img src={socialmediaImg} alt="possibility" />
      </div>
      <div className="arshakir__socialmedia-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default SocialMedia;
