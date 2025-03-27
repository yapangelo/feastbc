import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import bcfeasthorizontalblack from "../../assets/images/bcfeast-horizontal-black.png";
import NavPopUp from "../NavPopup/NavPopup";
import Button from "../Button/Button";

const Header = ({ scrollToSection, grandFeastRef, prayerRef, socialsRef }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHamburgerClick = () => setIsNavVisible(!isNavVisible);
  const handleCloseNav = () => setIsNavVisible(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__container">
        <img
          src={isNavVisible ? close : hamburger}
          alt="nav"
          className={`header__hamburger ${isNavVisible ? "open" : ""}`}
          onClick={handleHamburgerClick}
        />
        {isNavVisible && (
          <NavPopUp
            onClose={handleCloseNav}
            scrollToSection={scrollToSection}
            grandFeastRef={grandFeastRef}
            prayerRef={prayerRef}
            socialsRef={socialsRef}
            className={isNavVisible ? "open" : ""}
          />
        )}
        <Link to="/tickets">
          <Button text={"Grand Feast Tickets"} className={"button--white"} />
        </Link>
        <div className="header__nav">
          <ul className="header__nav-list">
            <Link to="/">
              <li className="header__nav-li">Home</li>
            </Link>
            <li
              className="header__nav-li"
              onClick={() => scrollToSection(grandFeastRef)}
            >
              Grand Feast
            </li>
            <li
              className="header__nav-li"
              onClick={() => scrollToSection(prayerRef)}
            >
              Prayer
            </li>
            <li
              className="header__nav-li"
              onClick={() => {
                scrollToSection(socialsRef);
                handleCloseNav();
              }}
            >
              Socials
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            src={bcfeasthorizontalblack}
            alt="bc feast"
            className="header__logo"
            onClick={scrollToTop}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
