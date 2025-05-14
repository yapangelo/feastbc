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
        <h2
          className="navpopup__page"
          onClick={() => {
            scrollToSection(grandFeastRef);
            onClose();
          }}
        >
          GRAND FEAST
        </h2>
        <h2 className="navpopup__page">SPONSORS</h2>
      </div>
    </nav>
  );
};

export default NavPopup;
