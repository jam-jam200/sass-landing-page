import React from "react";
import "./Footer.scss";
import { company, product, resources, footerLinks } from "../../constants";
import { logosvg } from "../../assets";

const Footer = () => {
  return (
    <div className="arshakir__footer section__padding">
      <div className="arshakir__footer-links">
        <div className="arshakir__footer-links_logo">
          <img src={logosvg} alt="logo" />
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
            <br />
            thoughts all exercise blessing. Indulgence way everything joy <br />
            alteration boisterous the attachment.
          </p>
        </div>
        <div className="arshakir__footer-links_div">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title}>
              <h4>{footerlink.title}</h4>
              <ul>
                {footerlink.links.map((links, index) => (
                  <li
                    key={links.name}
                    className={`${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <h4>Company</h4>
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
