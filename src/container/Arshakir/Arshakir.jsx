import React from "react";
import "./Arshakir.scss";
import { security, cookies, loginArrow, money } from "../../assets";

const Feature = ({ title, text, logo }) => {
  return (
    <div className="arshakir__features-container__feature">
      <div className="arshakir__features-container__feature-title">
        <div />
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
    <div className="arshakir__arshakir section__margin" id="wgpt3">
      <div className="arshakir__arshakir-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="arshakir__arshakir-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="arshakir__arshakir-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
};

export default Ashakir;
