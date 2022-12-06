import React from "react";
import { followerImg, purpleArrow } from "../../assets";
import "./Faqs.scss";

const Faqs = () => (
  <div className="arshakir__faqs section__padding" id="products">
    <div className="arshakir__faqs-content">
      <h1 className="heading__text">
        Any questions? <br /> We got you.
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment.
      </p>

      <div className="arshakir__header-content__input">
        <button type="button">
          More FAQs
          <img src={purpleArrow} alt="arrow" />
        </button>
      </div>
    </div>

    <div className="arshakir__faqs-image">
      <img src={followerImg} />
    </div>
  </div>
);

export default Faqs;
