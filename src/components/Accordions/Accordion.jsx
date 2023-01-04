import React, { useState } from "react";
import "./Accordion.scss";
import { faq__questions } from "../../constants";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  const [faqs, setFaqs] = useState(null);

  const toggleFAQ = (index) => {
    setFaqs(
      faq__questions.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="arshakir__accordion__container arshakir__accordion__faqs">
      {faq__questions.map((faq, index) => (
        <div
          key={index}
          onClick={() => toggleFAQ(index)}
          className={`arshakir__accordion__question-faq ${
            faq.open ? "open" : ""
          } `}
        >
          <div className="arshakir__accordion-question">{faq.question}</div>
          <div className="arshakir__accordion-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;
