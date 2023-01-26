import React from "react";
import "./Blog.css";
import NavBar from "../NavBar";
import Heading from "../Headings/Heading";
import blogImg from "../../img/banner/b19.jpg";
import caseImg1 from "../../img/blog/b1.jpg";
import caseImg2 from "../../img/blog/b2.jpg";
import caseImg3 from "../../img/blog/b3.jpg";
import caseImg4 from "../../img/blog/b4.jpg";
import caseImg5 from "../../img/blog/b5.jpg";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import { Zoom } from "react-reveal";

const Blog = () => {
  return (
    <div className="blog">
      <NavBar />
      <Heading
        title={"#Read More"}
        sub={"Read all care studies about our products"}
        bgImg={blogImg}
      />

      <section className="blog-cont padd">
        <Zoom bottom duration={1500}>
          <div className="det-cont">
            <div className="img-container">
              <h1>13/01</h1>
              <img src={caseImg1} alt="image" />
            </div>
            <div className="img-det">
              <span>The cotton jersey Zip-up hoodie</span>
              <p>
                kickstarter man braided godard coloring book. Raclette waistcoat
                selfies yr wolf chartreuse hexagon irony , godard_
              </p>
              <h6>CONTINUE READING</h6>
            </div>
          </div>
          <div className="det-cont">
            <div className="img-det">
              <span>How to Style a Quiff</span>
              <p>
                kickstarter man braided godard coloring book. Raclette waistcoat
                selfies yr wolf chartreuse hexagon irony , godard_
              </p>
              <h6>CONTINUE READING</h6>
            </div>
            <div className="img-container">
              <h1>13/01</h1>
              <img src={caseImg2} alt="image" />
            </div>
          </div>

          <div className="det-cont">
            <div className="img-container">
              <h1>13/01</h1>
              <img src={caseImg3} alt="image" />
            </div>
            <div className="img-det">
              <span>Must Have Skater Girl Item</span>
              <p>
                kickstarter man braided godard coloring book. Raclette waistcoat
                selfies yr wolf chartreuse hexagon irony , godard_
              </p>
              <h6>CONTINUE READING</h6>
            </div>
          </div>
          <div className="det-cont">
            <div className="img-det">
              <span>Runaway-Inspired Trends</span>
              <p>
                kickstarter man braided godard coloring book. Raclette waistcoat
                selfies yr wolf chartreuse hexagon irony , godard_
              </p>
              <h6>CONTINUE READING</h6>
            </div>
            <div className="img-container">
              <h1>13/01</h1>
              <img src={caseImg4} alt="image" />
            </div>
          </div>
          <div className="det-cont">
            <div className="img-container">
              <h1>13/01</h1>
              <img src={caseImg5} alt="image" />
            </div>
            <div className="img-det">
              <span>AW20 MenswearTrend</span>
              <p>
                kickstarter man braided godard coloring book. Raclette waistcoat
                selfies yr wolf chartreuse hexagon irony , godard_
              </p>
              <h6>CONTINUE READING</h6>
            </div>
          </div>
        </Zoom>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
