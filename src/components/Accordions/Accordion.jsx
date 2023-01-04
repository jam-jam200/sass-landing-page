import React, { useState } from "react";
import "./Accordion.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  const [activeAccordion, setActiveAccordion] = useState([
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

  return <div className="arshakir__accordion__container wrapper"></div>;
};

export default Accordions;
