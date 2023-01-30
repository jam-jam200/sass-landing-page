import React from "react";
import { people, headerImg, arrow, image } from "../../assets";
import "./Header.scss";

const Header = () => (
  <div className="arshakir__header section__padding">
    <div className="arshakir__header-content">
      <h1 className="heading__text">
        Increase your <br /> followers on <br /> social media
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. <br /> Not
        thoughts all exercise blessing. Indulgence way <br /> everything joy alteration
        boisterous the attachment.
      </p>

      <div className="arshakir__header-content__input">
        <button type="button">
          Get Started
          <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div className="arshakir__header-content__people">
        <img src={people} />
        <p>
          12,000+ people already joined the arshakir&apos;s <br /> increase
          followers plan. Get started today!
        </p>
      </div>
    </div>

    <div className="arshakir__header-image">
      <img src={image} alt="header imagePicture"/>
    </div>
  </div>
);

export default Header;
