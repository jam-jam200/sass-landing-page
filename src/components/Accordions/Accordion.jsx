import React, { useState } from "react";
import "./Accordion.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { faq__questions } from "../../constants";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="arshakir__accordion__container wrapper">
      {faq__questions.map((item, index) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={item.id}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
      {/* <div className="arshakir__accordion-questions accordion">
        {faq__questions.map((question, index) => (
          <div key={index} className="arshakir__accordion-question item">
            <div
              className="arshakir__accordion__question-heading title"
              
            >
              <h3>{question.question}</h3>
              <span>
                {" "}
                {activeAccordion === index ? (
                  <AiOutlineMinus color="#000" />
                ) : (
                  <AiOutlinePlus color="#000" />
                )}
              </span>
            </div>
            <div
              className={
                activeAccordion === index
                  ? "arshakir__accordion__answer-content show"
                  : "arshakir__accordion__answer-content"
              }
            >
              {question.answer}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Accordions;
