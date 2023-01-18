import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style/nav.css";
import logo from "../assest/logo.png";
// import { CompanyServiceList } from "../companyData";

function Nav(props) {
  const [burgermenu, setBurgerMenu] = useState(false);
  // const { popUpEventHandler } = useContext(CompanyServiceList);
  const { loading } = props;
  function burgerMenu() {
    if (!burgermenu) {
      setBurgerMenu(true);
    } else {
      setBurgerMenu(false);
    }
  }
  function toggleMenu() {
    if (burgermenu) {
      setBurgerMenu(false);
    }
  }
  return (
    <>
      <div
        className={!burgermenu ? "mobileNav" : " mobileNav backgroundChanges"}>
        <div className="menuWrapper">
          <div
            className={!loading ? "logoContainer slideRight" : "logoContainer"}>
            <img src={logo} alt="logo" className="logo" />
          </div>

          <button type="button" className="burgerMenu" onClick={burgerMenu}>
            <div className="burgerLine firstLine"></div>
            <div className="burgerLine secondLine"></div>
          </button>
        </div>

        <div
          className={
            !burgermenu ? "mobileNavContainer" : "mobileNavContainer onDisplay"
          }>
          <div className="mobileNavLinks">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="link" onClick={toggleMenu}>
              About
            </a>
            <a href="#difference" className="link" onClick={toggleMenu}>
              Services
            </a>
            <a href="#contact" className="link" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className={!loading ? "nav slideDown" : "nav"}>
        <div
          className={!loading ? "logoContainer slideRight" : "logoContainer"}>
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="navContainer">
          <div className="links">
            <a href="#home" className="link ">
              Home
            </a>
            <a href="#about" className="link ">
              About
            </a>
            <a href="#difference" className="link ">
              Services
            </a>
            <a href="#contact" className="link ">
              Contact
            </a>
          </div>
        </div>

        <div className={!loading ? "navBookNowBtn slideLeft" : "navVookNowBtn"}>
          <Link to="/booknow" className="bookNow">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
