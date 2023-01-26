import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import pay from "../../img/pay/pay.png";
import play from "../../img/pay/play.jpg";
import gApp from "../../img/pay/app.jpg";
import {
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footings">
        <div className="contacts">
          <img src={logo} alt="📸" />
          <p style={{ fontWeight: "bold" }}>Contact</p>
          <ul>
            <li>
              <span>
                Address : 562 wellinton Road , Street 32, San Francisco
              </span>
            </li>
            <li>
              <span>Phone : +01 2222 356 7(+91)</span>
            </li>
            <li>
              <span>Hours : 10:00 - 18:00 , Mon - Sa</span>
            </li>
          </ul>
          <p style={{ fontWeight: "bold" }}>Follow Us On</p>
          <div>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaWhatsapp />
            </i>
            <i>
              <FaYoutube />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
          </div>
        </div>
        <div className="about">
          <p style={{ fontWeight: "bold" }}>About</p>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="account">
          <p style={{ fontWeight: "bold" }}>My Account</p>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track and Order</a>
          <a href="#">Help</a>
        </div>
        <div className="install">
          <p style={{ fontWeight: "bold" }}>Install App</p>
          <span>From App Store or Google Play</span>
          <div className="google">
            <img src={gApp} alt="" />
            <img src={play} alt="" />
          </div>
          <span>Secured Payment Gateways</span>
          <img src={pay} alt="" />
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "3rem" }}>
        © 2021 , Tech2 etc - HTML CSS Ecommerce Template
      </p>
    </section>
  );
};

export default Footer;
