import React from "react";
import "./Arshakir.scss";
import {
  security,
  cookies,
  loginArrow,
  money,
  blockLeft,
  blockRight,
} from "../../assets";

const Feature = ({ title, text, logo }) => {
  return (
    <div className="arshakir__features-container__feature">
      <div className="arshakir__features-container__feature-title">
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
      </div>
      <div className="arshakir__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Ashakir = () => {
  return (
    <>
      <div className="blocks">
        <img src={blockLeft} alt="" className="block1" />
        <img src={blockRight} alt="" className="block2" />
      </div>
      <div className="arshakir__arshakir" id="packages">
        <div className="arshakir__arshakir-feature heading__text">
          <h1>One platform to increase followers on all social media.</h1>
        </div>
        <div className="arshakir__arshakir-container">
          <Feature
            logo={security}
            title="100% Secure"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Feature
            logo={cookies}
            title="No Cookies Required"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought"
          />
          <Feature
            logo={loginArrow}
            title="Login Required"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought"
          />
          <Feature
            logo={money}
            title="Money Pay Back"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought"
          />
        </div>
      </div>
    </>
  );
};

export default Ashakir;
