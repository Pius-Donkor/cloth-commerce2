import React from "react";
import "./NavBar.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaListUl, FaShoppingBag } from "react-icons/fa";
const NavBar = (props) => {
  const [showNav, setShownav] = useState(false);
  const screen = window.innerWidth;

  return (
    <div className="navBar">
      <div className="blur nav-b1"></div>
      <div className="blur nav-b2"></div>

      <img src={logo} alt="" />

      {screen <= "768" && !showNav ? (
        <i className="drop" onClick={() => setShownav((prev) => !prev)}>
          <FaListUl style={{ fill: "white" }} />
        </i>
      ) : (
        <ul className="links" onClick={() => setShownav((prev) => !prev)}>
          <li>
            <NavLink className="link" to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/message">
              <i>
                <FaShoppingBag style={{ fill: "white" }} />
              </i>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
