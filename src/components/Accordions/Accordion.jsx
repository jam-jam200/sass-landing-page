import React, { useState } from "react";
import "./Accordion.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  const [faqs, setFaqs] = useState([
    [
      {
        question: "How does this work?",
        answer:
          "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
        open: true,
      },
      {
        question: "Are there any additional fee?",
        answer:
          "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
        open: false,
      },
      {
        question: "How can I get the app?",
        answer:
          "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
        open: false,
      },
      {
        question: "What features do you offer and what don't you?",
        answer:
          "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
        open: false,
      },
    ],
  ]);

  return (
    <div className="arshakir__accordion__container wrapper">
      {faqs.map((faq, index) => (
        <div key={index} className="arshakir__accordion__faqs">
          {faq.map((item, i) => (
            <div
              key={i}
              className={
                "arshakir__accordion__question-faq" + (item.open ? "open" : "")
              }
            >
              <div className="arshakir__accordion-question">
                {item.question}
              </div>
              <div className="arshakir__accordion-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
