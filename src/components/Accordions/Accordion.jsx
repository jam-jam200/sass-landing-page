import React, { useState } from "react";
import "./Accordion.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { faq__questions } from "../../constants";

const Accordion = () => {
  const [accordion, setAccordion] = useState(-1);

  const handleAccordion = (index) => {
    setAccordion(index);
  };

  return (
    <div className="arshakir__accordion__container ">
      <div className="arshakir__accordion-questions accordion">
        {faq__questions.map((question, index) => (
          <div
            key={index + question.question}
            onClick={() => handleAccordion(index)}
            className="arshakir__accordion-question item"
          >
            <div className="arshakir__accordion__question-heading">
              <h3 className={accordion === index ? "active" : ""}>
                {question.question}
              </h3>
            </div>
            <div className="arshakir__accordion-minus">
              {accordion === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <div>
              <p className={accordion === index ? "active" : "inactive"}>
                {question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
