import React, { useState } from "react";
import "./NavBar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo } from "../../assets";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#product">Product</a>
      </p>
      <p>
        <a href="#packages">Packages</a>
      </p>
      <p>
        <a href="#Blog">Blog</a>
      </p>
      <p>
        <a href="#Testimonials">Testimonials</a>
      </p>
    </>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="arshakir__navbar">
      <div className="arshakir__navbar-links">
        <div className="arshakir__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="arshakir__navbar-links_container">
          <Menu className="arshakir__navbar-links_container" />
        </div>
      </div>
      <div className="arshakir__navbar-sign">
        <p>Sign in</p>
        <button type="button">Start Free</button>
      </div>
      <div className="arshakir__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="arshakir__navbar-menu_container scale-up-center">
            <div className="arshakir__navbar-menu_container-links">
              <Menu />
              <div className="arshakir__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Start Free</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
