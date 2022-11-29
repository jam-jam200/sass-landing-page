import React from "react";
import "./Brand.scss";
import {
  openZeppelin,
  oracle,
  morpheus,
  samsung,
  monday,
  segment,
  protonet,
} from "../../assets";

const images = [
  openZeppelin,
  oracle,
  morpheus,
  samsung,
  monday,
  segment,
  protonet,
];

const Brand = () => {
  return (
    <div className="arshakir__brand section__padding">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Brand;
