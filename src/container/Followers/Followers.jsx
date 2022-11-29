import React from "react";
import { people, followerImg, arrow } from "../../assets";
import "./Followers.scss";

const Followers = () => (
  <div className="arshakir__followers section__padding" id="products">
    <div className="arshakir__followers-content">
      <h1 className="heading__text">Get thousands of active followers</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment.
      </p>

      <div className="arshakir__followers-content__input">
        <button type="button">
          Get Started
          <img src={arrow} alt="arrow" />
        </button>
      </div>

      <div className="arshakir__followers-content__people">
        <img src={people} />
        <p>
          12,000+ people already joined the arshakir&apos;s <br /> increase
          followers plan. Get started today!
        </p>
      </div>
    </div>

    <div className="arshakir__followers-image">
      <img src={followerImg} />
    </div>
  </div>
);

export default Followers;
