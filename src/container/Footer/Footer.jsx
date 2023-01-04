import React from "react";
import "./Footer.scss";
import { company, product, resources } from "../../constants";
import { logosvg } from "../../assets";

const Footer = () => {
  return (
    <div className="arshakir__footer section__padding">
      <div className="arshakir__footer-links">
        <div className="arshakir__footer-links_logo">
          <img src={logosvg} alt="logo" />
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </div>
        <div className="arshakir__footer-links_div">
          <h4>Company</h4>
          {company.map((companys, index) => (
            <p key={index + companys}>{companys.name}</p>
          ))}
        </div>
        <div className="arshakir__footer-links_div">
          <h4>Product</h4>
          {product.map((products, index) => (
            <p key={index + products}>{products.name}</p>
          ))}
        </div>
        <div className="arshakir__footer-links_div">
          <h4>Resources</h4>
          {resources.map((resource, index) => (
            <p key={index + resource}>{resource.name}</p>
          ))}
        </div>
      </div>
      <div className="arshakir__footer-copyright">
        <p>
          2022 ARShakir Inc. All rights reserved. -- Privacy Policy - Terms of
          Services
        </p>
        <p>Supported by Microsoft Startup</p>
      </div>
    </div>
  );
};

export default Footer;
