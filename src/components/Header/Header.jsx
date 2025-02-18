import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import NavPopUp from "../NavPopup/NavPopup";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleCloseNav = () => {
    setIsNavVisible(false);
  };

  return (
    <header className="header">
      <ul className="header__nav">
        <Link to="/">
          <li className="header__nav-li">HOME</li>
        </Link>
        <Link to="/grandfeast">
          <li className="header__nav-li">GRAND FEAST</li>
        </Link>
        <Link to="/events">
          <li className="header__nav-li">EVENTS</li>
        </Link>
        <Link to="/about">
          <li className="header__nav-li">ABOUT</li>
        </Link>
      </ul>
      <img
        src={isNavVisible ? close : hamburger}
        alt="nav"
        className={`header__hamburger ${isNavVisible ? "open" : ""}`}
        onClick={handleHamburgerClick}
      />
      {isNavVisible && <NavPopUp onClose={handleCloseNav} />}
    </header>
  );
};

export default Header;
