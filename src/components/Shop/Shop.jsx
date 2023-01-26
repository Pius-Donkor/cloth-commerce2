import "./Shop.css";
import React from "react";
import NavBar from "../NavBar";
import Heading from "../Headings/Heading";
import shoPbanner from "../../img/md-salman-tWOz2_EK5EQ-unsplash.png";
import Products from "../Products/Products";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import { imgSet1, imgSet2, imgSet3, imgSet4 } from "../images";
import { useState } from "react";
const Shop = () => {
  const [selected, setSelected] = useState(false);
  const [select, setSelect] = useState(0);
  const imgSets = [imgSet1, imgSet2, imgSet3, imgSet4];

  const changeFunc = (e) => {
    setSelect(
      e.target.textContent === "2" ? (prev) => (prev = 2) : (prev) => (prev = 0)
    );
    setSelected((prev) => !prev);
  };
  return (
    <div className="shop">
      <NavBar />
      <Heading
        bgImg={shoPbanner}
        title={"#Stay Home"}
        sub={"save more with coupons and up to 70% off!"}
      />
      <section className="shopProducts ">
        <Products
          selected={selected}
          setSelected={setSelected}
          images={imgSets[0 + select]}
          setSelect={setSelect}
          select={select}
        />
        <Products
          selected={selected}
          setSelected={setSelected}
          images={imgSets[1 + select]}
          setSelect={setSelect}
          select={select}
        />
        <div className="shopNext">
          <button onClick={(e) => changeFunc(e)}>1</button>
          <button onClick={(e) => changeFunc(e)}>2</button>
          <button>&#8594;</button>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
