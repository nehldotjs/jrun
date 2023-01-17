import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assest/logo.png";
import "./style/Footer.css";

function Footer() {
  return (
    <div className="footerSection">
      <div className="f-container-topSection">
        <div className="f-logo footerlink">
          <img src={logo} alt="jrun logo" />
        </div>
        <div className="f-learnMore footerlink">
          <h4>Learn More</h4>
          <div className="f-pTags">
            <a href="#" className="f-about">
              About Lift
            </a>
            <a href="#" className="f-about">
              Book a service
            </a>
            <a href="#" className="f-about">
              Contact Us
            </a>
          </div>
        </div>
        <div className="bookService footerlink">
          <h4>Book a service</h4>
          <div className="f-pTags">
            <Link to="/booknow">Book Now</Link>
            <Link to="/subscription">Subscribe</Link>
          </div>
        </div>
        <div className="contactUs footerlink">
          <h4>Contact Us</h4>
          <div className="f-pTags">
            <a href="#">
              <span>Phone: </span>+234 0123 456 789
            </a>
            <a href="mailto:jrunservice@gmail.com">
              <span>Email: </span>jrunservice@gmail.comm
            </a>
          </div>
        </div>
        <div className="social footerlink">
          <h4>Social</h4>
          <div className="f-pTags footerIconContainer">
            <FaFacebook className="socialLinkIcon" />
            <FaInstagram className="socialLinkIcon" />
            <FaTwitter className="socialLinkIcon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footerBottomSection">
        <p>&copy; 2022 JRUN | All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
