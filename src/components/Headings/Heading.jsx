import "./Heading.css";
import React from "react";

const Heading = ({ bgImg, sub, title }) => {
  return (
    <div className="heading" style={{ backgroundImage: `url(${bgImg})` }}>
      <h1 className="stroke">{title}</h1>
      <p className="stroke">{sub}</p>
    </div>
    
  );
};

export default Heading;
