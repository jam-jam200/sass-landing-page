import React, { useState } from "react";
import "./Accordion.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { faq__questions } from "../../constants";

const Accordion = () => {
  const [accordion, setAccordion] = useState(-1);

  return (
    <div className="arshakir__accordion__container ">
      <div className="arshakir__accordion-questions accordion">
        {faq__questions.map((question, index) => (
          <div
            key={index + question.question}
            className="arshakir__accordion-question item"
          >
            <div className="arshakir__accordion__question-heading title">
              <h3 className={accordion === index ? "active" : ""}>
                {question.question}
              </h3>
              <AiOutlinePlus color="#000" />s
            </div>
            <div className="arshakir__accordion__answer-content">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
