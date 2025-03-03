import React from "react";
import "./NavPopup.scss";

const NavPopup = ({
  scrollToSection,
  grandFeastRef,
  prayerRef,
  socialsRef,
  onClose,
  className,
}) => {
  return (
    <nav className={`navpopup ${className}`}>
      <div className="navpopup__page-container">
        <h2
          className="navpopup__page"
          onClick={() => {
            scrollToSection(grandFeastRef);
            onClose();
          }}
        >
          GRAND FEAST
        </h2>
        <h2
          className="navpopup__page"
          onClick={() => {
            scrollToSection(prayerRef);
            onClose();
          }}
        >
          PRAYER
        </h2>
        <h2
          className="navpopup__page"
          onClick={() => {
            scrollToSection(socialsRef);
            onClose();
          }}
        >
          SOCIALS
        </h2>
      </div>
    </nav>
  );
};

export default NavPopup;
