import React from "react";
import "./Products.css";
import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
const Products = ({ images, select }) => {
  const screenWidth = window.innerWidth <= 768 ? true : false;

  const transition = { type: "spring", duration: 4 };
  return (
    <Zoom buttom>
      <section key={select} className="products padd">
        {images.map((img, i) => (
          <motion.div
            key={i + select}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            className="product"
          >
            <img src={img} alt="" />
            <div className="product-det">
              <div>
                <p>adidas</p>
                <span style={{ fontWeight: "bold" }}>
                  Cartoon Astronaut T-shirts
                </span>
                <span>⭐⭐⭐⭐⭐</span>
                <span style={{ fontWeight: "800", color: "#0b7451" }}>$78</span>
              </div>
              <span>🛒</span>
            </div>
          </motion.div>
        ))}
      </section>
    </Zoom>
  );
};

export default Products;
