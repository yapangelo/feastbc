import React from "react";
import "./NavPopup.scss";
import { Link } from "react-router-dom";

const NavPopup = ({
  scrollToSection,
  grandFeastRef,
  socialsRef,
  onClose,
  className,
}) => {
  return (
    <nav className={`navpopup ${className}`}>
      <div className="navpopup__page-container">
        <Link to="/">
          <h2 className="navpopup__page">HOME</h2>
        </Link>
        <Link to="/">
          <h2
            className="navpopup__page"
            onClick={() => {
              scrollToSection(grandFeastRef);
              onClose();
            }}
          >
            GRAND FEAST
          </h2>
        </Link>
        <Link to="/sponsorpage">
          <h2 className="navpopup__page">SPONSORSHIP</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavPopup;
