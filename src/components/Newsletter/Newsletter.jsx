import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="news-det">
        <h1>sign up for newsletter</h1>
        <p>
          get e-mail updates about our shop and
          <span style={{ color: "yellow" }}> special offers</span>
        </p>
      </div>
      <div className="news-sign">
        <input type="text" placeholder="Enter your e-mail address" />
        <button>sign up</button>
      </div>
    </section>
  );
};

export default Newsletter;
