import React from "react";
import "./Home.css";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { imgSet1, imgSet2 } from "../images";

import heroPic1 from "../../img/hero6.png";
import heroPic2 from "../../img/hero5.png";
import f1 from "../../img/features/f1.png";
import f2 from "../../img/features/f2.png";
import f3 from "../../img/features/f3.png";
import f4 from "../../img/features/f4.png";
import f5 from "../../img/features/f5.png";
import f6 from "../../img/features/f6.png";
import Products from "../Products/Products";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Zoom from "react-reveal/Zoom";
const Home = () => {
  const screenWidth = window.innerWidth <= 768 ? true : false;

  const transition = { type: "spring", duration: 4 };
  return (
    <div className="home">
      <NavBar />

      <section className="hero padd">
        {/* <div className="blur blur-hero1"></div>
        <div className="blur blur-hero2"></div> */}

        <div className="hero-det">
          <h4 className="stroke">
            <Zoom top cascade>
              Trade-in-offer
            </Zoom>
          </h4>
          <h2 className="stroke">
            <Zoom top cascade>
              Super Value Deals
            </Zoom>
          </h2>
          <h1>
            <Zoom top cascade>
              On all products
            </Zoom>
          </h1>
          <span className="stroke">
            <Zoom top cascade>
              save more with coupons and up to 70% off!
            </Zoom>
          </span>
          <button>Show Now</button>
        </div>
        <div className="hero-img">
          <motion.img
            initial={{ left: screenWidth ? "1rem" : "-30rem" }}
            whileInView={{ left: screenWidth ? "3rem" : "36rem" }}
            transition={transition}
            src={heroPic2}
            alt="📸"
          />
          <motion.img
            initial={{ right: screenWidth ? "-8rem" : "-30rem" }}
            whileInView={{ right: screenWidth ? "2rem" : "-8rem" }}
            transition={transition}
            src={heroPic1}
            alt="📸"
          />
        </div>
      </section>
      <Zoom bottom duration={1500}>
        <section className="features padd">
          <div className="fe-box">
            <img src={f1} alt="" />
            <button>Free Shipping</button>
          </div>
          <div className="fe-box">
            <img src={f2} alt="" />
            <button style={{ backgroundColor: "pink" }}>Online Order</button>
          </div>
          <div className="fe-box">
            <img src={f3} alt="" />
            <button style={{ backgroundColor: " #56e38e" }}>Save Money</button>
          </div>
          <div className="fe-box">
            <img src={f4} alt="" />
            <button style={{ backgroundColor: "#9ed8e6" }}>Promotion</button>
          </div>
          <div className="fe-box">
            <img src={f5} alt="" />
            <button style={{ backgroundColor: "#9d82a9" }}>Happy Sell</button>
          </div>
          <div className="fe-box">
            <img src={f6} alt="" />
            <button style={{ backgroundColor: "#d8c7a7" }}>
              F24/7 Support
            </button>
          </div>
        </section>
      </Zoom>
      <section className="product-container">
        <Zoom left>
          <h1>featured product</h1>
          <p>summer collection new modern design</p>
        </Zoom>
        <Products images={imgSet1} />
      </section>

      <Zoom bottom duration={1500}>
        <section className="banner">
          <span>Repair Service</span>
          <p>
            Up to <span style={{ color: "red" }}>70% off</span> - All t-Shirts
            And Accessories
          </p>
          <button>Explore More</button>
        </section>
      </Zoom>
      <section className="product-container">
        <Zoom bottom>
          <h1>new arrivals</h1>
          <p>summer collection new modern design</p>
        </Zoom>
        <Products images={imgSet2} />
      </section>
      <Zoom bottom>
        <section className="offers padd">
          <div className="offer1">
            <span>crazy deals</span>
            <h2>buy 1 get 1 free </h2>
            <p>The best classic dress is on sale</p>
            <button className="offer-btn">Learn more</button>
          </div>
          <div className="offer2">
            <span>spring/summer </span>
            <h2>upcomming season </h2>
            <p>The best classic dress is on sale at cara</p>
            <button className="offer-btn">collection</button>
          </div>
        </section>
      </Zoom>
      <Zoom>
        <section className="options padd">
          <div>
            <h1>seasonal sale</h1>
            <span style={{ color: "red" }}>winter collection -50% off</span>
          </div>
          <div>
            <h1>new footwear collection</h1>
            <span style={{ color: "red" }}>spring/summer 2023</span>
          </div>

          <div>
            <h1>T-shirts</h1>
            <span style={{ color: "red" }}>New Trendy Prints</span>
          </div>
        </section>
      </Zoom>
      <Zoom>
        <Newsletter />
      </Zoom>
      <Zoom>
        <Footer />
      </Zoom>
    </div>
  );
};

export default Home;
