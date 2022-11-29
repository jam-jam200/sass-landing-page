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
      <h5>Trusted By Over 100+ Startups and freelance business</h5>
      <div className="arshakir__brand_images">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="images" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
