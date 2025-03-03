import React, { useState, useEffect } from "react";
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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleCloseNav = () => {
    setIsNavVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <Button text={"GrandFeast Tickets"} className={"button--white"} />
        <div className="header__nav">
          <ul className="header__nav-list">
            <li
              className="header__nav-li"
              onClick={() => {
                scrollToSection(grandFeastRef);
              }}
            >
              Grand Feast
            </li>
            <li
              className="header__nav-li"
              onClick={() => {
                scrollToSection(prayerRef);
              }}
            >
              Prayer
            </li>
            <li
              className="header__nav-li"
              onClick={() => {
                scrollToSection(socialsRef);
                onClose();
              }}
            >
              Socials
            </li>
          </ul>
        </div>
        <img
          src={bcfeasthorizontalblack}
          alt="bc feast"
          className="header__logo"
          onClick={scrollToTop}
        />
      </div>
    </header>
  );
};

export default Header;
