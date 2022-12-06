import React from "react";
import "./Testimonials.scss";
import { people01, people02, people03, star } from "../../assets";

const testimonials = [
  {
    id: "feedback-1",
    content:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.",
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
  return <div className="section__padding arshakir__testimonials">Testimonials</div>;
};

export default Testimonials;
