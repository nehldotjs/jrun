import React from "react";
import "./style/about.css";
import aboutImage from "../assest/pexels-ketut-subiyanto-4353615.jpg";

function About() {
  return (
    <div className="about" id="about">
      <h3>About Us</h3>
      <div className="aboutWrapper">
        <div className="aboutContext">
          <div className="aboutContextWrapper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              omnis, corrupti ab provident necessitatibus voluptatem quaerat
              voluptatibus commodi perspiciatis possimus nostrum numquam beatae
              fuga voluptas laborum maxime, asperiores ad architecto!
            </p>
          </div>

          <div className="about-service">
            <h4>service we render</h4>
            <div className="servicesType">
              <p className="s-types">home cleaning</p>
              <p className="s-types">office cleaning</p>
              <p className="s-types">hotel cleaning</p>
              <p className="s-types">deep cleaning</p>
              <p className="s-types">after cleaning</p>
              <p className="s-types">post construction</p>
            </div>
          </div>
        </div>

        <div className="aboutImage">
          <div className="aboutImageWrapper">
            <img src={aboutImage} alt="aboutImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
