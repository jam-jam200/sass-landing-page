import React from "react";
import "./Testimonials.scss";
import { star, quote } from "../../assets";
import { testimonials } from "../../constants";

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
