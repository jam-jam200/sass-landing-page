import React from "react";
import { plus, minus } from "../../assets";

export const GetMainFaqs = (List, funcCall) => {
  const FAQ = List.map(({ title, id, contentList }) => (
    <div
      className="arshakir__faqs__parent__container arshakir__faqs__parent"
      key={id}
      id={id}
    >
      <div className="arshakir__faqs__question">
        <p>{title}</p>
        <span onClick={() => funcCall(id)}>
          <img src={minus} alt="minus" className="arshakir__faqs-minus" />
          <img src={plus} alt="plus" className="arshakir__faqs-plus" />
        </span>
      </div>
      <div
        className="arshakir__faqs-content arshakir__faqs-hide arshakir__faqs-answer"
        typeof="button"
        onClick={() => funcCall(id)}
      >
        {contentList.map(({ id, li }) => (
          <div className="arshakir__faqs-innerContent" key={id}>
            <ul>
              {li.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ));

  return FAQ;
};
