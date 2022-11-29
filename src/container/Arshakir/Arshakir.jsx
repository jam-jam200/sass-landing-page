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
    <div className="arshakir__arshakir section__margin" id="packages">
      <div className="arshakir__arshakir-blocks">
        <img src={blockLeft} alt="" className="arshakir__arshakir-block1" />
        <img src={blockRight} alt="" className="arshakir__arshakir-block2" />
      </div>
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
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          logo={loginArrow}
          title="Login Info Not Required"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />

        <Feature
          logo={money}
          title="Moneyback Guarrentee"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
};

export default Ashakir;
