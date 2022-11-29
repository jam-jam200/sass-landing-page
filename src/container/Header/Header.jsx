import React from "react";
import { people, headerImg, arrow } from "../../assets";
import "./Header.scss";

const Header = () => (
  <div className="arshakir__header section__padding" id="home">
    <div className="arshakir__header-content">
      <h1 className="heading__text">Increase your followers on social media</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
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
          12,000+ people already joined the arshakir&apos;s increase followers
          plan. Get started today!
        </p>
      </div>
    </div>

    <div className="arshakir__header-image">
      <img src={headerImg} />
    </div>
  </div>
);

export default Header;
