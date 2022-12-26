import React from "react";
import "./Accordion.scss";

const faq__questions = [
  {
    question: "How this work?",
    answer:
      "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  },
  {
    question: "Are there any additional fee?",
    answer:
      "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  },
  {
    question: "How can I get the app?",
    answer:
      "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  },
  {
    question: "What features do you offer and other not?",
    answer:
      "Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  },
];

const Accordion = () => {
  return (
    <div className="arshakir__accodion__container">
      <div className="arshakir__accordion-questions">
        {faq__questions.map((question, index) => (
          <div key={index+question.question}></div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
