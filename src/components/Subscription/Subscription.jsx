import React from "react";
import "./Subscription.scss";

const Subscription = () => {
  return (
    <div className="arshakir__subscribe section__padding" id="Blog">
      <div className="arshakir__subscribe-content">
        <p>Join our community</p>
        <h3>
          Set your social media <br /> growth on autopilot
        </h3>

        <div className="arshakir__subscribe-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
