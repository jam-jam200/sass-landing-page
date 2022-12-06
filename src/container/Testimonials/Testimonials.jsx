import React from "react";
import "./Testimonials.scss";
import { people01, people02, people03, star, quote } from "../../assets";

const testimonials = [
  {
    id: "feedback-1",
    content:
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Serhiy Hipskyy",
    title: "CEO Universal",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Justus Menke",
    title: "CEO Eronaman",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Justus Menke",
    title: "CEO Eronaman",
    img: people03,
  },
];

const Testimonials = () => {
  return (
    <div className="section__padding arshakir__testimonials">
      <div className="arshakir__testimonials-heading">
        <h4 className="sub__heading-text">Testimonials</h4>
        <h1>What Our Happy User Says</h1>
      </div>
      <div className="arshakir__testimonials__feedback-cards">
        {testimonials.map((testimonial) => (
          <div
            className="arshakir__testimonials__feedback-card"
            key={testimonial.id}
          >
            <div className="quote">
              <img src={quote} alt="double quotes" />
            </div>
            <div className="arshakir__testimonials__feedback-stars">
              <img src={star} alt="stars" />
            </div>
            <p>{testimonial.content}</p>
            <div className="arshakir__testimonials__feedback-card__details">
              <img src={testimonial.img} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
