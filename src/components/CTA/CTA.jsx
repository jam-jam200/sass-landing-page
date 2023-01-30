import React from "react";
import "./CTA.scss";
import { blackArrow } from "../../assets";

const CTA = () => {
  return (
    <div className="arshakir__CTA">
      <div className="arshakir__CTA-heading">
        <h1>
          Join millions of <br /> creative people with Shakir
        </h1>

        <div className="arshakir__CTA-content__input">
          <button type="button">
            Join the waitlist
            <img src={blackArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
