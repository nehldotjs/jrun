import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style/about.css";
import aboutImage from "../assest/pexels-ketut-subiyanto-4353615.jpg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="about" id="about">
      <h3>About Us</h3>
      <div className="aboutWrapper">
        <div className="aboutContext">
          <div
            data-aos="slide-up"
            data-aos-offset="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="aboutContextWrapper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              omnis, corrupti ab provident necessitatibus voluptatem quaerat
              voluptatibus commodi perspiciatis possimus nostrum numquam beatae
              fuga voluptas laborum maxime, asperiores ad architecto!
            </p>
          </div>

          <div className="about-service">
            <h4
              data-aos="slide-up"
              data-aos-offset="50"
              data-aos-easing="ease-in-out"
              data-aos-once="true">
              service we render
            </h4>
            <div className="servicesType">
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                home cleaning
              </p>
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                office cleaning
              </p>
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                hotel cleaning
              </p>
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                deep cleaning
              </p>
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                after cleaning
              </p>
              <p
                className="s-types"
                data-aos="slide-up"
                data-aos-offset="50"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                post construction
              </p>
            </div>
          </div>
        </div>

        <div
          className="aboutImage"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-once="true">
          <div className="aboutImageWrapper">
            <img src={aboutImage} alt="aboutImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
