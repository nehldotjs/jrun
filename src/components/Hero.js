import React from "react";
import { Link } from "react-router-dom";

import "./style/hero.css";
import heroImage from "../assest/heroPageImage.png";
import border from "../assest/border.png";
// import { CompanyServiceList } from "../companyData";

function Hero(props) {
  // const { popUpEventHandler } = useContext(CompanyServiceList);
  const { loading } = props;

  return (
    <div className="hero" id="home">
      <div className={!loading ? "heroContext slideRight" : "heroContext"}>
        <h3 className="header">JRUN Cleaning Service</h3>
        <p className="heroTag">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum magnam
          et asperiores, voluptas, obcaecati excepturi facilis quisquam iure
          perspiciatis tempora sit quae accusantium accusamus soluta praesentium
          iusto necessitatibus numquam enim?
        </p>
        <div className="heroButtons">
          <div className="btnCon bookNowBtn">
            <Link to="/booknow" className="bookNow">
              Book A Service
            </Link>
          </div>
          <div className="btnCon subscribeBtn">
            <Link to="/subscription" className="subscribe">
              Cleaning Subscription
            </Link>
          </div>
        </div>
      </div>

      <div
        className={
          !loading ? "heroImageContainer slideLeft" : "heroImageContainer"
        }>
        <div className="heroImageWrapper">
          <img src={heroImage} alt="cleaning service" />
          <img
            className={!loading ? "border slideUp" : "border"}
            src={border}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
